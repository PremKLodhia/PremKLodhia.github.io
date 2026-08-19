
/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ LOCALSTORAGE SAFE HELPERS ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function safeGetItem(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function safeSetItem(key, val) {
  try { localStorage.setItem(key, val); } catch (e) {}
}
function safeRemoveItem(key) {
  try { localStorage.removeItem(key); } catch (e) {}
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ LOADER ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
history.scrollRestoration = "manual";
window.scrollTo(0,0);
const ldLines = [
  "Initializing secure boot sequence...",
  "Loading kernel modules................[OK]",
  "Mounting /dev/portfolio...............[OK]",
  "Establishing TLS 1.3 handshake........[OK]",
  "Verifying cryptographic signatures....[OK]",
  "Loading threat intelligence feeds.....[OK]",
  "Calibrating detection rule engine.....[OK]",
  "Authenticating operator: PREM_LODHIA",
  "Clearance level: TS/SCI ┬À GRANTED",
  "Portfolio online. Welcome, Operator."
];
const ldStages = ["Boot","Kernel","Mount","TLS","Auth","Intel","Rules","Identity","Clearance","Ready"];
const ldEl = document.getElementById("loader");
const ldTerm = document.getElementById("ldTerm");
const ldFill = document.getElementById("ldFill");
const ldPct = document.getElementById("ldPct");
const ldStage = document.getElementById("ldStage");
let ldIdx = 0;

function setupLoader3D() {
  try {
    const canvas = document.getElementById("ldCanvas");
    if (!canvas || !window.THREE) return;
    const THREE = window.THREE;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const W = canvas.clientWidth || 300;
    const H = canvas.clientHeight || 300;
    renderer.setSize(W, H);
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.z = 3.5;
    
    // Rotating wireframe sphere
    const geom = new THREE.IcosahedronGeometry(1.2, 1);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x00ff6e,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    const sphere = new THREE.Mesh(geom, mat);
    scene.add(sphere);
    
    // Rotating rings
    const ringGeom = new THREE.TorusGeometry(1.5, 0.01, 8, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.12
    });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);
    
    let t = 0;
    let animId;
    function animate() {
      animId = requestAnimationFrame(animate);
      t += 0.01;
      sphere.rotation.y = t * 0.4;
      sphere.rotation.x = t * 0.2;
      ring.rotation.z = -t * 0.3;
      renderer.render(scene, camera);
    }
    animate();
    
    // Stop rendering once loader is gone
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class" && canvas.parentElement.classList.contains("out")) {
          cancelAnimationFrame(animId);
          observer.disconnect();
        }
      });
    });
    observer.observe(canvas.parentElement, { attributes: true });
  } catch (e) {
    console.warn("Loader 3D failed to start:", e);
  }
}

function ldStep() {
  if (!ldEl || !ldTerm || !ldFill || !ldPct || !ldStage) {
    setTimeout(initAll, 100);
    return;
  }
  if(ldIdx >= ldLines.length){ 
    setTimeout(()=>{ 
      ldEl.classList.add("out"); 
      document.body.style.overflow=""; 
      setTimeout(initAll, 800); 
    }, 400); 
    return; 
  }
  try {
    const span = document.createElement("span");
    span.className = "ld-line";
    span.style.color = ldIdx === 9 ? "rgba(0,255,110,.9)" : (ldIdx >= 7 ? "rgba(0,212,255,.7)" : "rgba(0,255,110,.55)");
    span.textContent = ldLines[ldIdx];
    ldTerm.appendChild(span);
    ldTerm.scrollTop = ldTerm.scrollHeight;
    const pct = Math.round((ldIdx+1)/ldLines.length*100);
    ldFill.style.width = pct + "%";
    ldPct.textContent = pct + "%";
    ldStage.textContent = ldStages[ldIdx];
  } catch (err) {
    console.warn("Loader progress error:", err);
  }
  ldIdx++;
  setTimeout(ldStep, 180 + Math.random()*120);
}
document.body.style.overflow = "hidden";
setTimeout(() => {
  setupLoader3D();
  ldStep();
}, 400);

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ INIT ALL ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function initAll() {
  const steps = [
    { name: "Banner", fn: setupBanner },
    { name: "ScrollReveal", fn: setupScrollReveal },
    { name: "Navbar", fn: setupNavbar },
    { name: "MobileNav", fn: setupMobileNav },
    { name: "HeroCanvas", fn: setupHeroCanvas },
    { name: "HeroTerminal", fn: setupHeroTerminal },
    { name: "BgCanvas", fn: setupBgCanvas },
    { name: "CursorGlow", fn: setupCursorGlow },
    { name: "ScrollProgress", fn: setupScrollProgress },
    { name: "CountUp", fn: setupCountUp },
    { name: "SkillTabs", fn: setupSkillTabs },
    { name: "CardTilt", fn: setupCardTilt },
    { name: "SocDashboard", fn: setupSocDashboard },
    { name: "ProjectCanvases", fn: setupProjectCanvases },
    { name: "InteractiveTerm", fn: setupInteractiveTerm },
    { name: "ContactForm", fn: setupContactForm },
    { name: "RevealAboveFold", fn: revealAboveFold },
    { name: "VisitorGeo", fn: setupVisitorGeo },
    { name: "KonamiCode", fn: setupKonamiCode },
    { name: "MagneticButtons", fn: setupMagneticButtons },
    { name: "MitreMatrix", fn: setupMitreMatrix },
    { name: "AskPremChatbot", fn: setupAskPremChatbot },
    { name: "VoiceNavigation", fn: setupVoiceNavigation },
    { name: "3dSkillGraph", fn: setup3dSkillGraph }
  ];

  steps.forEach(step => {
    try {
      if (typeof step.fn === "function") {
        step.fn();
      }
    } catch (e) {
      console.warn(`Error during ${step.name} initialization:`, e);
    }
  });
}

