/**
 * Zero Trust: stylised requests crossing each control in turn. Most pass;
 * policy decisions default to deny (403); anomalous behaviour is diverted
 * to step-up authentication; data is sealed by envelope encryption before
 * reaching the case file. Mirrors the policy matrix in the case study.
 */
import { COLORS, FONT, MONO, rng } from './mount.js';

const GATES = [
  { x: 0.2, title: 'Passkey', sub: 'WebAuthn' },
  { x: 0.41, title: 'Policy', sub: 'OPA, default deny' },
  { x: 0.62, title: 'Behaviour', sub: 'IsolationForest' },
  { x: 0.82, title: 'Envelope', sub: 'Vault AES-256-GCM' },
];
const LANES = [0.36, 0.5, 0.64];
const DEST_X = 0.95;

export function gatesViz() {
  const rand = rng(11);
  const reqs = [];
  const flash = GATES.map(() => ({ t: 0, color: COLORS.ion }));
  let w = 0;
  let h = 0;
  let time = 0;
  let nextAt = 0.2;

  const spawn = () => {
    const r = rand();
    reqs.push({
      x: 0.02,
      lane: Math.floor(rand() * LANES.length),
      fate: r < 0.13 ? 'deny' : r < 0.25 ? 'stepup' : 'pass',
      gate: 0,
      state: 'moving',
      age: 0,
      sealed: false,
      drop: 0,
    });
  };

  const step = (dt) => {
    time += dt;
    while (nextAt <= time) {
      spawn();
      nextAt += 0.32 + rand() * 0.5;
    }
    const speed = 0.16; // fraction of width per second
    flash.forEach((f) => (f.t = Math.max(0, f.t - dt)));
    reqs.forEach((q) => {
      q.age += dt;
      if (q.state === 'denied' || q.state === 'done') return;
      if (q.state === 'diverted') {
        q.drop = Math.min(1, q.drop + dt * 1.4);
        if (q.drop >= 1) q.state = 'done';
        return;
      }
      q.x += speed * dt;
      const gate = GATES[q.gate];
      if (gate && q.x >= gate.x) {
        if (q.gate === 1 && q.fate === 'deny') {
          q.x = gate.x - 0.004;
          q.state = 'denied';
          q.age = 0;
          flash[1] = { t: 0.6, color: COLORS.danger };
          return;
        }
        if (q.gate === 2 && q.fate === 'stepup') {
          q.state = 'diverted';
          q.age = 0;
          flash[2] = { t: 0.6, color: COLORS.amber };
          return;
        }
        if (q.gate === 3) q.sealed = true;
        flash[q.gate] = { t: 0.35, color: COLORS.ion };
        q.gate++;
      }
      if (q.x >= DEST_X) q.state = 'done';
    });
    for (let i = reqs.length - 1; i >= 0; i--) {
      const q = reqs[i];
      if ((q.state === 'done' && q.age > 0.01 && (q.x >= DEST_X || q.drop >= 1)) || (q.state === 'denied' && q.age > 1.4)) reqs.splice(i, 1);
    }
  };

  return {
    resize(width, height) {
      w = width;
      h = height;
    },
    settle() {
      for (let t = 0; t < 7; t += 1 / 30) step(1 / 30);
    },
    step,
    draw(ctx) {
      ctx.clearRect(0, 0, w, h);
      const small = w < 520;
      const laneY = (i) => LANES[i] * h;
      const top = laneY(0) - 34;
      const bottom = laneY(LANES.length - 1) + 34;
      const stepY = h * 0.86;

      // Lanes.
      ctx.strokeStyle = COLORS.line;
      ctx.lineWidth = 1;
      LANES.forEach((_, i) => {
        ctx.beginPath();
        ctx.moveTo(w * 0.03, laneY(i));
        ctx.lineTo(w * DEST_X, laneY(i));
        ctx.stroke();
      });

      // Gates with labels.
      GATES.forEach((g, i) => {
        const gx = g.x * w;
        const f = flash[i];
        const glow = f.t > 0 ? f.t / 0.6 : 0;
        ctx.fillStyle = 'rgba(17, 22, 28, 0.95)';
        ctx.strokeStyle = glow ? f.color : COLORS.lineStrong;
        ctx.globalAlpha = 1;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(gx - 5, top, 10, bottom - top, 5);
        ctx.fill();
        ctx.stroke();
        if (glow) {
          ctx.shadowColor = f.color;
          ctx.shadowBlur = 18 * glow;
          ctx.globalAlpha = glow;
          ctx.fillStyle = f.color;
          ctx.beginPath();
          ctx.roundRect(gx - 2, top + 4, 4, bottom - top - 8, 2);
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
        }
        ctx.textAlign = 'center';
        ctx.textBaseline = 'alphabetic';
        ctx.fillStyle = COLORS.frost;
        ctx.font = FONT(small ? 11 : 13, 600);
        ctx.fillText(g.title, gx, top - (small ? 22 : 26));
        ctx.fillStyle = COLORS.alloy;
        ctx.font = FONT(small ? 9 : 11, 400);
        ctx.fillText(small ? g.sub.split(/[, ]/)[0] : g.sub, gx, top - (small ? 9 : 11));
      });

      // Destination and step-up targets.
      ctx.textAlign = 'center';
      ctx.fillStyle = COLORS.alloy;
      ctx.font = FONT(small ? 10 : 11, 500);
      ctx.save();
      ctx.translate(w * DEST_X + (small ? 6 : 10), h * 0.5);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText('Case file', 0, 0);
      ctx.restore();

      const sx = GATES[2].x * w;
      ctx.strokeStyle = 'rgba(242, 183, 102, 0.45)';
      ctx.setLineDash([3, 4]);
      ctx.beginPath();
      ctx.roundRect(sx - 52, stepY - 14, 104, 28, 6);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = COLORS.amber;
      ctx.textBaseline = 'middle';
      ctx.font = FONT(small ? 10 : 11, 600);
      ctx.fillText('Step-up auth', sx, stepY);

      // Requests.
      reqs.forEach((q) => {
        let px = q.x * w;
        let py = laneY(q.lane);
        let color = q.sealed ? COLORS.ion : COLORS.frost;
        let alpha = 1;
        if (q.state === 'denied') {
          color = COLORS.danger;
          alpha = Math.max(0, 1 - q.age / 1.4);
        }
        if (q.state === 'diverted' || (q.state === 'done' && q.drop > 0)) {
          color = COLORS.amber;
          const e = 1 - Math.pow(1 - q.drop, 3);
          px = GATES[2].x * w + 0;
          py = py + (stepY - 18 - py) * e;
          alpha = q.drop >= 1 ? 0 : 1 - Math.max(0, q.drop - 0.7) / 0.3;
        }
        ctx.globalAlpha = alpha;
        if (q.state === 'moving') {
          const trail = ctx.createLinearGradient(px - 36, 0, px, 0);
          trail.addColorStop(0, 'rgba(233, 239, 244, 0)');
          trail.addColorStop(1, q.sealed ? 'rgba(127, 231, 255, 0.6)' : 'rgba(233, 239, 244, 0.45)');
          ctx.strokeStyle = trail;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(px - 36, py);
          ctx.lineTo(px, py);
          ctx.stroke();
        }
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(px, py, 3.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        if (q.sealed) {
          ctx.strokeStyle = 'rgba(127, 231, 255, 0.7)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(px, py, 6.5, 0, Math.PI * 2);
          ctx.stroke();
        }
        if (q.state === 'denied') {
          ctx.fillStyle = COLORS.danger;
          ctx.font = MONO(10);
          ctx.textAlign = 'right';
          ctx.textBaseline = 'middle';
          ctx.fillText('403', px - 10, py - 10);
        }
        ctx.globalAlpha = 1;
      });
    },
  };
}
