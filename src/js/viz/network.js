/**
 * NDR: a stylised network. Flows travel between hosts; periodically a host
 * is detected (technique and engine from the case study's ATT&CK mapping),
 * its links are cut, and it is moved into the quarantine enclosure.
 */
import { COLORS, FONT, MONO, rng } from './mount.js';

const DETECTIONS = [
  { id: 'T1046', engine: 'Suricata SID 3000001', action: 'BLOCK_AND_ISOLATE' },
  { id: 'T1071.001', engine: 'XGBoost classifier', action: 'QUARANTINE_VLAN 99' },
  { id: 'T1071.004', engine: 'Subdomain entropy', action: 'BLOCK_AND_ISOLATE' },
  { id: 'T1572', engine: 'Autoencoder MSE', action: 'BLOCK_AND_ISOLATE' },
];
const BOX = { x0: 0.7, y0: 0.1, x1: 0.95, y1: 0.32 };
const CYCLE = 6.5;

export function networkViz() {
  const rand = rng(23);
  const nodes = [];
  const edges = [];
  const packets = [];
  let w = 0;
  let h = 0;
  let time = 0;
  let nextPacket = 0;
  let incident = null;
  let incidentIndex = 0;
  let nextIncident = 1.5;
  const held = [];

  // Layout in unit space, avoiding the quarantine enclosure.
  for (let tries = 0; nodes.length < 38 && tries < 4000; tries++) {
    const x = 0.05 + rand() * 0.9;
    const y = 0.1 + rand() * 0.82;
    if (x > BOX.x0 - 0.04 && y < BOX.y1 + 0.06) continue;
    if (nodes.some((n) => Math.hypot((n.hx - x) * 1.6, n.hy - y) < 0.1)) continue;
    nodes.push({ hx: x, hy: y, x, y, r: rand() < 0.18 ? 4.5 : 2.6, state: 'ok', heat: 0 });
  }
  nodes.forEach((n, i) => {
    const near = nodes
      .map((m, j) => ({ j, d: Math.hypot((m.hx - n.hx) * 1.6, m.hy - n.hy) }))
      .filter((o) => o.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 2 + (rand() < 0.4 ? 1 : 0));
    near.forEach(({ j }) => {
      if (!edges.some((e) => (e.a === i && e.b === j) || (e.a === j && e.b === i))) edges.push({ a: i, b: j, cut: 0 });
    });
  });

  const live = (e) => nodes[e.a].state !== 'held' && nodes[e.b].state !== 'held';

  const startIncident = () => {
    const candidates = nodes.map((n, i) => i).filter((i) => nodes[i].state === 'ok' && nodes[i].hx > 0.42);
    if (!candidates.length) return;
    const node = candidates[Math.floor(rand() * candidates.length)];
    incident = { node, det: DETECTIONS[incidentIndex++ % DETECTIONS.length], t: 0 };
    nodes[node].state = 'detected';
  };

  const slot = (k) => ({
    x: BOX.x0 + 0.05 + (k % 3) * ((BOX.x1 - BOX.x0 - 0.1) / 2),
    y: BOX.y0 + 0.12 + 0.05 * Math.floor(k / 3),
  });

  const step = (dt) => {
    time += dt;

    // Background flows.
    while (nextPacket <= time) {
      const options = edges.filter(live);
      const e = options[Math.floor(rand() * options.length)];
      if (e) packets.push({ e, t: 0, dir: rand() < 0.5 ? 1 : -1, speed: 0.5 + rand() * 0.6 });
      nextPacket += 0.06 + rand() * 0.08;
    }
    for (let i = packets.length - 1; i >= 0; i--) {
      const p = packets[i];
      p.t += dt * p.speed;
      if (p.t >= 1 || !live(p.e)) packets.splice(i, 1);
    }

    // Incident lifecycle: detect → contain → move into quarantine → held.
    if (!incident && time >= nextIncident) startIncident();
    if (incident) {
      incident.t += dt;
      const n = nodes[incident.node];
      if (incident.t > 1.4 && n.state === 'detected') n.state = 'contained';
      if (incident.t > 2.3 && n.state === 'contained') {
        if (held.length >= 3) {
          const released = nodes[held.shift()];
          released.state = 'releasing';
        }
        n.state = 'moving';
        n.from = { x: n.x, y: n.y };
        n.to = slot(held.length);
        held.push(incident.node);
      }
      if (n.state === 'moving') {
        const k = Math.min(1, (incident.t - 2.3) / 1.3);
        const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
        n.x = n.from.x + (n.to.x - n.from.x) * e;
        n.y = n.from.y + (n.to.y - n.from.y) * e;
        if (k >= 1) n.state = 'held';
      }
      if (incident.t > CYCLE) {
        incident = null;
        nextIncident = time + 0.6;
      }
    }

    nodes.forEach((n, i) => {
      if (n.state === 'releasing') {
        n.x += (n.hx - n.x) * Math.min(1, dt * 2.5);
        n.y += (n.hy - n.y) * Math.min(1, dt * 2.5);
        if (Math.hypot(n.x - n.hx, n.y - n.hy) < 0.002) {
          n.x = n.hx;
          n.y = n.hy;
          n.state = 'ok';
        }
      }
      // Slots shift up when an older host is released.
      if (n.state === 'held') {
        const k = held.indexOf(i);
        const s = slot(k);
        n.x += (s.x - n.x) * Math.min(1, dt * 3);
        n.y += (s.y - n.y) * Math.min(1, dt * 3);
      }
      const target = n.state === 'detected' || n.state === 'contained' ? 1 : 0;
      n.heat += (target - n.heat) * Math.min(1, dt * 4);
    });
    edges.forEach((e) => {
      const cut = !live(e) || ['contained', 'moving'].includes(nodes[e.a].state) || ['contained', 'moving'].includes(nodes[e.b].state);
      e.cut += ((cut ? 1 : 0) - e.cut) * Math.min(1, dt * 3);
    });
  };

  return {
    resize(width, height) {
      w = width;
      h = height;
    },
    settle() {
      for (let t = 0; t < 9.2; t += 1 / 30) step(1 / 30);
    },
    step,
    draw(ctx) {
      ctx.clearRect(0, 0, w, h);
      const X = (v) => v * w;
      const Y = (v) => v * h;

      // Quarantine enclosure.
      ctx.save();
      ctx.setLineDash([4, 6]);
      ctx.strokeStyle = 'rgba(255, 122, 122, 0.45)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(X(BOX.x0), Y(BOX.y0), X(BOX.x1 - BOX.x0), Y(BOX.y1 - BOX.y0), 10);
      ctx.stroke();
      ctx.restore();
      ctx.fillStyle = 'rgba(255, 122, 122, 0.04)';
      ctx.beginPath();
      ctx.roundRect(X(BOX.x0), Y(BOX.y0), X(BOX.x1 - BOX.x0), Y(BOX.y1 - BOX.y0), 10);
      ctx.fill();
      ctx.font = MONO(10);
      ctx.fillStyle = 'rgba(255, 122, 122, 0.85)';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillText('QUARANTINE · VLAN 99', X(BOX.x0) + 12, Y(BOX.y0) + 10);

      // Links.
      edges.forEach((e) => {
        const a = nodes[e.a];
        const b = nodes[e.b];
        const hot = Math.max(a.heat, b.heat);
        if (e.cut > 0.98) return;
        ctx.globalAlpha = 1 - e.cut;
        ctx.strokeStyle = hot > 0.05 ? `rgba(242, 183, 102, ${0.15 + hot * 0.5})` : 'rgba(147, 161, 174, 0.22)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(X(a.x), Y(a.y));
        ctx.lineTo(X(b.x), Y(b.y));
        ctx.stroke();
      });
      ctx.globalAlpha = 1;

      // Flows.
      packets.forEach((p) => {
        const a = nodes[p.e.a];
        const b = nodes[p.e.b];
        const t = p.dir > 0 ? p.t : 1 - p.t;
        const px = X(a.x + (b.x - a.x) * t);
        const py = Y(a.y + (b.y - a.y) * t);
        const hot = Math.max(a.heat, b.heat) > 0.3;
        ctx.fillStyle = hot ? COLORS.amber : COLORS.ion;
        ctx.globalAlpha = Math.sin(p.t * Math.PI) * 0.9;
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Hosts.
      nodes.forEach((n) => {
        const px = X(n.x);
        const py = Y(n.y);
        let fill = 'rgba(214, 224, 233, 0.9)';
        if (n.state === 'detected') fill = COLORS.amber;
        if (n.state === 'contained' || n.state === 'moving' || n.state === 'held') fill = COLORS.danger;
        if (n.heat > 0.05) {
          ctx.globalAlpha = n.heat * (0.4 + 0.3 * Math.sin(time * 8));
          ctx.strokeStyle = fill;
          ctx.beginPath();
          ctx.arc(px, py, n.r + 7 + n.heat * 4, 0, Math.PI * 2);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(px, py, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Detection call-out.
      if (incident && incident.t < 3.4) {
        const n = nodes[incident.node];
        const a = Math.min(1, incident.t * 4) * Math.min(1, (3.4 - incident.t) * 3);
        const contained = incident.t > 1.4;
        const px = X(n.x) + 14;
        const py = Y(n.y) - 14;
        ctx.globalAlpha = a;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'bottom';
        ctx.font = MONO(11);
        ctx.fillStyle = contained ? COLORS.danger : COLORS.amber;
        ctx.fillText(contained ? incident.det.action : incident.det.id, px, py);
        ctx.font = FONT(11, 400);
        ctx.fillStyle = COLORS.alloy;
        ctx.textBaseline = 'top';
        ctx.fillText(contained ? 'Links cut, host isolated' : incident.det.engine, px, py + 3);
        ctx.globalAlpha = 1;
      }
    },
  };
}
