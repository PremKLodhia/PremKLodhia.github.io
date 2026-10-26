/**
 * Smaller interactive pieces: the project rail, disclosures (experience and
 * skills), the scroll-linked experience timeline, the credentials filter and
 * the pipeline run distance.
 */
import { addFrameTask } from '../lib/frame.js';
import { clamp } from '../lib/env.js';

export function initRail() {
  const track = document.querySelector('[data-rail-track]');
  if (!track) return;
  const prev = document.querySelector('[data-rail="prev"]');
  const next = document.querySelector('[data-rail="next"]');
  const step = () => (track.querySelector('.spec')?.offsetWidth || 340) + 20;

  const update = () => {
    const max = track.scrollWidth - track.clientWidth - 4;
    if (prev) prev.disabled = track.scrollLeft <= 4;
    if (next) next.disabled = track.scrollLeft >= max;
  };

  prev?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();

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
        btn.textContent = open ? 'Hide specialized competencies' : 'Show specialized competencies and tooling';
      }
    });
  });
}

export function initTimeline() {
  const timeline = document.querySelector('[data-timeline]');
  if (!timeline) return;
  const fill = timeline.querySelector('.timeline__fill');
  const roles = [...timeline.querySelectorAll('.role')];

  addFrameTask({
    read() {
      const r = timeline.getBoundingClientRect();
      const line = window.innerHeight * 0.6;
      return {
        fill: clamp((line - r.top) / Math.max(1, r.height)),
        passed: roles.map((role) => role.getBoundingClientRect().top < line),
      };
    },
    write({ fill: f, passed }) {
      if (fill) fill.style.setProperty('--fill', f.toFixed(4));
      roles.forEach((role, i) => role.classList.toggle('is-passed', passed[i]));
    },
  });
}

export function initFilter() {
  const group = document.querySelector('.filter');
  if (!group) return;
  const buttons = [...group.querySelectorAll('.filter__btn')];
  const thumb = group.querySelector('.filter__thumb');
  const entries = [...document.querySelectorAll('.ledger .entry')];
  const status = document.querySelector('[data-filter-status]');

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
    let shown = 0;
    entries.forEach((entry, i) => {
      const match = filter === 'all' || entry.dataset.category === filter;
      const wasHidden = entry.hidden;
      entry.hidden = !match;
      if (match) {
        shown++;
        if (wasHidden) {
          entry.classList.add('is-entering');
          window.setTimeout(() => entry.classList.remove('is-entering'), 20 + i * 12);
        }
      }
    });
    if (status) status.textContent = `${shown} ${shown === 1 ? 'entry' : 'entries'} shown`;
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
