/**
 * KINORA: a stylised, looping simulation of the pendant at work.
 *
 * A person walks to a chair and sits down quickly; the accelerometer spikes
 * but the model classifies it as benign. They stand, walk on, and fall: free
 * fall, then an impact spike through the threshold. The pendant raises an
 * SOS, the family app gets a push alert and the clinician dashboard triages
 * it. The case-study list beside the stage ([data-phase]) lights up in step.
 *
 * Illustrative only: the figure, signal and timings are synthetic.
 */
import { COLORS, MONO, rng } from './mount.js';

const LOOP = 15.6;
const RATE = 50; // accelerometer samples per second
const MAX_G = 4.2;
const THRESHOLD = 2.5;

// Loop timeline, in seconds.
const T = {
  walkA: [0, 2.6],
  sit: [2.6, 3.3],
  sitSpike: 3.12,
  stand: [5.0, 5.7],
  walkB: [5.7, 8.0],
  fall: [8.0, 8.55],
  alert: 9.3,
  clinic: 10.8,
  respond: 12.6,
  fadeOut: 14.7,
};

const smooth = (t) => t * t * (3 - 2 * t);
const clamp01 = (t) => Math.min(1, Math.max(0, t));
const span = (t, [a, b]) => clamp01((t - a) / (b - a));
const gauss = (t, c, w) => Math.exp(-(((t - c) / w) ** 2));

const POSES = {
  stand: { lean: 0.03, hipL: 0.02, hipR: -0.02, kneeL: 0.06, kneeR: 0.06, shL: 0.1, shR: -0.06, elL: 0.2, elR: 0.2 },
  sit: { lean: -0.1, hipL: 1.5, hipR: 1.42, kneeL: 1.5, kneeR: 1.38, shL: 0.45, shR: 0.3, elL: 0.95, elR: 1.05 },
  brace: { lean: 0.25, hipL: 0.35, hipR: -0.25, kneeL: 0.5, kneeR: 0.25, shL: 2.3, shR: 2.0, elL: 0.25, elR: 0.35 },
  lying: { lean: 0.05, hipL: 0.15, hipR: -0.05, kneeL: 0.55, kneeR: 0.12, shL: 2.6, shR: 2.2, elL: 0.3, elR: 0.5 },
};

const mix = (a, b, t) => {
  const out = {};
  for (const k in a) out[k] = a[k] + (b[k] - a[k]) * t;
  return out;
};

function walkPose(phase) {
  const s = Math.sin(phase);
  const c = Math.cos(phase);
  return {
    lean: 0.07,
    hipL: 0.4 * s,
    hipR: -0.4 * s,
    kneeL: 0.08 + 0.7 * Math.max(0, c) ** 2,
    kneeR: 0.08 + 0.7 * Math.max(0, -c) ** 2,
    shL: -0.38 * s,
    shR: 0.38 * s,
    elL: 0.3 + 0.2 * Math.max(0, -s),
    elR: 0.3 + 0.2 * Math.max(0, s),
  };
}

