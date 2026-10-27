/**
 * Smaller interactive pieces: the project rail, disclosures (experience and
 * skills), the scroll-linked experience timeline and chronograph, the
 * credentials filter and the pipeline run distance.
 */
import { addFrameTask } from '../lib/frame.js';
import { clamp } from '../lib/env.js';

export function initRail({ motion }) {
  const track = document.querySelector('[data-rail-track]');
  if (!track) return;
  const prev = document.querySelector('[data-rail="prev"]');
  const next = document.querySelector('[data-rail="next"]');
  const current = document.querySelector('[data-rail-current]');
  const bar = document.querySelector('[data-rail-bar]');
  const cards = [...track.querySelectorAll('.spec')];
  const step = () => (cards[0]?.offsetWidth || 340) + 20;

  // Card geometry is cached; scrolling only reads scrollLeft.
  let centers = [];
  let viewW = 0;
  const measure = () => {
    centers = cards.map((c) => c.offsetLeft + c.offsetWidth / 2);
    viewW = track.clientWidth;
  };

  // While the rail moves, cards lean into the motion and their images drift
  // against it, like looking through a window.
  let lastLeft = track.scrollLeft;
  let skew = 0;
  let raf = 0;
  const tick = () => {
    raf = 0;
    const left = track.scrollLeft;
    const v = left - lastLeft;
    lastLeft = left;
    skew += (clamp(-v * 0.18, -6, 6) - skew) * 0.3;
    if (Math.abs(skew) < 0.02) skew = 0;
    track.style.setProperty('--skew', `${skew.toFixed(2)}deg`);
    cards.forEach((card, i) => {
      const rel = clamp((centers[i] - left - viewW / 2) / Math.max(1, viewW), -1, 1);
      card.style.setProperty('--px', `${(rel * -22).toFixed(1)}px`);
    });
    if (skew !== 0 || v !== 0) raf = requestAnimationFrame(tick);
  };

  const update = () => {
    const max = track.scrollWidth - track.clientWidth - 4;
    if (prev) prev.disabled = track.scrollLeft <= 4;
    if (next) next.disabled = track.scrollLeft >= max;
    const index = track.scrollLeft >= max ? cards.length - 1 : Math.round(track.scrollLeft / step());
    if (current) current.textContent = String(index + 1).padStart(2, '0');
    if (bar) bar.style.setProperty('--p', clamp((track.scrollLeft + track.clientWidth) / track.scrollWidth).toFixed(3));
    if (motion && !raf) raf = requestAnimationFrame(tick);
  };

  prev?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', () => {
    measure();
    update();
  });
  measure();
  update();

  // Cards fan in from depth the first time the rail arrives.
  if (motion) {
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      track.classList.add('is-in');
      io.disconnect();
    }, { threshold: 0.2 });
    io.observe(track);
  } else track.classList.add('is-in');

  track.addEventListener('keydown', (e) => {
    if (e.target !== track) return;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      track.scrollBy({ left: step(), behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      track.scrollBy({ left: -step(), behavior: 'smooth' });
    }
  });

  // Mouse drag-to-scroll; touch and trackpads use native scrolling.
  let down = false;
  let moved = false;
  let startX = 0;
  let startLeft = 0;
  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    down = true;
    moved = false;
    startX = e.clientX;
    startLeft = track.scrollLeft;
  });
  window.addEventListener('pointermove', (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (!moved && Math.abs(dx) > 6) {
      moved = true;
      track.classList.add('is-dragging');
    }
    if (moved) track.scrollLeft = startLeft - dx;
  });
  window.addEventListener('pointerup', () => {
    if (!down) return;
    down = false;
    if (moved) {
      track.classList.remove('is-dragging');
      // Let snapping settle on the nearest card.
      const s = step();
      track.scrollTo({ left: Math.round(track.scrollLeft / s) * s, behavior: 'smooth' });
    }
  });
}

export function initDisclosures() {
  document.querySelectorAll('.role__head, .drawer__toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      btn.closest('.role__card')?.classList.toggle('is-open', open);
      if (btn.classList.contains('drawer__toggle')) {
        const label = btn.querySelector('.drawer__label');
        if (label) label.textContent = open ? 'Hide specialized competencies' : 'Show specialized competencies and tooling';
        // The drawer's modules boot their chips as it opens.
        const body = document.getElementById(btn.getAttribute('aria-controls'));
        body?.querySelectorAll('.module').forEach((m) => m.classList.toggle('is-in', open));
      }
    });
  });
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthIndex = (value) => {
  const [y, m] = value.split('-').map(Number);
  return y * 12 + (m - 1);
};

