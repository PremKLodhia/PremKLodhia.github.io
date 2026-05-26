/**
 * Blog System Core Interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  setupBlogLoader();
});

/* ─────────────── LOADER ─────────────── */
function setupBlogLoader() {
  history.scrollRestoration = "manual";
  window.scrollTo(0, 0);

  const ldLines = [
    "Establishing connection to log portal...",
    "Mounting /dev/database/posts.........[OK]",
    "Loading markdown rendering engine.....[OK]",
    "Calibrating syntax highlight profiles..[OK]",
    "Initializing threat intelligence feed...[OK]",
    "Decrypting cryptographically signed files...[OK]",
    "Applying glassmorphism styling layers..[OK]",
    "Checking operator authorization: GUEST_READ",
    "Clearance level: UNRESTRICTED · GRANTED",
    "Portal decryptions complete. Safe to read."
  ];
  
  const ldStages = [
    "Connect", "Mount", "Markdown", "Syntax", "Intel", "Decrypt", "Styles", "Auth", "Clearance", "Ready"
  ];

  const ldEl = document.getElementById("loader");
  const ldTerm = document.getElementById("ldTerm");
  const ldFill = document.getElementById("ldFill");
  const ldPct = document.getElementById("ldPct");
  const ldStage = document.getElementById("ldStage");

  if (!ldEl || !ldTerm || !ldFill) {
    // If elements are missing (e.g. debugging), immediately trigger initialization
    initBlogAll();
    return;
  }

  let ldIdx = 0;
  function ldStep() {
    if (ldIdx >= ldLines.length) {
      setTimeout(() => {
        ldEl.classList.add("out");
        document.body.style.overflow = "";
        setTimeout(initBlogAll, 600);
      }, 400);
      return;
    }

    const span = document.createElement("span");
    span.className = "ld-line";
    span.style.color = ldIdx === 9 ? "rgba(0,255,110,.9)" : (ldIdx >= 7 ? "rgba(0,212,255,.7)" : "rgba(0,255,110,.55)");
    span.textContent = ldLines[ldIdx];
    ldTerm.appendChild(span);
    ldTerm.scrollTop = ldTerm.scrollHeight;

    const pct = Math.round((ldIdx + 1) / ldLines.length * 100);
    ldFill.style.width = pct + "%";
    ldPct.textContent = pct + "%";
    ldStage.textContent = ldStages[ldIdx];
    
    ldIdx++;
    setTimeout(ldStep, 100 + Math.random() * 80); // Slightly faster than home page loader for snappier transitions
  }

  document.body.style.overflow = "hidden";
  setTimeout(ldStep, 300);
}

/* ─────────────── INITIALIZE SYSTEM ─────────────── */
function initBlogAll() {
  setupBanner();
  setupNavbar();
  setupMobileNav();
  setupBgCanvas();
  setupCursorGlow();
  setupScrollProgress();
  setupCardTilt();
  
  // Identify page type and run specific logic
  if (document.getElementById("blog-grid-root")) {
    setupBlogCatalog();
  } else if (document.getElementById("post-content-root")) {
    setupBlogPostReader();
  }
}

/* ─────────────── BANNER ─────────────── */
function setupBanner() {
  const banner = document.getElementById("newsBanner");
  const closeBtn = document.getElementById("newsBannerClose");
  const nav = document.getElementById("nav");
  const spb = document.getElementById("spb");
  if (!banner || !closeBtn) return;
  
  closeBtn.addEventListener("click", () => {
    banner.classList.add("dismissed");
    if (nav) nav.classList.add("no-banner");
    if (spb) spb.classList.add("no-banner");
    document.documentElement.style.setProperty('--banner-h', '0px');
    
    const blogHero = document.querySelector(".blog-hero");
    if (blogHero) blogHero.style.paddingTop = "90px";
    
    const postHeader = document.querySelector(".post-header-sec");
    if (postHeader) postHeader.style.paddingTop = "90px";
  });
}

/* ─────────────── NAVBAR scrolled state ─────────────── */
function setupNavbar() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });
}

/* ─────────────── MOBILE NAV MENU ─────────────── */
function setupMobileNav() {
  const ham = document.getElementById("ham");
  const mnav = document.getElementById("mnav");
  const close = document.getElementById("mnavClose");
  if (!ham || !mnav || !close) return;
  
  ham.addEventListener("click", () => mnav.classList.add("open"));
  close.addEventListener("click", () => mnav.classList.remove("open"));
  mnav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mnav.classList.remove("open"));
  });
}

/* ─────────────── SCROLL PROGRESS BAR ─────────────── */
function setupScrollProgress() {
  const bar = document.getElementById("spb");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = h > 0 ? (window.scrollY / h * 100) + "%" : "0%";
  }, { passive: true });
}

