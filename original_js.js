E html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Prem Lodhia ÔÇö Cloud Security Engineer</title>
  <meta name="description" content="Cloud Security Engineer. Detection Engineering. AppSec. AI. Building systems that detect attacks before they happen." />
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Prem Lodhia",
  "url": "https://premlodhia.com",
  "jobTitle": "Security Software Engineer",
  "description": "Computer Science & AI student transitioning into Security Software Engineering and Cloud Security.",
  "affiliation": {
    "@type": "EducationalOrganization",
    "name": "Birmingham City University"
  },
  "knowsAbout": [
    "Software Engineering",
    "Cloud Security",
    "Artificial Intelligence",
    "Cybersecurity"
  ],
  "award": [
    "Unihack Hackathon Winner",
    "Innovation Fest Winner"
  ],
  "sameAs": [
    "https://uk.linkedin.com/in/prem-lodhia-29a888382",
    "https://github.com/PremKLodhia"
  ]
}
</script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,600;0,700;1,700&family=Sora:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <style>
    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       DESIGN TOKENS
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    :root {
      --ink:     #03060b;
      --ink2:    #070c15;
      --surface: #091422;
      --s2:      #0d1a2a;
      --s3:      #0f2035;
      --cream:   #c4d8e0;
      --dim:     rgba(196,216,224,0.5);
      --green:   #00ff6e;
      --cyan:    #00d4ff;
      --blue:    #0066ff;
      --purple:  #9b6fff;
      --magenta: #e040fb;
      --amber:   #ffb020;
      --red:     #ff2d55;
      --gold:    #ffd060;
      --gutter:  clamp(16px, 4vw, 56px);
      --max:     1240px;
      --F1: "Chakra Petch", sans-serif;
      --F2: "Sora", sans-serif;
      --FM: "JetBrains Mono", monospace;
      --r1: 12px;
      --r2: 20px;
      --ease: cubic-bezier(.22,1,.36,1);
      --banner-h: 40px;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background: var(--ink);
      color: var(--cream);
      font-family: var(--F2);
      line-height: 1.65;
      overflow-x: hidden;
    }
    a { color: inherit; text-decoration: none; }
    button { border: none; background: none; cursor: pointer; font-family: inherit; }
    .container { max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter); }
    section[id] { scroll-margin-top: 120px; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--ink); }
    ::-webkit-scrollbar-thumb { background: rgba(0,255,110,.3); border-radius: 2px; }

    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       BREAKING NEWS BANNER
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    #newsBanner {
      position: fixed; top: 0; left: 0; right: 0; z-index: 10002;
      height: var(--banner-h);
      background: linear-gradient(90deg, rgba(3,6,11,.97) 0%, rgba(25,18,0,.97) 40%, rgba(25,18,0,.97) 60%, rgba(3,6,11,.97) 100%);
      border-bottom: 1px solid rgba(255,176,32,.35);
      display: flex; align-items: center;
      overflow: hidden;
      box-shadow: 0 2px 24px rgba(255,176,32,.1), 0 1px 0 rgba(255,176,32,.15);
      transform: translateY(0);
      transition: transform .4s var(--ease), opacity .4s ease;
    }
    #newsBanner.dismissed {
      transform: translateY(-100%);
      opacity: 0;
      pointer-events: none;
    }
    .banner-inner { display: flex; align-items: center; gap: 0; width: 100%; height: 100%; position: relative; }
    .banner-badge-wrap {
      display: flex; align-items: center; gap: 8px;
      padding: 0 14px 0 16px; flex-shrink: 0; height: 100%;
      background: rgba(255,176,32,.07); border-right: 1px solid rgba(255,176,32,.2);
    }
    .banner-trophy { font-size: 16px; line-height: 1; animation: trophyPulse 2.5s ease-in-out infinite; }
    @keyframes trophyPulse {
      0%,100% { transform: scale(1) rotate(0deg); filter: brightness(1); }
      50% { transform: scale(1.15) rotate(-8deg); filter: brightness(1.3) drop-shadow(0 0 6px rgba(255,208,96,.8)); }
    }
    .banner-breaking {
      font-family: var(--F1); font-size: 9px; font-weight: 700;
      letter-spacing: .22em; text-transform: uppercase;
      color: var(--amber); text-shadow: 0 0 12px rgba(255,176,32,.6);
    }
    .banner-sep { width: 1px; height: 20px; background: rgba(255,176,32,.2); margin: 0 2px; }
    .banner-ticker-wrap {
      flex: 1; overflow: hidden; height: 100%; display: flex; align-items: center;
      mask-image: linear-gradient(90deg, transparent 0%, black 3%, black 97%, transparent 100%);
      -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 3%, black 97%, transparent 100%);
    }
    .banner-ticker {
      display: flex; align-items: center; gap: 0; white-space: nowrap;
      animation: ticker 28s linear infinite;
      font-family: var(--FM); font-size: 11px; color: rgba(196,216,224,.8);
    }
    .banner-ticker:hover { animation-play-state: paused; }
    .bt-item { display: inline-flex; align-items: center; gap: 10px; padding: 0 32px; }
    .bt-hl { color: var(--gold); font-weight: 500; }
    .bt-dim { color: rgba(196,216,224,.38); }
    .bt-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--amber); opacity: 0.5; flex-shrink: 0; }
    @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    .banner-close {
      flex-shrink: 0; width: 36px; height: 100%;
      display: flex; align-items: center; justify-content: center;
      font-family: var(--FM); font-size: 11px; color: rgba(196,216,224,.3);
      border-left: 1px solid rgba(255,176,32,.1);
      transition: color .2s, background .2s;
    }
    .banner-close:hover { color: var(--amber); background: rgba(255,176,32,.06); }

    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       SCROLL PROGRESS BAR
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    #spb {
      position: fixed; top: var(--banner-h); left: 0; height: 2px; width: 0%;
      background: linear-gradient(90deg, var(--green), var(--cyan));
      z-index: 99999; box-shadow: 0 0 12px var(--green);
      transition: width .1s linear, top .4s var(--ease);
    }
    #spb.no-banner { top: 0; }

    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       CURSOR GLOW
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    #cg {
      position: fixed; pointer-events: none; z-index: 5;
      width: 500px; height: 500px; border-radius: 50%;
      transform: translate(-50%,-50%);
      background: radial-gradient(circle, rgba(0,255,110,.055) 0%, transparent 65%);
      will-change: left, top;
    }

    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       GLASS & LAYOUT UTILITIES
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    .glass {
      background: rgba(255,255,255,.022);
      border: 1px solid rgba(0,255,110,.07);
      backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
    }
    .section { padding: 110px 0; }
    .sep { height: 1px; background: linear-gradient(90deg, transparent, rgba(0,212,255,.1), transparent); margin: 0 var(--gutter); }
    .rv { opacity: 0; transform: translateY(40px); transition: opacity .85s var(--ease), transform .85s var(--ease); }
    .rv.visible { opacity: 1; transform: none; }
    .rv-l { opacity: 0; transform: translateX(-40px); transition: opacity .85s var(--ease), transform .85s var(--ease); }
    .rv-l.visible { opacity: 1; transform: none; }
    .d1 { transition-delay: .08s !important; } .d2 { transition-delay: .16s !important; }
    .d3 { transition-delay: .24s !important; } .d4 { transition-delay: .32s !important; }
    .d5 { transition-delay: .40s !important; } .d6 { transition-delay: .48s !important; }
    .d7 { transition-delay: .56s !important; }
    .badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 5px 14px; border-radius: 999px;
      font-family: var(--FM); font-size: 9px; letter-spacing: .2em; text-transform: uppercase;
      color: rgba(0,255,110,.65); background: rgba(0,255,110,.05); border: 1px solid rgba(0,255,110,.12);
      margin-bottom: 18px;
    }
    .badge::before {
      content: ""; width: 6px; height: 6px; border-radius: 50%;
      background: var(--green); box-shadow: 0 0 8px var(--green);
      animation: pulse 2.4s ease-in-out infinite;
    }
    .sec-title { font-family: var(--F1); font-size: clamp(34px,5.5vw,68px); line-height: .95; text-transform: uppercase; margin-bottom: 16px; }
    .sec-sub { max-width: 660px; color: var(--dim); font-size: 15px; }
    .sec-title em {
      background: linear-gradient(90deg,var(--green),#a0ffe0,var(--green));
      background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text; animation: shimmer 4s linear infinite;
    }
    @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.8)} }
    @keyframes shimmer { to{background-position:-200% center} }
    @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }
    @keyframes orbFloat { 0%,100%{transform:translateY(0) scale(1)}40%{transform:translateY(-40px) scale(1.04)}70%{transform:translateY(18px) scale(.97)} }

    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       LOADER
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    #loader {
      position: fixed; inset: 0; z-index: 90000;
      background: #000;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      padding: clamp(20px,5vw,60px);
      transition: transform 1.1s cubic-bezier(.76,0,.24,1), opacity .4s ease .6s;
      overflow: hidden;
    }
    #loader::before {
      content:''; position:absolute; inset:0;
      background: repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,110,.008) 3px,rgba(0,255,110,.008) 4px);
      pointer-events:none;
    }
    #loader.out { transform: translateY(-100vh); opacity: 0; pointer-events: none; }
    #ldCanvas {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: min(500px, 92vw) !important;
      height: min(500px, 92vw) !important;
      opacity: 0.28;
      pointer-events: none;
      z-index: 0;
    }
    .ld-box {
      width: min(680px,94vw); text-align:center;
      display:flex; flex-direction:column; align-items:center; position:relative; z-index:1;
    }
    .ld-box::before,.ld-box::after {
      content:''; position:absolute; width:22px; height:22px; border-style:solid; border-color:rgba(0,255,110,.18);
    }
    .ld-box::before { top:-12px;left:-12px; border-width:2px 0 0 2px; }
    .ld-box::after  { bottom:-12px;right:-12px; border-width:0 2px 2px 0; }
    .ld-logo { font-family:var(--F1); font-size: clamp(72px,20vw,160px); font-weight:700; color: var(--green); line-height:1; letter-spacing:.06em; text-shadow: 0 0 60px rgba(0,255,110,.9), 0 0 180px rgba(0,255,110,.3); }
    .ld-name { font-family:var(--F1); font-size:clamp(10px,1.8vw,16px); letter-spacing:.5em; text-transform:uppercase; color:rgba(196,216,224,.4); margin:4px 0; }
    .ld-sub { font-family:var(--FM); font-size:9px; letter-spacing:.28em; color:rgba(0,255,110,.35); text-transform:uppercase; margin-bottom:24px; }
    .ld-term { width:100%; min-height:130px; text-align:left; padding:14px 18px; border-radius:10px; background:rgba(0,255,110,.02); border:1px solid rgba(0,255,110,.09); font-family:var(--FM); font-size:11px; color:rgba(0,255,110,.65); margin-bottom:16px; overflow:hidden; position:relative; }
    .ld-term::before { content:''; position:absolute; inset:0; background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,255,110,.005) 2px,rgba(0,255,110,.005) 4px); pointer-events:none; }
    .ld-line { display:block; margin-bottom:3px; }
    .ld-prog { width:100%;height:2px;border-radius:999px;background:rgba(0,255,110,.07);overflow:hidden; }
    .ld-fill { width:0%;height:100%;background:linear-gradient(90deg,var(--green),var(--cyan));box-shadow:0 0 10px var(--green);transition:width .18s ease; }
    .ld-stat { margin-top:6px; display:flex; justify-content:space-between; font-family:var(--FM); font-size:9px; letter-spacing:.14em; text-transform:uppercase; color:rgba(0,255,110,.35); }

    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       NAVBAR
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    #nav {
      position: fixed; top: var(--banner-h); left:0;right:0; z-index:10000;
      padding: 12px var(--gutter);
      background: rgba(3,6,11,.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(0,255,110,.05);
      transition: padding .3s ease, background .3s ease, top .4s var(--ease);
    }
    #nav.no-banner { top: 0; }
    #nav.scrolled { padding: 9px var(--gutter); background: rgba(3,6,11,.95); }
    .nav-i { max-width:var(--max); margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:16px; }
    .nav-brand { display:flex;align-items:center;gap:10px; font-family:var(--F1);font-weight:700;text-transform:uppercase;letter-spacing:.04em; font-size:15px; }
    .nav-mark { width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; background: rgba(0,255,110,.08); border:1px solid rgba(0,255,110,.2); font-family:var(--F1); font-size:12px; font-weight:700; color:var(--green); text-shadow: 0 0 12px var(--green); overflow:hidden; }
    .nav-mark img { width:100%; height:100%; object-fit:cover; object-position:22% center; display:block; }
    .nav-links { display:flex; align-items:center; gap:28px; font-family:var(--FM); font-size:10px; letter-spacing:.14em; text-transform:uppercase; }
    .nav-links a { color:rgba(196,216,224,.6); transition:color .25s; position:relative; }
    .nav-links a::after { content:''; position:absolute; bottom:-2px;left:0; width:0; height:1px; background:var(--green); box-shadow:0 0 6px var(--green); transition:width .3s ease; }
    .nav-links a:hover { color:var(--cream); }
    .nav-links a:hover::after { width:100%; }
    .nav-cta { padding:8px 20px; border-radius:999px; background:rgba(0,255,110,.08); border:1px solid rgba(0,255,110,.25); font-family:var(--F1); font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:var(--green); transition: background .25s, box-shadow .25s; }
    .nav-cta:hover { background:rgba(0,255,110,.15); box-shadow:0 0 20px rgba(0,255,110,.2); }
    .hamburger { display:none; flex-direction:column; gap:5px; width:24px; padding:4px 0; }
    .hamburger span { height:1.5px; background:var(--cream); border-radius:1px; transition:all .3s ease; }
    .mnav { position:fixed; inset:0; z-index:9999; background: rgba(3,6,11,.97); backdrop-filter:blur(20px); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:28px; opacity:0; pointer-events:none; transition:opacity .3s ease; }
    .mnav.open { opacity:1; pointer-events:all; }
    .mnav a { font-family:var(--F1); font-size:clamp(22px,6vw,36px); text-transform:uppercase; letter-spacing:.06em; color:rgba(196,216,224,.7); transition:color .2s; }
    .mnav a:hover { color:var(--green); }
    .mnav-close { position:absolute; top:24px; right:24px; font-family:var(--FM); font-size:11px; color:rgba(196,216,224,.4); letter-spacing:.1em; }

    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       HERO
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    #hero { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; padding: calc(100px + var(--banner-h)) var(--gutter) 60px; position: relative; overflow: hidden; }
    canvas#heroCanvas { position:absolute; inset:0; z-index:0; pointer-events:none; }
    .hero-orb { position:absolute; border-radius:50%; filter:blur(100px); pointer-events:none; z-index:0; animation: orbFloat 12s ease-in-out infinite; }
    .hero-orb-1 { width:700px;height:700px;top:-200px;left:-150px; background:radial-gradient(circle,rgba(0,255,110,.07) 0%,transparent 70%); }
    .hero-orb-2 { width:500px;height:500px;top:10%;right:-100px; background:radial-gradient(circle,rgba(0,212,255,.06) 0%,transparent 70%); animation-delay:-5s; }
    .hero-orb-3 { width:400px;height:400px;bottom:5%;left:30%; background:radial-gradient(circle,rgba(155,111,255,.06) 0%,transparent 70%); animation-delay:-9s; }
    .hero-grid { position:relative; z-index:2; max-width:var(--max); margin:0 auto; width:100%; display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:center; }
    .hero-pill { display:inline-flex; align-items:center; gap:10px; padding:6px 14px 6px 10px; border-radius:999px; margin-bottom:24px; font-family:var(--FM); font-size:10px; color:rgba(0,255,110,.8); }
    .hero-pill-dot { width:8px;height:8px;border-radius:50%; background:var(--green);box-shadow:0 0 10px var(--green); animation: pulse 2s ease-in-out infinite; }
    .hero-avatar-top { width:96px; height:96px; border-radius:50%; overflow:hidden; border:2px solid rgba(0,255,110,.45); box-shadow:0 0 18px rgba(0,255,110,.18); margin-bottom:24px; display:flex; align-items:center; justify-content:center; background: rgba(255,255,255,.04); }
    .hero-avatar-top img { width:100%; height:100%; object-fit:cover; object-position:22% center; display:block; }
    .about-avatar-circle { width:96px; height:96px; border-radius:50%; overflow:hidden; border:2px solid rgba(0,255,110,.45); box-shadow:0 0 15px rgba(0,255,110,.28); flex-shrink:0; }
    .about-avatar-circle img { width:100%; height:100%; object-fit:cover; object-position:22% center; display:block; }
    .hero-title { font-family:var(--F1); font-size:clamp(38px,6vw,76px); line-height:.95; text-transform:uppercase; margin-bottom:20px; letter-spacing:-.01em; animation: heroFlicker 10s ease-in-out infinite; }
    .hero-title .hi { display:block; background:linear-gradient(90deg,var(--green),#a0ffe0 35%,var(--cyan) 65%,#50ffaa); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation:shimmer 3s linear infinite; }
    @keyframes heroFlicker { 0%,97%,100%{opacity:1}98%{opacity:.88} }
    .hero-sub { font-family:var(--FM); font-size:11px; letter-spacing:.22em; text-transform:uppercase; color:rgba(0,212,255,.6); margin-bottom:20px; }
    .hero-desc { font-size:16px; line-height:1.75; color:rgba(196,216,224,.72); max-width:540px; margin-bottom:32px; }
    .hero-desc strong { color:var(--green); font-weight:500; }
    .hero-actions { display:flex; gap:14px; flex-wrap:wrap; margin-bottom:36px; }
    .btn-p { padding:13px 28px; border-radius:999px; background:var(--green); color:var(--ink); font-family:var(--F1); font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.08em; transition:transform .2s, box-shadow .2s; box-shadow: 0 0 24px rgba(0,255,110,.25); }
    .btn-p:hover { transform:translateY(-2px); box-shadow:0 8px 32px rgba(0,255,110,.4); }
    .btn-s { padding:13px 28px; border-radius:999px; border:1px solid rgba(0,255,110,.3); color:var(--green); font-family:var(--F1); font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.08em; transition:all .2s; }
    .btn-s:hover { background:rgba(0,255,110,.08); border-color:rgba(0,255,110,.6); box-shadow:0 0 20px rgba(0,255,110,.15); }
    .hero-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; }
    .hstat { border-radius:16px; padding:16px 14px; text-align:center; }
    .hstat-n { font-family:var(--F1); font-size:26px; font-weight:700; color:var(--green); line-height:1; }
    .hstat-l { font-family:var(--FM); font-size:9px; letter-spacing:.14em; text-transform:uppercase; color:rgba(196,216,224,.45); margin-top:4px; }
    .hero-right { position:relative; }
    .threat-term { border-radius:18px; overflow:hidden; box-shadow: 0 24px 80px rgba(0,0,0,.6), 0 0 1px rgba(0,255,110,.2); border:1px solid rgba(0,255,110,.12); }
    .term-bar { display:flex; align-items:center; gap:7px; padding:12px 16px; background:rgba(0,0,0,.6); border-bottom:1px solid rgba(0,255,110,.07); }
    .tdot { width:11px;height:11px;border-radius:50%; }
    .term-title { margin-left:10px; font-family:var(--FM); font-size:10px; letter-spacing:.1em; color:rgba(0,255,110,.35); }
    .term-body { padding:18px; min-height:220px; background:rgba(3,6,11,.9); font-family:var(--FM); font-size:11px; line-height:1.9; }
    .tl { display:block; }
    .tl-g { color:rgba(0,255,110,.75); } .tl-c { color:rgba(0,212,255,.7); } .tl-a { color:rgba(255,176,32,.8); } .tl-r { color:rgba(255,45,85,.8); } .tl-d { color:rgba(196,216,224,.3); }
    .tcursor { display:inline-block; width:7px;height:13px; background:var(--green); animation:blink 1s step-end infinite; vertical-align:middle; }

    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       SOC DASHBOARD
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    #soc { background: radial-gradient(ellipse at 50% 0%, rgba(0,102,255,.04) 0%, transparent 60%); }
    .soc-dashboard { border-radius:24px; overflow:hidden; border:1px solid rgba(0,102,255,.18); box-shadow:0 0 60px rgba(0,102,255,.08), 0 40px 100px rgba(0,0,0,.5); margin-top:48px; }
    .soc-topbar { display:flex; align-items:center; justify-content:space-between; padding:14px 20px; background:rgba(0,0,0,.5); border-bottom:1px solid rgba(0,102,255,.12); }
    .soc-topbar-l { display:flex; align-items:center; gap:14px; }
    .soc-topbar-dots { display:flex; gap:7px; }
    .soc-topbar-title { font-family:var(--FM); font-size:10px; letter-spacing:.16em; text-transform:uppercase; color:rgba(0,102,255,.65); }
    .soc-live-badge { display:flex; align-items:center; gap:7px; padding:4px 11px; border-radius:999px; background:rgba(0,255,110,.06); border:1px solid rgba(0,255,110,.18); font-family:var(--FM); font-size:9px; letter-spacing:.14em; text-transform:uppercase; color:var(--green); }
    .soc-live-dot { width:6px;height:6px;border-radius:50%; background:var(--green); box-shadow:0 0 8px var(--green); animation:pulse 2s ease-in-out infinite; }
    .soc-time { font-family:var(--FM); font-size:10px; color:rgba(196,216,224,.4); letter-spacing:.08em; }
    .soc-grid { display:grid; grid-template-columns:1fr 1fr 1fr; grid-template-rows: auto auto; gap:1px; background:rgba(0,102,255,.06); }
    .soc-stats { border-radius: 0 0 0 23px; } .soc-alerts { border-radius: 0 23px 23px 0; }
    .soc-cell { background:rgba(7,12,21,.9); padding:18px 20px 20px; }
    .soc-cell-title { font-family:var(--FM); font-size:8px; letter-spacing:.2em; text-transform:uppercase; color:rgba(0,212,255,.45); margin-bottom:14px; display:flex; align-items:center; gap:8px; }
    .soc-cell-title::before { content:''; width:16px;height:1px; background:rgba(0,212,255,.3); }
    .soc-map { grid-column:1/3; grid-row:1; min-height:200px; position:relative; }
    #threatMap { width:100%; height:200px; display:block; }
    .soc-alerts { grid-column:3/4; grid-row:1/3; overflow:hidden; padding-bottom:20px; }
    .alert-feed { max-height:360px; overflow-y:auto; }
    .alert-feed::-webkit-scrollbar { width:2px; }
    .alert-feed::-webkit-scrollbar-thumb { background:rgba(0,212,255,.2); }
    .alert-item { display:flex; flex-direction:column; gap:3px; padding:10px 0; border-bottom:1px solid rgba(255,255,255,.04); animation: alertIn .4s var(--ease) both; }
    @keyframes alertIn { from{opacity:0;transform:translateX(12px)} to{opacity:1;transform:none} }
    .alert-top { display:flex; align-items:center; gap:8px; }
    .alert-sev { width:6px;height:6px;border-radius:50%;flex-shrink:0; }
    .sev-c { background:var(--red);box-shadow:0 0 6px var(--red); } .sev-h { background:var(--amber);box-shadow:0 0 6px var(--amber); } .sev-m { background:var(--cyan);box-shadow:0 0 6px var(--cyan); } .sev-l { background:rgba(196,216,224,.3); }
    .alert-name { font-family:var(--FM); font-size:10px; color:var(--cream); flex:1; }
    .alert-time { font-family:var(--FM); font-size:8px; color:rgba(196,216,224,.3); flex-shrink:0; }
    .alert-detail { font-family:var(--FM); font-size:9px; color:rgba(196,216,224,.4); padding-left:14px; }
    .alert-mitre { font-family:var(--FM); font-size:8px; padding:2px 7px; border-radius:3px; background:rgba(0,212,255,.06); border:1px solid rgba(0,212,255,.14); color:rgba(0,212,255,.65); align-self:flex-start; margin-left:14px; }
    .soc-stats { grid-column:1/3; grid-row:2; padding-bottom:0; }
    .soc-stats-row { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; }
    .soc-stat { border-radius:10px; padding:16px 14px 14px; background:rgba(255,255,255,.02); border:1px solid rgba(0,212,255,.07); overflow:hidden; }
    .soc-stat-n { font-family:var(--F1); font-size:24px; font-weight:700; line-height:1; }
    .soc-stat-l { font-family:var(--FM); font-size:7px; letter-spacing:.08em; text-transform:uppercase; color:rgba(196,216,224,.38); margin-top:4px; white-space:normal; line-height:1.4; }
    .soc-chart-area { height:72px; position:relative; margin-top:10px; overflow:visible; }
    .soc-chart-area canvas { display:block; width:100%; height:100%; }

    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       PROJECTS
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    .proj-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:44px; }
    .proj-card { border-radius:20px; display:flex; flex-direction:column; overflow:hidden; position:relative; background:rgba(255,255,255,.02); border:1px solid rgba(255,255,255,.05); backdrop-filter:blur(12px); transition:transform .4s var(--ease), border-color .3s, box-shadow .3s; transform-style:preserve-3d; will-change:transform; }
    .proj-card:hover { transform:translateY(-8px) scale(1.01); }
    .pc-live:hover { border-color:rgba(0,255,110,.28); box-shadow:0 30px 70px rgba(0,0,0,.6), 0 0 40px rgba(0,255,110,.1); }
    .pc-wip:hover { border-color:rgba(255,176,32,.28); box-shadow:0 30px 70px rgba(0,0,0,.6), 0 0 40px rgba(255,176,32,.08); }
    .pc-winner:hover { border-color:rgba(255,208,96,.45); box-shadow:0 30px 70px rgba(0,0,0,.6), 0 0 60px rgba(255,208,96,.18); }
    .pc-purple:hover { border-color:rgba(155,111,255,.38); box-shadow:0 30px 70px rgba(0,0,0,.6), 0 0 40px rgba(155,111,255,.12); }
    .pc-winner { border-color: rgba(255,208,96,.2); }
    .pc-winner::before { content: ''; position: absolute; inset: -1px; z-index: -1; border-radius: 20px; background: linear-gradient(135deg, rgba(255,208,96,.15), rgba(255,176,32,.08), rgba(255,208,96,.15)); background-size: 300% 300%; animation: winnerGlow 4s ease infinite; }
    @keyframes winnerGlow { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
    .winner-badge { position: absolute; top: 10px; right: 10px; z-index: 10; display: flex; align-items: center; gap: 6px; padding: 5px 10px; border-radius: 999px; background: rgba(255,208,96,.12); border: 1px solid rgba(255,208,96,.35); font-family: var(--FM); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--gold); backdrop-filter: blur(12px); box-shadow: 0 0 16px rgba(255,208,96,.15); }
    .winner-trophy { font-size: 11px; animation: trophyPulse 2.5s ease-in-out infinite; }
    .innov-tag { display: inline-flex; align-items: center; gap: 7px; padding: 4px 10px; border-radius: 6px; margin-bottom: 10px; font-family: var(--FM); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; background: rgba(255,208,96,.07); border: 1px solid rgba(255,208,96,.2); color: var(--gold); }
    .innov-tag-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--gold); box-shadow: 0 0 6px var(--gold); }
    .proj-thumb { height:140px; position:relative; flex-shrink:0; overflow:hidden; }
    .proj-canvas { display:block; width:100%; height:100%; }
    .proj-accent { height:3px; flex-shrink:0; }
    .pc-live .proj-accent { background:linear-gradient(90deg,var(--green),transparent 80%); }
    .pc-wip .proj-accent { background:linear-gradient(90deg,var(--amber),transparent 80%); }
    .pc-winner .proj-accent { background:linear-gradient(90deg,var(--gold),var(--amber) 40%,transparent 80%); }
    .pc-purple .proj-accent { background:linear-gradient(90deg,var(--purple),transparent 80%); }
    .proj-body { padding:20px 22px 24px; display:flex; flex-direction:column; flex:1; }
    .proj-meta { display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; }
    .proj-status { display:inline-flex; align-items:center; gap:6px; padding:4px 10px; border-radius:999px; font-family:var(--FM); font-size:9px; letter-spacing:.12em; text-transform:uppercase; }
    .ps-dot { width:5px;height:5px;border-radius:50%; }
    .ps-live { background:rgba(0,255,110,.07); border:1px solid rgba(0,255,110,.2); color:var(--green); }
    .ps-live .ps-dot { background:var(--green); box-shadow:0 0 5px var(--green); animation:pulse 2s ease-in-out infinite; }
    .ps-wip { background:rgba(255,176,32,.07); border:1px solid rgba(255,176,32,.2); color:var(--amber); }
    .ps-wip .ps-dot { background:var(--amber); }
    .ps-concluded { background:rgba(255,208,96,.07); border:1px solid rgba(255,208,96,.25); color:var(--gold); }
    .ps-concluded .ps-dot { background:var(--gold); box-shadow:0 0 5px var(--gold); }
    .ps-purple { background:rgba(155,111,255,.07); border:1px solid rgba(155,111,255,.2); color:var(--purple); }
    .ps-purple .ps-dot { background:var(--purple); box-shadow:0 0 5px var(--purple); animation:pulse 2s ease-in-out infinite; }
    .proj-num { font-family:var(--FM); font-size:9px; color:rgba(196,216,224,.18); }
    .proj-enc { font-family:var(--FM); font-size:10px; color:rgba(0,255,110,.3); margin-bottom:8px; }
    .pc-wip .proj-enc { color:rgba(255,176,32,.35); } .pc-winner .proj-enc { color:rgba(255,208,96,.45); } .pc-purple .proj-enc { color:rgba(155,111,255,.45); }
    .proj-title { font-family:var(--F1); font-size:18px; font-weight:700; text-transform:uppercase; margin-bottom:8px; line-height:1.15; }
    .proj-story { font-size:12.5px; line-height:1.65; color:rgba(196,216,224,.55); margin-bottom:14px; flex:1; }
    .proj-story .ps-label { display:block; font-family:var(--FM); font-size:8px; letter-spacing:.18em; text-transform:uppercase; color:rgba(0,212,255,.45); margin-bottom:2px; margin-top:8px; }
    .proj-story .ps-label:first-child { margin-top:0; }
    .proj-tags { display:flex; flex-wrap:wrap; gap:5px; margin-bottom:16px; }
    .proj-tag { padding:3px 9px; border-radius:4px; font-family:var(--FM); font-size:9px; letter-spacing:.08em; text-transform:uppercase; background:rgba(196,216,224,.03); border:1px solid rgba(196,216,224,.08); color:rgba(196,216,224,.38); }
    .proj-tag.hl { background:rgba(0,255,110,.06); border-color:rgba(0,255,110,.2); color:rgba(0,255,110,.8); }
    .pc-wip .proj-tag.hl { background:rgba(255,176,32,.06); border-color:rgba(255,176,32,.2); color:rgba(255,176,32,.85); }
    .pc-winner .proj-tag.hl { background:rgba(255,208,96,.07); border-color:rgba(255,208,96,.25); color:rgba(255,208,96,.9); }
    .pc-purple .proj-tag.hl { background:rgba(155,111,255,.07); border-color:rgba(155,111,255,.25); color:rgba(155,111,255,.9); }
    .proj-hr { height:1px; background:rgba(255,255,255,.04); margin-bottom:14px; }
    .proj-link-row { display:flex; flex-wrap:wrap; gap:12px; }
    .proj-link { display:inline-flex; align-items:center; gap:7px; font-family:var(--FM); font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:var(--green); transition:gap .2s; }
    .pc-wip .proj-link { color:var(--amber); } .pc-winner .proj-link { color:var(--gold); } .pc-purple .proj-link { color:var(--purple); }
    .proj-link:hover { gap:14px; }
    .proj-link.secondary { color: rgba(0,212,255,.7); font-size: 9px; }
    .proj-link.secondary:hover { gap: 10px; color: var(--cyan); }

    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       SKILLS
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    .skills-tabs { display:flex; flex-wrap:wrap; gap:8px; margin:32px 0 0; }
    .sk-tab { padding:7px 16px; border-radius:999px; font-family:var(--FM); font-size:9px; letter-spacing:.14em; text-transform:uppercase; color:rgba(196,216,224,.5); background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.07); transition:all .2s; cursor:pointer; }
    .sk-tab:hover { color:var(--cream); border-color:rgba(0,255,110,.2); }
    .sk-tab.active { color:var(--green); background:rgba(0,255,110,.08); border-color:rgba(0,255,110,.25); box-shadow:0 0 16px rgba(0,255,110,.08); }
    .sk-panel { display:none; animation:fadeIn .4s var(--ease) both; }
    .sk-panel.active { display:block; }
    @keyframes fadeIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
    .sk-cloud { display:flex; flex-wrap:wrap; gap:9px; margin:24px 0 0; }
    .sk-tag { padding:7px 14px; border-radius:8px; font-family:var(--FM); font-size:10px; letter-spacing:.08em; transition:all .25s; cursor:default; opacity:0; transform:translateY(8px); }
    .sk-tag.appeared { opacity:1; transform:none; }
    .tag-sec { color:rgba(0,255,110,.8); background:rgba(0,255,110,.05); border:1px solid rgba(0,255,110,.15); }
    .tag-sec:hover { background:rgba(0,255,110,.12); box-shadow:0 0 16px rgba(0,255,110,.1); }
    .tag-cloud { color:rgba(0,212,255,.8); background:rgba(0,212,255,.05); border:1px solid rgba(0,212,255,.15); }
    .tag-cloud:hover { background:rgba(0,212,255,.12); }
    .tag-ai { color:rgba(255,176,32,.8); background:rgba(255,176,32,.05); border:1px solid rgba(255,176,32,.15); }
    .tag-ai:hover { background:rgba(255,176,32,.12); }
    .tag-dev { color:rgba(155,111,255,.85); background:rgba(155,111,255,.05); border:1px solid rgba(155,111,255,.15); }
    .tag-dev:hover { background:rgba(155,111,255,.12); }
    .tag-net { color:rgba(255,100,180,.8); background:rgba(255,100,180,.05); border:1px solid rgba(255,100,180,.15); }
    .tag-net:hover { background:rgba(255,100,180,.12); }
    .tag-db  { color:rgba(0,255,180,.8); background:rgba(0,255,180,.05); border:1px solid rgba(0,255,180,.15); }
    .tag-hw  { color:rgba(224,64,251,.75); background:rgba(224,64,251,.05); border:1px solid rgba(224,64,251,.15); }
    .tag-design { color:rgba(255,255,160,.75); background:rgba(255,255,100,.04); border:1px solid rgba(255,255,100,.12); }
    .prof-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:32px; }
    .prof-card { padding:26px; border-radius:18px; }
    .prof-lbl { font-family:var(--FM);font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:rgba(0,255,110,.32);margin-bottom:16px; }
    .prof-bar { margin-bottom:12px; }
    .prof-bar:last-child { margin-bottom:0; }
    .prof-bh { display:flex;justify-content:space-between;font-family:var(--FM);font-size:10px;margin-bottom:5px; }
    .prof-track { height:6px;border-radius:999px;background:rgba(255,255,255,.04);overflow:hidden; }
    .prof-fill { height:100%;border-radius:999px;width:0%;transition:width 1.2s var(--ease); }

    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       ABOUT / EXPERIENCE / CERTS
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:44px; align-items:start; }
    .about-id { padding:28px; border-radius:20px; }
    .id-field { margin-bottom:16px; }
    .id-key { font-family:var(--FM);font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:rgba(0,255,110,.38);margin-bottom:3px; }
    .id-val { font-family:var(--F1);font-size:16px; }
    .id-val.highlight { color:var(--green); }
    .about-profile { padding:32px; border-radius:20px; }
    .about-hdr { font-family:var(--FM);font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:rgba(0,255,110,.32);margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid rgba(0,255,110,.06); }
    .about-p { color:rgba(196,216,224,.72);margin-bottom:14px;line-height:1.75; }
    .about-p strong { color:var(--green); font-weight:500; }
    .about-specs { display:flex;flex-wrap:wrap;gap:8px;margin-top:18px; }
    .about-spec { padding:5px 13px;border-radius:999px;border:1px solid rgba(0,255,110,.12);background:rgba(0,255,110,.04);font-family:var(--FM);font-size:10px;color:rgba(0,255,110,.75); }
    .about-hash { margin-top:20px;padding-top:12px;border-top:1px solid rgba(0,255,110,.05);font-family:var(--FM);font-size:9px;color:rgba(0,255,110,.18); }
    .timeline { position:relative; margin-top:44px; }
    .timeline::before { content:''; position:absolute; left:17px; top:6px; bottom:6px; width:1px; background:linear-gradient(180deg,rgba(0,255,110,.2),rgba(0,212,255,.15),rgba(0,255,110,.05)); }
    .tl-item { display:flex; gap:28px; margin-bottom:28px; }
    .tl-node { flex-shrink:0; width:35px; display:flex; flex-direction:column; align-items:center; padding-top:4px; }
    .tl-dot { width:14px;height:14px;border-radius:50%;z-index:1; }
    .tl-dot-g { background:var(--green);box-shadow:0 0 12px var(--green); } .tl-dot-c { background:var(--cyan);box-shadow:0 0 12px var(--cyan); }
    .tl-card { flex:1; border-radius:18px; padding:24px 28px; }
    .tl-active { display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;margin-bottom:12px;font-family:var(--FM);font-size:8px;letter-spacing:.14em;text-transform:uppercase; }
    .tl-active.green { color:var(--green);background:rgba(0,255,110,.07);border:1px solid rgba(0,255,110,.18); }
    .tl-active.cyan { color:var(--cyan);background:rgba(0,212,255,.07);border:1px solid rgba(0,212,255,.18); }
    .tl-active-dot { width:5px;height:5px;border-radius:50%; animation:pulse 2s ease-in-out infinite; }
    .tl-head { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px; gap:16px; }
    .tl-role { font-family:var(--F1);font-size:20px;text-transform:uppercase;margin-bottom:3px; }
    .tl-co { font-family:var(--FM);font-size:10px;letter-spacing:.08em; }
    .tl-co.green { color:rgba(0,255,110,.55); } .tl-co.cyan { color:rgba(0,212,255,.55); }
    .tl-dates { text-align:right;flex-shrink:0; }
    .tl-period { font-family:var(--FM);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:rgba(196,216,224,.5); }
    .tl-loc { font-family:var(--FM);font-size:9px;color:rgba(196,216,224,.3);margin-top:2px; }
    .tl-desc { color:rgba(196,216,224,.7);margin-bottom:12px;line-height:1.7;font-size:14px; }
    .tl-tags { display:flex;flex-wrap:wrap;gap:7px; }
    .tl-tag { padding:4px 11px;border-radius:5px;font-family:var(--FM);font-size:9px; }
    .tl-tag.green { background:rgba(0,255,110,.06);border:1px solid rgba(0,255,110,.17);color:rgba(0,255,110,.8); }
    .tl-tag.cyan  { background:rgba(0,212,255,.06);border:1px solid rgba(0,212,255,.17);color:rgba(0,212,255,.8); }
    .certs-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:36px; }
    .cert-card { border-radius:16px; padding:22px; background:rgba(255,255,255,.02); border:1px solid rgba(0,255,110,.07); backdrop-filter:blur(12px); display:flex; flex-direction:column; transition:transform .3s var(--ease), box-shadow .3s, border-color .3s; transform-style:preserve-3d; }
    .cert-card:hover { transform:translateY(-4px); box-shadow:0 16px 48px rgba(0,0,0,.4); }
    .cert-dot { width:9px;height:9px;border-radius:50%;margin-bottom:14px; }
    .cert-issuer { font-family:var(--FM);font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:rgba(0,255,110,.38);margin-bottom:6px; }
    .cert-title { font-family:var(--F1);font-size:14px;text-transform:uppercase;margin-bottom:5px;line-height:1.25;flex:1; }
    .cert-date { font-family:var(--FM);font-size:9px;color:rgba(196,216,224,.3);margin-bottom:12px; }
    .cert-lnk { display:inline-flex;align-items:center;gap:6px;font-family:var(--FM);font-size:9px;letter-spacing:.1em;text-transform:uppercase;padding:5px 12px;border-radius:5px;align-self:flex-start;transition:background .2s, box-shadow .2s; }
    .cl-g { color:var(--green);background:rgba(0,255,110,.06);border:1px solid rgba(0,255,110,.15); }
    .cl-g:hover { background:rgba(0,255,110,.12);box-shadow:0 0 10px rgba(0,255,110,.15); }
    .cl-c { color:var(--cyan);background:rgba(0,212,255,.06);border:1px solid rgba(0,212,255,.15); }
    .cl-c:hover { background:rgba(0,212,255,.12); }
    .cl-a { color:var(--amber);background:rgba(255,176,32,.06);border:1px solid rgba(255,176,32,.15); }
    .cl-a:hover { background:rgba(255,176,32,.12); }
    .cl-p { color:var(--purple);background:rgba(155,111,255,.06);border:1px solid rgba(155,111,255,.15); }
    .cl-p:hover { background:rgba(155,111,255,.12); }

    /* Geolocation SOC alert customization */
    .alert-item.connection-detected {
      background: rgba(0, 212, 255, 0.04) !important;
      border: 1px solid rgba(0, 212, 255, 0.28) !important;
      animation: alertPulseCyan 2.5s infinite ease-in-out;
    }
    @keyframes alertPulseCyan {
      0%, 100% { border-color: rgba(0, 212, 255, 0.25); box-shadow: 0 0 8px rgba(0, 212, 255, 0.1); }
      50% { border-color: rgba(0, 212, 255, 0.55); box-shadow: 0 0 18px rgba(0, 212, 255, 0.22); }
    }

    /* Certification hover tooltips */
    .cert-card { position: relative; overflow: visible !important; }
    .cert-tooltip {
      position: absolute;
      bottom: 110%;
      left: 50%;
      transform: translateX(-50%) translateY(10px) scale(0.95);
      width: 270px;
      padding: 18px;
      background: rgba(9, 20, 34, 0.96);
      border: 1px solid rgba(196, 216, 224, 0.15);
      border-radius: 14px;
      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.65), 0 0 20px rgba(0, 255, 110, 0.05);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      z-index: 100;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 10px;
    }
    .cert-card:hover .cert-tooltip {
      opacity: 1;
      transform: translateX(-50%) translateY(0) scale(1);
      pointer-events: auto;
    }
    .cert-tooltip::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 6px;
      border-style: solid;
      border-color: rgba(9, 20, 34, 0.96) transparent transparent transparent;
    }
    .ct-header { display: flex; justify-content: space-between; width: 100%; font-size: 9px; font-family: var(--FM); color: rgba(196, 216, 224, 0.4); text-transform: uppercase; border-bottom: 1px solid rgba(196,216,224,0.1); padding-bottom: 6px; }
    .ct-issuer { color: var(--cream); font-weight: 600; }
    .ct-status { color: var(--green); letter-spacing: 0.1em; }
    .ct-badge-container { padding: 4px 0; display: flex; align-items: center; justify-content: center; }
    .ct-badge-svg { filter: drop-shadow(0 0 8px rgba(0, 255, 110, 0.25)); animation: pulseBadge 3s ease-in-out infinite; }
    @keyframes pulseBadge {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    .ct-desc { font-size: 11px; color: rgba(196, 216, 224, 0.65); line-height: 1.45; font-family: var(--F2); }
    .ct-verify-btn {
      width: 100%;
      padding: 7px 12px;
      border-radius: 6px;
      font-family: var(--FM);
      font-size: 9px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: all 0.2s ease;
      margin-top: 4px;
      text-align: center;
    }
    .ct-verify-btn.btn-g { color: var(--green); background: rgba(0, 255, 110, 0.08); border: 1px solid rgba(0, 255, 110, 0.2); }
    .ct-verify-btn.btn-g:hover { background: rgba(0, 255, 110, 0.16); box-shadow: 0 0 12px rgba(0, 255, 110, 0.3); }
    .ct-verify-btn.btn-c { color: var(--cyan); background: rgba(0, 212, 255, 0.08); border: 1px solid rgba(0, 212, 255, 0.2); }
    .ct-verify-btn.btn-c:hover { background: rgba(0, 212, 255, 0.16); box-shadow: 0 0 12px rgba(0, 212, 255, 0.3); }
    .ct-verify-btn.btn-a { color: var(--amber); background: rgba(255, 176, 32, 0.08); border: 1px solid rgba(255, 176, 32, 0.2); }
    .ct-verify-btn.btn-a:hover { background: rgba(255, 176, 32, 0.16); box-shadow: 0 0 12px rgba(255, 176, 32, 0.3); }
    .ct-verify-btn.btn-p { color: var(--purple); background: rgba(155, 111, 255, 0.08); border: 1px solid rgba(155, 111, 255, 0.2); }
    .ct-verify-btn.btn-p:hover { background: rgba(155, 111, 255, 0.16); box-shadow: 0 0 12px rgba(155, 111, 255, 0.3); }

    /* 3D Skills Graph Layout */
    .skills-graph-container {
      margin-top: 36px;
      padding: 24px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(0, 255, 110, 0.08);
      border-radius: 20px;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      display: flex;
      flex-direction: column;
      gap: 16px;
      position: relative;
    }
    .skills-graph-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .sg-title {
      font-family: var(--F1);
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--green);
      text-shadow: 0 0 10px rgba(0, 255, 110, 0.2);
    }
    .sg-subtitle {
      font-size: 11px;
      color: rgba(196, 216, 224, 0.5);
      font-family: var(--FM);
    }
    .skills-graph-canvas-wrap {
      width: 100%;
      height: 380px;
      border-radius: 12px;
      background: rgba(0, 0, 0, 0.35);
      border: 1px solid rgba(196, 216, 224, 0.05);
      overflow: hidden;
      position: relative;
    }
    #skills3dCanvas {
      width: 100% !important;
      height: 100% !important;
      outline: none;
    }
    .sg-label {
      position: absolute;
      top: 0; left: 0;
      padding: 5px 12px;
      background: rgba(3, 6, 11, 0.88);
      border: 1px solid rgba(0, 255, 110, 0.3);
      border-radius: 6px;
      font-family: var(--FM);
      font-size: 10px;
      color: var(--green);
      white-space: nowrap;
      pointer-events: auto;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(0, 255, 110, 0.15);
      transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    }
    .sg-label:hover {
      background: rgba(0, 255, 110, 0.15);
      border-color: var(--green);
      box-shadow: 0 0 15px rgba(0, 255, 110, 0.45);
    }
    .sg-label.cyan { border-color: rgba(0, 212, 255, 0.3); color: var(--cyan); }
    .sg-label.cyan:hover { background: rgba(0, 212, 255, 0.15); border-color: var(--cyan); box-shadow: 0 0 15px rgba(0, 212, 255, 0.45); }
    .sg-label.amber { border-color: rgba(255, 176, 32, 0.3); color: var(--amber); }
    .sg-label.amber:hover { background: rgba(255, 176, 32, 0.15); border-color: var(--amber); box-shadow: 0 0 15px rgba(255, 176, 32, 0.45); }
    .sg-label.purple { border-color: rgba(155, 111, 255, 0.3); color: var(--purple); }
    .sg-label.purple:hover { background: rgba(155, 111, 255, 0.15); border-color: var(--purple); box-shadow: 0 0 15px rgba(155, 111, 255, 0.45); }
    .sg-label.red { border-color: rgba(255, 45, 85, 0.3); color: var(--red); }
    .sg-label.red:hover { background: rgba(255, 45, 85, 0.15); border-color: var(--red); box-shadow: 0 0 15px rgba(255, 45, 85, 0.45); }

    /* Voice Navigation Float styles */
    .voice-nav-toggle {
      position: fixed;
      bottom: 24px;
      left: 24px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(9, 20, 34, 0.85);
      border: 1px solid rgba(0, 255, 110, 0.25);
      color: var(--green);
      box-shadow: 0 0 16px rgba(0, 255, 110, 0.15);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      z-index: 10001;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
      cursor: pointer;
    }
    .voice-nav-toggle:hover {
      transform: scale(1.08);
      box-shadow: 0 0 24px rgba(0, 255, 110, 0.35);
      border-color: var(--green);
    }
    .voice-nav-toggle.listening {
      border-color: var(--red);
      color: var(--red);
      box-shadow: 0 0 24px rgba(255, 45, 85, 0.45);
    }
    .vn-pulse {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      border-radius: 50%;
      border: 2px solid var(--green);
      opacity: 0;
      pointer-events: none;
      box-sizing: border-box;
    }
    .voice-nav-toggle.listening .vn-pulse {
      border-color: var(--red);
      animation: vnPulseRingActive 1.2s linear infinite;
    }
    @keyframes vnPulseRingActive {
      0% { transform: scale(1); opacity: 0.8; }
      100% { transform: scale(1.8); opacity: 0; }
    }
    .voice-nav-status {
      position: fixed;
      bottom: 80px;
      left: 24px;
      padding: 6px 14px;
      background: rgba(3, 6, 11, 0.9);
      border: 1px solid rgba(196, 216, 224, 0.15);
      border-radius: 8px;
      font-family: var(--FM);
      font-size: 10px;
      color: rgba(196, 216, 224, 0.6);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 10001;
      opacity: 0;
      transform: translateY(10px);
      pointer-events: none;
      transition: all 0.3s var(--ease);
    }
    .voice-nav-status.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       INTERACTIVE TERMINAL
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    #terminal-sec { padding:80px 0; background:radial-gradient(ellipse at 50% 50%, rgba(0,255,110,.025) 0%, transparent 70%); }
    .iterm-wrap { max-width:860px; margin:44px auto 0; border-radius:20px; overflow:hidden; border:1px solid rgba(0,255,110,.15); box-shadow:0 0 60px rgba(0,255,110,.06), 0 40px 80px rgba(0,0,0,.5); }
    .iterm-bar { display:flex;align-items:center;gap:8px;padding:12px 16px;background:rgba(0,0,0,.6);border-bottom:1px solid rgba(0,255,110,.08); }
    .iterm-title { margin-left:10px;font-family:var(--FM);font-size:10px;letter-spacing:.12em;color:rgba(0,255,110,.3); }
    .iterm-body { background:rgba(3,6,11,.95);padding:20px 22px;min-height:260px;max-height:380px;overflow-y:auto; }
    .iterm-body::-webkit-scrollbar { width:2px; }
    .iterm-body::-webkit-scrollbar-thumb { background:rgba(0,255,110,.2); }
    .iterm-out { font-family:var(--FM);font-size:12px;line-height:1.9;margin-bottom:16px; }
    .io-line { display:block; }
    .io-g { color:rgba(0,255,110,.8); } .io-c { color:rgba(0,212,255,.75); } .io-d { color:rgba(196,216,224,.35); } .io-w { color:rgba(255,176,32,.75); } .io-r { color:rgba(255,45,85,.75); }
    .iterm-input-row { display:flex;align-items:center;gap:10px;padding:10px 22px 18px;border-top:1px solid rgba(0,255,110,.06);background:rgba(3,6,11,.95); }
    .iterm-prompt { font-family:var(--FM);font-size:12px;color:var(--green);white-space:nowrap; }
    .iterm-input { flex:1;background:none;border:none;outline:none;font-family:var(--FM);font-size:12px;color:var(--cream);caret-color:var(--green); }
    .iterm-cmds { display:flex;flex-wrap:wrap;gap:8px;padding:12px 22px;border-top:1px solid rgba(0,255,110,.04);background:rgba(0,0,0,.3); }
    .icmd { padding:4px 12px;border-radius:5px;font-family:var(--FM);font-size:9px;letter-spacing:.1em;background:rgba(0,255,110,.05);border:1px solid rgba(0,255,110,.12);color:rgba(0,255,110,.65);cursor:pointer;transition:all .2s; }
    .icmd:hover { background:rgba(0,255,110,.1);color:var(--green); }

    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       CONTACT
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    .contact-grid { display:grid;grid-template-columns:1.1fr .9fr;gap:18px;margin-top:36px; }
    .contact-term { border-radius:20px;overflow:hidden; }
    .cf-wrap { border-radius:20px;overflow:hidden; }
    .cf-bar { display:flex;align-items:center;gap:8px;padding:13px 18px;background:rgba(0,0,0,.4);border-bottom:1px solid rgba(0,255,110,.06); }
    .cf-title-txt { margin-left:10px;font-family:var(--FM);font-size:10px;letter-spacing:.12em;color:rgba(0,255,110,.28); }
    .cf-body { padding:26px; }
    .cf-row { display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px; }
    .cf-field { display:flex;flex-direction:column;gap:6px; }
    .cf-lbl { font-family:var(--FM);font-size:8px;letter-spacing:.18em;text-transform:uppercase;color:rgba(0,255,110,.4); }
    .cf-input, .cf-area { background:rgba(0,0,0,.3); border:1px solid rgba(0,255,110,.1); border-radius:8px; padding:11px 14px; font-family:var(--FM); font-size:12px; color:var(--cream); outline:none; transition:border-color .2s, box-shadow .2s; }
    .cf-input:focus, .cf-area:focus { border-color:rgba(0,255,110,.35); box-shadow:0 0 16px rgba(0,255,110,.07); }
    .cf-area { resize:vertical; min-height:110px; }
    .cf-submit { width:100%; padding:13px; background:rgba(0,255,110,.1); border:1px solid rgba(0,255,110,.25); border-radius:10px; color:var(--green); font-family:var(--F1); font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; transition:all .25s; margin-top:4px; }
    .cf-submit:hover { background:rgba(0,255,110,.18); box-shadow:0 0 24px rgba(0,255,110,.15); }
    .cf-status { font-family:var(--FM);font-size:10px;margin-top:8px;letter-spacing:.06em; }
    .cf-status.ok { color:var(--green); } .cf-status.err { color:var(--red); }
    .contact-links { display:grid;gap:12px; }
    .cl-card { border-radius:16px;padding:20px;display:block;transition:transform .25s, box-shadow .25s; }
    .cl-card:hover { transform:translateY(-3px); box-shadow:0 12px 40px rgba(0,0,0,.4); }
    .cl-ch { font-family:var(--FM);font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:rgba(0,255,110,.32);margin-bottom:6px; }
    .cl-name { font-family:var(--F1);font-size:18px;text-transform:uppercase;margin-bottom:4px; }
    .cl-detail { color:rgba(196,216,224,.55);font-size:13px; }

    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       FOOTER
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    footer { border-top:1px solid rgba(0,255,110,.05); padding:36px var(--gutter); position:relative; overflow:hidden; }
    footer::before { content:''; position:absolute; inset:0; background: repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(0,255,110,.012) 60px,rgba(0,255,110,.012) 61px); pointer-events:none; }
    .footer-i { max-width:var(--max);margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:20px;position:relative;z-index:1; }
    .footer-brand { font-family:var(--F1);font-size:20px;font-weight:700;color:var(--green);text-shadow:0 0 20px var(--green); }
    .footer-copy { font-family:var(--FM);font-size:10px;color:rgba(196,216,224,.3);letter-spacing:.1em; }
    .footer-status { display:flex;align-items:center;gap:7px;font-family:var(--FM);font-size:9px;color:rgba(0,255,110,.4);letter-spacing:.1em;margin-top:4px; }
    .footer-status-dot { width:6px;height:6px;border-radius:50%;background:var(--green);box-shadow:0 0 8px var(--green);animation:pulse 2s ease-in-out infinite; }
    .footer-links { display:flex;gap:20px; }
    .footer-link { font-family:var(--FM);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(196,216,224,.4);transition:color .2s; }
    .footer-link:hover { color:var(--green); }

    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       BACKGROUND CANVAS
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    #bg-canvas { position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.4; }

    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       RESPONSIVE
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    @media(max-width:1024px) {
      .proj-grid { grid-template-columns:repeat(2,1fr); }
      .certs-grid { grid-template-columns:repeat(2,1fr); }
      .soc-grid { grid-template-columns:1fr 1fr; }
      .soc-map { grid-column:1/2; }
      .soc-alerts { grid-column:2/3; grid-row:1/3; }
      .soc-stats { grid-column:1/2; }
    }
    @media(max-width:800px) {
      .hero-grid { grid-template-columns:1fr; }
      .hero-right { display:none; }
      .hero-stats { grid-template-columns:repeat(2,1fr); }
      .about-grid { grid-template-columns:1fr; }
      .contact-grid { grid-template-columns:1fr; }
      .prof-grid { grid-template-columns:1fr; }
      .nav-links,.nav-cta { display:none; }
      .hamburger { display:flex; }
      .banner-ticker { font-size: 10px; }
    }
    @media(max-width:640px) {
      .proj-grid { grid-template-columns:1fr; }
      .certs-grid { grid-template-columns:1fr; }
      .soc-grid { grid-template-columns:1fr; }
      .soc-map,.soc-alerts,.soc-stats { grid-column:auto; grid-row:auto; }
      .soc-stats-row { grid-template-columns:repeat(2,1fr); }
      .hero-stats { grid-template-columns:repeat(2,1fr); }
      .tl-head { flex-direction:column; gap:8px; }
      .tl-dates { text-align:left; }
      .cf-row { grid-template-columns:1fr; }
      .banner-badge-wrap { padding: 0 10px 0 12px; }
      .banner-breaking { display:none; }
    }
    /* ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ
       CINEMATIC PORTFOLIO UPGRADES
    ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ */
    /* DEFCON Active Emergency Mode Theme Overrides */
    body.defcon-active {
      --green: #ff2d55 !important;
      --cyan: #ff7600 !important;
      --blue: #d00000 !important;
      --purple: #800000 !important;
    }
    body.defcon-active ::-webkit-scrollbar-thumb {
      background: rgba(255, 45, 85, 0.3) !important;
    }

    /* 1. DEFCON Warning Overlay */
    .defcon-overlay {
      position: fixed;
      inset: 0;
      z-index: 100000;
      display: none;
      align-items: center;
      justify-content: center;
      font-family: var(--FM);
      background: rgba(15, 0, 0, 0.9);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      color: #ff2d55;
      overflow: hidden;
    }
    .defcon-overlay.active {
      display: flex;
      animation: defconFlash 0.3s ease-out;
    }
    .defcon-bg {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle, transparent 20%, #000 80%),
                  repeating-linear-gradient(0deg, rgba(255, 45, 85, 0.03) 0px, rgba(255, 45, 85, 0.03) 1px, transparent 1px, transparent 2px);
      pointer-events: none;
    }
    .defcon-scanline {
      position: absolute;
      top: -100%;
      left: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(to bottom, transparent, rgba(255, 45, 85, 0.12), transparent);
      animation: defconScan 5s linear infinite;
      pointer-events: none;
    }
    .defcon-box {
      position: relative;
      width: 92%;
      max-width: 580px;
      padding: 36px 30px;
      background: rgba(20, 0, 0, 0.7);
      border: 1px solid #ff2d55;
      border-radius: 16px;
      box-shadow: 0 0 50px rgba(255, 45, 85, 0.35);
      text-align: center;
      z-index: 2;
      animation: defconVibe 0.15s infinite alternate;
    }
    .defcon-title {
      font-family: var(--F1);
      font-size: clamp(20px, 4vw, 26px);
      font-weight: 700;
      letter-spacing: 0.08em;
      margin-bottom: 16px;
      text-shadow: 0 0 12px #ff2d55;
      animation: defconGlow 1.2s ease-in-out infinite alternate;
    }
    .defcon-msg {
      font-size: 13px;
      line-height: 1.65;
      margin-bottom: 22px;
      color: rgba(255, 196, 204, 0.85);
    }
    .defcon-logs {
      height: 160px;
      overflow-y: auto;
      background: rgba(0, 0, 0, 0.85);
      border: 1px solid rgba(255, 45, 85, 0.25);
      border-radius: 8px;
      padding: 12px 14px;
      text-align: left;
      font-family: var(--FM);
      font-size: 11px;
      line-height: 1.6;
      color: #ff5f7e;
      margin-bottom: 24px;
    }
    .defcon-logs div {
      margin-bottom: 4px;
    }
    .defcon-disarm-btn {
      padding: 13px 32px;
      background: #ff2d55;
      color: #fff;
      font-family: var(--F1);
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 0.1em;
      border-radius: 999px;
      border: none;
      cursor: pointer;
      box-shadow: 0 0 15px rgba(255, 45, 85, 0.4);
      transition: background 0.2s, box-shadow 0.2s, transform 0.1s;
    }
    .defcon-disarm-btn:hover {
      background: #ff003c;
      box-shadow: 0 0 25px rgba(255, 45, 85, 0.7);
      transform: scale(1.03);
    }

    /* 2. MITRE ATT&CK Matrix */
    .mitre-section {
      margin-top: 56px;
      padding: 32px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.015);
      border: 1px solid rgba(0, 255, 110, 0.08);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    }
    .mitre-hdr {
      margin-bottom: 28px;
    }
    .mitre-lbl {
      font-family: var(--FM);
      font-size: 9px;
      letter-spacing: .2em;
      text-transform: uppercase;
      color: rgba(0, 255, 110, 0.5);
    }
    .mitre-title {
      font-family: var(--F1);
      font-size: clamp(20px, 4vw, 26px);
      text-transform: uppercase;
      color: var(--cream);
      margin-top: 6px;
      letter-spacing: 0.02em;
    }
    .mitre-desc {
      font-size: 13px;
      color: var(--dim);
      margin-top: 6px;
      line-height: 1.5;
    }
    .mitre-matrix {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 14px;
    }
    @media(max-width: 1024px) {
      .mitre-matrix {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media(max-width: 640px) {
      .mitre-matrix {
        grid-template-columns: 1fr;
      }
    }
    .mitre-col {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .mitre-col-title {
      font-family: var(--F1);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--cyan);
      border-bottom: 1px solid rgba(0, 212, 255, 0.2);
      padding-bottom: 8px;
      margin-bottom: 6px;
    }
    .mitre-cell {
      background: rgba(7, 12, 21, 0.5);
      border: 1px solid rgba(196, 216, 224, 0.05);
      border-radius: 8px;
      padding: 12px;
      font-size: 11px;
      color: rgba(196, 216, 224, 0.45);
      transition: all 0.25s var(--ease);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 80px;
    }
    .mitre-cell .t-id {
      font-family: var(--FM);
      font-size: 8px;
      color: rgba(196, 216, 224, 0.2);
      align-self: flex-end;
    }
    .mitre-cell.active {
      border-color: rgba(0, 255, 110, 0.15);
      color: var(--cream);
      cursor: pointer;
      box-shadow: inset 0 0 10px rgba(0, 255, 110, 0.02);
    }
    .mitre-cell.active:hover {
      border-color: var(--green);
      background: rgba(0, 255, 110, 0.06);
      box-shadow: 0 0 20px rgba(0, 255, 110, 0.14), inset 0 0 10px rgba(0, 255, 110, 0.05);
      transform: translateY(-2px);
    }
    .mitre-cell.active:hover .t-id {
      color: var(--green);
    }
    .mitre-cell.active .t-id {
      color: rgba(0, 255, 110, 0.5);
    }

    /* MITRE Drawer Panel */
    .mitre-drawer {
      position: fixed;
      top: 0;
      right: -420px;
      width: 400px;
      height: 100vh;
      z-index: 100005;
      background: rgba(7, 12, 21, 0.96);
      border-left: 1px solid rgba(0, 255, 110, 0.15);
      box-shadow: -20px 0 50px rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(25px);
      -webkit-backdrop-filter: blur(25px);
      padding: 40px 32px;
      display: flex;
      flex-direction: column;
      transition: right 0.4s var(--ease);
    }
    @media(max-width: 450px) {
      .mitre-drawer {
        width: 100%;
        right: -100%;
      }
    }
    .mitre-drawer.open {
      right: 0;
    }
    .mitre-drawer-close {
      align-self: flex-start;
      font-family: var(--FM);
      font-size: 10px;
      color: rgba(196, 216, 224, 0.45);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      border: 1px solid rgba(196, 216, 224, 0.15);
      padding: 7px 14px;
      border-radius: 6px;
      margin-bottom: 32px;
      transition: all 0.2s;
    }
    .mitre-drawer-close:hover {
      color: var(--red);
      border-color: rgba(255, 45, 85, 0.4);
      background: rgba(255, 45, 85, 0.05);
    }
    .mitre-drawer-badge {
      display: inline-block;
      font-family: var(--FM);
      font-size: 10px;
      padding: 4px 10px;
      border-radius: 4px;
      background: rgba(0, 255, 110, 0.08);
      border: 1px solid rgba(0, 255, 110, 0.25);
      color: var(--green);
      align-self: flex-start;
      margin-bottom: 14px;
      text-shadow: 0 0 6px rgba(0, 255, 110, 0.4);
    }
    .mitre-drawer-title {
      font-family: var(--F1);
      font-size: 22px;
      text-transform: uppercase;
      color: #fff;
      line-height: 1.25;
      letter-spacing: 0.02em;
    }
    .mitre-drawer-divider {
      height: 1px;
      background: linear-gradient(90deg, rgba(0, 255, 110, 0.25), transparent);
      margin: 24px 0;
    }
    .mitre-drawer-section {
      margin-bottom: 28px;
    }
    .mitre-drawer-label {
      display: block;
      font-family: var(--FM);
      font-size: 9px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--cyan);
      margin-bottom: 10px;
    }
    .mitre-drawer-text {
      font-size: 13.5px;
      line-height: 1.7;
      color: rgba(196, 216, 224, 0.75);
    }

    /* 3. Ask Prem Chatbot */
    .ask-prem-widget {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 10001;
      font-family: var(--F2);
    }
    .ask-prem-toggle {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: var(--green);
      border: none;
      box-shadow: 0 8px 32px rgba(0, 255, 110, 0.28);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      transition: transform 0.3s var(--ease), box-shadow 0.3s;
    }
    .ask-prem-toggle:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 32px rgba(0, 255, 110, 0.45);
    }
    .ask-prem-icon {
      font-size: 24px;
      line-height: 1;
    }
    .ask-prem-badge {
      position: absolute;
      top: -6px;
      right: -6px;
      background: var(--red);
      color: #fff;
      font-family: var(--FM);
      font-size: 8px;
      font-weight: 700;
      text-transform: uppercase;
      padding: 3px 6px;
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(255, 45, 85, 0.5);
      letter-spacing: 0.05em;
    }
    .ask-prem-window {
      position: absolute;
      bottom: 74px;
      right: 0;
      width: 350px;
      height: 480px;
      border-radius: 16px;
      background: rgba(7, 12, 21, 0.95);
      border: 1px solid rgba(0, 255, 110, 0.16);
      box-shadow: 0 12px 48px rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(25px);
      -webkit-backdrop-filter: blur(25px);
      display: none;
      flex-direction: column;
      overflow: hidden;
      animation: chatOpen 0.3s var(--ease) forwards;
    }
    .ask-prem-window.open {
      display: flex;
    }
    .chat-header {
      padding: 16px;
      background: rgba(3, 6, 11, 0.65);
      border-bottom: 1px solid rgba(0, 255, 110, 0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .chat-header-info {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .chat-status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--green);
      box-shadow: 0 0 8px var(--green);
    }
    .chat-header-title {
      font-family: var(--F1);
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #fff;
    }
    .chat-header-status {
      font-family: var(--FM);
      font-size: 9px;
      color: rgba(196, 216, 224, 0.45);
    }
    .chat-settings-btn {
      background: none;
      border: none;
      color: rgba(196, 216, 224, 0.5);
      font-size: 16px;
      cursor: pointer;
      padding: 4px;
      transition: color 0.2s;
    }
    .chat-settings-btn:hover {
      color: var(--green);
    }
    .chat-settings-panel {
      display: none;
      background: rgba(3, 6, 11, 0.96);
      border-bottom: 1px solid rgba(0, 255, 110, 0.15);
      padding: 16px;
    }
    .chat-settings-panel.active {
      display: block;
    }
    .settings-title {
      font-family: var(--F1);
      font-size: 12px;
      font-weight: 600;
      color: var(--cyan);
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .settings-desc {
      font-size: 10px;
      color: rgba(196, 216, 224, 0.5);
      line-height: 1.45;
      margin-bottom: 10px;
    }
    .chat-settings-panel input {
      width: 100%;
      padding: 8px 12px;
      background: rgba(0, 0, 0, 0.55);
      border: 1px solid rgba(0, 255, 110, 0.15);
      border-radius: 6px;
      color: #fff;
      font-family: var(--FM);
      font-size: 11px;
      outline: none;
      margin-bottom: 10px;
    }
    .settings-actions {
      display: flex;
      gap: 8px;
    }
    .save-key-btn, .clear-key-btn {
      padding: 7px 14px;
      border-radius: 6px;
      font-family: var(--FM);
      font-size: 10px;
      cursor: pointer;
      text-transform: uppercase;
      border: none;
    }
    .save-key-btn {
      background: var(--green);
      color: var(--ink);
      font-weight: 700;
    }
    .clear-key-btn {
      background: rgba(255, 45, 85, 0.1);
      border: 1px solid rgba(255, 45, 85, 0.3);
      color: var(--red);
    }
    .chat-body {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .chat-body::-webkit-scrollbar {
      width: 3px;
    }
    .chat-body::-webkit-scrollbar-thumb {
      background: rgba(0, 255, 110, 0.18);
    }
    .chat-msg {
      max-width: 82%;
      padding: 10px 14px;
      border-radius: 12px;
      font-size: 12.5px;
      line-height: 1.55;
    }
    .chat-msg.system {
      background: rgba(0, 255, 110, 0.04);
      border: 1px solid rgba(0, 255, 110, 0.12);
      color: rgba(196, 216, 224, 0.85);
      align-self: flex-start;
      border-bottom-left-radius: 2px;
    }
    .chat-msg.user {
      background: rgba(0, 212, 255, 0.08);
      border: 1px solid rgba(0, 212, 255, 0.2);
      color: #fff;
      align-self: flex-end;
      border-bottom-right-radius: 2px;
    }
    .chat-msg.typing {
      font-style: italic;
      opacity: 0.7;
    }
    .chat-input-area {
      padding: 12px;
      background: rgba(3, 6, 11, 0.7);
      border-top: 1px solid rgba(0, 255, 110, 0.08);
      display: flex;
      gap: 8px;
    }
    .chat-input-area input {
      flex: 1;
      background: rgba(0, 0, 0, 0.45);
      border: 1px solid rgba(0, 255, 110, 0.12);
      border-radius: 8px;
      padding: 8px 14px;
      color: #fff;
      font-family: var(--F2);
      font-size: 12.5px;
      outline: none;
    }
    .chat-input-area input:focus {
      border-color: rgba(0, 255, 110, 0.35);
    }
    .chat-send-btn {
      background: rgba(0, 255, 110, 0.08);
      border: 1px solid rgba(0, 255, 110, 0.25);
      color: var(--green);
      border-radius: 8px;
      padding: 8px 16px;
      font-family: var(--F1);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      cursor: pointer;
      transition: all 0.2s;
    }
    .chat-send-btn:hover {
      background: var(--green);
      color: var(--ink);
    }

    @keyframes defconScan {
      0% { top: -100%; }
      100% { top: 100%; }
    }
    @keyframes defconFlash {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes defconGlow {
      from { text-shadow: 0 0 8px #ff2d55, 0 0 2px #ff2d55; }
      to { text-shadow: 0 0 20px #ff2d55, 0 0 10px #ff2d55; }
    }
    @keyframes defconVibe {
      0% { transform: translate(1px, 1px) rotate(0deg); }
      100% { transform: translate(-1px, -1px) rotate(0.15deg); }
    }
    @keyframes chatOpen {
      from { opacity: 0; transform: translateY(16px) scale(0.96); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    @keyframes avatarScan {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }

    /* ÔöÇÔöÇ Academic Ledger Styles ÔöÇÔöÇ */
    .academic-grid {
      display: flex;
      flex-direction: column;
      gap: 14px;
      margin-top: 14px;
    }
    .acad-item {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .acad-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .acad-name {
      font-family: var(--F1);
      font-size: 12px;
      color: rgba(196,216,224,.85);
      font-weight: 500;
    }
    .acad-grade {
      font-family: var(--FM);
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .05em;
    }
    .acad-grade.green { color: var(--green); }
    .acad-grade.amber { color: var(--amber); }
    .acad-track {
      width: 100%;
      height: 6px;
      background: rgba(255,255,255,.04);
      border-radius: 999px;
      overflow: hidden;
      position: relative;
    }
    .acad-fill {
      height: 100%;
      border-radius: 999px;
      transition: width 1.5s cubic-bezier(0.1, 1, 0.1, 1);
      width: 0%;
    }
    .acad-fill.green {
      background: linear-gradient(90deg, var(--green), #67ffad);
      box-shadow: 0 0 8px rgba(103, 255, 173, 0.3);
    }
    .acad-fill.amber {
      background: linear-gradient(90deg, var(--amber), #ffe07d);
      box-shadow: 0 0 8px rgba(255, 224, 125, 0.2);
    }

    /* ÔöÇÔöÇ Endorsements Styles ÔöÇÔöÇ */
    .endorsement-card {
      position: relative;
      padding: 40px;
      border-radius: 24px;
      margin-top: 44px;
      overflow: hidden;
      border: 1px solid rgba(0,255,110,.12);
      background: rgba(0, 0, 0, 0.45) !important;
      box-shadow: var(--shadow);
    }
    .endorsement-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--green), var(--cyan));
    }
    .end-security-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      margin-bottom: 28px;
    }
    .end-security-status {
      font-family: var(--FM);
      font-size: 10px;
      letter-spacing: .2em;
      text-transform: uppercase;
      color: var(--green);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .end-ver-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      background: rgba(0, 255, 110, 0.1);
      border: 1px solid rgba(0, 255, 110, 0.3);
      border-radius: 50%;
      font-size: 9px;
      font-weight: bold;
    }
    .end-sec-id {
      font-family: var(--FM);
      font-size: 9px;
      color: rgba(255, 255, 255, 0.3);
      letter-spacing: .05em;
    }
    .end-body {
      position: relative;
      margin-bottom: 32px;
    }
    .end-quote-icon {
      position: absolute;
      top: -30px;
      left: -20px;
      font-size: 80px;
      color: rgba(0, 255, 110, 0.04);
      font-family: serif;
      line-height: 1;
      pointer-events: none;
    }
    .end-text {
      font-family: var(--F1);
      font-size: 16px;
      line-height: 1.8;
      color: rgba(196, 216, 224, 0.85);
      position: relative;
      z-index: 2;
    }
    .end-text strong {
      color: var(--green);
      font-weight: 600;
    }
    .end-footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-top: 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
    .end-signatory {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .end-sig-name {
      font-family: var(--F1);
      font-size: 18px;
      font-weight: 700;
      color: #fff;
    }
    .end-sig-title {
      font-family: var(--FM);
      font-size: 11px;
      color: rgba(0, 255, 110, 0.7);
      letter-spacing: .05em;
    }
    .end-sig-dept {
      font-family: var(--F1);
      font-size: 13px;
      color: rgba(255, 255, 255, 0.4);
    }
    .end-badge-stamp {
      width: 80px;
      height: 80px;
      opacity: 0.85;
    }
    .end-seal {
      width: 100%;
      height: 100%;
    }

    @media(max-width:768px) {
      .endorsement-card { padding: 24px; }
      .end-security-header { flex-direction: column; align-items: flex-start; gap: 8px; }
      .end-text { font-size: 14px; line-height: 1.7; }
      .end-footer { flex-direction: column; align-items: flex-start; gap: 20px; }
      .end-badge-stamp { align-self: flex-end; margin-top: -10px; }
    }
  </style>
  </head>
<body>

<!-- ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ BREAKING NEWS BANNER ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ -->
<div id="newsBanner">
  <div class="banner-inner">
    <div class="banner-badge-wrap">
      <span class="banner-trophy">­ƒÅå</span>
      <div class="banner-sep"></div>
      <span class="banner-breaking">Innovation Winner</span>
    </div>
    <div class="banner-ticker-wrap">
      <div class="banner-ticker">
        <div class="bt-item">
          <span class="bt-hl">Innovation Fest 2026 Winner</span>
          <span class="bt-dim">ÔÇö</span>
          <span>KINORA: AI-Powered Elderly Care Ecosystem ÔÇö Raspberry Pi 5 Hub ┬À Fall Detection ┬À Smart Pendant ┬À Family App</span>
          <span class="bt-dot"></span>
        </div>
        <div class="bt-item">
          <span class="bt-hl">Team Lead &amp; Security Engineer</span>
          <span class="bt-dim">┬À</span>
          <span>Designed and built a complete IoT hardware + software elderly care ecosystem with full business viability models</span>
          <span class="bt-dot"></span>
        </div>
        <div class="bt-item">
          <span class="bt-hl">Bridge</span>
          <span class="bt-dim">┬À</span>
          <span>Community-driven local guide platform now live ÔÇö connecting travellers with authentic local experiences</span>
          <span class="bt-dot"></span>
        </div>
        <!-- Duplicate for seamless loop -->
        <div class="bt-item">
          <span class="bt-hl">Innovation Fest 2026 Winner</span>
          <span class="bt-dim">ÔÇö</span>
          <span>KINORA: AI-Powered Elderly Care Ecosystem ÔÇö Raspberry Pi 5 Hub ┬À Fall Detection ┬À Smart Pendant ┬À Family App</span>
          <span class="bt-dot"></span>
        </div>
        <div class="bt-item">
          <span class="bt-hl">Team Lead &amp; Security Engineer</span>
          <span class="bt-dim">┬À</span>
          <span>Designed and built a complete IoT hardware + software elderly care ecosystem with full business viability models</span>
          <span class="bt-dot"></span>
        </div>
        <div class="bt-item">
          <span class="bt-hl">Bridge</span>
          <span class="bt-dim">┬À</span>
          <span>Community-driven local guide platform now live ÔÇö connecting travellers with authentic local experiences</span>
          <span class="bt-dot"></span>
        </div>
      </div>
    </div>
    <button class="banner-close" id="newsBannerClose" title="Dismiss">Ô£ò</button>
  </div>
</div>

<!-- Scroll Progress -->
<div id="spb"></div>
<!-- Cursor Glow -->
<div id="cg"></div>
<!-- Background Canvas -->
<canvas id="bg-canvas"></canvas>

<!-- ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ LOADER ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ -->
<div id="loader">
  <canvas id="ldCanvas"></canvas>
  <div class="ld-box">
    <div class="ld-logo">PL</div>
    <div class="ld-name">Prem Lodhia</div>
    <div class="ld-sub">Cloud Security ┬À Detection Engineering ┬À AI</div>
    <div class="ld-term" id="ldTerm"></div>
    <div class="ld-prog"><div class="ld-fill" id="ldFill"></div></div>
    <div class="ld-stat">
      <span id="ldPct">0%</span>
      <span id="ldStage">Initializing...</span>
    </div>
  </div>
</div>

<!-- ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ NAVBAR ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ -->
<nav id="nav">
  <div class="nav-i">
    <a class="nav-brand" href="#hero">
      <div class="nav-mark"><img src="assets/profile.png" alt="Prem Lodhia" /></div>
      <span>Prem Lodhia</span>
    </a>
    <div class="nav-links">
      <a href="#about">Profile</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#soc">Live SOC</a>
      <a href="#certifications">Certs</a>
      <a href="blog.html">Blog</a>
      <a href="#contact">Contact</a>
    </div>
    <a class="nav-cta" style="background:rgba(255,255,255,.03); border-color:rgba(255,255,255,.08); color:rgba(196,216,224,.35); cursor:not-allowed; pointer-events:none;" title="New CV building in progress">New CV in Progress</a>
    <button class="hamburger" id="ham" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- Mobile Nav -->
<div class="mnav" id="mnav">
  <button class="mnav-close" id="mnavClose">ESC / CLOSE</button>
  <a href="#about" class="mnav-link">Profile</a>
  <a href="#experience" class="mnav-link">Experience</a>
  <a href="#skills" class="mnav-link">Skills</a>
  <a href="#projects" class="mnav-link">Projects</a>
  <a href="#soc" class="mnav-link">Live SOC</a>
  <a href="#certifications" class="mnav-link">Certs</a>
  <a href="blog.html" class="mnav-link">Blog</a>
  <a href="#contact" class="mnav-link">Contact</a>
  <a style="padding:12px 28px;border-radius:999px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);color:rgba(196,216,224,.35);font-family:var(--F1);font-weight:700;font-size:13px;text-transform:uppercase;letter-spacing:.08em;cursor:not-allowed;pointer-events:none;" title="New CV building in progress">New CV in Progress</a>
</div>

<!-- ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ HERO ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ -->
<section id="hero">
  <canvas id="heroCanvas"></canvas>
  <div class="hero-orb hero-orb-1"></div>
  <div class="hero-orb hero-orb-2"></div>
  <div class="hero-orb hero-orb-3"></div>
  <div class="hero-grid">
    <div class="hero-left">
      <div class="hero-avatar-top glass">
        <img src="assets/profile.png" alt="Prem Lodhia" />
      </div>
      <div class="hero-pill glass">
        <div class="hero-pill-dot"></div>
        Open to Opportunities &middot; 2026
      </div>
      <h1 class="hero-title">
        I Build Secure<br/>Systems That<br/><span class="hi">Detect Attacks</span><br/>Before They<br/>Happen.
      </h1>
      <div class="hero-sub">Cloud Security &middot; AppSec &middot; Detection Engineering &middot; AI</div>
      <div class="hero-actions">
        <a class="btn-p" href="#projects">View Projects</a>
        <a class="btn-s" href="#contact">Contact Me</a>
        <a class="btn-s" href="#soc" style="border-color:rgba(0,102,255,.4);color:rgba(0,102,255,.9);">Live SOC Demo Ôåù</a>
      </div>
      <div class="hero-stats">
        <div class="hstat glass"><div class="hstat-n" data-count="40" data-suffix="+">40+</div><div class="hstat-l">Technical Skills</div></div>
        <div class="hstat glass"><div class="hstat-n" data-count="7" data-suffix="">7</div><div class="hstat-l">Active Projects</div></div>
        <div class="hstat glass"><div class="hstat-n" data-count="9" data-suffix="">9</div><div class="hstat-l">Certifications</div></div>
        <div class="hstat glass"><div class="hstat-n" data-count="2" data-suffix="">2</div><div class="hstat-l">Year of Study</div></div>
      </div>
    </div>
    <div class="hero-right">
      <div class="threat-term">
        <div class="term-bar">
          <div class="tdot" style="background:#ff5f57;"></div>
          <div class="tdot" style="background:#febc2e;"></div>
          <div class="tdot" style="background:#28c840;"></div>
          <div class="term-title">threat-monitor@prem-sec:~$</div>
        </div>
        <div class="term-body" id="heroTerm"></div>
      </div>
    </div>
  </div>
</section>

<div class="sep"></div>

<!-- ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ ABOUT ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ -->
<section id="about" class="section">
  <div class="container">
    <span class="badge rv">Operative File &middot; TS/SCI</span>
    <h2 class="sec-title rv d1">Who Is<br/><em>Prem Lodhia</em></h2>
    <p class="sec-sub rv d2">A cloud security engineer-in-training who builds production-grade labs, breaks things on purpose, and engineers the intersection of AI and threat intelligence.</p>
    <div class="about-grid">
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <!-- Dossier Photo Container -->
        <div class="about-avatar-container glass rv d2" style="display:flex;align-items:center;gap:20px;padding:20px;border-radius:20px;position:relative;overflow:hidden;">
          <div class="about-avatar-circle">
            <img src="assets/profile.png" alt="Prem Lodhia" />
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;">
            <div style="font-family:var(--FM);font-size:8px;letter-spacing:.2em;text-transform:uppercase;color:rgba(0,255,110,.45);">OPERATIVE DOSSIER</div>
            <div style="font-family:var(--F1);font-size:20px;font-weight:700;color:#fff;line-height:1.2;">Prem Lodhia</div>
            <div style="font-family:var(--FM);font-size:10px;color:var(--green);">ID: PL-001 // SEC_OP</div>
          </div>
          <!-- Scanline indicator -->
          <div style="position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(180deg,transparent,rgba(0,255,110,.05) 50%,transparent 100%);pointer-events:none;animation:avatarScan 3s linear infinite;"></div>
        </div>

        <div class="about-id glass rv d2" style="margin-bottom:0;">
          <div class="id-field"><div class="id-key">Subject</div><div class="id-val">Prem Lodhia</div></div>
          <div class="id-field"><div class="id-key">Designation</div><div class="id-val highlight">Cloud Security &amp; Security Software Eng</div></div>
          <div class="id-field"><div class="id-key">Academic Year</div><div class="id-val">Year 2 ÔÇö CS with AI</div></div>
          <div class="id-field">
            <div class="id-key">Current Status</div>
            <div class="id-val" style="display:flex;align-items:center;gap:9px;">
              <span style="width:8px;height:8px;border-radius:50%;background:var(--green);box-shadow:0 0 10px var(--green);animation:pulse 2s ease-in-out infinite;flex-shrink:0;"></span>
              <span style="color:var(--green);font-family:var(--FM);font-size:12px;letter-spacing:.1em;text-transform:uppercase;">Open to Opportunities</span>
            </div>
          </div>
          <div class="id-field" style="margin-bottom:0"><div class="id-key">Clearance Level</div><div class="id-val" style="color:var(--green);">Highly Competent</div></div>
        </div>

        <!-- Academic Ledger -->
        <div class="about-academic glass prof-card rv d3">
          <div class="about-hdr">Academic Ledger ÔÇö Year 1</div>
          <p class="about-p" style="font-size:11px;color:rgba(196,216,224,.5);margin-bottom:16px;">
            BSc Computer Science with Artificial Intelligence @ BCU
          </p>
          <div class="academic-grid">
            <!-- Computer Programming: 96% -->
            <div class="acad-item">
              <div class="acad-header">
                <span class="acad-name">Computer Programming</span>
                <span class="acad-grade green">96%</span>
              </div>
              <div class="acad-track"><div class="prof-fill acad-fill green" data-w="96"></div></div>
            </div>
            <!-- Computer Systems: 86% -->
            <div class="acad-item">
              <div class="acad-header">
                <span class="acad-name">Computer Systems</span>
                <span class="acad-grade green">86%</span>
              </div>
              <div class="acad-track"><div class="prof-fill acad-fill green" data-w="86"></div></div>
            </div>
            <!-- Website Design and Development: 86% -->
            <div class="acad-item">
              <div class="acad-header">
                <span class="acad-name">Website Design &amp; Development</span>
                <span class="acad-grade green">86%</span>
              </div>
              <div class="acad-track"><div class="prof-fill acad-fill green" data-w="86"></div></div>
            </div>
            <!-- Data Structures and Algorithms: Pending -->
            <div class="acad-item">
              <div class="acad-header">
                <span class="acad-name">Data Structures &amp; Algorithms</span>
                <span class="acad-grade amber">Pending</span>
              </div>
              <div class="acad-track"><div class="prof-fill acad-fill amber" data-w="0"></div></div>
            </div>
            <!-- Innovation Project: Pending -->
            <div class="acad-item">
              <div class="acad-header">
                <span class="acad-name">Innovation Project</span>
                <span class="acad-grade amber">Pending</span>
              </div>
              <div class="acad-track"><div class="prof-fill acad-fill amber" data-w="0"></div></div>
            </div>
            <!-- Introduction to AI: Pending -->
            <div class="acad-item">
              <div class="acad-header">
                <span class="acad-name">Introduction to AI</span>
                <span class="acad-grade amber">Pending</span>
              </div>
              <div class="acad-track"><div class="prof-fill acad-fill amber" data-w="0"></div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-profile glass rv d3">
        <div class="about-hdr">Operative Profile</div>
        <p class="about-p">Prem is a <strong>Cloud Security &amp; Security Software Engineer</strong> with growing experience across cloud infrastructure security, application security, detection engineering, and AI-assisted workflows. He also possesses a strong passion and active interests in <strong>iOS Software Engineering</strong>, developing secure mobile applications.</p>
        <p class="about-p">The approach is methodical and adversarial: <strong>build environments, break them deliberately, document every finding, and improve resilience through hands-on iteration.</strong> Not just learning theory ÔÇö shipping working systems.</p>
        <p class="about-p">From simulating brute-force attacks and mapping detections to MITRE ATT&amp;CK, to building full-stack secure platforms with RBAC and audit trails ÔÇö every project is engineered to solve a real security problem.</p>
        <div class="about-hdr" style="margin-top:20px;">Known Specialisations</div>
        <div class="about-specs">
          <span class="about-spec">Cloud Security</span><span class="about-spec">Detection Engineering</span><span class="about-spec">Application Security</span><span class="about-spec">AI / ML</span><span class="about-spec">MITRE ATT&amp;CK</span><span class="about-spec">SIEM Operations</span><span class="about-spec">Incident Response</span>
        </div>
        <div class="about-hdr" style="margin-top:20px;">Analyst Assessment</div>
        <p class="about-p" style="margin-bottom:0;color:rgba(196,216,224,.7);">Exhibits <strong>above-average initiative</strong>, builds production-adjacent tooling, and shows strong long-term fit for cloud security engineering and detection-focused roles.</p>
        <div class="about-hash">Document hash: 7f4a9b2e &middot; Last modified: 2026-05-22 &middot; Classification: TS/SCI</div>
      </div>
    </div>
  </div>
</section>

<div class="sep"></div>

<!-- ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ EXPERIENCE ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ -->
<section id="experience" class="section">
  <div class="container">
    <span class="badge rv">Operational History &middot; Verified</span>
    <h2 class="sec-title rv d1" style="--em-c:var(--cyan);">Field<br/><em style="-webkit-text-fill-color:transparent;background:linear-gradient(90deg,var(--cyan),#a0f8ff,var(--cyan));background-size:200% auto;-webkit-background-clip:text;background-clip:text;animation:shimmer 4s linear infinite;">Operations</em></h2>
    <p class="sec-sub rv d2">Active engagements and freelance deployments across security engineering and AI research domains.</p>
    <div class="timeline rv d3">
      <div class="tl-item">
        <div class="tl-node"><div class="tl-dot tl-dot-g"></div></div>
        <div class="tl-card glass">
          <div class="tl-active green"><span class="tl-active-dot" style="background:var(--green);"></span>Active Operations</div>
          <div class="tl-head">
            <div><div class="tl-role">Technical Coordinator &middot; Cyber Ops Lead</div><div class="tl-co green">Student Computing Association (SCA)</div></div>
            <div class="tl-dates"><div class="tl-period">Apr 2026 ÔÇô Present</div><div class="tl-loc">Birmingham City University &middot; UK</div></div>
          </div>
          <p class="tl-desc">Executing and structuring weekly cybersecurity sessions and technical workflows within the Cybersecurity division. Coordinating team projects by breaking milestones into tasks, managing GitHub repositories and documentation boards, supporting team members through technical roadblocks, and serving as the operational bridge between the committee and division leadership to deliver consistent session results.</p>
          <div class="tl-tags"><span class="tl-tag green">Cybersecurity Ops</span><span class="tl-tag green">Technical Coordination</span><span class="tl-tag green">GitHub &amp; Version Control</span><span class="tl-tag green">Team Leadership</span><span class="tl-tag green">Project Execution</span></div>
        </div>
      </div>
      <div class="tl-item">
        <div class="tl-node"><div class="tl-dot tl-dot-c"></div></div>
        <div class="tl-card glass">
          <div class="tl-active cyan"><span class="tl-active-dot" style="background:var(--cyan);"></span>Active Deployment</div>
          <div class="tl-head">
            <div><div class="tl-role">AI Training Contributor / Data Specialist</div><div class="tl-co cyan">Outlier &middot; Freelance</div></div>
            <div class="tl-dates"><div class="tl-period" style="color:rgba(0,212,255,.65);">Nov 2025 ÔÇô Present</div><div class="tl-loc">United Kingdom &middot; Remote</div></div>
          </div>
          <p class="tl-desc">Contributing to advanced Generative AI systems by evaluating response quality, accuracy, reasoning, and safety. Providing structured expert feedback that improves model behavior and technical reliability ÔÇö with a focus on risk and accuracy relevant to cybersecurity.</p>
          <div class="tl-tags"><span class="tl-tag cyan">Generative AI</span><span class="tl-tag cyan">Critical Thinking</span><span class="tl-tag cyan">Model Training</span><span class="tl-tag cyan">Prompt Patterns</span><span class="tl-tag cyan">AI Literacy</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="sep"></div>

<!-- ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ ENDORSEMENTS ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ -->
<section id="endorsements" class="section">
  <div class="container">
    <span class="badge rv">Academic Endorsement &middot; Verified</span>
    <h2 class="sec-title rv d1" style="--em-c:var(--green);">Academic<br/><em style="-webkit-text-fill-color:transparent;background:linear-gradient(90deg,var(--green),#67ffad,var(--green));background-size:200% auto;-webkit-background-clip:text;background-clip:text;animation:shimmer 4s linear infinite;">Endorsements</em></h2>
    <p class="sec-sub rv d2">Official academic reference credentials and peer recommendations from Birmingham City University's computing faculty.</p>
    
    <div style="display:flex; flex-direction:column; gap:30px; margin-top:44px;">
      <!-- Endorsement 1: Dr. Hamza Mutaher -->
      <div class="endorsement-card glass rv d3" style="margin-top:0;">
        <div class="end-security-header">
          <div class="end-security-status">
            <span class="end-ver-icon">Ô£ô</span> VERIFIED FACULTY CREDENTIAL
          </div>
          <div class="end-sec-id">DOC-ID: BCU-CS-2026-PL</div>
        </div>
        
        <div class="end-body">
          <div class="end-quote-icon">ÔÇ£</div>
          <div class="end-text">
            I am writing this letter of recommendation for Prem Kantilal Lodhia, who was a student in my <strong>Computer Systems</strong> module at Birmingham City University. As a lecturer, I have known Prem since September 2025, and I have had the pleasure of teaching him, where he proved to be an exceptional learner and an asset to our classes.
            <br/><br/>
            In the classrooms and labs, I found Prem to be a diligent and motivated student. He always showed enthusiasm for learning, participated actively in class discussions, and asked thought provoking questions. Additionally, he demonstrated excellent analytical, practical, and critical thinking skills, allowing him to quickly understand complex computing concepts and apply them effectively. Prem showed excellent performance when working individually and in groups, often taking a leadership role, and proved his ability to adapt to any learning and working environment.
            <br/><br/>
            Furthermore, Prem was consistently punctual and professional in all his interactions. He regularly submitted assignments on time, and his work was always of exceptional quality. In addition, he was proactive in seeking feedback on his work, which helped him continually improve his skills.
            <br/><br/>
            Prem's ability to adapt to new challenges, combined with his thoughtful approach to both technical and conceptual work, assures me that he will excel in his academic and career pursuits. His drive to expand his skillset beyond traditional boundaries demonstrates a forward thinking mindset and an eagerness to embrace innovation, both of which are key traits of a successful undergraduate student. I have no doubt that Prem will contribute meaningfully to any academic or industrial environment opportunities. I fully support his application and am confident that he will thrive in his professional and academic journey.
          </div>
        </div>
        
        <div class="end-footer" style="margin-bottom: 20px;">
          <div class="end-signatory">
            <div class="end-sig-name">Dr. Hamza Mutaher (Ph.D, FHEA)</div>
            <div class="end-sig-title">Lecturer in Cyber Security &middot; Deputy Course Lead</div>
            <div class="end-sig-dept">School of Computing, Engineering and Built Environment &middot; BCU</div>
          </div>
          <div class="end-badge-stamp">
            <svg class="end-seal" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0,255,110,.3)" stroke-width="1.5" stroke-dasharray="3,3" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(0,255,110,.15)" stroke-width="1" />
              <text x="50" y="38" text-anchor="middle" font-size="6" fill="rgba(0,255,110,.5)" font-family="var(--FM)" letter-spacing="1">VERIFIED</text>
              <text x="50" y="52" text-anchor="middle" font-size="8" fill="var(--green)" font-family="var(--FM)" font-weight="bold" letter-spacing="1">FACULTY</text>
              <text x="50" y="65" text-anchor="middle" font-size="5" fill="rgba(0,255,110,.5)" font-family="var(--FM)" letter-spacing="1">BCU 2026</text>
            </svg>
          </div>
        </div>

        <div style="border-top: 1px solid rgba(255,255,255,.05); padding-top: 20px; display: flex;">
          <a href="assets/Prem_Kantilal_Lodhia_RL_1.pdf" target="_blank" class="ct-verify-btn btn-g" style="display: inline-flex; align-items: center; gap: 7px; padding: 10px 22px; border-radius: 8px; font-family: var(--FM); font-size: 10px; font-weight: 700; text-transform: uppercase; color: var(--green); background: rgba(0, 255, 110, 0.08); border: 1px solid rgba(0, 255, 110, 0.25); transition: all 0.25s;">
            Verify Reference Letter (PDF) Ôåù
          </a>
        </div>
      </div>

      <!-- Endorsement 2: Assoc Prof. Ogerta Elezaj -->
      <div class="endorsement-card glass rv d4" style="margin-top:0; border-color: rgba(0, 212, 255, 0.15);">
        <div class="end-security-header">
          <div class="end-security-status" style="color: var(--cyan);">
            <span class="end-ver-icon" style="background: rgba(0, 212, 255, 0.1); border-color: rgba(0, 212, 255, 0.3);">Ô£ô</span> VERIFIED ACADEMIC ENDORSEMENT
          </div>
          <div class="end-sec-id">DOC-ID: BCU-AI-2026-PL</div>
        </div>
        
        <div class="end-body">
          <div class="end-quote-icon" style="color: rgba(0, 212, 255, 0.045);">ÔÇ£</div>
          <div class="end-text">
            I had the pleasure of teaching Prem in <strong>Computer Programming</strong>, where he consistently demonstrated strong technical ability, dedication, and enthusiasm for learning. He showed excellent problem-solving skills, quickly grasped programming concepts, and applied them effectively in practical tasks.
            <br/><br/>
            Prem was highly engaged throughout the course, produced work of a high standard, and approached challenges with a positive and professional attitude. I highly recommend Prem for his future endeavours.
          </div>
        </div>
        
        <div class="end-footer">
          <div class="end-signatory">
            <div class="end-sig-name">Associate Professor Ogerta Elezaj</div>
            <div class="end-sig-title" style="color: var(--cyan);">Associate Professor in AI &middot; Turing Fellow</div>
            <div class="end-sig-dept">Independent Scientific Advisor (ISA) at BridgeAI &middot; BCU</div>
          </div>
          <div class="end-badge-stamp">
            <svg class="end-seal" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0,212,255,.3)" stroke-width="1.5" stroke-dasharray="3,3" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(0,212,255,.15)" stroke-width="1" />
              <text x="50" y="38" text-anchor="middle" font-size="6" fill="rgba(0,212,255,.5)" font-family="var(--FM)" letter-spacing="1">VERIFIED</text>
              <text x="50" y="52" text-anchor="middle" font-size="8" fill="var(--cyan)" font-family="var(--FM)" font-weight="bold" letter-spacing="1">TURING</text>
              <text x="50" y="65" text-anchor="middle" font-size="5" fill="rgba(0,212,255,.5)" font-family="var(--FM)" letter-spacing="1">FELLOW</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="sep"></div>

<!-- ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ SKILLS ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ -->
<section id="skills" class="section">
  <div class="container">
    <span class="badge rv">Capability Analysis &middot; Live Skill Matrix</span>
    <h2 class="sec-title rv d1"><em style="-webkit-text-fill-color:transparent;background:linear-gradient(90deg,var(--cyan),#a0f8ff,var(--cyan));background-size:200% auto;-webkit-background-clip:text;background-clip:text;animation:shimmer 4s linear infinite;">Network</em><br/>Activity</h2>
    <p class="sec-sub rv d2">Live skill topology across cloud security, detection engineering, AI/ML workflows, and software development.</p>
    <div class="skills-tabs rv d3">
      <button class="sk-tab active" data-cat="security">Security</button>
      <button class="sk-tab" data-cat="cloud">Cloud</button>
      <button class="sk-tab" data-cat="ai">AI / ML</button>
      <button class="sk-tab" data-cat="dev">Development</button>
      <button class="sk-tab" data-cat="net">Networking</button>
      <button class="sk-tab" data-cat="db">Databases</button>
      <button class="sk-tab" data-cat="hw">Hardware</button>
      <button class="sk-tab" data-cat="design">Design Thinking</button>
    </div>
    <div class="sk-panel active" id="panel-security"><div class="sk-cloud"><span class="sk-tag tag-sec">SIEM Operations</span><span class="sk-tag tag-sec">Threat Management</span><span class="sk-tag tag-sec">OWASP Top 10</span><span class="sk-tag tag-sec">Risk Analysis</span><span class="sk-tag tag-sec">Incident Response</span><span class="sk-tag tag-sec">Application Security</span><span class="sk-tag tag-sec">Cloud Security</span><span class="sk-tag tag-sec">Defense-in-Depth</span><span class="sk-tag tag-sec">Firewalls</span><span class="sk-tag tag-sec">MITRE ATT&amp;CK</span><span class="sk-tag tag-sec">Cyber Risk</span><span class="sk-tag tag-sec">Security Controls</span><span class="sk-tag tag-sec">Antimalware</span><span class="sk-tag tag-sec">Network Hardening</span><span class="sk-tag tag-sec">Host-Based IPS</span><span class="sk-tag tag-sec">Windows Security</span><span class="sk-tag tag-sec">Linux Basics</span><span class="sk-tag tag-sec">Physical Security</span><span class="sk-tag tag-sec">Auditing</span><span class="sk-tag tag-sec">Information Assurance</span><span class="sk-tag tag-sec">Detection Engineering</span><span class="sk-tag tag-sec">Security Management</span></div></div>
    <div class="sk-panel" id="panel-cloud"><div class="sk-cloud"><span class="sk-tag tag-cloud">AWS</span><span class="sk-tag tag-cloud">Cloud Infrastructure</span><span class="sk-tag tag-cloud">Cloud-Native Computing</span><span class="sk-tag tag-cloud">Serverless</span><span class="sk-tag tag-cloud">Virtual Machines</span><span class="sk-tag tag-cloud">Hybrid Cloud</span><span class="sk-tag tag-cloud">DevOps</span><span class="sk-tag tag-cloud">Cloud Storage</span><span class="sk-tag tag-cloud">Microservices</span><span class="sk-tag tag-cloud">Cloud Deployment</span><span class="sk-tag tag-cloud">IaaS</span><span class="sk-tag tag-cloud">IBM Cloud</span><span class="sk-tag tag-cloud">Docker</span><span class="sk-tag tag-cloud">Containerisation</span></div></div>
    <div class="sk-panel" id="panel-ai"><div class="sk-cloud"><span class="sk-tag tag-ai">Agentic Systems</span><span class="sk-tag tag-ai">RAG Architecture</span><span class="sk-tag tag-ai">LangChain</span><span class="sk-tag tag-ai">Prompt Engineering</span><span class="sk-tag tag-ai">Generative AI</span><span class="sk-tag tag-ai">LLM Applications</span><span class="sk-tag tag-ai">Hugging Face</span><span class="sk-tag tag-ai">Context Engineering</span><span class="sk-tag tag-ai">PyTorch</span><span class="sk-tag tag-ai">scikit-learn</span><span class="sk-tag tag-ai">pandas</span><span class="sk-tag tag-ai">NumPy</span><span class="sk-tag tag-ai">Data Visualisation</span><span class="sk-tag tag-ai">Supervised Learning</span><span class="sk-tag tag-ai">Model Evaluation</span><span class="sk-tag tag-ai">Embeddings</span></div></div>
    <div class="sk-panel" id="panel-dev"><div class="sk-cloud"><span class="sk-tag tag-dev">Python</span><span class="sk-tag tag-dev">Bash</span><span class="sk-tag tag-dev">PowerShell</span><span class="sk-tag tag-dev">SQL</span><span class="sk-tag tag-dev">Node.js</span><span class="sk-tag tag-dev">JavaScript</span><span class="sk-tag tag-dev">HTML / CSS</span><span class="sk-tag tag-dev">Git / GitHub</span><span class="sk-tag tag-dev">REST APIs</span><span class="sk-tag tag-dev">Secure Coding</span><span class="sk-tag tag-dev">RBAC</span><span class="sk-tag tag-dev">Authentication Flows</span><span class="sk-tag tag-dev">Express</span><span class="sk-tag tag-dev">Full-Stack Development</span><span class="sk-tag tag-dev">Debugging</span></div></div>
    <div class="sk-panel" id="panel-net"><div class="sk-cloud"><span class="sk-tag tag-net">Network Security</span><span class="sk-tag tag-net">TCP/IP</span><span class="sk-tag tag-net">Suricata</span><span class="sk-tag tag-net">Splunk</span><span class="sk-tag tag-net">Wireshark</span><span class="sk-tag tag-net">Network Hardening</span><span class="sk-tag tag-net">Firewall Configuration</span><span class="sk-tag tag-net">Network Analysis</span><span class="sk-tag tag-net">Mitigating Network Attacks</span><span class="sk-tag tag-net">IP/TCP/UDP Vulnerabilities</span></div></div>
    <div class="sk-panel" id="panel-db"><div class="sk-cloud"><span class="sk-tag tag-db">SQLite</span><span class="sk-tag tag-db">SQL Querying</span><span class="sk-tag tag-db">Schema Design</span><span class="sk-tag tag-db">Relational Databases</span><span class="sk-tag tag-db">Database Security</span><span class="sk-tag tag-db">Data Integrity</span><span class="sk-tag tag-db">Query Optimisation</span></div></div>
    <div class="sk-panel" id="panel-hw"><div class="sk-cloud"><span class="sk-tag tag-hw">Computer Hardware Architecture</span><span class="sk-tag tag-hw">System-Level Troubleshooting</span><span class="sk-tag tag-hw">Linux Administration</span><span class="sk-tag tag-hw">Windows Systems</span><span class="sk-tag tag-hw">Virtualisation</span><span class="sk-tag tag-hw">Software-OS Interaction</span><span class="sk-tag tag-hw">Raspberry Pi</span><span class="sk-tag tag-hw">ESP32</span><span class="sk-tag tag-hw">Embedded Systems</span></div></div>
    <div class="sk-panel" id="panel-design"><div class="sk-cloud"><span class="sk-tag tag-design">Enterprise Design Thinking</span><span class="sk-tag tag-design">User-Centered Design</span><span class="sk-tag tag-design">Prototyping</span><span class="sk-tag tag-design">Ideation</span><span class="sk-tag tag-design">Critical Thinking</span><span class="sk-tag tag-design">Storytelling</span><span class="sk-tag tag-design">Team Alignment</span><span class="sk-tag tag-design">Problem Solving</span></div></div>

    <!-- 3D Skill Graph Canvas Container -->
    <div class="skills-graph-container rv d4">
      <div class="skills-graph-info">
        <div class="sg-title">Interactive 3D Skill Topology</div>
        <div class="sg-subtitle">Drag with mouse to rotate/tilt the network graph. Hover nodes to trace connections, and click to view related sections.</div>
      </div>
      <div class="skills-graph-canvas-wrap">
        <canvas id="skills3dCanvas"></canvas>
        <div id="skills3dLabels" style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none;"></div>
      </div>
    </div>

    <div class="prof-grid rv d4">
      <div class="prof-card glass">
        <div class="prof-lbl">Category Proficiency</div>
        <div class="prof-bar"><div class="prof-bh"><span>Security</span><span style="color:var(--green)">68%</span></div><div class="prof-track"><div class="prof-fill" data-w="68" style="background:linear-gradient(90deg,var(--green),#67ffad)"></div></div></div>
        <div class="prof-bar"><div class="prof-bh"><span>Cloud</span><span style="color:var(--cyan)">64%</span></div><div class="prof-track"><div class="prof-fill" data-w="64" style="background:linear-gradient(90deg,var(--cyan),#7ee7ff)"></div></div></div>
        <div class="prof-bar"><div class="prof-bh"><span>Development</span><span style="color:var(--purple)">68%</span></div><div class="prof-track"><div class="prof-fill" data-w="68" style="background:linear-gradient(90deg,var(--purple),#c2b5ff)"></div></div></div>
        <div class="prof-bar"><div class="prof-bh"><span>AI / ML</span><span style="color:var(--amber)">65%</span></div><div class="prof-track"><div class="prof-fill" data-w="65" style="background:linear-gradient(90deg,var(--amber),#ffd27a)"></div></div></div>
        <div class="prof-bar" style="margin-bottom:0"><div class="prof-bh"><span>Networking</span><span style="color:#ff6eb4">67%</span></div><div class="prof-track"><div class="prof-fill" data-w="67" style="background:linear-gradient(90deg,#ff6eb4,#ff9ccf)"></div></div></div>
      </div>
      <div class="prof-card glass">
        <div class="prof-lbl">Top Individual Skills</div>
        <div class="prof-bar"><div class="prof-bh"><span>Cloud Security</span><span style="color:var(--green)">90%</span></div><div class="prof-track"><div class="prof-fill" data-w="90" style="background:linear-gradient(90deg,var(--green),#67ffad)"></div></div></div>
        <div class="prof-bar"><div class="prof-bh"><span>AWS &amp; Cloud Infrastructure</span><span style="color:var(--cyan)">86%</span></div><div class="prof-track"><div class="prof-fill" data-w="86" style="background:linear-gradient(90deg,var(--cyan),#7ee7ff)"></div></div></div>
        <div class="prof-bar"><div class="prof-bh"><span>Threat Detection &amp; SIEM</span><span style="color:#ff6eb4">84%</span></div><div class="prof-track"><div class="prof-fill" data-w="84" style="background:linear-gradient(90deg,#ff6eb4,#ff9ccf)"></div></div></div>
        <div class="prof-bar"><div class="prof-bh"><span>AI Security Workflows</span><span style="color:var(--amber)">82%</span></div><div class="prof-track"><div class="prof-fill" data-w="82" style="background:linear-gradient(90deg,var(--amber),#ffd27a)"></div></div></div>
        <div class="prof-bar" style="margin-bottom:0"><div class="prof-bh"><span>Python Automation</span><span style="color:var(--purple)">80%</span></div><div class="prof-track"><div class="prof-fill" data-w="80" style="background:linear-gradient(90deg,var(--purple),#c2b5ff)"></div></div></div>
      </div>
    </div>

    <!-- MITRE ATT&CK Section -->
    <div class="mitre-section rv d5" style="margin-top: 56px;">
      <div class="mitre-hdr">
        <span class="mitre-lbl">Security Mapping Matrix</span>
        <h3 class="mitre-title">MITRE ATT&amp;CK Framework Coverage</h3>
        <p class="mitre-desc">Click on highlighted cells (technique nodes) to inspect simulated incident logs, detection rules, and project evidence mapped to Prem's operational experience.</p>
      </div>
      <div class="mitre-matrix">
        <!-- Col 1: Initial Access -->
        <div class="mitre-col">
          <div class="mitre-col-title">Initial Access</div>
          <div class="mitre-cell active" data-tid="T1566" data-name="Phishing" data-desc="Sending malicious communications (emails, attachments) to compromise credentials or execute code." data-detect="Email filtering headers, user reporting triggers, anomalous attachment file hashes." data-practice="Simulated phishing scenarios and configured custom SPF/DKIM validation rules.">
            <span>Phishing</span><span class="t-id">T1566</span>
          </div>
          <div class="mitre-cell" data-tid="T1190">
            <span>Public Exploits</span><span class="t-id">T1190</span>
          </div>
          <div class="mitre-cell active" data-tid="T1078" data-name="Valid Accounts" data-desc="Adversaries obtain credentials to access systems, bypassing traditional perimeter defenses." data-detect="Monitor for anomalous logon times, multi-source IPs, or impossible travel logins." data-practice="Hospital Management System: Enforced strict JWT authentication, role-based access control (RBAC), and session expiration.">
            <span>Valid Accounts</span><span class="t-id">T1078</span>
          </div>
        </div>
        
        <!-- Col 2: Execution -->
        <div class="mitre-col">
          <div class="mitre-col-title">Execution</div>
          <div class="mitre-cell active" data-tid="T1059" data-name="Command Interpreter" data-desc="Execution of scripts or commands through PowerShell, Bash, or Command Prompt." data-detect="Enable script block logging (PowerShell Event ID 4104) and monitor command-line arguments." data-practice="Developed automated Bash and PowerShell tooling in Cyber Security Toolkit. Mapped execution logs to SOC feed.">
            <span>Command Int.</span><span class="t-id">T1059</span>
          </div>
          <div class="mitre-cell active" data-tid="T1204" data-name="User Execution" data-desc="An adversary relies on user action (e.g., opening a malicious attachment or link) to execute code." data-detect="Detect process spawning (e.g., Office doc spawning cmd.exe or powershell.exe) via Sysmon logs." data-practice="Analyzed malicious macro payloads and configured local Windows Defender rules in test VMs.">
            <span>User Execution</span><span class="t-id">T1204</span>
          </div>
          <div class="mitre-cell" data-tid="T1053">
            <span>Scheduled Task</span><span class="t-id">T1053</span>
          </div>
        </div>

        <!-- Col 3: Persistence -->
        <div class="mitre-col">
          <div class="mitre-col-title">Persistence</div>
          <div class="mitre-cell active" data-tid="T1136" data-name="Create Account" data-desc="Adversaries create local or domain accounts to maintain access even if credentials are changed." data-detect="Monitor security event log (Event ID 4720) for local user creation, audit directory service modifications." data-practice="Hospital Management System: Added security audit logging for new registrar credentials and administrative accounts.">
            <span>Create Account</span><span class="t-id">T1136</span>
          </div>
          <div class="mitre-cell" data-tid="T1505">
            <span>Web Shell</span><span class="t-id">T1505</span>
          </div>
          <div class="mitre-cell" data-tid="T1546">
            <span>Trigger Exec</span><span class="t-id">T1546</span>
          </div>
        </div>

        <!-- Col 4: Privilege Escalation -->
        <div class="mitre-col">
          <div class="mitre-col-title">Priv. Escalation</div>
          <div class="mitre-cell active" data-tid="T1548" data-name="Abuse Elevation Control" data-desc="Bypassing user control barriers (UAC, sudo configurations) to run actions with elevated root privileges." data-detect="Audit sudo logs, track anomalous child processes of elevated admin tools, look for UAC bypass indicators." data-practice="VulnShop Lab: Analyzed privilege escalation vectors. Configured restricted sudo permissions in BlueTrace deployment containers.">
            <span>Abuse Elev.</span><span class="t-id">T1548</span>
          </div>
          <div class="mitre-cell" data-tid="T1055">
            <span>Process Injection</span><span class="t-id">T1055</span>
          </div>
          <div class="mitre-cell" data-tid="T1574">
            <span>Hijack Exec Flow</span><span class="t-id">T1574</span>
          </div>
        </div>

        <!-- Col 5: Credential Access -->
        <div class="mitre-col">
          <div class="mitre-col-title">Credential Access</div>
          <div class="mitre-cell active" data-tid="T1003" data-name="OS Credential Dumping" data-desc="Accessing SAM, LSASS, or shadow files to dump plaintext credentials or hashes." data-detect="Monitor access requests to lsass.exe process memory (Sysmon Event ID 10) and audit registry exports." data-practice="BlueTrace Lab: Configured Splunk alerts for Sysmon logs flagging credential dumping commands.">
            <span>Cred Dumping</span><span class="t-id">T1003</span>
          </div>
          <div class="mitre-cell active" data-tid="T1110" data-name="Brute Force" data-desc="Systematic trial of numerous usernames and passwords to gain entry to accounts." data-detect="Detect excessive authentication failures (e.g., Event ID 4625) from a single IP within a short window." data-practice="BlueTrace Lab: Set up a Suricata network filter checking for high-frequency SSH and web auth attempts.">
            <span>Brute Force</span><span class="t-id">T1110</span>
          </div>
          <div class="mitre-cell" data-tid="T1555">
            <span>Password Stores</span><span class="t-id">T1555</span>
          </div>
        </div>

        <!-- Col 6: Lateral / C2 / Exfil -->
        <div class="mitre-col">
          <div class="mitre-col-title">Lateral &amp; Exfil</div>
          <div class="mitre-cell active" data-tid="T1021" data-name="SMB Lateral Move" data-desc="Adversaries use SMB/RPC commands (e.g., NetUse, PsExec) to execute commands laterally on other hosts." data-detect="Monitor TCP port 445 network traffic anomalies and logon sessions traversing multiple machines." data-practice="BlueTrace Lab: Tuned Snort and Suricata rules mapping lateral SMB flows, filtering benign traffic.">
            <span>SMB Lateral</span><span class="t-id">T1021</span>
          </div>
          <div class="mitre-cell active" data-tid="T1071" data-name="App Layer Protocols" data-desc="Leveraging standard protocols (HTTPS, DNS) to route C2 traffic through security controls undetected." data-detect="Track DNS TXT record request length, monitor high-frequency beaconing profiles to external IPs." data-practice="BlueTrace Lab: Configured threat detection profiles matching beaconing interval durations.">
            <span>App Protocols</span><span class="t-id">T1071</span>
          </div>
          <div class="mitre-cell active" data-tid="T1020" data-name="Automated Exfiltration" data-desc="Software or scripts gathering and transmitting sensitive data outside the corporate perimeter." data-detect="Set up bandwidth usage alerts and monitor anomalous out-of-hours large data transfers." data-practice="BlueTrace Lab: Built alert thresholds in Splunk triggered when data transfers exceed typical baselines.">
            <span>Auto Exfil</span><span class="t-id">T1020</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="sep"></div>

<!-- ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ PROJECTS ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ -->
<section id="projects" class="section">
  <div class="container">
    <span class="badge rv">Evidence Files &middot; Encrypted</span>
    <h2 class="sec-title rv d1">Evidence<br/><em>Files</em></h2>
    <p class="sec-sub rv d2">Detection labs, security toolkits, full-stack secure systems, innovation award winners, and AI-powered tools ÔÇö engineered to solve real problems.</p>
    <div class="proj-grid">

      <!-- 001 BlueTrace -->
      <div class="proj-card pc-live rv d1">
        <div class="proj-thumb"><canvas class="proj-canvas" id="c001" data-type="siem"></canvas></div>
        <div class="proj-accent"></div>
        <div class="proj-body">
          <div class="proj-meta"><div class="proj-status ps-live"><span class="ps-dot"></span>Active</div><div class="proj-num">001.enc</div></div>
          <div class="proj-enc">project_001.enc ÔåÆ bluetrace_lab.sys</div>
          <div class="proj-title">BlueTrace Lab</div>
          <div class="proj-story">
            <span class="ps-label">// The Problem</span>No detection capability without a lab ÔÇö so I built one from scratch in a containerised home environment.
            <span class="ps-label">// What It Simulates</span>Brute-force attacks ÔåÆ detected via Suricata rule engine ÔåÆ correlated in Splunk ÔåÆ false positives tuned down 40% over three iterations.
            <span class="ps-label">// Why It Matters</span>MITRE ATT&amp;CK mapped rules mean every alert has context, not just noise.
          </div>
          <div class="proj-tags"><span class="proj-tag hl">Splunk</span><span class="proj-tag hl">Suricata</span><span class="proj-tag">Docker</span><span class="proj-tag">MITRE ATT&CK</span></div>
          <div class="proj-hr"></div>
          <div class="proj-link-row"><a class="proj-link" href="https://github.com/PremKLodhia/bluetrace-lab" target="_blank">View Repository ÔåÆ</a></div>
        </div>
      </div>

      <!-- 002 VulnShop -->
      <div class="proj-card pc-live rv d2">
        <div class="proj-thumb"><canvas class="proj-canvas" id="c002" data-type="vuln"></canvas></div>
        <div class="proj-accent"></div>
        <div class="proj-body">
          <div class="proj-meta"><div class="proj-status ps-live"><span class="ps-dot"></span>Active</div><div class="proj-num">002.enc</div></div>
          <div class="proj-enc">project_002.enc ÔåÆ vulnshop.lab</div>
          <div class="proj-title">VulnShop Lab</div>
          <div class="proj-story">
            <span class="ps-label">// The Problem</span>OWASP Top 10 theory doesn't stick unless you've exploited the vulnerability yourself.
            <span class="ps-label">// What It Simulates</span>SQL injection ÔåÆ extracted DB via unsanitised input ÔåÆ patched with parameterised queries ÔåÆ retested to confirm fix.
            <span class="ps-label">// Why It Matters</span>Understanding the attacker's path is the only way to build reliable defences.
          </div>
          <div class="proj-tags"><span class="proj-tag hl">Node.js</span><span class="proj-tag hl">OWASP</span><span class="proj-tag">Express</span><span class="proj-tag">SQLite</span></div>
          <div class="proj-hr"></div>
          <div class="proj-link-row"><a class="proj-link" href="https://github.com/PremKLodhia" target="_blank">View Repository ÔåÆ</a></div>
        </div>
      </div>

      <!-- 003 Cyber Toolkit -->
      <div class="proj-card pc-live rv d3">
        <div class="proj-thumb"><canvas class="proj-canvas" id="c003" data-type="toolkit"></canvas></div>
        <div class="proj-accent"></div>
        <div class="proj-body">
          <div class="proj-meta"><div class="proj-status ps-live"><span class="ps-dot"></span>Active</div><div class="proj-num">003.enc</div></div>
          <div class="proj-enc">project_003.enc ÔåÆ sec_toolkit.py</div>
          <div class="proj-title">Cyber Security Toolkit</div>
          <div class="proj-story">
            <span class="ps-label">// The Problem</span>Security tasks that take 10 manual steps shouldn't ÔÇö so I automated them.
            <span class="ps-label">// What It Does</span>Modular Python toolkit: password strength analysis, hash cracking demos, port scanning, log analysis, and encryption utilities ÔÇö all CLI-driven.
            <span class="ps-label">// Why It Matters</span>Each module mirrors a real analyst workflow ÔÇö built to understand the tooling, not just use it.
          </div>
          <div class="proj-tags"><span class="proj-tag hl">Python</span><span class="proj-tag hl">Bash</span><span class="proj-tag">PowerShell</span><span class="proj-tag">SQL</span></div>
          <div class="proj-hr"></div>
          <div class="proj-link-row"><a class="proj-link" href="https://github.com/PremKLodhia" target="_blank">View Repository ÔåÆ</a></div>
        </div>
      </div>

      <!-- 004 Hospital -->
      <div class="proj-card pc-live rv d4">
        <div class="proj-thumb"><canvas class="proj-canvas" id="c004" data-type="rbac"></canvas></div>
        <div class="proj-accent"></div>
        <div class="proj-body">
          <div class="proj-meta"><div class="proj-status ps-live"><span class="ps-dot"></span>Complete</div><div class="proj-num">004.enc</div></div>
          <div class="proj-enc">project_004.enc ÔåÆ hospital_mgmt.sys</div>
          <div class="proj-title">Hospital Management System</div>
          <div class="proj-story">
            <span class="ps-label">// The Problem</span>Healthcare data is a top ransomware target ÔÇö and most systems are built without security-first thinking.
            <span class="ps-label">// What It Implements</span>RBAC with three privilege tiers (Admin/Doctor/Patient) ÔåÆ JWT auth ÔåÆ full audit trail ÔåÆ SQL injection hardened from day one.
            <span class="ps-label">// Why It Matters</span>Demonstrates secure architecture thinking, not just feature delivery.
          </div>
          <div class="proj-tags"><span class="proj-tag hl">Full-Stack</span><span class="proj-tag hl">RBAC</span><span class="proj-tag">SQL</span><span class="proj-tag">JWT Auth</span></div>
          <div class="proj-hr"></div>
          <div class="proj-link-row"><a class="proj-link" href="https://github.com/PremKLodhia/Hospital-Management-System" target="_blank">View Repository ÔåÆ</a></div>
        </div>
      </div>

      <!-- 005 AI Interview -->
      <div class="proj-card pc-wip rv d5">
        <div class="proj-thumb"><canvas class="proj-canvas" id="c005" data-type="ai"></canvas></div>
        <div class="proj-accent"></div>
        <div class="proj-body">
          <div class="proj-meta"><div class="proj-status ps-wip"><span class="ps-dot"></span>In Development</div><div class="proj-num">005.enc</div></div>
          <div class="proj-enc">project_005.enc ÔåÆ ai_sec_interview.ai</div>
          <div class="proj-title">AI Cybersecurity Interview</div>
          <div class="proj-story">
            <span class="ps-label">// The Problem</span>Interview prep for security roles means regurgitating definitions ÔÇö not demonstrating real competence.
            <span class="ps-label">// What It Builds</span>AI-powered mock interview platform with RAG over real security docs ÔåÆ adaptive difficulty ÔåÆ feedback loop ÔåÆ tracks knowledge gaps over time.
            <span class="ps-label">// Why It Matters</span>Built the tool I wish existed when preparing for security roles.
          </div>
          <div class="proj-tags"><span class="proj-tag hl">LangChain</span><span class="proj-tag hl">RAG</span><span class="proj-tag">Python</span><span class="proj-tag">LLM</span></div>
        </div>
      </div>

      <!-- 006 KINORA ÔÇö INNOVATION FEST WINNER -->
      <div class="proj-card pc-winner rv d6">
        <div class="winner-badge"><span class="winner-trophy">­ƒÅå</span>Innovation Fest 2026 Winner</div>
        <div class="proj-thumb"><canvas class="proj-canvas" id="c006" data-type="kinora"></canvas></div>
        <div class="proj-accent"></div>
        <div class="proj-body">
          <div class="proj-meta"><div class="proj-status ps-concluded"><span class="ps-dot"></span>Concluded ┬À May 2026</div><div class="proj-num">006.enc</div></div>
          <div class="innov-tag"><div class="innov-tag-dot"></div>Innovation Fest 2026 &middot; 1st Place Winner</div>
          <div class="proj-enc">project_006.enc ÔåÆ kinora.sys</div>
          <div class="proj-title">KINORA</div>
          <div class="proj-story">
            <span class="ps-label">// The Problem</span>Existing elderly care solutions react to emergencies ÔÇö they don't prevent them. Falls, loneliness, and ┬ú800/wk care homes are pushing families to breaking point.
            <span class="ps-label">// What We Built</span>An AI-powered care ecosystem: a Hub (Raspberry Pi 5, voice AI, fall detection, thermal monitoring), a Pendant (OLED + Snake game to solve wear-stigma), and a Family App for real-time carer alerts. Built and pitched as a complete product with hardware, software, financials, and a go-to-market strategy.
            <span class="ps-label">// My Role</span>Team Leader ┬À Software &amp; Security Engineer ÔÇö system architecture, AI integration, security layer, and leading a 4-person cross-disciplinary team.
            <span class="ps-label">// Outcome</span>Concluded May 2026. Full pitch deck and working prototype delivered.
          </div>
          <div class="proj-tags">
            <span class="proj-tag hl">Raspberry Pi 5</span><span class="proj-tag hl">ESP32</span><span class="proj-tag hl">Team Lead</span><span class="proj-tag">AI / Voice</span><span class="proj-tag">Python</span><span class="proj-tag">Hardware</span><span class="proj-tag">Product Design</span><span class="proj-tag">Fall Detection</span><span class="proj-tag">IoT Security</span>
          </div>
          <div class="proj-hr"></div>
          <div class="proj-link-row"><a class="proj-link" href="mailto:prem@premlodhia.com">Request Pitch Deck ÔåÆ</a></div>
        </div>
      </div>

      <!-- 007 Bridge ÔÇö HIGHLIGHT PROJECT (full-width) -->
      <div class="proj-card pc-purple rv d7" style="grid-column: 1 / -1; max-width: 740px; margin: 0 auto; width: 100%;">
        <div class="proj-thumb" style="height:180px;"><canvas class="proj-canvas" id="c007" data-type="bridge"></canvas></div>
        <div class="proj-accent"></div>
        <div class="proj-body">
          <div class="proj-meta"><div class="proj-status ps-purple"><span class="ps-dot"></span>Live</div><div class="proj-num">007.enc</div></div>
          <div class="proj-enc">project_007.enc ÔåÆ bridge.platform</div>
          <div class="proj-title">Bridge ÔÇö Local Guide Platform</div>
          <div class="proj-story">
            <span class="ps-label">// The Problem</span>Tourists and newcomers are buried in generic, algorithmically-pushed recommendations ÔÇö authentic local knowledge gets drowned out by ads and sponsored listings.
            <span class="ps-label">// What We Built</span>Bridge ÔÇö a community-driven local guide platform. Mobile app for discovering genuine local gems, a full web version for broader access, and a collaborative guide system for verified locals to share authentic, ad-free recommendations. Built with a clean security model and real-time data.
            <span class="ps-label">// Why It Matters</span>Connects communities with newcomers through real local knowledge ÔÇö no ads, no corporate bias. People, not algorithms, curate the experience.
          </div>
          <div class="proj-tags">
            <span class="proj-tag hl">Mobile App</span><span class="proj-tag hl">Web Platform</span><span class="proj-tag hl">Live Site</span><span class="proj-tag">JavaScript</span><span class="proj-tag">Vercel</span><span class="proj-tag">Location Services</span><span class="proj-tag">Community</span><span class="proj-tag">React</span>
          </div>
          <div class="proj-hr"></div>
          <div class="proj-link-row">
            <a class="proj-link" href="https://bridge-final-web-version.vercel.app/" target="_blank">View Live Site ÔåÆ</a>
            <a class="proj-link secondary" href="https://github.com/uffbilxl/bridge-local-guide" target="_blank">Ôåù Web Repo</a>
            <a class="proj-link secondary" href="https://github.com/uffbilxl/mobile-version-of-the-bridge" target="_blank">Ôåù Mobile Repo</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<div class="sep"></div>

<!-- ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ LIVE SOC DASHBOARD ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ -->
<section id="soc" class="section">
  <div class="container">
    <span class="badge rv" style="background:rgba(0,102,255,.05);border-color:rgba(0,102,255,.14);color:rgba(0,102,255,.7);">Live Simulation &middot; SOC Dashboard</span>
    <h2 class="sec-title rv d1"><em style="-webkit-text-fill-color:transparent;background:linear-gradient(90deg,#0066ff,#00d4ff,#0066ff);background-size:200% auto;-webkit-background-clip:text;background-clip:text;animation:shimmer 4s linear infinite;">Security</em><br/>Operations</h2>
    <p class="sec-sub rv d2">A live-simulated SOC dashboard: real-time threat map, alert feed, and detection metrics ÔÇö the kind of tooling a detection engineer actually builds and monitors.</p>
    <div class="soc-dashboard rv d3">
      <div class="soc-topbar">
        <div class="soc-topbar-l">
          <div class="soc-topbar-dots">
            <div class="tdot" style="background:#ff5f57;width:11px;height:11px;border-radius:50%;"></div>
            <div class="tdot" style="background:#febc2e;width:11px;height:11px;border-radius:50%;"></div>
            <div class="tdot" style="background:#28c840;width:11px;height:11px;border-radius:50%;"></div>
          </div>
          <div class="soc-topbar-title">SOC DASHBOARD ┬À prem-sec-ops-center ┬À v2.4.1</div>
        </div>
        <div style="display:flex;gap:14px;align-items:center;">
          <div class="soc-live-badge"><div class="soc-live-dot"></div>LIVE SIM</div>
          <div class="soc-time" id="socClock">00:00:00 UTC</div>
        </div>
      </div>
      <div class="soc-grid">
        <div class="soc-cell soc-map"><div class="soc-cell-title">Global Threat Map</div><canvas id="threatMap"></canvas></div>
        <div class="soc-cell soc-alerts"><div class="soc-cell-title">Alert Feed</div><div class="alert-feed" id="alertFeed"></div></div>
        <div class="soc-cell soc-stats">
          <div class="soc-cell-title">Detection Metrics</div>
          <div class="soc-stats-row">
            <div class="soc-stat"><div class="soc-stat-n" id="stat-events" style="color:var(--green)">0</div><div class="soc-stat-l">Events/min</div><div class="soc-chart-area"><canvas id="chartEvents"></canvas></div></div>
            <div class="soc-stat"><div class="soc-stat-n" id="stat-alerts" style="color:var(--amber)">0</div><div class="soc-stat-l">Open Alerts</div><div class="soc-chart-area"><canvas id="chartAlerts"></canvas></div></div>
            <div class="soc-stat"><div class="soc-stat-n" id="stat-blocked" style="color:var(--cyan)">0</div><div class="soc-stat-l">Blocked</div><div class="soc-chart-area"><canvas id="chartBlocked"></canvas></div></div>
            <div class="soc-stat"><div class="soc-stat-n" id="stat-fp" style="color:var(--purple)">0%</div><div class="soc-stat-l">False Positive Rate</div><div class="soc-chart-area"><canvas id="chartFP"></canvas></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="sep"></div>

<!-- ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ CERTIFICATIONS ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ -->
<section id="certifications" class="section">
  <div class="container">
    <span class="badge rv" style="background:rgba(155,111,255,.05);border-color:rgba(155,111,255,.14);color:rgba(155,111,255,.65);">Verified Credentials &middot; Cisco / IBM / Google</span>
    <h2 class="sec-title rv d1">Credential<br/><em style="-webkit-text-fill-color:transparent;background:linear-gradient(90deg,var(--purple),#d8c5ff,var(--purple));background-size:200% auto;-webkit-background-clip:text;background-clip:text;animation:shimmer 4s linear infinite;">Vault</em></h2>
    <p class="sec-sub rv d2">Certifications across cybersecurity, cloud computing, AI engineering, and design thinking.</p>
    <div class="certs-grid">
      <div class="cert-card rv d1">
        <div class="cert-dot" style="background:var(--green);box-shadow:0 0 10px var(--green);"></div>
        <div class="cert-issuer">Cisco</div>
        <div class="cert-title">Junior Cybersecurity Analyst Career Path</div>
        <div class="cert-date">Mar 2026</div>
        <a class="cert-lnk cl-g" href="https://www.credly.com/badges/c3cbe177-005c-4919-9457-5d5e707e975d/linked_in_profile" target="_blank">Ôåù View Credential</a>
        <!-- Tooltip -->
        <div class="cert-tooltip">
          <div class="ct-header">
            <span class="ct-issuer">Cisco Academy</span>
            <span class="ct-status">Verified Badge</span>
          </div>
          <div class="ct-badge-container">
            <svg class="ct-badge-svg" viewBox="0 0 100 100" width="70" height="70">
              <defs>
                <radialGradient id="ciscoGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#00ff6e" stop-opacity="0.3"/>
                  <stop offset="100%" stop-color="#00ff6e" stop-opacity="0"/>
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="48" fill="url(#ciscoGlow)" stroke="#00ff6e" stroke-width="1.5" stroke-dasharray="3 3"/>
              <circle cx="50" cy="50" r="38" fill="rgba(3,6,11,0.85)" stroke="#00ff6e" stroke-width="2"/>
              <path d="M35 60 L35 40 M41 65 L41 35 M47 70 L47 30 M53 70 L53 30 M59 65 L59 35 M65 60 L65 40" stroke="#00ff6e" stroke-width="2.5" stroke-linecap="round"/>
              <polygon points="50,18 72,25 72,50 50,78 28,50 28,25" fill="none" stroke="#00ff6e" stroke-width="1" stroke-opacity="0.4"/>
            </svg>
          </div>
          <p class="ct-desc">Direct validation on Credly. Verified skills include Security Operations, Incident Response, and Threat Detection.</p>
          <a class="ct-verify-btn btn-g" href="https://www.credly.com/badges/c3cbe177-005c-4919-9457-5d5e707e975d/linked_in_profile" target="_blank">Verify on Credly Ôåù</a>
        </div>
      </div>

      <div class="cert-card rv d2">
        <div class="cert-dot" style="background:var(--cyan);box-shadow:0 0 10px var(--cyan);"></div>
        <div class="cert-issuer">IBM</div>
        <div class="cert-title">Enterprise Design Thinking Practitioner</div>
        <div class="cert-date">Feb 2026</div>
        <a class="cert-lnk cl-c" href="https://www.credly.com/badges/7d19233e-099a-4be5-aaa6-0049e4b72be1/linked_in_profile" target="_blank">Ôåù View Credential</a>
        <!-- Tooltip -->
        <div class="cert-tooltip">
          <div class="ct-header">
            <span class="ct-issuer">IBM Credentials</span>
            <span class="ct-status">Verified Badge</span>
          </div>
          <div class="ct-badge-container">
            <svg class="ct-badge-svg" viewBox="0 0 100 100" width="70" height="70">
              <defs>
                <radialGradient id="ibmGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#00d4ff" stop-opacity="0.3"/>
                  <stop offset="100%" stop-color="#00d4ff" stop-opacity="0"/>
                </radialGradient>
              </defs>
              <polygon points="50,4 90,27 90,73 50,96 10,73 10,27" fill="url(#ibmGlow)" stroke="#00d4ff" stroke-width="1.5"/>
              <polygon points="50,10 82,29 82,71 50,90 18,71 18,29" fill="rgba(3,6,11,0.85)" stroke="#00d4ff" stroke-width="2" stroke-dasharray="2 2"/>
              <g stroke="#00d4ff" stroke-width="3" stroke-linecap="round">
                <line x1="32" y1="40" x2="68" y2="40" />
                <line x1="32" y1="48" x2="68" y2="48" />
                <line x1="32" y1="56" x2="68" y2="56" />
              </g>
            </svg>
          </div>
          <p class="ct-desc">Direct validation on Credly. Verified skills include Agile Collaboration, UX Design, and User-Centered Thinking.</p>
          <a class="ct-verify-btn btn-c" href="https://www.credly.com/badges/7d19233e-099a-4be5-aaa6-0049e4b72be1/linked_in_profile" target="_blank">Verify on Credly Ôåù</a>
        </div>
      </div>

      <div class="cert-card rv d3">
        <div class="cert-dot" style="background:var(--amber);box-shadow:0 0 10px var(--amber);"></div>
        <div class="cert-issuer">IBM</div>
        <div class="cert-title">Fundamentals of AI Agents ┬À RAG &amp; LangChain</div>
        <div class="cert-date">Dec 2025</div>
        <a class="cert-lnk cl-a" href="https://www.coursera.org/account/accomplishments/verify/8MKHMMLFFFA2" target="_blank">Ôåù View Credential</a>
        <!-- Tooltip -->
        <div class="cert-tooltip">
          <div class="ct-header">
            <span class="ct-issuer">IBM / Coursera</span>
            <span class="ct-status">Verified Badge</span>
          </div>
          <div class="ct-badge-container">
            <svg class="ct-badge-svg" viewBox="0 0 100 100" width="70" height="70">
              <defs>
                <radialGradient id="aiGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#ffb020" stop-opacity="0.3"/>
                  <stop offset="100%" stop-color="#ffb020" stop-opacity="0"/>
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="45" fill="url(#aiGlow)" stroke="#ffb020" stroke-width="1.5"/>
              <circle cx="50" cy="50" r="35" fill="rgba(3,6,11,0.85)" stroke="#ffb020" stroke-width="1" stroke-dasharray="4 2"/>
              <g fill="#ffb020" stroke="#ffb020" stroke-width="1">
                <line x1="50" y1="32" x2="35" y2="50" stroke-opacity="0.6"/>
                <line x1="50" y1="32" x2="65" y2="50" stroke-opacity="0.6"/>
                <line x1="35" y1="50" x2="50" y2="68" stroke-opacity="0.6"/>
                <line x1="65" y1="50" x2="50" y2="68" stroke-opacity="0.6"/>
                <line x1="35" y1="50" x2="65" y2="50" stroke-opacity="0.6"/>
                <circle cx="50" cy="32" r="4"/>
                <circle cx="35" cy="50" r="4"/>
                <circle cx="65" cy="50" r="4"/>
                <circle cx="50" cy="68" r="4"/>
              </g>
            </svg>
          </div>
          <p class="ct-desc">Direct verification on Coursera. Verified skills include LLM orchestration, vector search, and RAG architectures.</p>
          <a class="ct-verify-btn btn-a" href="https://www.coursera.org/account/accomplishments/verify/8MKHMMLFFFA2" target="_blank">Verify on Coursera Ôåù</a>
        </div>
      </div>

      <div class="cert-card rv d4">
        <div class="cert-dot" style="background:var(--amber);box-shadow:0 0 10px var(--amber);"></div>
        <div class="cert-issuer">IBM</div>
        <div class="cert-title">Generative AI: Introduction &amp; Applications</div>
        <div class="cert-date">Dec 2025</div>
        <a class="cert-lnk cl-a" href="https://www.coursera.org/account/accomplishments/verify/RZNHH7T2HKZZ" target="_blank">Ôåù View Credential</a>
        <!-- Tooltip -->
        <div class="cert-tooltip">
          <div class="ct-header">
            <span class="ct-issuer">IBM / Coursera</span>
            <span class="ct-status">Verified Badge</span>
          </div>
          <div class="ct-badge-container">
            <svg class="ct-badge-svg" viewBox="0 0 100 100" width="70" height="70">
              <defs>
                <radialGradient id="genAiGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#ffb020" stop-opacity="0.3"/>
                  <stop offset="100%" stop-color="#ffb020" stop-opacity="0"/>
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="45" fill="url(#genAiGlow)" stroke="#ffb020" stroke-width="1.5"/>
              <circle cx="50" cy="50" r="35" fill="rgba(3,6,11,0.85)" stroke="#ffb020" stroke-width="1.5" stroke-dasharray="3 3"/>
              <!-- Sparkles -->
              <path d="M50 30 L50 70 M30 50 L70 50 M40 40 L60 60 M40 60 L60 40" stroke="#ffb020" stroke-width="2.5" stroke-linecap="round" stroke-opacity="0.8"/>
            </svg>
          </div>
          <p class="ct-desc">Direct verification on Coursera. Verified skills include Prompt Engineering, LLM properties, and GenAI applications.</p>
          <a class="ct-verify-btn btn-a" href="https://www.coursera.org/account/accomplishments/verify/RZNHH7T2HKZZ" target="_blank">Verify on Coursera Ôåù</a>
        </div>
      </div>

      <div class="cert-card rv d5">
        <div class="cert-dot" style="background:var(--cyan);box-shadow:0 0 10px var(--cyan);"></div>
        <div class="cert-issuer">IBM</div>
        <div class="cert-title">Introduction to Cloud Computing</div>
        <div class="cert-date">Dec 2025</div>
        <a class="cert-lnk cl-c" href="https://www.coursera.org/account/accomplishments/verify/XP16NS40GQ93" target="_blank">Ôåù View Credential</a>
        <!-- Tooltip -->
        <div class="cert-tooltip">
          <div class="ct-header">
            <span class="ct-issuer">IBM / Coursera</span>
            <span class="ct-status">Verified Badge</span>
          </div>
          <div class="ct-badge-container">
            <svg class="ct-badge-svg" viewBox="0 0 100 100" width="70" height="70">
              <defs>
                <radialGradient id="cloudGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#00d4ff" stop-opacity="0.3"/>
                  <stop offset="100%" stop-color="#00d4ff" stop-opacity="0"/>
                </radialGradient>
              </defs>
              <rect x="15" y="15" width="70" height="70" rx="10" fill="url(#cloudGlow)" stroke="#00d4ff" stroke-width="1.5"/>
              <rect x="25" y="25" width="50" height="50" rx="6" fill="rgba(3,6,11,0.85)" stroke="#00d4ff" stroke-width="2"/>
              <!-- Cloud curves -->
              <path d="M40 55 a6 6 0 0 1 6 -6 a8 8 0 0 1 14 0 a6 6 0 0 1 0 12 L40 61 Z" fill="#00d4ff" opacity="0.8"/>
            </svg>
          </div>
          <p class="ct-desc">Direct verification on Coursera. Verified skills include Cloud Models (IaaS/PaaS/SaaS), DevOps, and virtualization.</p>
          <a class="ct-verify-btn btn-c" href="https://www.coursera.org/account/accomplishments/verify/XP16NS40GQ93" target="_blank">Verify on Coursera Ôåù</a>
        </div>
      </div>

      <div class="cert-card rv d6">
        <div class="cert-dot" style="background:var(--purple);box-shadow:0 0 10px var(--purple);"></div>
        <div class="cert-issuer">Google</div>
        <div class="cert-title">Google AI Essentials</div>
        <div class="cert-date">Dec 2025</div>
        <a class="cert-lnk cl-p" href="https://grow.google/certificates/ai-essentials/" target="_blank">Ôåù View Programme</a>
        <!-- Tooltip -->
        <div class="cert-tooltip">
          <div class="ct-header">
            <span class="ct-issuer">Google AI Academy</span>
            <span class="ct-status">Verified Badge</span>
          </div>
          <div class="ct-badge-container">
            <svg class="ct-badge-svg" viewBox="0 0 100 100" width="70" height="70">
              <defs>
                <radialGradient id="googleGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#9b6fff" stop-opacity="0.3"/>
                  <stop offset="100%" stop-color="#9b6fff" stop-opacity="0"/>
                </radialGradient>
              </defs>
              <polygon points="50,8 92,50 50,92 8,50" fill="url(#googleGlow)" stroke="#9b6fff" stroke-width="1.5"/>
              <circle cx="50" cy="50" r="28" fill="rgba(3,6,11,0.85)" stroke="#9b6fff" stroke-width="2"/>
              <!-- Google G shape (simplified representation) -->
              <path d="M50 40 a10 10 0 0 0 -10 10 a10 10 0 0 0 10 10 h6 v-6 h-6 v-4 h10 Z" fill="#9b6fff" opacity="0.9"/>
            </svg>
          </div>
          <p class="ct-desc">Direct validation on Google Academy. Verified skills include Prompting, AI productivity, and ethical AI implementation.</p>
          <a class="ct-verify-btn btn-p" href="https://grow.google/certificates/ai-essentials/" target="_blank">Verify Badge Ôåù</a>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="sep"></div>

<!-- ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ TERMINAL ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ -->
<section id="terminal-sec">
  <div class="container">
    <span class="badge rv">Interactive Terminal &middot; Type a Command</span>
    <h2 class="sec-title rv d1">Explore<br/><em>the Portfolio</em></h2>
    <p class="sec-sub rv d2">Type a command to navigate. Try: <code style="font-family:var(--FM);font-size:12px;color:var(--green);">help</code> to see all available commands.</p>
    <div class="iterm-wrap rv d3">
      <div class="iterm-bar">
        <div class="tdot" style="background:#ff5f57;width:11px;height:11px;border-radius:50%;"></div>
        <div class="tdot" style="background:#febc2e;width:11px;height:11px;border-radius:50%;"></div>
        <div class="tdot" style="background:#28c840;width:11px;height:11px;border-radius:50%;"></div>
        <div class="iterm-title">portfolio@prem-sec:~$ interactive-shell v1.0</div>
      </div>
      <div class="iterm-body" id="itermBody"></div>
      <div class="iterm-input-row">
        <div class="iterm-prompt">prem@sec:~$</div>
        <input class="iterm-input" id="itermInput" type="text" placeholder="Type a command..." autocomplete="off" spellcheck="false" />
      </div>
      <div class="iterm-cmds">
        <button class="icmd" data-cmd="help">help</button>
        <button class="icmd" data-cmd="projects">projects</button>
        <button class="icmd" data-cmd="skills">skills</button>
        <button class="icmd" data-cmd="contact">contact</button>
        <button class="icmd" data-cmd="about">about</button>
        <button class="icmd" data-cmd="certs">certs</button>
        <button class="icmd" data-cmd="soc">soc</button>
        <button class="icmd" data-cmd="blog">blog</button>
        <button class="icmd" data-cmd="whoami">whoami</button>
        <button class="icmd" data-cmd="clear">clear</button>
      </div>
    </div>
  </div>
</section>

<div class="sep"></div>

<!-- ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ CONTACT ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ -->
<section id="contact" class="section">
  <div class="container">
    <span class="badge rv">Secure Channel &middot; Contact Terminal</span>
    <h2 class="sec-title rv d1">Contact<br/><em>Terminal</em></h2>
    <p class="sec-sub rv d2">Open secure channels for opportunities, collaboration, project discussion, or recruitment.</p>
    <div class="contact-grid">
      <div class="contact-term glass rv d2">
        <div class="cf-bar">
          <span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;flex-shrink:0;"></span>
          <span style="width:10px;height:10px;border-radius:50%;background:#febc2e;flex-shrink:0;"></span>
          <span style="width:10px;height:10px;border-radius:50%;background:#28c840;flex-shrink:0;"></span>
          <span class="cf-title-txt">transmit@prem-sec:~$ compose --encrypted</span>
        </div>
        <div class="cf-body">
          <form id="cfForm" action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT" method="POST">
            <input type="hidden" name="_replyto" />
            <div class="cf-row">
              <div class="cf-field"><label class="cf-lbl">// Sender Name</label><input class="cf-input" id="cfName" name="name" type="text" placeholder="Your name" required /></div>
              <div class="cf-field"><label class="cf-lbl">// Return Address</label><input class="cf-input" id="cfEmail" name="email" type="email" placeholder="your@email.com" required /></div>
            </div>
            <div class="cf-field"><label class="cf-lbl">// Message Payload</label><textarea class="cf-area" id="cfMsg" name="message" placeholder="Type your message..." required></textarea></div>
            <button type="submit" class="cf-submit" id="cfBtn">Ô¼í Transmit Message</button>
            <div class="cf-status" id="cfStatus"></div>
          </form>
        </div>
      </div>
      <div class="contact-links rv d3">
        <a class="cl-card glass" href="mailto:prem@premlodhia.com"><div class="cl-ch">Channel 01</div><div class="cl-name">Email</div><div class="cl-detail">prem@premlodhia.com</div></a>
        <a class="cl-card glass" href="https://www.linkedin.com/in/prem-lodhia-29a888382/" target="_blank"><div class="cl-ch">Channel 02</div><div class="cl-name">LinkedIn</div><div class="cl-detail">Connect professionally</div></a>
        <a class="cl-card glass" href="https://github.com/PremKLodhia" target="_blank"><div class="cl-ch">Channel 03</div><div class="cl-name">GitHub</div><div class="cl-detail">View repositories and labs</div></a>
        <a class="cl-card glass" style="border-color:rgba(255,255,255,.05); opacity:0.5; cursor:not-allowed; pointer-events:none;" title="New CV building in progress"><div class="cl-ch">Channel 04</div><div class="cl-name" style="color:rgba(196,216,224,.4);">New CV in Progress</div><div class="cl-detail">Building... &middot; PDF</div></a>
      </div>
    </div>
  </div>
</section>

<!-- ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ FOOTER ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ -->
<footer>
  <div class="footer-i">
    <div class="footer-brand">PL</div>
    <div>
      <div class="footer-copy">┬® 2026 Prem Lodhia ┬À Cloud Security Engineer</div>
      <div class="footer-status"><div class="footer-status-dot"></div>System Online ┬À All Systems Nominal</div>
    </div>
    <nav class="footer-links">
      <a class="footer-link" href="https://github.com/PremKLodhia" target="_blank">GitHub</a>
      <a class="footer-link" href="https://www.linkedin.com/in/prem-lodhia-29a888382/" target="_blank">LinkedIn</a>
      <a class="footer-link" href="Prem_Lodhia_CV_AI_Updated-6 (1) copy.pdf" download>CV</a>
    </nav>
  </div>
</footer>

<!-- DEFCON Warning Overlay -->
<div class="defcon-overlay" id="defconOverlay">
  <div class="defcon-bg"></div>
  <div class="defcon-scanline"></div>
  <div class="defcon-box">
    <div class="defcon-title">[!] CRITICAL SYSTEM ALERT: DEFCON 1 ACTIVE</div>
    <div class="defcon-msg">INTRUSION SIMULATION TRIGGERED VIA KEYBOARD EXPLOIT. SIEM LOG GENERATOR STARTED. WEBAUDIO SIREN ENGAGED.</div>
    <div class="defcon-logs" id="defconLogs">
      <div>[00:00.01] SYSTEM INTRUSION DETECTED...</div>
      <div>[00:00.12] OVERRIDING ACCENT COLORS TO EMERGENCY STATE...</div>
      <div>[00:00.35] SYNTHESIZING DURESS SIREN FREQUENCIES...</div>
      <div>[00:00.55] INITIALIZING CONTAINMENT PROTOCOL...</div>
    </div>
    <button class="defcon-disarm-btn" id="defconDisarmBtn">DISARM &amp; CONTAIN SYSTEM</button>
  </div>
</div>

<!-- MITRE ATT&CK Matrix Detail Drawer -->
<div class="mitre-drawer" id="mitreDrawer">
  <button class="mitre-drawer-close" id="mitreDrawerClose">Ô£ò Close Drawer</button>
  <div class="mitre-drawer-badge" id="mitreDrawerBadge">T1021.002</div>
  <h3 class="mitre-drawer-title" id="mitreDrawerTitle">SMB Lateral Movement</h3>
  <div class="mitre-drawer-divider"></div>
  <div class="mitre-drawer-section">
    <span class="mitre-drawer-label">Technique Description</span>
    <p class="mitre-drawer-text" id="mitreDrawerDesc">Threat actors use SMB to execute commands or transfer files laterally across internal networks.</p>
  </div>
  <div class="mitre-drawer-section">
    <span class="mitre-drawer-label">Detection Method</span>
    <p class="mitre-drawer-text" id="mitreDrawerDetection">Monitor port 445 traffic for spikes or abnormal host traversal. Map logs to Splunk alerts using lateral_movement.yar rules.</p>
  </div>
  <div class="mitre-drawer-section">
    <span class="mitre-drawer-label">Prem's Practical Application</span>
    <p class="mitre-drawer-text" id="mitreDrawerPractice">Engineered a Docker container lab environment mimicking corporate LAN. Simulated SMB credential dumping and tuned Splunk alarms to eliminate false-positive telemetry.</p>
  </div>
</div>

<!-- Voice Navigation Float -->
<button class="voice-nav-toggle" id="voiceNavToggle" title="Voice Control Mode">
  <span class="voice-nav-icon">­ƒÄñ</span>
  <span class="vn-pulse"></span>
</button>
<div class="voice-nav-status" id="voiceNavStatus">Voice Navigation Off</div>

<!-- Ask Prem Chatbot Widget -->
<div class="ask-prem-widget" id="askPremWidget">
  <button class="ask-prem-toggle" id="askPremToggle" title="Ask Prem AI Assistant">
    <span class="ask-prem-icon">­ƒÆ¼</span>
    <span class="ask-prem-badge" id="askPremBadge">AI</span>
  </button>
  <div class="ask-prem-window" id="askPremWindow">
    <div class="chat-header">
      <div class="chat-header-info">
        <div class="chat-status-dot"></div>
        <div>
          <div class="chat-header-title">Ask Prem AI</div>
          <div class="chat-header-status">Client-side NLP Engine</div>
        </div>
      </div>
      <button class="chat-settings-btn" id="chatSettingsBtn" title="API Settings">ÔÜÖ´©Å</button>
    </div>
    
    <!-- Settings Panel for Gemini Key -->
    <div class="chat-settings-panel" id="chatSettingsPanel">
      <div class="settings-title">Gemini API Key</div>
      <div class="settings-desc">Optionally enter a Google Gemini API Key to enable cloud AI capability.</div>
      <div class="settings-sec-note" style="font-size: 9px; color: var(--cyan); margin-bottom: 8px; line-height: 1.3; background: rgba(0, 212, 255, 0.05); padding: 6px 10px; border-radius: 4px; border: 1px solid rgba(0, 212, 255, 0.15)">
        <strong>­ƒöÆ Security Notice:</strong> Your key is stored strictly in your browser's local storage and is only ever sent directly to Google's secure API endpoint.
      </div>
      <input type="password" id="geminiApiKeyInput" placeholder="AIzaSy..." />
      <div class="settings-actions">
        <button class="save-key-btn" id="saveKeyBtn">Save Key</button>
        <button class="clear-key-btn" id="clearKeyBtn">Clear Key</button>
      </div>
    </div>
    
    <div class="chat-body" id="chatBody">
      <div class="chat-msg system">
        Hi! I'm Prem's AI agent. Ask me about Prem's projects, skills, certifications, experience, or career goals.
      </div>
    </div>
    
    <div class="chat-input-area">
      <input type="text" id="chatInput" placeholder="Type a message..." autocomplete="off" />
      <button class="chat-send-btn" id="chatSendBtn">Send</button>
    </div>
  </div>
</div>

<!-- ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ SCRIPTS ÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉÔòÉ -->
<script>
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

