/**
 * Ambient backdrop: one low-resolution fragment shader behind every section
 * between the hero and contact. Slow domain-warped light, two drifting star
 * layers with scroll parallax that streak with scroll speed, and a tint that
 * follows the section in view ([data-ambient]).
 *
 * It renders at a fraction of screen resolution (the blur is part of the
 * look), idles at ~30 fps when the page is still, and stops whenever the
 * Core stage covers it or the tab is hidden. Without WebGL a CSS gradient
 * stands in.
 */
import { addFrameTask } from '../lib/frame.js';
import { clamp } from '../lib/env.js';

const TINTS = {
  ion: [[0.5, 0.9, 1.0], [0.23, 0.42, 1.0]],
  cobalt: [[0.23, 0.42, 1.0], [0.5, 0.9, 1.0]],
  amber: [[0.95, 0.72, 0.4], [1.0, 0.48, 0.48]],
  mint: [[0.5, 0.94, 0.72], [0.5, 0.9, 1.0]],
  violet: [[0.55, 0.45, 1.0], [0.5, 0.9, 1.0]],
};

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() { vUv = aPos * 0.5 + 0.5; gl_Position = vec4(aPos, 0.0, 1.0); }`;

const FRAG = `
precision mediump float;
varying vec2 vUv;
uniform vec2 uRes;
uniform float uTime;
uniform float uScroll;
uniform float uVel;
uniform vec3 uTintA;
uniform vec3 uTintB;
uniform vec2 uPointer;

float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
  return v;
}
float stars(vec2 p, float scale, float density, float vel) {
  vec2 g = p * scale;
  vec2 id = floor(g);
  vec2 f = fract(g) - 0.5;
  float r = hash(id);
  vec2 d = f - (vec2(hash(id + 3.1), hash(id + 7.7)) - 0.5) * 0.6;
  d.y /= 1.0 + vel;
  float s = smoothstep(0.075, 0.0, length(d)) * step(density, r);
  return s * (0.45 + 0.55 * sin(uTime * (0.6 + r * 1.8) + r * 40.0));
}