/**
 * Experience: the rail fills as you read, and the chronograph beside it
 * rewinds. Its playhead sweeps back from the latest month to the earliest
 * across the list, the readout ticks through the dates, and the Gantt chart
 * shows which roles were running at that moment.
 */
export function initTimeline({ motion }) {
  const timeline = document.querySelector('[data-timeline]');
  if (!timeline) return;
  const fill = timeline.querySelector('.timeline__fill');
  const head = timeline.querySelector('.timeline__head');
  const roles = [...timeline.querySelectorAll('.role')];
  const chrono = document.querySelector('[data-chrono]');
  const gantt = chrono?.querySelector('[data-gantt]');

  const spans = roles.map((r) => ({ start: monthIndex(r.dataset.start), end: monthIndex(r.dataset.end) + 1 }));
  const axis0 = Math.min(...spans.map((s) => s.start));
  const axis1 = Math.max(...spans.map((s) => s.end));
  const total = Math.max(1, axis1 - axis0);
  let rows = [];
  let monthEl = null;
  let dateEl = null;
  let activeEl = null;

  if (chrono && gantt) {
    const months = Array.from({ length: total }, (_, i) => `<span>${MONTHS[(axis0 + i) % 12]}</span>`).join('');
    gantt.innerHTML =
      `<div class="gantt__months">${months}</div>` +
      roles
        .map((r, i) => {
          const s = (spans[i].start - axis0) / total;
          const e = (spans[i].end - axis0) / total;
          return `<div class="gantt__row" data-row="${i}" style="--s: ${s}; --e: ${e}; --i: ${i}">
            <span class="gantt__label"><b></b><span></span></span>
            <span class="gantt__track"><span class="gantt__bar"></span></span>
          </div>`;
        })
        .join('') +
      '<span class="gantt__head"><i></i></span>';
    rows = [...gantt.querySelectorAll('.gantt__row')];
    rows.forEach((row, i) => {
      row.querySelector('b').textContent = roles[i].dataset.short || '';
      row.querySelector('.gantt__label > span').textContent = roles[i].dataset.org || '';
      // A mouse shortcut to the role; the cards remain the accessible path.
      row.addEventListener('click', () => roles[i].scrollIntoView({ behavior: motion ? 'smooth' : 'auto', block: 'center' }));
    });
    monthEl = chrono.querySelector('[data-chrono-month]');
    dateEl = chrono.querySelector('[data-chrono-date]');
    activeEl = chrono.querySelector('[data-chrono-active]');
    chrono.hidden = false;

    // Bars draw in once on arrival; afterwards they respond without delay.
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      chrono.classList.add('is-in');
      window.setTimeout(() => chrono.classList.add('is-drawn'), 1400);
      io.disconnect();
    }, { threshold: 0.3 });
    io.observe(chrono);
  }

  let shownMonth = -1;
  let shownDate = '';
  let shownActive = -1;
  let focus = -1;

  const setMonth = (m, back) => {
    if (!monthEl) return;
    const old = [...monthEl.children];
    const next = document.createElement('span');
    next.textContent = MONTHS[m % 12];
    if (motion && shownMonth !== -1) {
      next.className = back ? 'is-from-below' : 'is-from-above';
      old.forEach((o) => {
        o.className = back ? 'is-to-above' : 'is-to-below';
        window.setTimeout(() => o.remove(), 520);
      });
      monthEl.appendChild(next);
      requestAnimationFrame(() => requestAnimationFrame(() => (next.className = '')));
    } else {
      old.forEach((o) => o.remove());
      monthEl.appendChild(next);
    }
    shownMonth = m;
  };

  addFrameTask({
    read() {
      const r = timeline.getBoundingClientRect();
      const vh = window.innerHeight;
      const line = vh * 0.5;
      let f = -1;
      roles.forEach((role, i) => {
        if (role.getBoundingClientRect().top < line) f = i;
      });
      return {
        fill: clamp((vh * 0.6 - r.top) / Math.max(1, r.height)),
        sweep: clamp((line - r.top) / Math.max(1, r.height)),
        height: r.height,
        focus: Math.max(0, f),
        passed: roles.map((role) => role.getBoundingClientRect().top < vh * 0.6),
      };
    },
    write({ fill: f, sweep, height, focus: fi, passed }) {
      if (fill) fill.style.setProperty('--fill', f.toFixed(4));
      if (head) head.style.transform = `translate3d(0, ${(f * Math.max(0, height - 16)).toFixed(1)}px, 0)`;
      roles.forEach((role, i) => role.classList.toggle('is-passed', passed[i]));
      if (!gantt) return;

      // Time runs backwards as you read down the list.
      const time = axis1 - sweep * total - 1e-4;
      const m = Math.min(axis1 - 1, Math.max(axis0, Math.floor(time)));
      const year = Math.floor(m / 12);
      const days = new Date(year, (m % 12) + 1, 0).getDate();
      const day = Math.min(days, Math.max(1, Math.ceil((time - m) * days)));
      const date = `${year}.${String((m % 12) + 1).padStart(2, '0')}.${String(day).padStart(2, '0')}`;

      gantt.style.setProperty('--t', ((time - axis0) / total).toFixed(4));
      if (m !== shownMonth) setMonth(m, m < shownMonth);
      if (date !== shownDate && dateEl) {
        dateEl.textContent = date;
        shownDate = date;
      }
      let active = 0;
      rows.forEach((row, i) => {
        const live = time >= spans[i].start && time < spans[i].end;
        if (live) active++;
        row.classList.toggle('is-live', live);
      });
      if (active !== shownActive && activeEl) {
        activeEl.textContent = `${active} ${active === 1 ? 'role' : 'roles'} active`;
        shownActive = active;
      }
      if (fi !== focus) {
        focus = fi;
        rows.forEach((row, i) => row.classList.toggle('is-focus', i === fi));
        roles.forEach((role, i) => role.classList.toggle('is-active', i === fi));
      }
    },
  });
}