/* ─────────────── CURSOR GLOW ─────────────── */
function setupCursorGlow() {
  const glow = document.getElementById("cg");
  if (!glow) return;
  let cx = 0, cy = 0, tx = 0, ty = 0;
  document.addEventListener("mousemove", e => {
    tx = e.clientX;
    ty = e.clientY;
  });
  (function loop() {
    cx += (tx - cx) * 0.08;
    cy += (ty - cy) * 0.08;
    glow.style.left = cx + "px";
    glow.style.top = cy + "px";
    requestAnimationFrame(loop);
  })();
}

/* ─────────────── BACKGROUND GRID CANVAS ─────────────── */
function setupBgCanvas() {
  const c = document.getElementById("bg-canvas");
  if (!c) return;
  const ctx = c.getContext("2d");
  
  function resize() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  }
  
  function draw() {
    resize();
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.strokeStyle = "rgba(0, 255, 110, 0.025)";
    ctx.lineWidth = 1;
    const gs = 80;
    for (let x = 0; x < c.width; x += gs) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, c.height);
      ctx.stroke();
    }
    for (let y = 0; y < c.height; y += gs) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(c.width, y);
      ctx.stroke();
    }
  }
  
  draw();
  window.addEventListener("resize", draw, { passive: true });
}

/* ─────────────── CARD 3D TILT EFFECT ─────────────── */
function setupCardTilt() {
  document.querySelectorAll(".blog-card, .blog-empty-state").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

/* ═══════════════════════════════════════════════════════
   BLOG CATALOG PORTAL CONTROLLER (blog.html)
═══════════════════════════════════════════════════════ */
function setupBlogCatalog() {
  const gridRoot = document.getElementById("blog-grid-root");
  const searchInput = document.getElementById("blogSearch");
  const tabContainer = document.getElementById("blog-tabs-root");
  
  let currentCategory = "ALL";
  let searchQuery = "";

  // Render initial posts
  renderPosts();
  setupCardTilt();

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderPosts();
    });
  }

  // Category Tab handler
  if (tabContainer) {
    // Generate category tabs dynamically to match current content
    const categories = ["ALL", ...new Set(blogPosts.map(p => p.category))];
    tabContainer.innerHTML = "";
    
    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = `blog-tab ${cat === "ALL" ? "active" : ""}`;
      btn.textContent = cat;
      btn.addEventListener("click", () => {
        document.querySelectorAll(".blog-tab").forEach(t => t.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = cat;
        renderPosts();
      });
      tabContainer.appendChild(btn);
    });
  }

  // Render Posts with filter rules
  function renderPosts() {
    if (!gridRoot || typeof blogPosts === "undefined") return;

    // Filter
    const filtered = blogPosts.filter(post => {
      const matchesCategory = (currentCategory === "ALL" || post.category === currentCategory);
      
      const inTitle = post.title.toLowerCase().includes(searchQuery);
      const inExcerpt = post.excerpt.toLowerCase().includes(searchQuery);
      const inTags = post.tags.some(tag => tag.toLowerCase().includes(searchQuery));
      const inContent = post.content.toLowerCase().includes(searchQuery);
      const matchesSearch = (!searchQuery || inTitle || inExcerpt || inTags || inContent);

      return matchesCategory && matchesSearch;
    });

    // Populate
    gridRoot.innerHTML = "";
    
    if (filtered.length === 0) {
      gridRoot.innerHTML = `
        <div class="blog-empty-state glass">
          <div class="blog-empty-icon">📭</div>
          <h3 class="blog-empty-title">LOG ENTRY NOT FOUND</h3>
          <p class="blog-empty-desc">No logs matched your query. Check for typos or select a different category filter.</p>
        </div>
      `;
      setupCardTilt();
      return;
    }

    filtered.forEach((post, index) => {
      const card = document.createElement("div");
      card.className = "blog-card glass";
      card.style.animationDelay = `${index * 0.1}s`;
      
      const tagsHtml = post.tags.map(t => `<span class="blog-card-tag">#${t}</span>`).join("");
      
      card.innerHTML = `
        <a class="blog-card-img-link" href="post.html?post=${post.slug}">
          <img class="blog-card-img" src="${post.coverImage}" alt="${post.title}" loading="lazy" />
        </a>
        <div class="blog-card-accent"></div>
        <div class="blog-card-body">
          <div class="blog-card-meta">
            <span class="blog-card-cat">${post.category}</span>
            <span class="blog-card-readtime">${post.readingTime} &middot; ${post.date}</span>
          </div>
          <h3 class="blog-card-title">${post.title}</h3>
          <p class="blog-card-excerpt">${post.excerpt}</p>
          <div class="blog-card-tags">${tagsHtml}</div>
          <div class="blog-card-hr"></div>
          <a class="blog-card-link" href="post.html?post=${post.slug}">Read Entry →</a>
        </div>
      `;
      gridRoot.appendChild(card);
    });

    setupCardTilt();
  }
}

