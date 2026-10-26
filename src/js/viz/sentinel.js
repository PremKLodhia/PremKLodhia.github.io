/**
 * Sentinel: a stylised transaction stream. Each point is a risk score; an
 * EWMA line and ±2σ band track the baseline, and outliers crossing the alert
 * threshold are flagged by whichever tier of the ensemble caught them.
 * Illustrative only — the measured benchmarks live in the HTML beside it.
 */
import { COLORS, MONO, rng } from './mount.js';

const SPEED = 64; // px per second
const THRESHOLD = 0.7;
const TIERS = [
  { label: 'T1', color: COLORS.amber },
  { label: 'T2', color: COLORS.cobalt },
  { label: 'T3', color: COLORS.danger },
];

export function sentinelViz() {
  const rand = rng(7);
  const tx = [];
  let w = 0;
  let h = 0;
  let time = 0;
  let nextAt = 0;
  let ewma = 0.2;
  let ewvar = 0.004;

  const box = () => {
    const top = Math.max(72, h * 0.16);
    return { left: 0, right: w - 56, top, bottom: h - 32 };
  };

  const spawn = () => {
    const regime = 0.04 * Math.sin(time * 0.35) + 0.03 * Math.sin(time * 1.1);
    let score = 0.1 + 0.2 * Math.pow(rand(), 2) + regime;
    let tier = -1;
    if (rand() < 0.035) {
      score = 0.74 + rand() * 0.22;
      const r = rand();
      tier = r < 0.45 ? 0 : r < 0.8 ? 1 : 2;
    }
    const a = 0.08;
    const diff = score - ewma;
    ewma += a * diff;
    ewvar = (1 - a) * (ewvar + a * diff * diff);
    tx.push({ t: time, score, tier, ewma, sd: Math.sqrt(ewvar) });
  };

  const step = (dt) => {
    time += dt;
    while (nextAt <= time) {
      spawn();
      nextAt += 0.05 + rand() * 0.09;
    }
    const b = box();
    const oldest = time - (b.right - b.left) / SPEED - 1;
    while (tx.length && tx[0].t < oldest) tx.shift();
  };

  return {
    resize(width, height) {
      w = width;
      h = height;
    },
    settle() {
      const span = (box().right / SPEED) + 2;
      for (let t = 0; t < span; t += 1 / 30) step(1 / 30);
    },
    step,
    draw(ctx) {
      const b = box();
      const x = (t) => b.right - (time - t) * SPEED;
      const y = (s) => b.bottom - s * (b.bottom - b.top);
      ctx.clearRect(0, 0, w, h);

      // Grid and axis.
      ctx.lineWidth = 1;
      ctx.font = MONO(10);
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      [0, 0.25, 0.5, 0.75, 1].forEach((s) => {
        ctx.strokeStyle = s === 0 ? COLORS.lineStrong : COLORS.line;
        ctx.beginPath();
        ctx.moveTo(b.left, Math.round(y(s)) + 0.5);
        ctx.lineTo(b.right, Math.round(y(s)) + 0.5);
        ctx.stroke();
        ctx.fillStyle = COLORS.dim;
        ctx.fillText(s.toFixed(2), b.right + 10, y(s));
      });

      // Alert threshold.
      ctx.save();
      ctx.setLineDash([4, 5]);
      ctx.strokeStyle = 'rgba(255, 122, 122, 0.55)';
      ctx.beginPath();
      ctx.moveTo(b.left, y(THRESHOLD));
      ctx.lineTo(b.right, y(THRESHOLD));
      ctx.stroke();
      ctx.restore();
      ctx.fillStyle = 'rgba(255, 122, 122, 0.8)';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'bottom';
      ctx.fillText('alert threshold', b.right - 8, y(THRESHOLD) - 6);

      if (tx.length > 1) {
        // ±2σ band around the EWMA baseline.
        ctx.beginPath();
        tx.forEach((p, i) => {
          const px = x(p.t);
          const py = y(Math.min(1, p.ewma + 2 * p.sd));
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        for (let i = tx.length - 1; i >= 0; i--) {
          const p = tx[i];
          ctx.lineTo(x(p.t), y(Math.max(0, p.ewma - 2 * p.sd)));
        }
        ctx.closePath();
        ctx.fillStyle = 'rgba(127, 231, 255, 0.07)';
        ctx.fill();

        // EWMA line.
        ctx.beginPath();
        tx.forEach((p, i) => (i === 0 ? ctx.moveTo(x(p.t), y(p.ewma)) : ctx.lineTo(x(p.t), y(p.ewma))));
        ctx.strokeStyle = 'rgba(127, 231, 255, 0.85)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Transactions.
      ctx.fillStyle = 'rgba(196, 206, 216, 0.5)';
      tx.forEach((p) => {
        if (p.tier >= 0) return;
        ctx.beginPath();
        ctx.arc(x(p.t), y(p.score), 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Flagged outliers: stem from the threshold, a ring that expands once, a tier tag.
      ctx.font = MONO(10);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      tx.forEach((p) => {
        if (p.tier < 0) return;
        const tier = TIERS[p.tier];
        const px = x(p.t);
        const py = y(p.score);
        const age = time - p.t;
        ctx.strokeStyle = tier.color;
        ctx.globalAlpha = 0.5;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(px, y(THRESHOLD));
        ctx.lineTo(px, py);
        ctx.stroke();
        if (age < 1.2) {
          ctx.globalAlpha = 1 - age / 1.2;
          ctx.beginPath();
          ctx.arc(px, py, 4 + age * 18, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
        // Soft halo drawn as a translucent disc; canvas shadowBlur is costly per frame.
        ctx.fillStyle = tier.color;
        ctx.globalAlpha = 0.22;
        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillText(tier.label, px, py - 8);
      });

      // "Now" marker where new transactions are scored.
      ctx.strokeStyle = 'rgba(127, 231, 255, 0.35)';
      ctx.setLineDash([2, 4]);
      ctx.beginPath();
      ctx.moveTo(b.right + 0.5, b.top - 12);
      ctx.lineTo(b.right + 0.5, b.bottom);
      ctx.stroke();
      ctx.setLineDash([]);

      // Fade the oldest data out at the left edge.
      const fade = ctx.createLinearGradient(0, 0, 90, 0);
      fade.addColorStop(0, 'rgba(12, 16, 21, 1)');
      fade.addColorStop(1, 'rgba(12, 16, 21, 0)');
      ctx.fillStyle = fade;
      ctx.fillRect(0, 0, 90, h);
    },
  };
}
