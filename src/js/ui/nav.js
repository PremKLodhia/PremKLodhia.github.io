/**
 * Navigation: frosted state on scroll, page progress, an active-section
 * indicator that glides between links, and the mobile menu dialog.
 */
import { addFrameTask } from '../lib/frame.js';
import { clamp } from '../lib/env.js';

export function initNav() {
  const nav = document.querySelector('[data-nav]');
  if (!nav) return;

  const links = [...nav.querySelectorAll('[data-nav-link]')];
  const indicator = nav.querySelector('.nav__indicator');
  const progressBar = nav.querySelector('.nav__progress');
  const targets = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  let current = null;

  const placeIndicator = (link) => {
    if (!indicator) return;
    if (!link) {
      indicator.style.setProperty('--o', '0');
      return;
    }
    indicator.style.setProperty('--x', `${link.offsetLeft + 12}px`);
    indicator.style.setProperty('--w', `${link.offsetWidth - 24}px`);
    indicator.style.setProperty('--o', '1');
  };

  addFrameTask({
    read() {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const probe = window.innerHeight * 0.35;
      let active = null;
      targets.forEach((section, i) => {
        const r = section.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) active = links[i];
      });
      return { scrolled: y > 8, progress: clamp(y / Math.max(1, max)), active };
    },
    write({ scrolled, progress, active }) {
      nav.classList.toggle('is-scrolled', scrolled);
      if (progressBar) progressBar.style.setProperty('--progress', progress.toFixed(4));
      if (active !== current) {
        links.forEach((l) => l.removeAttribute('aria-current'));
        if (active) active.setAttribute('aria-current', 'true');
        placeIndicator(active);
        current = active;
      }
    },
  });

  window.addEventListener('resize', () => placeIndicator(current));
  document.fonts && document.fonts.ready.then(() => placeIndicator(current));

  initMenu(nav);
}

function initMenu(nav) {
  const toggle = nav.querySelector('.nav__toggle');
  const menu = document.getElementById('menu');
  if (!toggle || !menu) return;

  const background = [document.querySelector('main'), document.querySelector('footer')].filter(Boolean);
  const focusables = () => [...menu.querySelectorAll('a, button')];
  [...menu.querySelectorAll('.menu__links a')].forEach((a, i) => a.style.setProperty('--i', i));

  let open = false;

  const setOpen = (next, { restoreFocus = true } = {}) => {
    if (next === open) return;
    open = next;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('is-locked', open);
    background.forEach((el) => (el.inert = open));
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(() => {
        menu.classList.add('is-open');
        focusables()[0]?.focus();
      });
    } else {
      menu.classList.remove('is-open');
      window.setTimeout(() => {
        if (!open) menu.hidden = true;
      }, 420);
      if (restoreFocus) toggle.focus();
    }
  };

  toggle.addEventListener('click', () => setOpen(!open));
  menu.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    const hash = link.getAttribute('href');
    const target = hash.startsWith('#') && document.querySelector(hash);
    setOpen(false, { restoreFocus: false });
    if (!target) return;
    // Release the scroll lock first, then travel to the section.
    e.preventDefault();
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      history.pushState(null, '', hash);
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });

  document.addEventListener('keydown', (e) => {
    if (!open) return;
    if (e.key === 'Escape') {
      setOpen(false);
      return;
    }
    if (e.key !== 'Tab') return;
    // Keep focus inside the menu and its toggle while it is open.
    const items = [toggle, ...focusables()];
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  window.matchMedia('(min-width: 1040px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false, { restoreFocus: false });
  });
}