/* ═══════════════════════════════════════════════════════
   SINGLE BLOG POST READER CONTROLLER (post.html)
═══════════════════════════════════════════════════════ */
function setupBlogPostReader() {
  const contentRoot = document.getElementById("post-content-root");
  
  if (!contentRoot || typeof blogPosts === "undefined") return;

  // Read ?post=slug parameter
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("post");

  if (!slug) {
    render404State("NO LOG SPECIFIED");
    return;
  }

  // Find post
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    render404State("LOG ENTRY DECRYPT FAILED (404)");
    return;
  }

  // Inject metadata for SEO / Browser Title
  document.title = `${post.title} — Prem Lodhia`;
  
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", post.excerpt);
  }

  // Render Post Frame
  const tagsHtml = post.tags.map(t => `<span class="blog-card-tag">#${t}</span>`).join("");
  
  contentRoot.innerHTML = `
    <!-- Post Header -->
    <div class="container" style="max-width: 820px;">
      <a href="blog.html" class="post-back-btn">← Back to Logs</a>
      <div class="post-meta-strip">
        <span class="post-category-badge">${post.category}</span>
        <span>&middot;</span>
        <span>${post.date}</span>
        <span>&middot;</span>
        <span>${post.readingTime}</span>
      </div>
      <h1 class="post-main-title">${post.title}</h1>
    </div>

    <!-- Post Hero Cover Image -->
    <div class="container" style="max-width: 1040px; padding: 0;">
      <div class="post-hero-image-wrap">
        <img class="post-hero-image" src="${post.coverImage}" alt="${post.title}" />
      </div>
    </div>

    <!-- Post Body Context -->
    <div class="container" style="max-width: 820px;">
      <div class="post-body-container">
        <div class="post-content" id="markdown-container">
          <!-- Compiled Markdown will go here -->
        </div>
        <div class="post-tags-section">
          <div class="post-tags-title">// Tag System Indexes</div>
          <div class="blog-card-tags">${tagsHtml}</div>
        </div>
      </div>
    </div>
  `;

  // Dynamic Markdown compilation using Marked.js
  const mdContainer = document.getElementById("markdown-container");
  if (mdContainer && window.marked) {
    // Custom marked renderer to support mermaid blocks and cleaner markdown rendering
    const renderer = new window.marked.Renderer();
    
    // Intercept code blocks
    renderer.code = function(code, language) {
      if (language === 'mermaid') {
        // Return raw code enclosed in mermaid div so mermaid library can compile it
        return `<div class="mermaid">${code}</div>`;
      }
      // Return standard Prism code block structure
      const validLang = language || 'text';
      return `<pre><code class="language-${validLang}">${code}</code></pre>`;
    };

    window.marked.setOptions({ renderer });
    mdContainer.innerHTML = window.marked.parse(post.content);

    // Run syntax highlighting
    if (window.Prism) {
      window.Prism.highlightAll();
    }

    // Run Mermaid renderer
    if (window.mermaid && document.querySelector(".mermaid")) {
      window.mermaid.initialize({
        theme: 'dark',
        startOnLoad: false,
        securityLevel: 'loose',
        themeVariables: {
          background: '#040911',
          primaryColor: '#00ff6e',
          secondaryColor: '#00d4ff',
          tertiaryColor: '#9b6fff',
          primaryTextColor: '#c4d8e0',
          lineColor: 'rgba(0, 255, 110, 0.2)'
        }
      });
      window.mermaid.init(undefined, document.querySelectorAll(".mermaid"));
    }
  }

  // Helper to draw 404 state
  function render404State(message) {
    contentRoot.innerHTML = `
      <div class="container" style="max-width: 680px; padding: 100px 20px; text-align: center;">
        <div class="blog-empty-icon" style="font-size: 60px; margin-bottom: 24px; animation: blink 1.5s infinite;">⚠️</div>
        <h2 class="blog-empty-title" style="font-size: 32px; color: var(--red); text-shadow: 0 0 20px rgba(255,45,85,0.4);">${message}</h2>
        <p class="blog-empty-desc" style="font-size: 13px; margin: 16px 0 32px;">The requested log file is corrupted, restricted, or does not exist on this node.</p>
        <a href="blog.html" class="btn-p" style="display: inline-block; box-shadow: 0 0 20px rgba(0, 255, 110, 0.15);">Return to Log Portal</a>
      </div>
    `;
  }
}
