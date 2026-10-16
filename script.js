/**
 * PREMLODHIA.COM — APPLE-STYLE CORE JAVASCRIPT
 * Progressive enhancement, 60fps animations, accessible interactions.
 */

(function () {
  'use strict';

  // 1. Mark HTML with .js class so animation styles only apply when JS is active
  document.documentElement.classList.add('js');

  // 2. CV Availability Constant
  const ENABLE_CV = true;

  // --------------------------------------------------------------------------
  // Navigation & Scroll Tracking
  // --------------------------------------------------------------------------
  const nav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.nav-links-desktop a');
  const sections = document.querySelectorAll('section[id], header[id]');

  function handleScroll() {
    const scrollY = window.scrollY;

    // 8px Nav threshold for frosted background and hairline border
    if (nav) {
      if (scrollY > 8) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }

    // Active Section Spy for Desktop Nav
    let currentSectionId = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --------------------------------------------------------------------------
  // Mobile Hamburger Menu (Morphing X, Staggered Overlay, Scroll Lock)
  // --------------------------------------------------------------------------
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-menu-links a, .mobile-menu-overlay .btn-primary');

  function openMobileMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = hamburger.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // --------------------------------------------------------------------------
  // Standard Scroll Reveal Observer (Transform + Opacity, High-Reliability Mobile Support)
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.04,
    rootMargin: '0px 0px 60px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Trigger reveals for elements already in or near viewport on initial load
  function triggerInitialReveals() {
    if (window.innerWidth <= 767) {
      revealElements.forEach(el => {
        el.classList.add('revealed');
        revealObserver.unobserve(el);
      });
      return;
    }
    const vh = window.innerHeight;
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh + 80) {
        el.classList.add('revealed');
        revealObserver.unobserve(el);
      }
    });
  }
  triggerInitialReveals();
  window.addEventListener('load', triggerInitialReveals);

  // --------------------------------------------------------------------------
  // Stat Counter Animation (1.2s ease-out, numeric part only, run once)
  // --------------------------------------------------------------------------
  const statNumbers = document.querySelectorAll('.stat-number');
  const statObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateNumber(el);
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  statNumbers.forEach(el => statObserver.observe(el));

  function animateNumber(el) {
    const rawTarget = el.getAttribute('data-target');
    if (!rawTarget) return;

    // Check if target is pure numeric or has prefix/suffix
    const match = rawTarget.match(/^([^0-9.]*)([0-9.]+)(.*)$/);
    if (!match) return;

    const prefix = match[1] || '';
    const targetVal = parseFloat(match[2]);
    const suffix = match[3] || '';
    const isFloat = match[2].includes('.');
    const decimals = isFloat ? match[2].split('.')[1].length : 0;

    const duration = 1200;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Apple ease-out cubic curve
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentVal = targetVal * ease;

      el.textContent = `${prefix}${currentVal.toFixed(decimals)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = `${prefix}${targetVal.toFixed(decimals)}${suffix}`;
      }
    }

    requestAnimationFrame(updateCounter);
  }

  // --------------------------------------------------------------------------
  // Signature Moment 1: Hero to Highlights Scroll-Linked Transformation
  // --------------------------------------------------------------------------
  const heroSection = document.querySelector('.section-hero');
  const heroContent = document.querySelector('.hero-content');
  const highlightTiles = document.querySelectorAll('.highlight-tile');

  if (heroSection && heroContent && highlightTiles.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroHeight = heroSection.offsetHeight;

      if (scrollY <= heroHeight) {
        const progress = Math.min(scrollY / (heroHeight * 0.75), 1);
        const heroScale = 1 - (progress * 0.06);
        const heroOpacity = 1 - (progress * 0.95);

        heroContent.style.transform = `scale(${heroScale})`;
        heroContent.style.opacity = heroOpacity;
      }
    }, { passive: true });
  }

  // --------------------------------------------------------------------------
  // Signature Moment 2: Featured Work Desktop Sticky Pinning & Stacking
  // --------------------------------------------------------------------------
  const chapters = document.querySelectorAll('.work-chapter');
  if (chapters.length > 0 && window.innerWidth >= 1024) {
    window.addEventListener('scroll', () => {
      chapters.forEach((chapter, index) => {
        if (index === chapters.length - 1) return; // Last chapter doesn't need to scale down
        const nextChapter = chapters[index + 1];
        const nextTop = nextChapter.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (nextTop < windowHeight && nextTop > 80) {
          const overlapProgress = 1 - ((nextTop - 80) / (windowHeight - 80));
          const scale = 1 - (overlapProgress * 0.05);
          const filterDim = 1 - (overlapProgress * 0.15);
          chapter.style.transform = `scale(${scale})`;
          chapter.style.filter = `brightness(${filterDim})`;
        } else if (nextTop <= 80) {
          chapter.style.transform = `scale(0.95)`;
          chapter.style.filter = `brightness(0.85)`;
        } else {
          chapter.style.transform = `scale(1)`;
          chapter.style.filter = `brightness(1)`;
        }
      });
    }, { passive: true });
  }

  // --------------------------------------------------------------------------
  // Signature Moment 3: Architecture Diagrams Self-Drawing
  // --------------------------------------------------------------------------
  const svgDrawPaths = document.querySelectorAll('.svg-draw-path');
  const diagramObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('drawing-active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '40px' });

  svgDrawPaths.forEach(path => {
    const length = path.getTotalLength ? path.getTotalLength() : 300;
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    diagramObserver.observe(path);
  });

  // --------------------------------------------------------------------------
  // Horizontal Rail (More Work): Buttons, Snapping, Keyboard, Dragging
  // --------------------------------------------------------------------------
  const railTrack = document.querySelector('.rail-track');
  const prevBtn = document.querySelector('.rail-btn.prev');
  const nextBtn = document.querySelector('.rail-btn.next');

  if (railTrack && prevBtn && nextBtn) {
    function updateRailButtons() {
      prevBtn.disabled = railTrack.scrollLeft <= 10;
      nextBtn.disabled = railTrack.scrollLeft + railTrack.clientWidth >= railTrack.scrollWidth - 10;
    }

    prevBtn.addEventListener('click', () => {
      railTrack.scrollBy({ left: -380, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      railTrack.scrollBy({ left: 380, behavior: 'smooth' });
    });

    railTrack.addEventListener('scroll', updateRailButtons, { passive: true });
    updateRailButtons();

    // Arrow keys support when focused
    railTrack.setAttribute('tabindex', '0');
    railTrack.setAttribute('aria-label', 'Scrollable list of additional projects');
    railTrack.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        railTrack.scrollBy({ left: -380, behavior: 'smooth' });
      } else if (e.key === 'ArrowRight') {
        railTrack.scrollBy({ left: 380, behavior: 'smooth' });
      }
    });

    // Mouse drag support on desktop
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    railTrack.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - railTrack.offsetLeft;
      scrollLeft = railTrack.scrollLeft;
      railTrack.style.cursor = 'grabbing';
    });

    railTrack.addEventListener('mouseleave', () => {
      isDown = false;
      railTrack.style.cursor = '';
    });

    railTrack.addEventListener('mouseup', () => {
      isDown = false;
      railTrack.style.cursor = '';
    });

    railTrack.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - railTrack.offsetLeft;
      const walk = (x - startX) * 1.5;
      railTrack.scrollLeft = scrollLeft - walk;
    });
  }

  // --------------------------------------------------------------------------
  // Accordions (Experience Timeline: 0fr to 1fr Animation)
  // --------------------------------------------------------------------------
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    const header = item.querySelector('.timeline-header');
    if (header) {
      header.addEventListener('click', () => {
        const isExpanded = item.classList.contains('expanded');
        item.classList.toggle('expanded');
        header.setAttribute('aria-expanded', !isExpanded);
        const toggleText = item.querySelector('.timeline-toggle-text');
        if (toggleText) {
          toggleText.textContent = isExpanded ? 'Details ›' : 'Close ‹';
        }
      });
    }
  });

  // --------------------------------------------------------------------------
  // Credentials Segmented Filter Tabs
  // --------------------------------------------------------------------------
  const tabButtons = document.querySelectorAll('.seg-tab-btn');
  const credCards = document.querySelectorAll('.cred-card');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      credCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // Modal Dialog Sheets (Case Studies & Content Sheets)
  // --------------------------------------------------------------------------
  const modalSheets = document.querySelectorAll('.modal-sheet');
  let activeModal = null;

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    activeModal = modal;

    // Focus close button inside
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    activeModal = null;

    // Clear hash without reloading if closed
    if (window.location.hash) {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  }

  modalSheets.forEach(sheet => {
    const closeBtn = sheet.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeModal(sheet));
    }
    sheet.addEventListener('click', (e) => {
      if (e.target === sheet) {
        closeModal(sheet);
      }
    });
  });

  // Modal Triggers (Elements with data-modal="modal-id")
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  // --------------------------------------------------------------------------
  // Hash Routing & Legacy Redirects
  // --------------------------------------------------------------------------
  function handleHash() {
    const hash = window.location.hash.toLowerCase();
    if (!hash) return;

    // Legacy Hash mappings
    if (hash === '#projects') {
      window.location.hash = '#work';
      return;
    }
    if (hash === '#certifications') {
      window.location.hash = '#credentials';
      return;
    }
    if (hash === '#philosophy') {
      window.location.hash = '#principles';
      return;
    }
    if (hash === '#uses') {
      openModal('modal-uses');
      return;
    }
    if (hash === '#business') {
      openModal('modal-cyber');
      return;
    }

    // Case Study Hashes
    if (hash === '#sentinel') {
      openModal('modal-sentinel');
      return;
    }
    if (hash === '#zero-trust' || hash === '#c001' || hash === '#project-vault') {
      openModal('modal-zero-trust');
      return;
    }
    if (hash === '#ndr-platform' || hash === '#project-ndr') {
      openModal('modal-ndr-platform');
      return;
    }
    if (hash === '#kinora' || hash === '#c001_project') {
      openModal('modal-kinora');
      return;
    }
    if (hash === '#philosophy-modal') {
      openModal('modal-philosophy');
      return;
    }
  }

  window.addEventListener('hashchange', handleHash);
  // Check hash on initial page load
  setTimeout(handleHash, 100);

  // --------------------------------------------------------------------------
  // Tap-to-Inspect Image Lightbox (Native High-Resolution Preview)
  // --------------------------------------------------------------------------
  const lightbox = document.getElementById('modal-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCloseBtn = document.querySelector('.lightbox-close-btn');

  function openLightbox(src, title, caption) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxTitle) lightboxTitle.innerHTML = title || 'High Resolution View';
    if (lightboxCaption) lightboxCaption.innerHTML = caption || 'Native architecture inspection.';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (lightboxCloseBtn) lightboxCloseBtn.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (lightbox) {
    if (lightboxCloseBtn) {
      lightboxCloseBtn.addEventListener('click', closeLightbox);
    }
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-body')) {
        closeLightbox();
      }
    });
  }

  // Bind all interactive visual cards and data-lightbox triggers
  document.querySelectorAll('.chapter-visual, .competition-media, .rail-card-media, [data-lightbox-src]').forEach(el => {
    el.addEventListener('click', (e) => {
      // Don't intercept if clicking an un-related link
      if (e.target.closest('a') && !e.target.closest('[data-lightbox-src]')) return;
      
      const target = el.closest('[data-lightbox-src]') || el;
      const src = target.getAttribute('data-lightbox-src') || el.querySelector('img')?.src;
      if (!src) return;

      const title = target.getAttribute('data-lightbox-title') || el.closest('article')?.querySelector('h3')?.innerText || 'High Resolution View';
      const caption = target.getAttribute('data-lightbox-caption') || el.closest('article')?.querySelector('p')?.innerText || '';

      openLightbox(src, title, caption);
    });
  });

  // --------------------------------------------------------------------------
  // Keyboard Support (ESC to close modals, lightbox, and mobile menu)
  // --------------------------------------------------------------------------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightbox && lightbox.classList.contains('open')) {
        closeLightbox();
        return;
      }
      if (activeModal) {
        closeModal(activeModal);
      }
      if (hamburger && hamburger.classList.contains('open')) {
        closeMobileMenu();
      }
    }
  });

  // --------------------------------------------------------------------------
  // Contact Form Submission (Formspree AJAX + Animated Success Checkmark)
  // --------------------------------------------------------------------------
  const contactForm = document.querySelector('.floating-form');
  const formSuccess = document.querySelector('.form-success-message');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const action = contactForm.getAttribute('action');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          contactForm.style.display = 'none';
          formSuccess.style.display = 'flex';
        } else {
          fallbackMailto();
        }
      } catch (err) {
        fallbackMailto();
      }
    });

    function fallbackMailto() {
      const name = document.getElementById('name_field')?.value || '';
      const email = document.getElementById('email_field')?.value || '';
      const msg = document.getElementById('msg_field')?.value || '';
      const mailtoUrl = `mailto:prem@premlodhia.com?subject=Portfolio Message from ${encodeURIComponent(name)}&body=Sender: ${encodeURIComponent(name)} <${encodeURIComponent(email)}>%0D%0A%0D%0A${encodeURIComponent(msg)}`;
      window.location.href = mailtoUrl;
    }
  }

  // --------------------------------------------------------------------------
  // More Skills Drawer Toggle
  // --------------------------------------------------------------------------
  const toggleSkillsBtn = document.getElementById('toggle-more-skills');
  const skillsDrawer = document.getElementById('more-skills-drawer');
  if (toggleSkillsBtn && skillsDrawer) {
    toggleSkillsBtn.addEventListener('click', function () {
      const isOpen = skillsDrawer.classList.toggle('open');
      toggleSkillsBtn.setAttribute('aria-expanded', isOpen);
      toggleSkillsBtn.innerHTML = isOpen
        ? 'Hide specialized competencies <span class="chevron">‹</span>'
        : 'View specialized competencies &amp; tooling <span class="chevron">›</span>';
    });
  }

})();