function setupBanner() {
  const banner = document.getElementById("newsBanner");
  const closeBtn = document.getElementById("newsBannerClose");
  const nav = document.getElementById("nav");
  const spb = document.getElementById("spb");
  closeBtn.addEventListener("click", () => {
    banner.classList.add("dismissed");
    nav.classList.add("no-banner");
    spb.classList.add("no-banner");
    document.documentElement.style.setProperty('--banner-h', '0px');
    const hero = document.getElementById("hero");
    if (hero) hero.style.paddingTop = "100px";
  });
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ SCROLL REVEAL ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function setupScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.07, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".rv, .rv-l").forEach(el => obs.observe(el));
  const barObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.querySelectorAll(".prof-fill").forEach(f => {
          setTimeout(() => { f.style.width = (f.dataset.w || "0") + "%"; }, 200);
        });
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll(".prof-card").forEach(el => barObs.observe(el));
}
function revealAboveFold() {
  const revealNow = () => {
    document.querySelectorAll(".rv, .rv-l").forEach(el => {
      const r = el.getBoundingClientRect();
      if(r.top < window.innerHeight + 80) el.classList.add("visible");
    });
  };
  requestAnimationFrame(() => requestAnimationFrame(revealNow));
  setTimeout(revealNow, 400);
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ NAVBAR ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function setupNavbar() {
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => { nav.classList.toggle("scrolled", window.scrollY > 60); }, { passive: true });
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ MOBILE NAV ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function setupMobileNav() {
  const ham = document.getElementById("ham");
  const mnav = document.getElementById("mnav");
  const close = document.getElementById("mnavClose");
  ham.addEventListener("click", () => mnav.classList.add("open"));
  close.addEventListener("click", () => mnav.classList.remove("open"));
  mnav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mnav.classList.remove("open")));
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ SCROLL PROGRESS ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function setupScrollProgress() {
  const bar = document.getElementById("spb");
  window.addEventListener("scroll", () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / h * 100) + "%";
  }, { passive: true });
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ CURSOR GLOW ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function setupCursorGlow() {
  const glow = document.getElementById("cg");
  let cx=0, cy=0, tx=0, ty=0;
  document.addEventListener("mousemove", e => { tx=e.clientX; ty=e.clientY; });
  (function loop() { cx += (tx-cx)*0.08; cy += (ty-cy)*0.08; glow.style.left = cx+"px"; glow.style.top = cy+"px"; requestAnimationFrame(loop); })();
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ BG CANVAS ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function setupBgCanvas() {
  const c = document.getElementById("bg-canvas");
  const ctx = c.getContext("2d");
  function resize() { c.width = window.innerWidth; c.height = window.innerHeight; }
  resize();
  window.addEventListener("resize", resize);
  function draw() {
    ctx.clearRect(0,0,c.width,c.height);
    ctx.strokeStyle = "rgba(0,255,110,0.025)"; ctx.lineWidth = 1;
    const gs = 80;
    for(let x=0; x<c.width; x+=gs) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,c.height); ctx.stroke(); }
    for(let y=0; y<c.height; y+=gs) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(c.width,y); ctx.stroke(); }
  }
  draw(); window.addEventListener("resize", draw);
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ HERO CANVAS ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function setupHeroCanvas() {
  const c = document.getElementById("heroCanvas");
  if(!c) return;
  const ctx = c.getContext("2d");
  let W, H, nodes = [];
  const mouse = { x: -999, y: -999 };
  function resize() {
    W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; nodes = [];
    const count = Math.floor((W * H) / 18000);
    for(let i=0; i<count; i++) {
      nodes.push({ x: Math.random()*W, y: Math.random()*H, vx: (Math.random()-.5)*0.35, vy: (Math.random()-.5)*0.35, r: 1.2 + Math.random()*1.5, col: Math.random() > 0.6 ? "0,255,110" : Math.random() > 0.5 ? "0,212,255" : "155,111,255" });
    }
  }
  function draw() {
    ctx.clearRect(0,0,W,H);
    for(let i=0; i<nodes.length; i++) {
      for(let j=i+1; j<nodes.length; j++) {
        const dx=nodes[i].x-nodes[j].x, dy=nodes[i].y-nodes[j].y, d=Math.sqrt(dx*dx+dy*dy);
        if(d < 130) { ctx.strokeStyle = `rgba(0,255,110,${0.12*(1-d/130)})`; ctx.lineWidth = 0.6; ctx.beginPath(); ctx.moveTo(nodes[i].x,nodes[i].y); ctx.lineTo(nodes[j].x,nodes[j].y); ctx.stroke(); }
      }
      const dx=nodes[i].x-mouse.x, dy=nodes[i].y-mouse.y, d=Math.sqrt(dx*dx+dy*dy);
      if(d<200) { ctx.strokeStyle = `rgba(0,212,255,${0.2*(1-d/200)})`; ctx.lineWidth = 0.8; ctx.beginPath(); ctx.moveTo(nodes[i].x,nodes[i].y); ctx.lineTo(mouse.x,mouse.y); ctx.stroke(); }
    }
    nodes.forEach(n => {
      ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(${n.col},0.7)`; ctx.fill();
      n.x += n.vx; n.y += n.vy;
      if(n.x<0||n.x>W) n.vx*=-1; if(n.y<0||n.y>H) n.vy*=-1;
    });
    requestAnimationFrame(draw);
  }
  resize(); window.addEventListener("resize", resize);
  window.addEventListener("mousemove", e => { const r = c.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  draw();
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ HERO TERMINAL ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function setupHeroTerminal() {
  const el = document.getElementById("heroTerm");
  if(!el) return;
  const lines = [
    {c:"tl-d", t:"// Initialising threat intelligence feed..."},
    {c:"tl-g", t:"Ôû║ SIEM connected ÔÇö Splunk v9.3 ÔÇö AUTH: OK"},
    {c:"tl-c", t:"Ôû║ Cloud posture scan ÔÇö AWS us-east-1 ÔÇö CLEAN"},
    {c:"tl-a", t:"ÔÜá Anomaly: port 4444 traffic ÔÇö brute force pattern"},
    {c:"tl-g", t:"Ôû║ Detection rule hit ÔÇö lateral_movement.yar"},
    {c:"tl-c", t:"Ôû║ MITRE ATT&CK mapping ÔåÆ T1021 (Lateral Move)"},
    {c:"tl-a", t:"ÔÜá New alert: credential stuffing detected"},
    {c:"tl-g", t:"Ôû║ Firewall rule applied ÔÇö threat contained"},
    {c:"tl-d", t:"// Incident report generated: PL-IR-2026-007"},
    {c:"tl-g", t:"Ô£ô All systems nominal ┬À uptime: 99.97%"},
  ];
  let idx = 0;
  function addLine() {
    if(idx >= lines.length) idx = 0;
    const s = document.createElement("span");
    s.className = "tl " + lines[idx].c;
    s.textContent = lines[idx].t;
    el.querySelectorAll(".tcursor").forEach(c => c.remove());
    el.appendChild(s);
    const cur = document.createElement("span"); cur.className = "tcursor"; s.appendChild(cur);
    while(el.children.length > 11) el.removeChild(el.firstChild);
    idx++;
    setTimeout(addLine, 1200 + Math.random()*800);
  }
  setTimeout(addLine, 500);
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ COUNT UP ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function setupCountUp() {
  document.querySelectorAll("[data-count]").forEach((el, i) => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const steps = 40; let step = 0;
    setTimeout(() => {
      const iv = setInterval(() => {
        step++;
        const e = step >= steps ? 1 : 1 - Math.pow(2,-10*(step/steps));
        el.textContent = Math.round(e*target) + suffix;
        if(step >= steps) { clearInterval(iv); el.textContent = target + suffix; }
      }, 900/steps);
    }, i*120 + 300);
  });
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ SKILL TABS ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function setupSkillTabs() {
  const tabs = document.querySelectorAll(".sk-tab");
  const panels = document.querySelectorAll(".sk-panel");
  function animPanel(panel) {
    panel.querySelectorAll(".sk-tag").forEach((t,i) => {
      t.classList.remove("appeared");
      setTimeout(() => t.classList.add("appeared"), i*35);
    });
  }
  animPanel(document.getElementById("panel-security"));
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      const panel = document.getElementById("panel-"+tab.dataset.cat);
      if(panel) { panel.classList.add("active"); animPanel(panel); }
    });
  });
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ CARD 3D TILT ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function setupCardTilt() {
  document.querySelectorAll(".proj-card, .cert-card, .tl-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX-r.left)/r.width - 0.5;
      const y = (e.clientY-r.top)/r.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${x*7}deg) rotateX(${-y*7}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
}

/* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
   THREE.JS PROJECT CARD CANVASES ÔÇö 3D MODELS
ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
function setupProjectCanvases() {
  if (!window.THREE) return;
  const THREE = window.THREE;

  function makeScene(canvasId, H, buildFn) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    setTimeout(() => {
      const parent = canvas.parentElement;
      const W = parent ? parent.clientWidth || parent.offsetWidth || 400 : 400;
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(W, H);
      renderer.setClearColor(0x000000, 0);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(52, W / H, 0.1, 100);
      camera.position.set(0, 0, 3.8);
      const { update, group } = buildFn(scene, THREE, camera);
      let mouseX = 0, mouseY = 0;
      canvas.addEventListener('mousemove', e => {
        const r = canvas.getBoundingClientRect();
        mouseX = (e.clientX - r.left) / r.width - 0.5;
        mouseY = (e.clientY - r.top) / r.height - 0.5;
      });
      canvas.addEventListener('mouseleave', () => { mouseX = 0; mouseY = 0; });
      let t = 0;
      function animate() {
        requestAnimationFrame(animate); t += 0.016;
        if (group) { group.rotation.x += (mouseY * 0.4 - group.rotation.x) * 0.05; }
        update(t, mouseX, mouseY);
        renderer.render(scene, camera);
      }
      animate();
      if (parent) {
        new ResizeObserver(() => {
          const newW = parent.clientWidth || parent.offsetWidth || 400;
          if (newW > 0) { renderer.setSize(newW, H); camera.aspect = newW / H; camera.updateProjectionMatrix(); }
        }).observe(parent);
      }
    }, 80);
  }

  /* ÔöÇÔöÇ c001: BlueTrace ÔÇö Network Icosahedron ÔöÇÔöÇ */
  makeScene('c001', 140, (scene, THREE) => {
    const group = new THREE.Group(); scene.add(group);
    scene.add(new THREE.AmbientLight(0x002208, 3));
    const pl1 = new THREE.PointLight(0x00ff6e, 4, 14); pl1.position.set(3,3,3); scene.add(pl1);
    const pl2 = new THREE.PointLight(0x00d4ff, 2, 12); pl2.position.set(-3,-2,2); scene.add(pl2);
    group.add(new THREE.Mesh(new THREE.IcosahedronGeometry(1.15, 1), new THREE.MeshBasicMaterial({ color:0x00ff6e, wireframe:true, transparent:true, opacity:0.28 })));
    group.add(new THREE.Mesh(new THREE.IcosahedronGeometry(0.78, 1), new THREE.MeshPhongMaterial({ color:0x001a08, emissive:0x00ff6e, emissiveIntensity:0.18, shininess:80, transparent:true, opacity:0.92 })));
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), new THREE.MeshBasicMaterial({ color:0x00ff6e, transparent:true, opacity:0.6 }));
    group.add(core);
    const orbitGroups = [];
    for (let i = 0; i < 7; i++) {
      const og = new THREE.Group(); og.rotation.z = (i/7)*Math.PI*1.3; og.rotation.x = (i/7)*Math.PI*0.6; group.add(og);
      const node = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), new THREE.MeshBasicMaterial({ color: i%2?0x00d4ff:0x00ff6e, transparent:true, opacity:0.9 }));
      node.position.x = 1.55; og.add(node); orbitGroups.push(og);
    }
    group.add(new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.008, 8, 72), new THREE.MeshBasicMaterial({ color:0x00ff6e, transparent:true, opacity:0.12 })));
    return { group, update: (t) => { group.rotation.y = t*0.35; orbitGroups.forEach((og,i)=>{ og.rotation.y = t*(0.7+i*0.08); }); core.material.opacity = 0.4+Math.sin(t*3)*0.25; }};
  });

  /* ÔöÇÔöÇ c002: VulnShop ÔÇö Cracked Octahedron ÔöÇÔöÇ */
  makeScene('c002', 140, (scene, THREE) => {
    const group = new THREE.Group(); scene.add(group);
    scene.add(new THREE.AmbientLight(0x1a0006, 3));
    const pl1 = new THREE.PointLight(0xff2d55, 4, 14); pl1.position.set(2,3,3); scene.add(pl1);
    const pl2 = new THREE.PointLight(0xff6eb4, 1.5, 10); pl2.position.set(-3,-2,2); scene.add(pl2);
    group.add(new THREE.Mesh(new THREE.OctahedronGeometry(1.2, 0), new THREE.MeshBasicMaterial({ color:0xff2d55, wireframe:true, transparent:true, opacity:0.45 })));
    group.add(new THREE.Mesh(new THREE.OctahedronGeometry(0.88, 0), new THREE.MeshPhongMaterial({ color:0x130006, emissive:0xff2d55, emissiveIntensity:0.22, shininess:100, transparent:true, opacity:0.88 })));
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.022, 10, 52), new THREE.MeshBasicMaterial({ color:0xff2d55, transparent:true, opacity:0.18 }));
    ring.rotation.x = Math.PI/3; group.add(ring);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.012, 8, 44), new THREE.MeshBasicMaterial({ color:0xff6eb4, transparent:true, opacity:0.12 }));
    ring2.rotation.x = -Math.PI/4; group.add(ring2);
    const pPos = [];
    for(let i=0;i<60;i++){const r=1.7+Math.random()*0.7,th=Math.random()*Math.PI*2,ph=Math.random()*Math.PI;pPos.push(r*Math.sin(ph)*Math.cos(th),r*Math.sin(ph)*Math.sin(th),r*Math.cos(ph));}
    const pGeo = new THREE.BufferGeometry(); pGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pPos), 3));
    group.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ color:0xff2d55, size:0.045, transparent:true, opacity:0.65 })));
    return { group, update: (t) => { group.rotation.y = t*0.42; group.rotation.z = t*0.18; ring.rotation.z = t*0.6; ring2.rotation.y = -t*0.5; }};
  });

  /* ÔöÇÔöÇ c003: Toolkit ÔÇö Interlocked Tori ÔöÇÔöÇ */
  makeScene('c003', 140, (scene, THREE) => {
    const group = new THREE.Group(); scene.add(group);
    scene.add(new THREE.AmbientLight(0x001a08, 2));
    const pl1 = new THREE.PointLight(0x00ff6e, 3.5, 14); pl1.position.set(3,2,3); scene.add(pl1);
    const pl2 = new THREE.PointLight(0x00d4ff, 2, 10); pl2.position.set(-3,-2,2); scene.add(pl2);
    const t1 = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.14, 18, 56), new THREE.MeshPhongMaterial({ color:0x00ff6e, emissive:0x00ff6e, emissiveIntensity:0.14, shininess:90 }));
    const t2 = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.1, 18, 56), new THREE.MeshPhongMaterial({ color:0x00d4ff, emissive:0x00d4ff, emissiveIntensity:0.1, shininess:90, transparent:true, opacity:0.75 }));
    t2.rotation.x = Math.PI/2;
    const t3 = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.04, 12, 72), new THREE.MeshBasicMaterial({ color:0x00ff6e, wireframe:true, transparent:true, opacity:0.18 }));
    t3.rotation.x = Math.PI/3.5;
    const center = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), new THREE.MeshPhongMaterial({ color:0xffffff, emissive:0x00ff6e, emissiveIntensity:0.7, shininess:200 }));
    group.add(t1, t2, t3, center);
    return { group, update: (t) => { t1.rotation.z = t*0.5; t2.rotation.y = t*0.65; t3.rotation.y = t*0.3; t3.rotation.x += 0.002; group.rotation.y = t*0.28; center.material.emissiveIntensity = 0.5+Math.sin(t*4)*0.25; }};
  });

  /* ÔöÇÔöÇ c004: Hospital RBAC ÔÇö Tiered Rings ÔöÇÔöÇ */
  makeScene('c004', 140, (scene, THREE) => {
    const group = new THREE.Group(); scene.add(group);
    scene.add(new THREE.AmbientLight(0x000d1a, 2));
    const pl1 = new THREE.PointLight(0x00d4ff, 3.5, 14); pl1.position.set(2,3,3); scene.add(pl1);
    const pl2 = new THREE.PointLight(0x9b6fff, 2, 10); pl2.position.set(-3,-1,2); scene.add(pl2);
    const ringCfgs = [
      { r:1.3, tube:0.065, color:0x00ff6e, y:-0.45, rx:Math.PI/2.2 },
      { r:1.0, tube:0.085, color:0x00d4ff, y:0, rx:Math.PI/3 },
      { r:0.68, tube:0.105, color:0x9b6fff, y:0.45, rx:Math.PI/5 },
    ];
    const meshRings = ringCfgs.map(cfg => {
      const m = new THREE.Mesh(new THREE.TorusGeometry(cfg.r, cfg.tube, 18, 72), new THREE.MeshPhongMaterial({ color:cfg.color, emissive:cfg.color, emissiveIntensity:0.2, shininess:85, transparent:true, opacity:0.88 }));
      m.position.y = cfg.y; m.rotation.x = cfg.rx; group.add(m); return m;
    });
    group.add(new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 2.2, 8), new THREE.MeshBasicMaterial({ color:0x00d4ff, transparent:true, opacity:0.25 })));
    const hub = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), new THREE.MeshPhongMaterial({ color:0xffffff, emissive:0x00d4ff, emissiveIntensity:0.6 }));
    group.add(hub);
    return { group, update: (t) => { meshRings[0].rotation.z = t*0.5; meshRings[1].rotation.z = -t*0.65; meshRings[2].rotation.z = t*0.8; group.rotation.y = t*0.32; hub.material.emissiveIntensity = 0.4+Math.sin(t*3.5)*0.25; }};
  });

  /* ÔöÇÔöÇ c005: AI Interview ÔÇö Torus Knot ÔöÇÔöÇ */
  makeScene('c005', 140, (scene, THREE) => {
    const group = new THREE.Group(); scene.add(group);
    scene.add(new THREE.AmbientLight(0x1a1000, 2));
    const pl1 = new THREE.PointLight(0xffb020, 4, 14); pl1.position.set(2,2,3); scene.add(pl1);
    const pl2 = new THREE.PointLight(0xff6eb4, 2, 10); pl2.position.set(-3,-1,2); scene.add(pl2);
    const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(0.82, 0.22, 110, 18, 2, 3), new THREE.MeshPhongMaterial({ color:0x1a0d00, emissive:0xffb020, emissiveIntensity:0.3, shininess:110, transparent:true, opacity:0.92 }));
    const knotWire = new THREE.Mesh(new THREE.TorusKnotGeometry(0.84, 0.22, 60, 18, 2, 3), new THREE.MeshBasicMaterial({ color:0xffb020, wireframe:true, transparent:true, opacity:0.14 }));
    const halo = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.012, 8, 80), new THREE.MeshBasicMaterial({ color:0xffb020, transparent:true, opacity:0.1 }));
    group.add(knot, knotWire, halo);
    return { group, update: (t) => { group.rotation.y = t*0.38; knot.rotation.z = t*0.25; knotWire.rotation.z = t*0.25; halo.rotation.x = t*0.2; knot.material.emissiveIntensity = 0.22+Math.sin(t*2.5)*0.12; }};
  });

  /* ÔöÇÔöÇ c006: KINORA ÔÇö IoT Ecosystem ÔöÇÔöÇ */
  makeScene('c006', 140, (scene, THREE) => {
    const group = new THREE.Group(); scene.add(group);
    scene.add(new THREE.AmbientLight(0x1a0f00, 2));
    const pl1 = new THREE.PointLight(0xffd060, 4, 14); pl1.position.set(2,2,3); scene.add(pl1);
    const pl2 = new THREE.PointLight(0xffb020, 2, 10); pl2.position.set(-3,-1,2); scene.add(pl2);
    const hub = new THREE.Mesh(new THREE.SphereGeometry(0.52, 32, 32), new THREE.MeshPhongMaterial({ color:0x1a0a00, emissive:0xffd060, emissiveIntensity:0.4, shininess:120 }));
    group.add(hub);
    [0.7, 0.85].forEach((r, i) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.018, 8, 48), new THREE.MeshBasicMaterial({ color: i?0xffb020:0xffd060, transparent:true, opacity:0.22 }));
      ring.rotation.x = Math.PI/2; group.add(ring);
    });
    const satData = [
      { r:1.4, color:0xffd060, incl:0, speed:0.8 },
      { r:1.3, color:0xffb020, incl:Math.PI*0.45, speed:-0.65 },
      { r:1.2, color:0xffa040, incl:Math.PI*0.85, speed:0.9 },
    ];
    const satGroups = satData.map(sd => {
      const sg = new THREE.Group(); sg.rotation.x = sd.incl; sg.userData = sd; group.add(sg);
      sg.add(new THREE.Mesh(new THREE.TorusGeometry(sd.r, 0.006, 8, 64), new THREE.MeshBasicMaterial({ color:sd.color, transparent:true, opacity:0.1 })));
      const sat = new THREE.Mesh(new THREE.SphereGeometry(0.11, 14, 14), new THREE.MeshPhongMaterial({ color:sd.color, emissive:sd.color, emissiveIntensity:0.55, shininess:80 }));
      sat.position.x = sd.r; sg.add(sat); return sg;
    });
    const outerRing = new THREE.Mesh(new THREE.TorusGeometry(1.65, 0.014, 8, 80), new THREE.MeshBasicMaterial({ color:0xffd060, transparent:true, opacity:0.07 }));
    group.add(outerRing);
    return { group, update: (t) => { satGroups.forEach(sg=>{ sg.rotation.y = t*sg.userData.speed; }); hub.rotation.y = t*0.4; group.rotation.y = t*0.25; group.rotation.x = Math.sin(t*0.7)*0.12; hub.material.emissiveIntensity = 0.3+Math.sin(t*3)*0.15; outerRing.material.opacity = 0.05+Math.sin(t*2)*0.04; }};
  });

  /* ÔöÇÔöÇ c007: Bridge ÔÇö Arch + Suspension ÔöÇÔöÇ */
  makeScene('c007', 180, (scene, THREE) => {
    const group = new THREE.Group(); scene.add(group);
    scene.add(new THREE.AmbientLight(0x0a0018, 2));
    const pl1 = new THREE.PointLight(0x9b6fff, 4, 14); pl1.position.set(2,3,3); scene.add(pl1);
    const pl2 = new THREE.PointLight(0x00d4ff, 2, 10); pl2.position.set(-3,-1,2); scene.add(pl2);
    const arch = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.065, 14, 56, Math.PI), new THREE.MeshPhongMaterial({ color:0x9b6fff, emissive:0x9b6fff, emissiveIntensity:0.28, shininess:100 }));
    arch.rotation.z = Math.PI; group.add(arch);
    const arch2 = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.025, 10, 48, Math.PI), new THREE.MeshBasicMaterial({ color:0x00d4ff, transparent:true, opacity:0.2 }));
    arch2.rotation.z = Math.PI; group.add(arch2);
    const deck = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.06, 0.28), new THREE.MeshPhongMaterial({ color:0x0a0018, emissive:0x9b6fff, emissiveIntensity:0.1, transparent:true, opacity:0.85 }));
    deck.position.y = -1.2; group.add(deck);
    for(let i=0;i<9;i++){const t=i/8,x=-1.2+t*2.4,ang=Math.PI*t,archY=Math.sin(ang)*1.2,h=archY;if(h<0.05)continue;const cable=new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,h,4),new THREE.MeshBasicMaterial({color:0x9b6fff,transparent:true,opacity:0.35}));cable.position.set(x,-1.2+h/2,0);group.add(cable);}
    [-1.2, 1.2].forEach(x => {
      const pylon = new THREE.Mesh(new THREE.CylinderGeometry(0.04,0.06,2.4,8), new THREE.MeshPhongMaterial({color:0x9b6fff,emissive:0x9b6fff,emissiveIntensity:0.18}));
      pylon.position.set(x,0,0); group.add(pylon);
      const glow = new THREE.Mesh(new THREE.SphereGeometry(0.1,12,12), new THREE.MeshBasicMaterial({color:0xffd060,transparent:true,opacity:0.85}));
      glow.position.set(x,1.2,0); group.add(glow);
    });
    const midNode = new THREE.Mesh(new THREE.SphereGeometry(0.13,16,16), new THREE.MeshPhongMaterial({color:0x9b6fff,emissive:0x9b6fff,emissiveIntensity:0.7}));
    midNode.position.set(0,1.2,0); group.add(midNode);
    [-1.2,-0.4,0.4,1.2].forEach(x=>{const n=new THREE.Mesh(new THREE.SphereGeometry(0.07,12,12),new THREE.MeshBasicMaterial({color:0x00d4ff,transparent:true,opacity:0.8}));n.position.set(x,-1.2,0);group.add(n);});
    const streamPts=[];for(let i=0;i<25;i++){streamPts.push((Math.random()-.5)*2.8,(Math.random()-.5)*2.8,(Math.random()-.5)*0.5);}
    const sGeo=new THREE.BufferGeometry();sGeo.setAttribute('position',new THREE.BufferAttribute(new Float32Array(streamPts),3));
    group.add(new THREE.Points(sGeo,new THREE.PointsMaterial({color:0x9b6fff,size:0.04,transparent:true,opacity:0.5})));
    return { group, update: (t) => { group.rotation.y = t*0.3; midNode.material.emissiveIntensity = 0.5+Math.sin(t*3.5)*0.25; arch.material.emissiveIntensity = 0.2+Math.sin(t*2)*0.1; }};
  });
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ SOC DASHBOARD ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function setupSocDashboard() {
  setupSocClock(); setupThreatMap(); setupAlertFeed(); setupMiniCharts();
}
function setupSocClock() {
  function tick() { const el = document.getElementById("socClock"); if(el) el.textContent = new Date().toUTCString().split(" ")[4] + " UTC"; }
  tick(); setInterval(tick, 1000);
}
function setupMiniCharts() {
  const configs = [
    { id:"chartEvents", statId:"stat-events", color:"0,255,110",   baseVal:847, variance:80 },
    { id:"chartAlerts",  statId:"stat-alerts",  color:"255,176,32",  baseVal:14,  variance:5 },
    { id:"chartBlocked", statId:"stat-blocked", color:"0,212,255",   baseVal:203, variance:30 },
    { id:"chartFP",      statId:"stat-fp",      color:"155,111,255", baseVal:3,   variance:2, suffix:"%" },
  ];
  configs.forEach(cfg => {
    const c = document.getElementById(cfg.id); if(!c) return;
    const ctx = c.getContext("2d");
    const history = Array.from({length:24}, () => cfg.baseVal + (Math.random()-.5)*cfg.variance*2);
    function resize() { const p = c.parentElement; c.width = p.offsetWidth||160; c.height = p.offsetHeight||72; }
    function draw() {
      resize(); const W=c.width,H=c.height;
      ctx.clearRect(0,0,W,H);
      const min=Math.min(...history),max=Math.max(...history)+1,n=history.length,PAD=4;
      const pts=history.map((v,i)=>[(i/(n-1))*W,H-PAD-((v-min)/(max-min))*(H-PAD*2)]);
      const g=ctx.createLinearGradient(0,0,0,H);
      g.addColorStop(0,`rgba(${cfg.color},0.28)`);g.addColorStop(0.6,`rgba(${cfg.color},0.08)`);g.addColorStop(1,`rgba(${cfg.color},0)`);
      ctx.beginPath();ctx.moveTo(pts[0][0],H);ctx.lineTo(pts[0][0],pts[0][1]);
      for(let i=1;i<pts.length;i++){const[x0,y0]=pts[i-1],[x1,y1]=pts[i],cx=(x0+x1)/2;ctx.bezierCurveTo(cx,y0,cx,y1,x1,y1);}
      ctx.lineTo(pts[pts.length-1][0],H);ctx.closePath();ctx.fillStyle=g;ctx.fill();
      ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);
      for(let i=1;i<pts.length;i++){const[x0,y0]=pts[i-1],[x1,y1]=pts[i],cx=(x0+x1)/2;ctx.bezierCurveTo(cx,y0,cx,y1,x1,y1);}
      ctx.strokeStyle=`rgba(${cfg.color},0.85)`;ctx.lineWidth=1.8;ctx.lineJoin="round";ctx.stroke();
      const[lx,ly]=pts[pts.length-1];ctx.beginPath();ctx.arc(lx,ly,3,0,Math.PI*2);
      ctx.fillStyle=`rgba(${cfg.color},1)`;ctx.shadowColor=`rgba(${cfg.color},0.9)`;ctx.shadowBlur=8;ctx.fill();ctx.shadowBlur=0;
    }
    function update(){
      const nv=Math.max(0,cfg.baseVal+(Math.random()-.5)*cfg.variance*2);
      history.push(nv);if(history.length>24)history.shift();
      const el=document.getElementById(cfg.statId);if(el)el.textContent=Math.round(nv)+(cfg.suffix||"");
      draw();
    }
    setTimeout(()=>{draw();},100);
    setInterval(update,2000+Math.random()*1000);
    window.addEventListener("resize",draw,{passive:true});
  });
}
function setupThreatMap() {
  const c = document.getElementById("threatMap"); if(!c) return;
  const ctx = c.getContext("2d");
  const attacks = [];
  const cities = [{x:.13,y:.35},{x:.08,y:.42},{x:.20,y:.55},{x:.48,y:.28},{x:.50,y:.24},{x:.55,y:.30},{x:.68,y:.32},{x:.72,y:.42},{x:.77,y:.38},{x:.82,y:.35},{x:.87,y:.38},{x:.85,y:.55},{x:.52,y:.50},{x:.89,y:.72}];
  const target = {x:.48,y:.28};
  function resize() { c.width = c.offsetWidth||600; c.height = c.offsetHeight||200; }
  resize();
  function spawnAttack() {
    const src=cities[Math.floor(Math.random()*cities.length)];
    if(Math.abs(src.x-target.x)<0.05&&Math.abs(src.y-target.y)<0.05)return;
    const sevs=["c","h","h","m","m","m","l"];
    attacks.push({sx:src.x*c.width,sy:src.y*c.height,tx:target.x*c.width,ty:target.y*c.height,prog:0,speed:0.008+Math.random()*0.012,sev:sevs[Math.floor(Math.random()*sevs.length)],alive:true});
  }
  setInterval(spawnAttack,1800+Math.random()*1500);
  function drawMap() {
    ctx.clearRect(0,0,c.width,c.height);
    ctx.strokeStyle="rgba(0,102,255,0.04)";ctx.lineWidth=1;
    for(let x=0;x<=c.width;x+=c.width/12){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,c.height);ctx.stroke();}
    for(let y=0;y<=c.height;y+=c.height/6){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(c.width,y);ctx.stroke();}
    cities.forEach(city=>{ctx.beginPath();ctx.arc(city.x*c.width,city.y*c.height,2,0,Math.PI*2);ctx.fillStyle="rgba(0,212,255,0.3)";ctx.fill();});
    const tx=target.x*c.width,ty=target.y*c.height;
    ctx.beginPath();ctx.arc(tx,ty,5,0,Math.PI*2);ctx.fillStyle="rgba(0,255,110,0.8)";ctx.fill();
    ctx.beginPath();ctx.arc(tx,ty,10,0,Math.PI*2);ctx.strokeStyle="rgba(0,255,110,0.2)";ctx.lineWidth=1;ctx.stroke();
    ctx.beginPath();ctx.arc(tx,ty,16,0,Math.PI*2);ctx.strokeStyle="rgba(0,255,110,0.1)";ctx.stroke();
    ctx.font="7px monospace";ctx.fillStyle="rgba(0,255,110,0.6)";ctx.fillText("YOU",tx+8,ty-4);
    const colMap={c:"255,45,85",h:"255,176,32",m:"0,212,255",l:"155,111,255"};
    attacks.forEach(a=>{
      if(!a.alive)return;a.prog+=a.speed;if(a.prog>=1){a.alive=false;return;}
      const mx=(a.sx+a.tx)/2,my=Math.min(a.sy,a.ty)-40,tp=a.prog;
      const x=(1-tp)*(1-tp)*a.sx+2*(1-tp)*tp*mx+tp*tp*a.tx;
      const y=(1-tp)*(1-tp)*a.sy+2*(1-tp)*tp*my+tp*tp*a.ty;
      const col=colMap[a.sev];
      ctx.beginPath();ctx.arc(x,y,3,0,Math.PI*2);ctx.fillStyle=`rgba(${col},0.9)`;ctx.fill();
      ctx.beginPath();
      for(let s=0;s<8;s++){const st=Math.max(0,tp-s*0.02);const sx=(1-st)*(1-st)*a.sx+2*(1-st)*st*mx+st*st*a.tx;const sy=(1-st)*(1-st)*a.sy+2*(1-st)*st*my+st*st*a.ty;if(s===0)ctx.moveTo(sx,sy);else ctx.lineTo(sx,sy);}
      ctx.strokeStyle=`rgba(${col},${0.5*(1-a.prog)})`;ctx.lineWidth=1;ctx.stroke();
    });
    for(let i=attacks.length-1;i>=0;i--){if(!attacks[i].alive)attacks.splice(i,1);}
    requestAnimationFrame(drawMap);
  }
  drawMap();
}
const alertMessages = [
  {sev:"c",name:"SSH Brute Force Detected",detail:"192.168.1.45 ÔåÆ 10.0.0.2:22",mitre:"T1110.003"},
  {sev:"h",name:"Suspicious PowerShell Execution",detail:"proc: powershell.exe, encoded cmd",mitre:"T1059.001"},
  {sev:"h",name:"Lateral Movement Attempt",detail:"SMB traffic to 3 internal hosts",mitre:"T1021.002"},
  {sev:"m",name:"New Admin Account Created",detail:"user: svc_backup, priv escalation",mitre:"T1136.001"},
  {sev:"m",name:"Port Scan Detected",detail:"Src: 45.33.32.156, 1023 ports scanned",mitre:"T1046"},
  {sev:"c",name:"Ransomware Pattern Detected",detail:"mass file rename: .encrypt extension",mitre:"T1486"},
  {sev:"h",name:"C2 Beacon Detected",detail:"HTTPS to 185.220.101.42:443",mitre:"T1071.001"},
  {sev:"m",name:"Privilege Escalation Attempt",detail:"sudo -l executed by www-data",mitre:"T1548.003"},
  {sev:"l",name:"Unusual Login Time",detail:"user: john.doe, 03:14 UTC access",mitre:"T1078"},
  {sev:"m",name:"DNS Tunneling Detected",detail:"Excessive TXT record queries",mitre:"T1071.004"},
  {sev:"c",name:"Data Exfiltration Detected",detail:"2.4GB upload to 185.198.xxx.xxx",mitre:"T1041"},
  {sev:"h",name:"Credential Dumping",detail:"LSASS memory access by unknown proc",mitre:"T1003.001"},
  {sev:"l",name:"Failed Auth Attempts",detail:"5 failures: admin@corp.internal",mitre:"T1110"},
  {sev:"m",name:"Malicious Macro Detected",detail:"Office doc opened with macro enabled",mitre:"T1204.002"},
];
function setupAlertFeed() {
  const feed = document.getElementById("alertFeed"); if(!feed) return;
  function addAlert() {
    const a=alertMessages[Math.floor(Math.random()*alertMessages.length)];
    const timeStr=new Date().toUTCString().split(" ")[4];
    const colMap={c:"sev-c",h:"sev-h",m:"sev-m",l:"sev-l"};
    const item=document.createElement("div");item.className="alert-item";
    item.innerHTML=`<div class="alert-top"><div class="alert-sev ${colMap[a.sev]}"></div><div class="alert-name">${a.name}</div><div class="alert-time">${timeStr}</div></div><div class="alert-detail">${a.detail}</div><div class="alert-mitre">${a.mitre}</div>`;
    feed.insertBefore(item,feed.firstChild);
    
    // Prune alert items but retain GEO-IP connection alert
    while (feed.children.length > 14) {
      let removed = false;
      for (let idx = feed.children.length - 1; idx >= 0; idx--) {
        if (!feed.children[idx].classList.contains("connection-detected")) {
          feed.removeChild(feed.children[idx]);
          removed = true;
          break;
        }
      }
      if (!removed) break;
    }
  }
  for(let i=0;i<5;i++)setTimeout(addAlert,i*300);
  setInterval(addAlert,3000+Math.random()*2000);
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ INTERACTIVE TERMINAL ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function setupInteractiveTerm() {
  const body = document.getElementById("itermBody");
  const input = document.getElementById("itermInput");
  if(!body || !input) return;

  const commands = {
    help: () => `<span class="io-c">Available commands:</span>
<span class="io-g">  projects</span>  ÔÇö view all security projects
<span class="io-g">  skills</span>    ÔÇö explore technical skills
<span class="io-g">  contact</span>   ÔÇö open secure contact channel
<span class="io-g">  about</span>     ÔÇö operative profile
<span class="io-g">  certs</span>     ÔÇö credential vault
<span class="io-g">  soc</span>       ÔÇö live SOC dashboard
<span class="io-g">  blog</span>      ÔÇö security log portal / blog
<span class="io-g">  whoami</span>    ÔÇö system status
<span class="io-g">  kinora</span>    ÔÇö innovation project details
<span class="io-g">  bridge</span>    ÔÇö live project details
<span class="io-g">  clear</span>     ÔÇö clear terminal`,

    projects: () => {
      setTimeout(() => document.querySelector("#projects").scrollIntoView({behavior:"smooth"}), 300);
      return `<span class="io-g">Ôû║ Navigating to evidence files...</span>
<span class="io-c">  001 BlueTrace Lab          [ACTIVE]    ÔÇö Splunk + Suricata detection lab</span>
<span class="io-c">  002 VulnShop Lab           [ACTIVE]    ÔÇö OWASP Top 10 exploitation lab</span>
<span class="io-c">  003 Cyber Security Toolkit [ACTIVE]    ÔÇö Python automation suite</span>
<span class="io-c">  004 Hospital Mgmt System   [COMPLETE]  ÔÇö RBAC + JWT secure full-stack</span>
<span class="io-w">  005 AI Cybersecurity Interview [WIP]   ÔÇö RAG + LangChain platform</span>
<span class="io-w">  006 KINORA [­ƒÅå WINNER]    [CONCLUDED]  ÔÇö AI elderly care ecosystem</span>
<span class="io-c">  007 Bridge                 [LIVE]      ÔÇö Community local guide platform</span>`;
    },

    kinora: () => {
      setTimeout(() => document.querySelector("#projects").scrollIntoView({behavior:"smooth"}), 300);
      return `<span class="io-w">­ƒÅå INNOVATION FEST 2026 WINNER</span>
<span class="io-c">  Project:  </span><span class="io-d"> KINORA ÔÇö AI-Powered Elderly Care Ecosystem</span>
<span class="io-c">  Role:     </span><span class="io-d"> Team Leader ┬À Software &amp; Security Engineer</span>
<span class="io-c">  Stack:    </span><span class="io-d"> Raspberry Pi 5 ┬À ESP32 ┬À Python ┬À Voice AI ┬À Hardware</span>
<span class="io-c">  Status:   </span><span class="io-d"> Concluded May 2026</span>
<span class="io-c">  Scope:    </span><span class="io-d"> Hardware hub + smart pendant + family app + pitch deck + financials</span>
<span class="io-g">  Ôû║ Scroll to Projects section to view card</span>`;
    },

    bridge: () => {
      setTimeout(() => window.open("https://bridge-final-web-version.vercel.app/", "_blank"), 300);
      return `<span class="io-g">Ôû║ Opening Bridge platform in new tab...</span>
<span class="io-c">  Live site:  </span><span class="io-d"> bridge-final-web-version.vercel.app</span>
<span class="io-c">  Web repo:   </span><span class="io-d"> github.com/uffbilxl/bridge-local-guide</span>
<span class="io-c">  Mobile repo:</span><span class="io-d"> github.com/uffbilxl/mobile-version-of-the-bridge</span>
<span class="io-g">  Status: LIVE ┬À Community-driven local guide platform</span>`;
    },

    skills: () => {
      setTimeout(() => document.querySelector("#skills").scrollIntoView({behavior:"smooth"}), 300);
      return `<span class="io-g">Ôû║ Loading skill matrix...</span>
<span class="io-c">  Security:  </span><span class="io-d"> SIEM ┬À MITRE ATT&amp;CK ┬À OWASP ┬À Incident Response ┬À Detection Eng</span>
<span class="io-c">  Cloud:     </span><span class="io-d"> AWS ┬À Docker ┬À Serverless ┬À Cloud Security ┬À IaaS</span>
<span class="io-c">  AI/ML:     </span><span class="io-d"> RAG ┬À LangChain ┬À Agentic Systems ┬À PyTorch ┬À Embeddings</span>
<span class="io-c">  Dev:       </span><span class="io-d"> Python ┬À Node.js ┬À JavaScript ┬À SQL ┬À Bash ┬À REST APIs</span>
<span class="io-c">  Networking:</span><span class="io-d"> Suricata ┬À Splunk ┬À Wireshark ┬À TCP/IP ┬À Firewalls</span>
<span class="io-c">  Hardware:  </span><span class="io-d"> Raspberry Pi ┬À ESP32 ┬À Embedded Systems</span>`;
    },

    contact: () => {
      setTimeout(() => document.querySelector("#contact").scrollIntoView({behavior:"smooth"}), 300);
      return `<span class="io-g">Ôû║ Opening secure contact channel...</span>
<span class="io-c">  Email:    </span><span class="io-d"> prem@premlodhia.com</span>
<span class="io-c">  LinkedIn: </span><span class="io-d"> linkedin.com/in/prem-lodhia-29a888382</span>
<span class="io-c">  GitHub:   </span><span class="io-d"> github.com/PremKLodhia</span>
<span class="io-g">  All channels open ┬À Response time: &lt; 24h</span>`;
    },

    about: () => {
      setTimeout(() => document.querySelector("#about").scrollIntoView({behavior:"smooth"}), 300);
      return `<span class="io-g">Ôû║ Loading operative file...</span>
<span class="io-c">  Name:        </span><span class="io-d"> Prem Lodhia</span>
<span class="io-c">  Role:        </span><span class="io-d"> Cloud Security &amp; Security Software Eng</span>
<span class="io-c">  Year:        </span><span class="io-d"> 2 ÔÇö CS with AI</span>
<span class="io-c">  Status:      </span><span class="io-g"> Open to Opportunities</span>
<span class="io-c">  Clearance:   </span><span class="io-g"> Highly Competent ┬À TS/SCI</span>
<span class="io-c">  Specialisms: </span><span class="io-d"> Cloud Security ┬À Detection Eng ┬À AppSec ┬À AI/ML</span>`;
    },

    certs: () => {
      setTimeout(() => document.querySelector("#certifications").scrollIntoView({behavior:"smooth"}), 300);
      return `<span class="io-g">Ôû║ Unlocking credential vault...</span>
<span class="io-c">  [Cisco]  </span><span class="io-d"> Junior Cybersecurity Analyst Career Path ┬À Mar 2026</span>
<span class="io-c">  [IBM]    </span><span class="io-d"> Enterprise Design Thinking Practitioner ┬À Feb 2026</span>
<span class="io-c">  [IBM]    </span><span class="io-d"> Fundamentals of AI Agents ÔÇö RAG &amp; LangChain ┬À Dec 2025</span>
<span class="io-c">  [IBM]    </span><span class="io-d"> Generative AI: Introduction &amp; Applications ┬À Dec 2025</span>
<span class="io-c">  [IBM]    </span><span class="io-d"> Introduction to Cloud Computing ┬À Dec 2025</span>
<span class="io-c">  [Google] </span><span class="io-d"> AI Essentials ┬À Dec 2025</span>
<span class="io-g">  6 credentials verified ┬À All active</span>`;
    },

    soc: () => {
      setTimeout(() => document.querySelector("#soc").scrollIntoView({behavior:"smooth"}), 300);
      return `<span class="io-g">Ôû║ Connecting to SOC operations centre...</span>
<span class="io-c">  Dashboard: </span><span class="io-d"> prem-sec-ops-center ┬À v2.4.1</span>
<span class="io-c">  Status:    </span><span class="io-g"> LIVE SIM ÔÇö All monitors active</span>
<span class="io-c">  Feeds:     </span><span class="io-d"> Threat map ┬À Alert feed ┬À 4x metric charts</span>
<span class="io-c">  Alerts:    </span><span class="io-d"> Real-time MITRE ATT&amp;CK tagged events</span>
<span class="io-g">  Scrolling to dashboard now...</span>`;
    },

    whoami: () => `<span class="io-g">prem@sec ÔÇö Operator authenticated</span>
<span class="io-c">  UID:    </span><span class="io-d"> prem-lodhia-001</span>
<span class="io-c">  Groups: </span><span class="io-d"> cloud-sec, detection-eng, ai-ops, full-stack-dev, ios-dev</span>
<span class="io-c">  Shell:  </span><span class="io-d"> /bin/portfolio-v2.0</span>
<span class="io-c">  Uptime: </span><span class="io-g"> 99.97% ÔÇö All systems nominal</span>
<span class="io-c">  Last:   </span><span class="io-d"> Innovation Fest 2026 ÔÇö ­ƒÅå 1st Place Winner</span>`,

    blog: () => {
      setTimeout(() => window.location.href = "blog.html", 300);
      return `<span class="io-g">Ôû║ Decrypting security logs...</span>
<span class="io-c">  Redirecting to blog.html portal...</span>`;
    },

    clear: () => { body.innerHTML = ""; return null; },
  };

  function execCmd(raw) {
    const cmd = raw.trim().toLowerCase();
    // Echo the command
    const cmdLine = document.createElement("div");
    cmdLine.className = "iterm-out";
    cmdLine.innerHTML = `<span class="io-line"><span style="color:var(--green)">prem@sec:~$</span> <span style="color:var(--cream)">${raw}</span></span>`;
    body.appendChild(cmdLine);

    const handler = commands[cmd];
    if (handler) {
      const result = handler();
      if (result !== null && result !== undefined) {
        const out = document.createElement("div");
        out.className = "iterm-out";
        out.innerHTML = result.split('\n').map(l => `<span class="io-line">${l}</span>`).join('');
        body.appendChild(out);
      }
    } else if (cmd !== "") {
      const out = document.createElement("div");
      out.className = "iterm-out";
      out.innerHTML = `<span class="io-line io-r">command not found: ${raw} ÔÇö try 'help'</span>`;
      body.appendChild(out);
    }
    body.scrollTop = body.scrollHeight;
  }

  // Welcome message
  const welcome = document.createElement("div");
  welcome.className = "iterm-out";
  welcome.innerHTML = [
    `<span class="io-line io-g">Portfolio Shell v2.0 ÔÇö Prem Lodhia ┬À Cloud Security Engineer</span>`,
    `<span class="io-line io-d">Type 'help' to see all commands. Click quick-buttons below or type freely.</span>`,
    `<span class="io-line io-d">ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ</span>`,
  ].join('');
  body.appendChild(welcome);

  input.addEventListener("keydown", e => {
    if(e.key === "Enter") {
      const val = input.value; input.value = "";
      execCmd(val);
    }
  });

  document.querySelectorAll(".icmd").forEach(btn => {
    btn.addEventListener("click", () => {
      const cmd = btn.dataset.cmd; if(!cmd) return;
      execCmd(cmd);
      input.focus();
    });
  });

  input.focus();
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ CONTACT FORM ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function setupContactForm() {
  const form = document.getElementById("cfForm");
  const btn = document.getElementById("cfBtn");
  const status = document.getElementById("cfStatus");
  if(!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    btn.textContent = "Ô¼í Transmitting...";
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });
      if(res.ok) {
        status.textContent = "Ô£ô Transmission received. Will respond within 24h.";
        status.className = "cf-status ok";
        form.reset();
        btn.textContent = "Ô¼í Transmitted";
      } else {
        throw new Error("Server error");
      }
    } catch {
      status.textContent = "ÔÜá Transmission failed. Try prem@premlodhia.com directly.";
      status.className = "cf-status err";
      btn.textContent = "Ô¼í Transmit Message";
      btn.disabled = false;
    }
  });
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ PORTFOLIO CINEMATIC UPGRADES ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */

/* 1. Geolocation SOC Alert Connection */
function setupVisitorGeo() {
  const alertFeed = document.getElementById("alertFeed");
  if (!alertFeed) return;

  const simulatedLocs = [
    { city: "Frankfurt", country_name: "Germany", org: "Deutscher Webdienst", ip: "46.165.2.203" },
    { city: "Shenzhen", country_name: "China", org: "Chinanet Guangdong", ip: "120.197.89.5" },
    { city: "St Petersburg", country_name: "Russia", org: "Neva Link Ltd", ip: "185.198.111.42" }
  ];

  function injectGeoAlert(data) {
    const timeStr = new Date().toUTCString().split(" ")[4];
    const item = document.createElement("div");
    item.className = "alert-item connection-detected";
    item.style.borderColor = "var(--cyan)";
    item.style.boxShadow = "0 0 12px rgba(0, 212, 255, 0.15)";
    item.innerHTML = `
      <div class="alert-top">
        <div class="alert-sev sev-m" style="background:var(--cyan); box-shadow:0 0 8px var(--cyan);"></div>
        <div class="alert-name">[!] ALERT: Connection Detected</div>
        <div class="alert-time">${timeStr}</div>
      </div>
      <div class="alert-detail">
        Origin: ${data.city || 'Unknown'}, ${data.country_name || 'Remote'} (${data.org || 'ISP'})<br>
        IP: ${data.ip} ┬À Channel: SECURE_HTTPS
      </div>
      <div class="alert-mitre">GEO-IP</div>
    `;
    alertFeed.insertBefore(item, alertFeed.firstChild);
  }

  // Fetch remote geolocation data
  fetch("https://ipapi.co/json/")
    .then(res => {
      if (!res.ok) throw new Error("GEO IP service offline");
      return res.json();
    })
    .then(data => {
      if (data.error || !data.ip) throw new Error("Invalid GEO payload");
      injectGeoAlert(data);
    })
    .catch(() => {
      // Fallback: simulated remote connections
      const randomLoc = simulatedLocs[Math.floor(Math.random() * simulatedLocs.length)];
      setTimeout(() => {
        injectGeoAlert(randomLoc);
      }, 1000);
    });
}

/* 2. DEFCON Emergency Mode (Konami Code) */
let sirenInterval = null;
let audioCtx = null;
let osc = null;
let gainNode = null;

function playSiren() {
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    osc = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();
    
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(440, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.06, audioCtx.currentTime + 0.1);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    
    let high = false;
    sirenInterval = setInterval(() => {
      if (!audioCtx || audioCtx.state === 'suspended') return;
      const nextFreq = high ? 450 : 750;
      osc.frequency.exponentialRampToValueAtTime(nextFreq, audioCtx.currentTime + 0.45);
      high = !high;
    }, 500);
  } catch (e) {
    console.warn("Web Audio API siren failed to start", e);
  }
}

function stopSiren() {
  if (sirenInterval) {
    clearInterval(sirenInterval);
    sirenInterval = null;
  }
  if (osc) {
    try { osc.stop(); } catch(e){}
    osc.disconnect();
    osc = null;
  }
  if (gainNode) {
    gainNode.disconnect();
    gainNode = null;
  }
  if (audioCtx) {
    audioCtx.close();
    audioCtx = null;
  }
}

function setupKonamiCode() {
  const konamiSequence = [
    "arrowup", "arrowup", "arrowdown", "arrowdown",
    "arrowleft", "arrowright", "arrowleft", "arrowright",
    "b", "a"
  ];
  let inputBuffer = [];
  
  document.addEventListener("keydown", e => {
    const key = e.key.toLowerCase();
    inputBuffer.push(key);
    if (inputBuffer.length > konamiSequence.length) {
      inputBuffer.shift();
    }
    
    const isMatched = konamiSequence.every((val, index) => val === inputBuffer[index]);
    if (isMatched) {
      inputBuffer = [];
      triggerDefconMode();
    }
  });

  const overlay = document.getElementById("defconOverlay");
  const disarmBtn = document.getElementById("defconDisarmBtn");
  const defconLogs = document.getElementById("defconLogs");

  function triggerDefconMode() {
    document.body.classList.add("defcon-active");
    overlay.classList.add("active");
    playSiren();
    
    // Clean and print simulated logs
    defconLogs.innerHTML = "";
    const logs = [
      "CRITICAL: INTRUSION ATTEMPT DETECTED...",
      "KEYBOARD EXPLOIT LOGGED IN OPERATOR SHELL...",
      "SHIFTING PRIMARY ACCENTS TO EMERGENCY COLOR STATE...",
      "AUDIO OSCILLATOR SIREN ENGAGED [750HZ SAWTOOTH]...",
      "CONTAINMENT SUB-ROUTINE INITIATED...",
      "AWAITING DE-ESCALATION PROTOCOL COMMANDS."
    ];
    
    let i = 0;
    function printNextLog() {
      if (i < logs.length && overlay.classList.contains("active")) {
        const timeStr = new Date().toUTCString().split(" ")[4];
        const div = document.createElement("div");
        div.textContent = `[${timeStr}] ${logs[i]}`;
        defconLogs.appendChild(div);
        defconLogs.scrollTop = defconLogs.scrollHeight;
        i++;
        setTimeout(printNextLog, 700);
      }
    }
    printNextLog();
  }

  disarmBtn.addEventListener("click", () => {
    document.body.classList.remove("defcon-active");
    overlay.classList.remove("active");
    stopSiren();
  });
  window.triggerDefconMode = triggerDefconMode;
}

/* 3. Magnetic CTA Buttons */
function setupMagneticButtons() {
  const btns = document.querySelectorAll(".nav-cta, .cf-submit, .defcon-disarm-btn, .chat-send-btn");
  let cachedCoords = [];

  function cacheCenters() {
    cachedCoords = Array.from(btns).map(btn => {
      const prevTransform = btn.style.transform;
      btn.style.transform = "none";
      const rect = btn.getBoundingClientRect();
      btn.style.transform = prevTransform;
      
      const centerX = rect.left + rect.width / 2 + window.scrollX;
      const centerY = rect.top + rect.height / 2 + window.scrollY;
      return { el: btn, x: centerX, y: centerY };
    });
  }

  cacheCenters();
  window.addEventListener("resize", cacheCenters);
  window.addEventListener("scroll", cacheCenters, { passive: true });

  document.addEventListener("mousemove", e => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    cachedCoords.forEach(item => {
      const distX = mouseX - item.x;
      const distY = mouseY - item.y;
      const dist = Math.sqrt(distX * distX + distY * distY);
      
      if (dist < 80) {
        const pullX = distX * 0.35;
        const pullY = distY * 0.35;
        item.el.style.transform = `translate(${pullX}px, ${pullY}px) scale(1.03)`;
      } else {
        item.el.style.transform = "";
      }
    });
  });

  btns.forEach(btn => {
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
}

/* 4. Interactive MITRE ATT&CK Matrix Click Actions */
function setupMitreMatrix() {
  const cells = document.querySelectorAll(".mitre-cell.active");
  const drawer = document.getElementById("mitreDrawer");
  const drawerClose = document.getElementById("mitreDrawerClose");
  const badge = document.getElementById("mitreDrawerBadge");
  const title = document.getElementById("mitreDrawerTitle");
  const desc = document.getElementById("mitreDrawerDesc");
  const detection = document.getElementById("mitreDrawerDetection");
  const practice = document.getElementById("mitreDrawerPractice");

  if (!drawer) return;

  cells.forEach(cell => {
    cell.addEventListener("click", () => {
      const tid = cell.dataset.tid || "T1000";
      const name = cell.dataset.name || "Unknown Technique";
      const dText = cell.dataset.desc || "No technique details available.";
      const detText = cell.dataset.detect || "No mitigation or detection logged.";
      const pracText = cell.dataset.practice || "Operational testing pending.";

      badge.textContent = tid;
      title.textContent = name;
      desc.textContent = dText;
      detection.textContent = detText;
      practice.textContent = pracText;

      drawer.classList.add("open");
    });
  });

  drawerClose.addEventListener("click", () => {
    drawer.classList.remove("open");
  });

  // Close drawer if clicking outside
  document.addEventListener("click", e => {
    if (drawer.classList.contains("open") && !drawer.contains(e.target) && !e.target.closest(".mitre-cell.active")) {
      drawer.classList.remove("open");
    }
  });
}

/* 5. Floating AI Chatbot "Ask Prem" */
function setupAskPremChatbot() {
  const toggle = document.getElementById("askPremToggle");
  const windowEl = document.getElementById("askPremWindow");
  const settingsBtn = document.getElementById("chatSettingsBtn");
  const settingsPanel = document.getElementById("chatSettingsPanel");
  const saveKeyBtn = document.getElementById("saveKeyBtn");
  const clearKeyBtn = document.getElementById("clearKeyBtn");
  const keyInput = document.getElementById("geminiApiKeyInput");
  const chatBody = document.getElementById("chatBody");
  const chatInput = document.getElementById("chatInput");
  const sendBtn = document.getElementById("chatSendBtn");

  if (!toggle || !windowEl) return;

  // Toggle chat window visibility
  toggle.addEventListener("click", () => {
    windowEl.classList.toggle("open");
    if (windowEl.classList.contains("open")) {
      chatInput.focus();
    }
  });

  // Toggle API settings panel
  settingsBtn.addEventListener("click", () => {
    settingsPanel.classList.toggle("active");
  });

  // Load saved API key from localStorage
  const savedKey = safeGetItem("gemini_api_key");
  if (savedKey) {
    keyInput.value = savedKey;
  }

  // Save API key
  saveKeyBtn.addEventListener("click", () => {
    const key = keyInput.value.trim();
    if (key) {
      safeSetItem("gemini_api_key", key);
      appendMessage("system", "API Key saved successfully! Gemini cloud AI active.");
      settingsPanel.classList.remove("active");
    } else {
      appendMessage("system", "Please enter a valid key first.");
    }
  });

  // Clear API key
  clearKeyBtn.addEventListener("click", () => {
    safeRemoveItem("gemini_api_key");
    keyInput.value = "";
    appendMessage("system", "API Key cleared. Reverting to local NLP logic engine.");
    settingsPanel.classList.remove("active");
  });

  // Append message block helper
  function appendMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = `chat-msg ${sender}`;
    msg.innerHTML = text.replace(/\n/g, "<br>");
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
    return msg;
  }

  // Send message trigger
  function handleSend() {
    const text = chatInput.value.trim();
    if (!text) return;
    chatInput.value = "";

    // Append User Message
    appendMessage("user", text);

    // Simulated Typing Indicator
    const typingIndicator = appendMessage("system typing", "Thinking...");

    // Determine processing route (Gemini API vs Local NLP)
    const apiKey = safeGetItem("gemini_api_key");
    if (apiKey) {
      queryGeminiAPI(apiKey, text, typingIndicator);
    } else {
      setTimeout(() => {
        typingIndicator.remove();
        processLocalNLP(text);
      }, 750);
    }
  }

  // Process free-form queries locally via NLP keyword matching
  function processLocalNLP(query) {
    const q = query.toLowerCase();
    let reply = "";

    if (q.includes("aws") || q.includes("cloud")) {
      reply = "Prem is highly proficient in AWS cloud security. He builds secure IAM policies, designs Virtual Private Clouds (VPCs), and implements cloud hardening controls using Terraform infrastructure-as-code.";
    } else if (q.includes("project") || q.includes("experience") || q.includes("splunk") || q.includes("suricata")) {
      reply = "Prem has engineered several security operations lab environments. Key projects include:\n\n1. <b>BlueTrace Lab:</b> Docker container network monitoring suite running Suricata IDS sending logs to a localized Splunk SIEM instances.\n2. <b>VulnShop:</b> Node.js target practice testing OWASP Top 10 exploits.\n3. <b>KINORA:</b> AI elderly-care product that won the Innovation Fest 2026.";
    } else if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("job")) {
      reply = "Feel free to connect or discuss opportunities! You can email Prem directly at <b>prem@premlodhia.com</b> or reach out via his LinkedIn profile at linkedin.com/in/prem-lodhia-29a888382.";
    } else if (q.includes("skill") || q.includes("code") || q.includes("python") || q.includes("bash")) {
      reply = "Prem's programming capabilities span Python, Bash, PowerShell, and SQL for script automation. On the security stack, he runs Splunk, Suricata, Wireshark, Docker, and standard threat detection rules.";
    } else if (q.includes("kinora") || q.includes("winner")) {
      reply = "Prem served as Team Leader & Software Engineer for KINORA. His team built a working IoT elder-care ecosystem (Raspberry Pi 5 voice hub, OLED pendant, and dashboard) and secured 1st Place at Innovation Fest 2026.";
    } else if (q.includes("cisco") || q.includes("cert") || q.includes("certification")) {
      reply = "Prem holds professional badges including the Cisco Junior Cybersecurity Analyst Career Path, IBM Enterprise Design Thinking, and multiple IBM qualifications in generative AI agent workflows, LangChain, and RAG architecture.";
    } else {
      reply = "I'm here to help! Prem specializes in Cloud Security, Threat Hunting, and Script Automation. Ask me about specific details like 'AWS security', 'BlueTrace lab', 'Cisco credentials', or 'KINORA'.";
    }

    appendMessage("system", reply);
  }

  // Fetch responses from Gemini API
  async function queryGeminiAPI(key, query, typingIndicator) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
    const context = `
      You are representing Prem Lodhia, a Cloud Security and Detection Engineering student who is highly professional and seeking security roles. 
      Answer the user's question concisely in a friendly, technical, cybersecurity-focused tone. 
      Do not output markdown code blocks. Make references to his main projects like BlueTrace Lab (Splunk/Suricata detection) or KINORA (IoT/AI elderly-care system).
      User query: ${query}
    `;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: context }] }]
        })
      });

      if (!response.ok) throw new Error("API call failed");

      const data = await response.json();
      typingIndicator.remove();
      
      const replyText = data.candidates[0].content.parts[0].text.trim();
      appendMessage("system", replyText);
    } catch (err) {
      typingIndicator.remove();
      appendMessage("system", "ÔÜá´©Å Gemini Cloud API error occurred. Please verify your API key or connectivity. Reverting to local NLP engines.");
      processLocalNLP(query);
    }
  }

  sendBtn.addEventListener("click", handleSend);
  chatInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      handleSend();
    }
  });
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ VOICE NAVIGATION ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function setupVoiceNavigation() {
  const toggleBtn = document.getElementById("voiceNavToggle");
  const statusEl = document.getElementById("voiceNavStatus");
  if (!toggleBtn || !statusEl) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    toggleBtn.addEventListener("click", () => {
      showStatus("Speech Recognition API not supported in this browser.", 3500);
    });
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  let isListening = false;

  function showStatus(text, duration = 2500) {
    statusEl.textContent = text;
    statusEl.classList.add("visible");
    setTimeout(() => {
      if (statusEl.textContent === text) {
        statusEl.classList.remove("visible");
      }
    }, duration);
  }

  function playDigitizedBeep(type = "activate") {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      if (type === "activate") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      } else if (type === "confirm") {
        osc.type = "square";
        osc.frequency.setValueAtTime(1000, ctx.currentTime);
        osc.frequency.setValueAtTime(1500, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
        osc.start();
        osc.stop(ctx.currentTime + 0.18);
      }
    } catch (e) {}
  }

  toggleBtn.addEventListener("click", () => {
    if (isListening) {
      recognition.stop();
    } else {
      try {
        recognition.start();
      } catch (err) {
        console.error(err);
      }
    }
  });

  recognition.onstart = () => {
    isListening = true;
    toggleBtn.classList.add("listening");
    playDigitizedBeep("activate");
    showStatus("Listening... (Try: 'show projects', 'defcon mode', 'show skills')", 4500);
  };

  recognition.onend = () => {
    isListening = false;
    toggleBtn.classList.remove("listening");
    showStatus("Mic deactivated", 1500);
  };

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript.toLowerCase().trim();
    showStatus(`Recognized: "${transcript}"`, 3000);
    playDigitizedBeep("confirm");

    if (transcript.includes("show projects") || transcript.includes("open projects")) {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (transcript.includes("open terminal") || transcript.includes("go to terminal")) {
      const el = document.getElementById("terminal-sec");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        const input = document.getElementById("itermInput");
        if (input) setTimeout(() => input.focus(), 800);
      }
    } else if (transcript.includes("clear terminal")) {
      const body = document.getElementById("itermBody");
      if (body) body.innerHTML = "";
    } else if (transcript.includes("defcon mode") || transcript.includes("danger")) {
      if (typeof window.triggerDefconMode === "function") {
        window.triggerDefconMode();
      }
    } else if (transcript.includes("disarm") || transcript.includes("stop alert")) {
      const disarmBtn = document.getElementById("defconDisarmBtn");
      if (disarmBtn) disarmBtn.click();
    } else if (transcript.includes("show skills") || transcript.includes("skills")) {
      const el = document.getElementById("skills");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (transcript.includes("contact") || transcript.includes("send message")) {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  recognition.onerror = (e) => {
    if (e.error !== "no-speech") {
      showStatus("Speech error: " + e.error, 2500);
    }
  };
}

/* ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ 3D SKILL GRAPH ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ */
function setup3dSkillGraph() {
  const canvas = document.getElementById("skills3dCanvas");
  const labelsContainer = document.getElementById("skills3dLabels");
  if (!canvas || !labelsContainer || !window.THREE) return;

  const THREE = window.THREE;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
  camera.position.z = 8.5;

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1.2, 50);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  const graphGroup = new THREE.Group();
  scene.add(graphGroup);

  // Central Node
  const centralGroup = new THREE.Group();
  const outerCentral = new THREE.Mesh(
    new THREE.SphereGeometry(0.55, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0x00ff6e, wireframe: true, transparent: true, opacity: 0.35 })
  );
  const innerCentral = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.7 })
  );
  centralGroup.add(outerCentral, innerCentral);
  graphGroup.add(centralGroup);

  // Center Label
  const centerLabel = document.createElement("div");
  centerLabel.className = "sg-label";
  centerLabel.style.borderColor = "rgba(0, 255, 110, 0.5)";
  centerLabel.style.boxShadow = "0 0 15px rgba(0, 255, 110, 0.4)";
  centerLabel.style.background = "rgba(0, 255, 110, 0.12)";
  centerLabel.textContent = "Prem Lodhia";
  labelsContainer.appendChild(centerLabel);

  centerLabel.addEventListener("click", () => {
    playClickSound();
    triggerParticleBurstForEl(centerLabel, "var(--green)");
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });

  // Orbital Nodes Data
  const nodesData = [
    { name: "Detection Engineering", color: 0x00ff6e, cssClass: "", cat: "security", radius: 2.7, speed: 0.32, phase: 0 },
    { name: "Cloud Security", color: 0x00d4ff, cssClass: "cyan", cat: "cloud", radius: 3.4, speed: 0.24, phase: Math.PI * 0.4 },
    { name: "Threat Hunting", color: 0xffb020, cssClass: "amber", cat: "security", radius: 4.1, speed: 0.16, phase: Math.PI * 0.8 },
    { name: "AppSec", color: 0x9b6fff, cssClass: "purple", cat: "dev", radius: 3.0, speed: 0.28, phase: Math.PI * 1.2 },
    { name: "MITRE ATT&CK", color: 0xff2d55, cssClass: "red", cat: "mitre", radius: 4.6, speed: 0.2, phase: Math.PI * 1.6 }
  ];

  nodesData.forEach(node => {
    const nodeGroup = new THREE.Group();
    
    const inner = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 16, 16),
      new THREE.MeshBasicMaterial({ color: node.color })
    );
    const outer = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 12, 12),
      new THREE.MeshBasicMaterial({ color: node.color, wireframe: true, transparent: true, opacity: 0.25 })
    );
    nodeGroup.add(inner, outer);
    graphGroup.add(nodeGroup);
    node.mesh = nodeGroup;

    // Connective Line
    const lineMaterial = new THREE.LineBasicMaterial({
      color: node.color,
      transparent: true,
      opacity: 0.22,
      linewidth: 1.5
    });
    const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)];
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    graphGroup.add(line);
    node.line = line;

    // Label
    const label = document.createElement("div");
    label.className = `sg-label ${node.cssClass}`.trim();
    label.textContent = node.name;
    labelsContainer.appendChild(label);
    node.labelEl = label;

    // Interactions
    label.addEventListener("mouseenter", () => {
      nodeGroup.scale.setScalar(1.35);
      line.material.opacity = 0.95;
      line.material.color.setHex(0xffffff);
    });
    label.addEventListener("mouseleave", () => {
      nodeGroup.scale.setScalar(1.0);
      line.material.opacity = 0.22;
      line.material.color.setHex(node.color);
    });

    label.addEventListener("click", (e) => {
      playClickSound();
      triggerParticleBurst(e.clientX, e.clientY, `var(--${node.cssClass || 'green'})`);
      
      if (node.cat === "mitre") {
        const target = document.querySelector(".mitre-section");
        if (target) target.scrollIntoView({ behavior: "smooth" });
      } else {
        const tabBtn = document.querySelector(`.sk-tab[data-cat="${node.cat}"]`);
        if (tabBtn) tabBtn.click();
        const skillsSec = document.getElementById("skills");
        if (skillsSec) skillsSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Rotation Controls
  let targetRotationX = 0.2;
  let targetRotationY = 0.5;
  let mouseIsDown = false;
  let prevMousePos = { x: 0, y: 0 };

  canvas.addEventListener("mousedown", e => {
    mouseIsDown = true;
    prevMousePos = { x: e.clientX, y: e.clientY };
  });

  document.addEventListener("mousemove", e => {
    if (!mouseIsDown) return;
    const deltaX = e.clientX - prevMousePos.x;
    const deltaY = e.clientY - prevMousePos.y;
    targetRotationY += deltaX * 0.005;
    targetRotationX += deltaY * 0.005;
    prevMousePos = { x: e.clientX, y: e.clientY };
  });

  document.addEventListener("mouseup", () => {
    mouseIsDown = false;
  });

  // Resize handling
  function resize() {
    const parent = canvas.parentElement;
    const W = parent.clientWidth || 400;
    const H = parent.clientHeight || 380;
    renderer.setSize(W, H);
    camera.aspect = W / H;
    
    // Dynamically adjust camera position to prevent node clipping on mobile viewports
    if (W < 600) {
      camera.position.z = 11.5;
    } else if (W < 800) {
      camera.position.z = 10.0;
    } else {
      camera.position.z = 8.5;
    }
    
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(canvas.parentElement);
  resize();

  // Helper for center label click burst
  function triggerParticleBurstForEl(el, color) {
    const rect = el.getBoundingClientRect();
    triggerParticleBurst(rect.left + rect.width/2, rect.top + rect.height/2, color);
  }

  // Animation Loop
  const tempV = new THREE.Vector3();
  let t = 0;

  function animate() {
    requestAnimationFrame(animate);
    t += 0.012;

    if (!mouseIsDown) {
      targetRotationY += 0.0015;
    }
    graphGroup.rotation.y += (targetRotationY - graphGroup.rotation.y) * 0.08;
    graphGroup.rotation.x += (targetRotationX - graphGroup.rotation.x) * 0.08;

    innerCentral.scale.setScalar(1 + Math.sin(t * 3.5) * 0.08);
    outerCentral.rotation.y = t * 0.15;
    outerCentral.rotation.z = t * 0.1;

    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    const halfW = W / 2;
    const halfH = H / 2;

    function projectLabel(mesh, labelEl) {
      mesh.getWorldPosition(tempV);
      tempV.project(camera);
      if (tempV.z > 1) {
        labelEl.style.display = "none";
        return;
      }
      const x = (tempV.x * halfW) + halfW;
      const y = -(tempV.y * halfH) + halfH;
      labelEl.style.display = "";
      labelEl.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    }

    nodesData.forEach(node => {
      const angle = t * node.speed + node.phase;
      const localX = Math.cos(angle) * node.radius;
      const localZ = Math.sin(angle) * node.radius;
      const localY = Math.sin(angle * 2.2) * 0.35;

      node.mesh.position.set(localX, localY, localZ);

      const pos = node.line.geometry.attributes.position;
      pos.setXYZ(1, localX, localY, localZ);
      pos.needsUpdate = true;

      projectLabel(node.mesh, node.labelEl);
    });

    projectLabel(centralGroup, centerLabel);

    renderer.render(scene, camera);
  }

  animate();
}

function playClickSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.12);
  } catch (e) {}
}

function triggerParticleBurst(clientX, clientY, color) {
  const canvasWrap = document.querySelector(".skills-graph-canvas-wrap");
  if (!canvasWrap) return;
  const rect = canvasWrap.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  
  for (let i = 0; i < 20; i++) {
    const p = document.createElement("div");
    p.style.position = "absolute";
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    p.style.width = "4px";
    p.style.height = "4px";
    p.style.borderRadius = "50%";
    p.style.background = color;
    p.style.pointerEvents = "none";
    p.style.boxShadow = `0 0 6px ${color}`;
    p.style.zIndex = 1000;
    canvasWrap.appendChild(p);
    
    const angle = Math.random() * Math.PI * 2;
    const distance = 25 + Math.random() * 45;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance;
    
    p.animate([
      { transform: "translate(0, 0) scale(1)", opacity: 1 },
      { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
    ], {
      duration: 500 + Math.random() * 300,
      easing: "cubic-bezier(0.1, 0.8, 0.3, 1)",
      fill: "forwards"
    });
    
    setTimeout(() => p.remove(), 900);
  }
}

