/**
 * Case-study sheets and the image lightbox, built on native <dialog> for
 * focus containment, Escape handling and focus restoration. Adds animated
 * open/close, backdrop-click dismissal, page scroll lock and the legacy
 * hash routes older links still point at.
 */

const CLOSE_MS = 380;

let active = null;

function lock(on) {
  document.body.classList.toggle('is-locked', on);
}

function open(dialog) {
  if (!dialog || dialog.open) return;
  const show = () => {
    dialog.showModal();
    lock(true);
    active = dialog;
    const body = dialog.querySelector('.sheet__body');
    if (body) body.scrollTop = 0;
    requestAnimationFrame(() => dialog.classList.add('is-open'));
  };
  if (active && active !== dialog) close(active, show);
  else show();
}

function close(dialog, then) {
  if (!dialog || !dialog.open) return;
  dialog.classList.remove('is-open');
  window.setTimeout(() => {
    dialog.close();
    if (active === dialog) active = null;
    if (!active) lock(false);
    if (then) then();
  }, CLOSE_MS);
}

export function openDialog(id) {
  open(document.getElementById(id));
}

function initLightbox() {
  const box = document.getElementById('modal-lightbox');
  if (!box) return;
  const img = box.querySelector('#lightbox-img');
  const title = box.querySelector('#lightbox-title');
  const caption = box.querySelector('#lightbox-caption');

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-lightbox-src]');
    if (!trigger) return;
    e.preventDefault();
    const src = trigger.dataset.lightboxSrc;
    const thumb = trigger.querySelector('img');
    title.textContent = trigger.dataset.lightboxTitle || 'High resolution view';
    caption.textContent = trigger.dataset.lightboxCaption || '';
    img.alt = (thumb && thumb.alt) || trigger.dataset.lightboxTitle || '';
    img.src = src;
    open(box);
  });
}

export function initDialogs() {
  const dialogs = [...document.querySelectorAll('dialog.sheet, dialog.lightbox')];

  document.addEventListener('click', (e) => {
    const opener = e.target.closest('[data-modal]');
    if (opener) {
      e.preventDefault();
      openDialog(opener.dataset.modal);
    }
  });

  dialogs.forEach((dialog) => {
    dialog.addEventListener('click', (e) => {
      if (e.target.closest('[data-close]')) {
        close(dialog);
        return;
      }
      // Clicks on the dialog element itself land on the backdrop area.
      const panel = dialog.querySelector('.sheet__panel, .lightbox__frame');
      if (e.target === dialog || (dialog.classList.contains('lightbox') && e.target.classList.contains('lightbox__body'))) close(dialog);
      else if (panel && !panel.contains(e.target)) close(dialog);
    });
    dialog.addEventListener('cancel', (e) => {
      e.preventDefault();
      close(dialog);
    });
  });

  initLightbox();
  initHashRoutes();
}

const HASH_DIALOGS = {
  '#sentinel': 'modal-sentinel',
  '#invoiceops': 'modal-invoiceops',
  '#invoice-ops': 'modal-invoiceops',
  '#zero-trust': 'modal-zero-trust',
  '#c001': 'modal-zero-trust',
  '#project-vault': 'modal-zero-trust',
  '#ndr-platform': 'modal-ndr-platform',
  '#project-ndr': 'modal-ndr-platform',
  '#kinora': 'modal-kinora',
  '#c001_project': 'modal-kinora',
  '#philosophy-modal': 'modal-philosophy',
};

const HASH_ALIASES = {
  '#projects': '#work',
  '#certifications': '#credentials',
  '#philosophy': '#principles',
};

function initHashRoutes() {
  const route = () => {
    const hash = window.location.hash.toLowerCase();
    if (!hash) return;
    if (HASH_ALIASES[hash]) {
      window.location.replace(HASH_ALIASES[hash]);
      return;
    }
    if (hash === '#uses') {
      window.location.href = 'uses.html';
      return;
    }
    if (HASH_DIALOGS[hash]) openDialog(HASH_DIALOGS[hash]);
  };
  window.addEventListener('hashchange', route);
  route();
}