export function kinoraViz(ctx, { motion } = {}) {
  const root = ctx.canvas.closest('[data-kinora]');
  const article = ctx.canvas.closest('article');
  const modelChip = root?.querySelector('[data-kn-model]');
  const cards = root ? [...root.querySelectorAll('[data-kn-card]')] : [];
  const alertBody = root?.querySelector('[data-kn-alert-body]');
  const alertMeta = root?.querySelector('[data-kn-alert-meta]');
  const rand = rng(11);

  let w = 0;
  let h = 0;
  let clock = 0; // total seconds, for the trace
  let loopT = 0; // seconds into the current loop
  let walkPhase = 0;
  let lastX = null;
  let sampleAcc = 0;
  const samples = [];
  const marks = [];
  let state = {};

  // --- Layout ---------------------------------------------------------------
  const layout = () => {
    // Portrait stages (phones) keep the top band clear for the notifications.
    const portrait = h > w * 1.15;
    const sceneTop = h * (portrait ? 0.36 : 0.15);
    const floor = h * (portrait ? 0.68 : 0.6);
    const H = (floor - sceneTop) * 0.8;
    const x0 = w * 0.16;
    const chairX = w * 0.76;
    const fallX = Math.max(w * 0.36, w * 0.06 + H * 0.92);
    const trace = portrait
      ? { left: 12, right: w - 12, top: h * 0.77, bottom: h * 0.955 }
      : { left: 14, right: w - 14, top: h * 0.69, bottom: h * 0.94 };
    return { floor, H, x0, chairX, fallX, trace };
  };

  // --- DOM sync ---------------------------------------------------------------
  const setModel = (text, tone) => {
    if (!modelChip || state.model === text) return;
    state.model = text;
    modelChip.textContent = text;
    modelChip.dataset.tone = tone;
  };
  const setPhase = (phase) => {
    if (!article || state.phase === phase) return;
    state.phase = phase;
    if (phase) article.dataset.phase = phase;
    else delete article.dataset.phase;
  };
  const showCard = (name, on) => cards.forEach((c) => c.dataset.knCard === name && c.classList.toggle('is-on', on));
  const setResponding = (on) => {
    if (state.responding === on) return;
    state.responding = on;
    if (alertBody) alertBody.textContent = on ? 'Sarah is calling Mum now' : 'Living room · 3.7 g impact · 0.97';
    if (alertMeta) alertMeta.textContent = on ? 'Acknowledged in 0:21' : 'GPS fix · battery 82%';
    root?.querySelector('[data-kn-card="alert"]')?.classList.toggle('is-ack', on);
  };

  const syncDom = (t) => {
    if (t < T.sit[0]) setModel('Activity · walking', 'idle');
    else if (t < T.stand[0]) setModel(t < T.sitSpike ? 'Activity · sitting down' : 'Sit-down · benign · 0.91', t < T.sitSpike ? 'idle' : 'ok');
    else if (t < T.fall[0] + 0.08) setModel('Activity · walking', 'idle');
    else if (t < T.fall[1]) setModel('Free fall detected', 'warn');
    else if (t < T.fadeOut + 0.6) setModel('Impact fall · 0.97 · SOS sent', 'alert');
    else setModel('Activity · walking', 'idle');

    if (t >= T.fadeOut) setPhase(null);
    else if (t >= T.clinic) setPhase('clinic');
    else if (t >= T.alert) setPhase('family');
    else if ((t >= T.sitSpike && t < T.stand[0]) || t >= T.fall[0]) setPhase('model');
    else setPhase('pendant');

    showCard('alert', t >= T.alert && t < T.fadeOut);
    showCard('clinic', t >= T.clinic && t < T.fadeOut);
    setResponding(t >= T.respond && t < T.fadeOut + 1);
  };

  // --- Synthetic accelerometer magnitude, in g -------------------------------
  const accel = (t) => {
    let g = 1 + (rand() - 0.5) * 0.035;
    const walking = (t > 0.15 && t < T.walkA[1]) || (t > T.walkB[0] && t < T.walkB[1]);
    if (walking) g += 0.26 * Math.max(0, Math.cos(2 * state.samplePhase)) ** 4 - 0.07 + (rand() - 0.5) * 0.05;
    g += 0.95 * gauss(t, T.sitSpike, 0.045) - 0.22 * gauss(t, T.sitSpike - 0.16, 0.07);
    g += 0.32 * gauss(t, 5.32, 0.1);
    // Free fall pulls the magnitude toward zero, then the impact.
    const ff = smooth(clamp01((t - 8.06) / 0.14)) * (1 - smooth(clamp01((t - 8.44) / 0.1)));
    g = g * (1 - ff) + (0.2 + (rand() - 0.5) * 0.04) * ff;
    const it = t - 8.56;
    g += 2.75 * gauss(t, 8.56, 0.03);
    if (it > 0) g += 0.55 * Math.exp(-it * 7) * Math.sin(it * 48);
    if (t > 8.9) g = 1 + (rand() - 0.5) * 0.02;
    return Math.max(0, g);
  };

  const pushSample = () => {
    const g = accel(loopT);
    samples.push({ t: clock, g });
    if (!state.markedSit && loopT >= T.sitSpike) {
      state.markedSit = true;
      marks.push({ t: clock, g: 1.92, text: '1.9 g · benign', color: COLORS.alloy });
    }
    if (!state.markedFall && loopT >= 8.56) {
      state.markedFall = true;
      marks.push({ t: clock, g: 3.72, text: '3.7 g · impact', color: COLORS.danger });
    }
  };

  // --- Simulation step ------------------------------------------------------------
  const advance = (dt) => {
    clock += dt;
    loopT += dt;
    if (loopT >= LOOP) {
      loopT -= LOOP;
      state = { model: state.model, phase: state.phase, responding: state.responding };
      lastX = null;
    }
    const L = layout();
    const x = figureX(loopT, L);
    if (lastX !== null) walkPhase += (Math.abs(x - lastX) / (L.H * 0.95)) * Math.PI;
    lastX = x;

    sampleAcc += dt;
    while (sampleAcc >= 1 / RATE) {
      sampleAcc -= 1 / RATE;
      state.samplePhase = walkPhase;
      pushSample();
    }
    const windowS = (L.trace.right - L.trace.left) / speed() + 1;
    while (samples.length && samples[0].t < clock - windowS) samples.shift();
    while (marks.length && marks[0].t < clock - windowS) marks.shift();
    syncDom(loopT);
  };

  const speed = () => Math.max(60, w * 0.17);

  const figureX = (t, L) => {
    if (t < T.walkA[1]) return L.x0 + (L.chairX - L.x0) * span(t, T.walkA);
    if (t < T.walkB[0]) return L.chairX;
    return L.chairX + (L.fallX - L.chairX) * smooth(span(t, T.walkB)) ** 0.85;
  };

  // --- Figure ----------------------------------------------------------------------
  const figure = (t, L) => {
    const dir = t < T.walkA[1] ? 1 : -1;
    let pose;
    let fall = 0;
    if (t < T.walkA[1] - 0.15) pose = walkPose(walkPhase);
    else if (t < T.sit[0]) pose = mix(walkPose(walkPhase), POSES.stand, span(t, [T.walkA[1] - 0.15, T.sit[0]]));
    else if (t < T.sit[1]) pose = mix(POSES.stand, POSES.sit, smooth(span(t, T.sit)));
    else if (t < T.stand[0]) pose = POSES.sit;
    else if (t < T.stand[1]) pose = mix(POSES.sit, POSES.stand, smooth(span(t, T.stand)));
    else if (t < T.walkB[0] + 0.2) pose = mix(POSES.stand, walkPose(walkPhase), span(t, [T.walkB[0], T.walkB[0] + 0.2]));
    else if (t < T.fall[0]) pose = walkPose(walkPhase);
    else if (t < T.fall[1]) {
      const u = span(t, T.fall);
      pose = mix(walkPose(walkPhase), POSES.brace, smooth(Math.min(1, u * 1.6)));
      fall = 1.45 * u * u;
    } else {
      const u = t - T.fall[1];
      pose = mix(POSES.brace, POSES.lying, smooth(clamp01(u / 0.35)));
      fall = 1.45 - (u < 0.28 ? 0.07 * Math.sin((Math.PI * u) / 0.28) : 0);
    }
    return { x: figureX(t, L), dir, pose, fall };
  };

  // Forward kinematics; angles are measured from straight down, forward positive.
  const skeleton = ({ x, dir, pose, fall }, L) => {
    const H = L.H;
    const v = (a, len) => [Math.sin(a) * dir * len * H, Math.cos(a) * len * H];
    const legs = ['L', 'R'].map((s) => {
      const knee = v(pose['hip' + s], 0.245);
      const shin = v(pose['hip' + s] - pose['knee' + s], 0.235);
      return { knee, foot: [knee[0] + shin[0], knee[1] + shin[1]] };
    });
    const ground = Math.max(legs[0].foot[1], legs[1].foot[1]);
    const hip = [x, L.floor - ground];
    const up = [Math.sin(pose.lean) * dir * 0.3 * H, -Math.cos(pose.lean) * 0.3 * H];
    const sh = [hip[0] + up[0], hip[1] + up[1]];
    const head = [sh[0] + up[0] * 0.36, sh[1] + up[1] * 0.36 - 0.06 * H];
    const add = (p, d) => [p[0] + d[0], p[1] + d[1]];
    const pts = {
      hip,
      sh,
      head,
      pendant: [hip[0] + up[0] * 0.8 + Math.sin(pose.lean + 1.4) * dir * 0.035 * H, hip[1] + up[1] * 0.8],
      kneeL: add(hip, legs[0].knee),
      footL: add(hip, legs[0].foot),
      kneeR: add(hip, legs[1].knee),
      footR: add(hip, legs[1].foot),
    };
    ['L', 'R'].forEach((s) => {
      const e = v(pose['sh' + s], 0.16);
      const f = v(pose['sh' + s] + pose['el' + s], 0.15);
      pts['el' + s] = add(sh, e);
      pts['hand' + s] = add(pts['el' + s], f);
    });

    if (fall) {
      // Topple about the feet, forward in the direction of travel.
      const px = hip[0];
      const py = L.floor;
      const a = fall * dir;
      const cos = Math.cos(a);
      const sin = Math.sin(a);
      for (const k in pts) {
        const dx = pts[k][0] - px;
        const dy = pts[k][1] - py;
        pts[k] = [px + dx * cos - dy * sin, py + dx * sin + dy * cos];
      }
      // Keep everything above the floor once down.
      let low = 0;
      for (const k in pts) low = Math.max(low, pts[k][1] - L.floor);
      if (low > 0) for (const k in pts) pts[k][1] -= low;
    }
    return pts;
  };

  // --- Drawing -----------------------------------------------------------------------
  const drawRoom = (L) => {
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    // Window.
    const wx = w * 0.42;
    const wy = L.floor - L.H * 1.15;
    const ww = Math.min(w * 0.2, L.H * 0.55);
    const wh = ww * 1.15;
    ctx.strokeStyle = 'rgba(233, 239, 244, 0.07)';
    ctx.lineWidth = 1;
    ctx.strokeRect(wx, wy, ww, wh);
    ctx.beginPath();
    ctx.moveTo(wx + ww / 2, wy);
    ctx.lineTo(wx + ww / 2, wy + wh);
    ctx.moveTo(wx, wy + wh / 2);
    ctx.lineTo(wx + ww, wy + wh / 2);
    ctx.stroke();

    // Floor.
    const g = ctx.createLinearGradient(0, 0, w, 0);
    g.addColorStop(0, 'rgba(233, 239, 244, 0)');
    g.addColorStop(0.2, 'rgba(233, 239, 244, 0.16)');
    g.addColorStop(0.8, 'rgba(233, 239, 244, 0.16)');
    g.addColorStop(1, 'rgba(233, 239, 244, 0)');
    ctx.strokeStyle = g;
    ctx.beginPath();
    ctx.moveTo(0, L.floor + 0.5);
    ctx.lineTo(w, L.floor + 0.5);
    ctx.stroke();

    // Chair, facing left.
    const H = L.H;
    const seatY = L.floor - 0.235 * H - Math.max(2, H * 0.017);
    const cx = L.chairX;
    ctx.strokeStyle = 'rgba(147, 161, 174, 0.45)';
    ctx.lineWidth = Math.max(1.5, H * 0.014);
    ctx.beginPath();
    ctx.moveTo(cx - 0.2 * H, seatY);
    ctx.lineTo(cx + 0.07 * H, seatY);
    ctx.lineTo(cx + 0.07 * H, seatY - 0.3 * H);
    ctx.moveTo(cx - 0.18 * H, seatY);
    ctx.lineTo(cx - 0.18 * H, L.floor);
    ctx.moveTo(cx + 0.06 * H, seatY);
    ctx.lineTo(cx + 0.06 * H, L.floor);
    ctx.stroke();
  };

  const drawFigure = (pts, L, alpha) => {
    const H = L.H;
    const lw = Math.max(2.5, H * 0.036);
    ctx.globalAlpha = alpha;

    // Floor shadow.
    const minX = Math.min(pts.footL[0], pts.footR[0], pts.head[0], pts.hip[0]);
    const maxX = Math.max(pts.footL[0], pts.footR[0], pts.head[0], pts.hip[0]);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
    ctx.beginPath();
    ctx.ellipse((minX + maxX) / 2, L.floor + 2, (maxX - minX) / 2 + H * 0.08, H * 0.022, 0, 0, Math.PI * 2);
    ctx.fill();

    const limb = (a, b, c, color) => {
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(a[0], a[1]);
      ctx.lineTo(b[0], b[1]);
      ctx.lineTo(c[0], c[1]);
      ctx.stroke();
    };
    ctx.lineWidth = lw;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    const far = 'rgba(147, 161, 174, 0.55)';
    const near = 'rgba(214, 223, 231, 0.95)';
    limb(pts.hip, pts.kneeL, pts.footL, far);
    limb(pts.sh, pts.elL, pts.handL, far);
    ctx.strokeStyle = near;
    ctx.beginPath();
    ctx.moveTo(pts.hip[0], pts.hip[1]);
    ctx.lineTo(pts.sh[0], pts.sh[1]);
    ctx.stroke();
    limb(pts.hip, pts.kneeR, pts.footR, near);
    limb(pts.sh, pts.elR, pts.handR, near);
    ctx.fillStyle = near;
    ctx.beginPath();
    ctx.arc(pts.head[0], pts.head[1], H * 0.072, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  };

  const drawPendant = (p, L, t, alpha) => {
    const H = L.H;
    const r = Math.max(3, H * 0.024);
    const sos = t >= T.fall[1] && t < T.fadeOut;
    const blink = sos ? 0.55 + 0.45 * Math.sin(t * 14) : 1;
    const color = sos ? COLORS.danger : COLORS.amber;
    ctx.globalAlpha = alpha;

    if (sos) {
      // SOS: rings radiate from the pendant.
      for (let i = 0; i < 3; i++) {
        const u = ((t - T.fall[1]) / 1.5 + i / 3) % 1;
        ctx.strokeStyle = `rgba(255, 122, 122, ${(0.55 * (1 - u)).toFixed(3)})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(p[0], p[1], r + u * H * 0.62, 0, Math.PI * 2);
        ctx.stroke();
      }
    } else {
      // Telemetry: a soft heartbeat glow while streaming.
      const beat = (t * 1.2) % 1;
      ctx.fillStyle = `rgba(242, 183, 102, ${(0.22 * (1 - beat)).toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(p[0], p[1], r + beat * r * 3.2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = alpha * blink;
    ctx.fillStyle = sos ? 'rgba(255, 122, 122, 0.3)' : 'rgba(242, 183, 102, 0.3)';
    ctx.beginPath();
    ctx.arc(p[0], p[1], r * 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(p[0], p[1], r, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  };

  const drawTrace = (L) => {
    const b = L.trace;
    const sp = speed();
    const x = (t) => b.right - (clock - t) * sp;
    const y = (g) => b.bottom - (Math.min(g, MAX_G) / MAX_G) * (b.bottom - b.top);

    ctx.lineWidth = 1;
    ctx.font = MONO(10);
    ctx.textBaseline = 'middle';
    [1, 2, 3, 4].forEach((g) => {
      ctx.strokeStyle = COLORS.line;
      ctx.beginPath();
      ctx.moveTo(b.left + 22, Math.round(y(g)) + 0.5);
      ctx.lineTo(b.right, Math.round(y(g)) + 0.5);
      ctx.stroke();
      ctx.fillStyle = COLORS.dim;
      ctx.textAlign = 'left';
      ctx.fillText(`${g}g`, b.left, y(g));
    });

    // Impact threshold.
    const ty = Math.round(y(THRESHOLD)) + 0.5;
    ctx.setLineDash([3, 4]);
    ctx.strokeStyle = 'rgba(255, 122, 122, 0.55)';
    ctx.beginPath();
    ctx.moveTo(b.left + 22, ty);
    ctx.lineTo(b.right, ty);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = 'rgba(255, 122, 122, 0.8)';
    ctx.textAlign = 'right';
    ctx.fillText('impact threshold 2.5 g', b.right, ty - 9);

    if (samples.length < 2) return;
    const path = new Path2D();
    let started = false;
    samples.forEach((s) => {
      const px = x(s.t);
      if (px < b.left + 22) return;
      if (!started) {
        path.moveTo(px, y(s.g));
        started = true;
      } else path.lineTo(px, y(s.g));
    });

    // Soft fill under the signal.
    const first = samples.find((s) => x(s.t) >= b.left + 22) || samples[0];
    const area = new Path2D(path);
    area.lineTo(x(samples[samples.length - 1].t), b.bottom);
    area.lineTo(x(first.t), b.bottom);
    area.closePath();
    const fill = ctx.createLinearGradient(0, b.top, 0, b.bottom);
    fill.addColorStop(0, 'rgba(242, 183, 102, 0.14)');
    fill.addColorStop(1, 'rgba(242, 183, 102, 0)');
    ctx.fillStyle = fill;
    ctx.fill(area);

    ctx.lineWidth = 1.6;
    ctx.lineJoin = 'round';
    ctx.strokeStyle = COLORS.amber;
    ctx.stroke(path);
    // Anything over the threshold is drawn in the alert colour.
    ctx.save();
    ctx.beginPath();
    ctx.rect(b.left, 0, b.right - b.left, ty);
    ctx.clip();
    ctx.strokeStyle = COLORS.danger;
    ctx.stroke(path);
    ctx.restore();

    // Live head of the stream.
    const head = samples[samples.length - 1];
    ctx.fillStyle = COLORS.amber;
    ctx.beginPath();
    ctx.arc(x(head.t), y(head.g), 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Peak annotations.
    ctx.font = MONO(10);
    marks.forEach((m) => {
      const mx = x(m.t);
      if (mx < b.left + 30) return;
      const my = y(m.g);
      ctx.strokeStyle = m.color;
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.moveTo(mx, my - 4);
      ctx.lineTo(mx, my - 14);
      ctx.stroke();
      ctx.globalAlpha = 1;
      // Labels sit beside their peak, flipping sides near the right edge.
      ctx.fillStyle = m.color;
      const flip = mx > b.right - 110;
      ctx.textAlign = flip ? 'right' : 'left';
      ctx.fillText(m.text, mx + (flip ? -8 : 8), my - 10);
    });

    ctx.fillStyle = COLORS.dim;
    ctx.textAlign = 'left';
    ctx.fillText('|a|  pendant accelerometer', b.left, b.top - 14);
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    if (!w || !h) return;
    const L = layout();
    const t = loopT;
    const alpha = Math.min(clamp01(t / 0.45), 1 - clamp01((t - T.fadeOut) / 0.6));
    drawRoom(L);
    const pts = skeleton(figure(t, L), L);
    drawFigure(pts, L, alpha);
    drawPendant(pts.pendant, L, t, alpha);
    drawTrace(L);
  };

  return {
    resize(width, height) {
      w = width;
      h = height;
    },
    settle() {
      // Fill the trace with a calm baseline, then, without motion, rest on
      // the moment the alerts have gone out.
      const sp = speed();
      const pre = (w - 28) / sp;
      for (let i = 0; i < pre * RATE; i++) {
        clock += 1 / RATE;
        samples.push({ t: clock, g: 1 + (rand() - 0.5) * 0.03 });
      }
      if (!motion) {
        const step = 1 / RATE;
        while (loopT < T.respond + 0.5) advance(step);
      } else syncDom(0);
    },
    step: advance,
    draw,
  };
}