/**
 * Credentials: summary counts, and a filter that re-flows the award and
 * certificate grids. Entries that stay visible glide to their new place
 * (FLIP); entries that appear rise in, staggered.
 */
export function initCredentials({ motion }) {
  const group = document.querySelector('.filter');
  if (!group) return;
  const buttons = [...group.querySelectorAll('.filter__btn')];
  const thumb = group.querySelector('.filter__thumb');
  const entries = [...document.querySelectorAll('.credentials .entry')];
  const groups = [...document.querySelectorAll('[data-cred-group]')];
  const status = document.querySelector('[data-filter-status]');

  const stat = (name, value) => {
    const el = document.querySelector(`[data-cred-stat="${name}"]`);
    if (el) el.textContent = String(value);
  };
  const certs = entries.filter((e) => e.classList.contains('cert'));
  stat('awards', entries.length - certs.length);
  stat('certs', certs.length);
  stat('verify', certs.filter((e) => e.querySelector('.cert__verify')).length);
  stat('pending', certs.filter((e) => e.classList.contains('cert--pending')).length);

  const moveThumb = (btn) => {
    if (!thumb) return;
    thumb.style.setProperty('--x', `${btn.offsetLeft}px`);
    thumb.style.setProperty('--y', `${btn.offsetTop}px`);
    thumb.style.setProperty('--w', `${btn.offsetWidth}px`);
    thumb.style.setProperty('--h', `${btn.offsetHeight}px`);
  };

  const apply = (btn) => {
    const filter = btn.dataset.filter;
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    moveThumb(btn);

    // First: where visible entries are now.
    const before = new Map();
    if (motion) entries.forEach((e) => !e.hidden && before.set(e, e.getBoundingClientRect()));

    let shown = 0;
    entries.forEach((entry) => {
      const match = filter === 'all' || entry.dataset.category === filter;
      entry.hidden = !match;
      if (match) shown++;
    });
    groups.forEach((g) => (g.hidden = !g.querySelector('.entry:not([hidden])')));
    if (status) status.textContent = `${shown} ${shown === 1 ? 'entry' : 'entries'} shown`;
    if (!motion) return;

    // Last, invert, play.
    let entering = 0;
    entries.forEach((entry) => {
      if (entry.hidden) return;
      const was = before.get(entry);
      entry.getAnimations().forEach((a) => a.cancel());
      if (was) {
        const now = entry.getBoundingClientRect();
        const dx = was.left - now.left;
        const dy = was.top - now.top;
        if (dx || dy) {
          entry.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], { duration: 560, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });
        }
      } else {
        entry.animate(
          [{ opacity: 0, transform: 'translateY(16px) scale(0.97)' }, { opacity: 1, transform: 'none' }],
          { duration: 520, delay: Math.min(entering++, 8) * 40, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'backwards' }
        );
      }
    });
  };

  buttons.forEach((btn) => btn.addEventListener('click', () => apply(btn)));
  const sync = () => moveThumb(buttons.find((b) => b.getAttribute('aria-pressed') === 'true') || buttons[0]);
  window.addEventListener('resize', sync);
  document.fonts && document.fonts.ready.then(sync);
  sync();
}

export function initPipeline() {
  const pipeline = document.querySelector('[data-pipeline]');
  if (!pipeline) return;
  const set = () => pipeline.style.setProperty('--run', `${Math.max(0, pipeline.clientWidth - 66)}px`);
  new ResizeObserver(set).observe(pipeline);
}