void main() {
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2((vUv.x - 0.5) * aspect, vUv.y - 0.5);
  float t = uTime * 0.035;
  float speed = min(abs(uVel), 1.5);

  // Light: domain-warped noise that drifts slowly against the scroll.
  vec2 q = p * 1.25 + vec2(0.0, uScroll * 0.1);
  vec2 w = vec2(fbm(q + t), fbm(q + vec2(5.2, 1.3) - t));
  float n = fbm(q + 1.7 * w + vec2(0.0, t * 1.5));
  float glow = smoothstep(0.42, 1.0, n);
  vec3 tint = mix(uTintA, uTintB, smoothstep(0.2, 0.8, w.x));

  vec3 col = vec3(0.0235, 0.0314, 0.0431);
  col += tint * glow * (0.13 + speed * 0.05);
  // A faint ridge where the warped field folds, like light on a surface.
  col += tint * smoothstep(0.02, 0.0, abs(n - 0.62)) * 0.035;

  // Stars: far layer drifts slowly, near layer faster; both streak with speed.
  float streak = min(speed, 1.0);
  col += vec3(0.75, 0.9, 1.0) * stars(p + vec2(0.0, uScroll * 0.18), 34.0, 0.86, streak * 1.2) * 0.32;
  col += mix(vec3(1.0), tint, 0.4) * stars(p + vec2(0.0, uScroll * 0.42) + 3.7, 17.0, 0.9, streak * 2.6) * 0.5;

  // Pointer light.
  vec2 m = vec2(uPointer.x * 0.5 * aspect, uPointer.y * 0.5);
  col += tint * exp(-length(p - m) * 3.2) * 0.045;

  // Vignette and dither against banding.
  col *= 1.0 - 0.45 * length(p * vec2(0.55, 0.9));
  col += (hash(gl_FragCoord.xy + fract(uTime)) - 0.5) / 255.0 * 1.5;
  gl_FragColor = vec4(col, 1.0);
}`;

function compile(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) || 'shader');
  return s;
}

export function initAmbient({ motion }) {
  const root = document.querySelector('.ambient');
  const canvas = root?.querySelector('canvas');
  if (!canvas) return;

  const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false, stencil: false, powerPreference: 'low-power', preserveDrawingBuffer: false });
  if (!gl) {
    root.classList.add('ambient--static');
    return;
  }

  let prog;
  try {
    prog = gl.createProgram();
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error('link');
  } catch (err) {
    root.classList.add('ambient--static');
    return;
  }
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(prog, 'aPos');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const u = {};
  ['uRes', 'uTime', 'uScroll', 'uVel', 'uTintA', 'uTintB', 'uPointer'].forEach((n) => (u[n] = gl.getUniformLocation(prog, n)));

  // Coarse pointers (phones, tablets) get fewer pixels; the field is soft anyway.
  const scale = window.matchMedia('(pointer: coarse)').matches ? 0.38 : 0.5;
  const size = () => {
    const w = Math.max(1, Math.round(window.innerWidth * scale));
    const h = Math.max(1, Math.round(window.innerHeight * scale));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
    }
  };

  // Tint follows whichever [data-ambient] section crosses the middle of the screen.
  const tintA = [...TINTS.ion[0]];
  const tintB = [...TINTS.ion[1]];
  // Sections nest (a case inside Selected work), so the innermost one wins.
  let target = TINTS.ion;
  const active = new Set();
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => (e.isIntersecting ? active.add(e.target) : active.delete(e.target)));
      let pick = null;
      active.forEach((el) => {
        if (!pick || pick.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING) pick = el;
      });
      if (pick) target = TINTS[pick.dataset.ambient] || TINTS.ion;
    },
    { rootMargin: '-50% 0px -50% 0px' }
  );
  document.querySelectorAll('[data-ambient]').forEach((el) => io.observe(el));

  let scrollY = window.scrollY;
  let vel = 0;
  let lastScrollAt = 0;
  let px = 0;
  let py = 0;
  let tx = 0;
  let ty = 0;
  let covered = false;
  let raf = 0;
  let last = 0;
  let time = 0;

  const render = () => {
    size();
    gl.uniform2f(u.uRes, canvas.width, canvas.height);
    gl.uniform1f(u.uTime, time);
    gl.uniform1f(u.uScroll, scrollY / window.innerHeight);
    gl.uniform1f(u.uVel, vel);
    gl.uniform3fv(u.uTintA, tintA);
    gl.uniform3fv(u.uTintB, tintB);
    gl.uniform2f(u.uPointer, px, py);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  const frame = (now) => {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - (last || now)) / 1000, 0.1);
    // Idle at about 30 fps; run at full rate while scrolling or the tint is moving.
    const busy = now - lastScrollAt < 400 || Math.abs(vel) > 0.002;
    if (!busy && now - last < 32) return;
    last = now;
    time += dt;
    vel *= Math.pow(0.02, dt);
    px += (tx - px) * Math.min(1, dt * 3);
    py += (ty - py) * Math.min(1, dt * 3);
    const k = Math.min(1, dt * 2.5);
    for (let i = 0; i < 3; i++) {
      tintA[i] += (target[0][i] - tintA[i]) * k;
      tintB[i] += (target[1][i] - tintB[i]) * k;
    }
    render();
  };

  const start = () => {
    if (raf || !motion || covered || document.hidden) return;
    last = 0;
    raf = requestAnimationFrame(frame);
  };
  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  addFrameTask({
    read: () => window.scrollY,
    write(y) {
      const dy = (y - scrollY) / window.innerHeight;
      scrollY = y;
      if (!motion) {
        // A still frame per scroll: parallax only, no streaks.
        render();
        return;
      }
      if (dy) {
        vel = clamp(vel * 0.6 + dy * 2.5, -1.5, 1.5);
        lastScrollAt = performance.now();
      }
    },
  });

  if (motion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener(
      'pointermove',
      (e) => {
        tx = (e.clientX / window.innerWidth) * 2 - 1;
        ty = -((e.clientY / window.innerHeight) * 2 - 1);
      },
      { passive: true }
    );
  }

  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  window.addEventListener('resize', () => !raf && render(), { passive: true });
  canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    stop();
    root.classList.add('ambient--static');
  });

  render();
  root.classList.add('is-live');
  start();

  return {
    /** The Core stage reports when it fully covers the backdrop. */
    setCovered(value) {
      if (value === covered) return;
      covered = value;
      if (covered) stop();
      else start();
    },
  };
}
