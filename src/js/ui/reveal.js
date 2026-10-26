/**
 * Entrance choreography. Elements marked [data-reveal] fade and rise once,
 * staggered against their revealing siblings; [data-split] headings rise
 * word by word. Other components (.budget, .pipeline) receive `.is-in` too
 * so their own CSS transitions can start on arrival.
 */

function splitWords(el) {
  const text = el.textContent.trim();
  el.setAttribute('aria-label', text);
  el.textContent = '';
  text.split(/\s+/).forEach((word, i, all) => {
    const outer = document.createElement('span');
    outer.className = 'split-word';
    outer.setAttribute('aria-hidden', 'true');
    const inner = document.createElement('span');
    inner.textContent = word;
    inner.style.setProperty('--i', i);
    outer.appendChild(inner);
    el.appendChild(outer);
    if (i < all.length - 1) el.appendChild(document.createTextNode(' '));
  });
}

export function initReveal({ motion }) {
  const splits = [...document.querySelectorAll('[data-split]')];
  const reveals = [...document.querySelectorAll('[data-reveal], .budget, .pipeline')];

  if (!motion) {
    reveals.forEach((el) => el.classList.add('is-in'));
    return;
  }

  splits.forEach(splitWords);

  // Stagger consecutive revealing siblings so groups arrive as a sequence.
  reveals.forEach((el) => {
    let i = 0;
    let prev = el.previousElementSibling;
    while (prev) {
      if (prev.hasAttribute('data-reveal')) i++;
      prev = prev.previousElementSibling;
    }
    if (i) el.style.setProperty('--d', Math.min(i, 5) * 90);
  });

  document.querySelectorAll('.budget__rows li').forEach((li, i) => li.style.setProperty('--i', i));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.01 }
  );

  [...splits, ...reveals].forEach((el) => io.observe(el));
}
