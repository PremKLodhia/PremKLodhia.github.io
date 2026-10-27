/**
 * Bridge: a stylised, looping simulation of the local guide app on a 3D map.
 *
 * A slowly orbiting city tile is split by a river and joined by a suspension
 * bridge. A traveller's phone requests a guide, nearby guides are offered the
 * request and one accepts. The walking route draws across the bridge, the
 * traveller walks it to meet their guide, then a local event lights up nearby.
 * The HUD, the phone card and the case-study list ([data-phase]) follow along,
 * and the winner badge gets a confetti burst at the top of every loop.
 *
 * Illustrative only: the map, people and events are synthetic.
 */
import { COLORS, MONO, rng } from './mount.js';

const LOOP = 14;

// Loop timeline, in seconds.
const T = {
  confetti: 0.2,
  request: 0.6,
  offer: 1.9,
  match: 3.3,
  route: [3.5, 5.2],
  walk: [5.2, 9.0],
  event: 9.5,
  fadeOut: 12.9,
};

// World: the city tile spans -1..1 on x and y; z is up.
const GRID = 0.25;
const STREET_HALF = 0.03;
const RIVER_HALF = 0.13;
const DECK_Z = 0.035;
const riverY = (x) => 0.05 + 0.12 * Math.sin(1.7 * x + 0.4);
const inRiver = (x, y, pad = 0) => Math.abs(y - riverY(x)) < RIVER_HALF + pad;

const BRIDGE_Y0 = riverY(0) - RIVER_HALF - 0.07;
const BRIDGE_Y1 = riverY(0) + RIVER_HALF + 0.07;
const TOWER_Y = [riverY(0) - RIVER_HALF + 0.02, riverY(0) + RIVER_HALF - 0.02];
const TOWER_Z = 0.21;

const clamp01 = (t) => Math.min(1, Math.max(0, t));
const span = (t, [a, b]) => clamp01((t - a) / (b - a));
const smooth = (t) => t * t * (3 - 2 * t);
const easeOut = (t) => 1 - (1 - t) ** 3;

/** Height of the road surface: the bridge deck rises out of the banks. */
const groundZ = (x, y) => {
  if (Math.abs(x) > 0.05 || y < BRIDGE_Y0 || y > BRIDGE_Y1) return 0;
  return DECK_Z * Math.min(1, (y - BRIDGE_Y0) / 0.06, (BRIDGE_Y1 - y) / 0.06);
};

// People sit on street lines, so routes can follow the grid.
const TRAVELLERS = [[-0.75, -0.5], [0.5, -0.75], [-0.25, -0.75]];
const GUIDES = [
  { at: [0.5, 0.5], name: 'Aisha', rating: '4.9' },
  { at: [-0.5, 0.75], name: 'Tom', rating: '4.8' },
  { at: [0.75, 0.75], name: 'Priya', rating: '5.0' },
  { at: [-0.75, 0.5], name: 'Kwame', rating: '4.9' },
];

const SCENES = [
  { traveller: 0, guide: 0, offered: [0, 1, 3], event: { at: [0.75, 0.5], title: 'Midlands Distributed Systems meetup', place: 'Alpha Tower', going: 48 } },
  { traveller: 1, guide: 3, offered: [3, 2, 0], event: { at: [-0.5, 0.5], title: 'Student Innovation Hackathon', place: 'STEAMhouse', going: 120 } },
  { traveller: 2, guide: 2, offered: [2, 0, 1], event: { at: [0.75, 1], title: 'Applied AI concurrency clinic', place: 'Innovation Centre', going: 34 } },
];

/** Street route: along the traveller's row to the bridge, across, then along the guide's row. */
function buildRoute(a, b) {
  const corners = [a, [0, a[1]], [0, b[1]], b];
  const pts = [];
  for (let i = 0; i < corners.length - 1; i++) {
    const [x0, y0] = corners[i];
    const [x1, y1] = corners[i + 1];
    const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / 0.02));
    for (let k = 0; k < n; k++) {
      const x = x0 + ((x1 - x0) * k) / n;
      const y = y0 + ((y1 - y0) * k) / n;
      pts.push([x, y, groundZ(x, y)]);
    }
  }
  pts.push([b[0], b[1], 0]);
  const cum = [0];
  for (let i = 1; i < pts.length; i++) {
    cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  }
  return { pts, cum, length: cum[cum.length - 1] };
}

function pointAlong(route, d) {
  const { pts, cum } = route;
  if (d <= 0) return pts[0];
  if (d >= route.length) return pts[pts.length - 1];
  let i = 1;
  while (cum[i] < d) i++;
  const t = (d - cum[i - 1]) / (cum[i] - cum[i - 1] || 1);
  const a = pts[i - 1];
  const b = pts[i];
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

/** City blocks: one or two towers per cell, none in the river, a few parks. */
function buildCity(rand) {
  const buildings = [];
  const parks = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const x0 = -1 + i * GRID + STREET_HALF;
      const x1 = -1 + (i + 1) * GRID - STREET_HALF;
      const y0 = -1 + j * GRID + STREET_HALF;
      const y1 = -1 + (j + 1) * GRID - STREET_HALF;
      const corners = [[x0, y0], [x1, y0], [x0, y1], [x1, y1]];
      if (corners.some(([x, y]) => inRiver(x, y, 0.02))) continue;
      if (rand() < 0.12) {
        parks.push({ x0, x1, y0, y1, trees: Array.from({ length: 5 }, () => [x0 + rand() * (x1 - x0), y0 + rand() * (y1 - y0)]) });
        continue;
      }
      const cx = (x0 + x1) / 2;
      const cy = (y0 + y1) / 2;
      // Two clusters of taller towers, one each side of the river.
      const core = Math.exp(-((cx + 0.45) ** 2 + (cy + 0.6) ** 2) / 0.12) + 0.7 * Math.exp(-((cx - 0.55) ** 2 + (cy - 0.7) ** 2) / 0.1);
      const height = () => 0.035 + rand() * 0.07 + core * (0.1 + rand() * 0.12);
      if (rand() < 0.45) {
        buildings.push({ x0, x1, y0, y1, h: height(), lit: rand() });
      } else if (rand() < 0.5) {
        const m = x0 + (x1 - x0) * (0.4 + rand() * 0.2);
        buildings.push({ x0, x1: m - 0.012, y0, y1, h: height(), lit: rand() });
        buildings.push({ x0: m + 0.012, x1, y0, y1, h: height(), lit: rand() });
      } else {
        const m = y0 + (y1 - y0) * (0.4 + rand() * 0.2);
        buildings.push({ x0, x1, y0, y1: m - 0.012, h: height(), lit: rand() });
        buildings.push({ x0, x1, y0: m + 0.012, y1, h: height(), lit: rand() });
      }
    }
  }
  return { buildings, parks };
}

export function bridgeViz(ctx, { motion } = {}) {
  const root = ctx.canvas.closest('[data-bridge]');
  const article = ctx.canvas.closest('article');
  const statusChip = root?.querySelector('[data-br-status]');
  const card = root?.querySelector('[data-br-card]');
  const cardTitle = card?.querySelector('[data-br-title]');
  const cardBody = card?.querySelector('[data-br-body]');
  const cardFoot = card?.querySelector('[data-br-foot]');
  const rand = rng(23);
  const { buildings, parks } = buildCity(rand);

  // Background traffic: walkers on the banks, cars over the bridge.
  const traffic = Array.from({ length: 14 }, (_, i) => {
    const onBridge = i < 4;
    return {
      onBridge,
      row: [-0.75, -0.5, 0.5, 0.75][i % 4],
      pos: rand() * 2 - 1,
      speed: (onBridge ? 0.16 : 0.05 + rand() * 0.05) * (rand() < 0.5 ? -1 : 1),
    };
  });

  let w = 0;
  let h = 0;
  let clock = 0;
  let loopT = 0;
  let sceneIndex = 0;
  let route = null;
  let confetti = [];
  let state = {};

  const scene = () => SCENES[sceneIndex];
  const planRoute = () => {
    const s = scene();
    route = buildRoute(TRAVELLERS[s.traveller], GUIDES[s.guide].at);
  };
  planRoute();

  // --- Camera ------------------------------------------------------------------
  let cam = { cx: 0, cy: 0, s: 1, cos: 1, sin: 0 };
  const TILT = 0.5;
  const LIFT = 0.95;

  const updateCamera = () => {
    const portrait = h > w * 1.15;
    const yaw = 0.55 + 0.22 * Math.sin(clock * 0.11);
    cam = {
      cx: w * 0.5,
      cy: h * (portrait ? 0.52 : 0.5),
      s: Math.min(w * (portrait ? 0.335 : 0.31), h * (portrait ? 0.4 : 0.36)),
      cos: Math.cos(yaw),
      sin: Math.sin(yaw),
    };
  };

  const P = (x, y, z = 0) => {
    const xr = x * cam.cos - y * cam.sin;
    const yr = x * cam.sin + y * cam.cos;
    return [cam.cx + xr * cam.s, cam.cy + yr * cam.s * TILT - z * cam.s * LIFT];
  };
  const depth = (x, y) => x * cam.sin + y * cam.cos;

  const poly = (pts) => {
    ctx.beginPath();
    pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.closePath();
  };

  // --- DOM sync -----------------------------------------------------------------
  const setText = (el, key, text) => {
    if (!el || state[key] === text) return;
    state[key] = text;
    el.textContent = text;
  };
  const setStatus = (text, tone) => {
    setText(statusChip, 'status', text);
    if (statusChip && statusChip.dataset.tone !== tone) statusChip.dataset.tone = tone;
  };
  const setPhase = (phase) => {
    if (!article || state.phase === phase) return;
    state.phase = phase;
    if (phase) article.dataset.phase = phase;
    else delete article.dataset.phase;
  };
  const setCard = (on, title, body, foot, tone) => {
    if (!card) return;
    card.classList.toggle('is-on', on);
    if (!on) return;
    setText(cardTitle, 'title', title);
    setText(cardBody, 'body', body);
    setText(cardFoot, 'foot', foot);
    if (card.dataset.tone !== tone) card.dataset.tone = tone;
  };

  const km = () => (route.length * 0.75).toFixed(1);
  const walkMinutes = () => Math.round(route.length * 0.75 * 12);

  const syncDom = (t) => {
    const s = scene();
    const guide = GUIDES[s.guide];
    const walkP = span(t, T.walk);

    if (t < T.request) setStatus('Live map · 12 guides online', 'idle');
    else if (t < T.offer) setStatus('Traveller · requesting a guide', 'ping');
    else if (t < T.match) setStatus(`Offering to ${s.offered.length} nearby guides`, 'ping');
    else if (t < T.walk[0]) setStatus(`Matched · ${guide.name} · ${km()} km`, 'ok');
    else if (t < T.walk[1]) setStatus(`Crossing the bridge · ${Math.max(1, Math.ceil(walkMinutes() * (1 - walkP)))} min`, 'ok');
    else if (t < T.event) setStatus(`Met ${guide.name} · tour started`, 'ok');
    else if (t < T.fadeOut) setStatus(`Event nearby · ${s.event.going} going`, 'event');
    else setStatus('Live map · 12 guides online', 'idle');

    if (t >= T.fadeOut || t < T.request) setPhase(null);
    else if (t >= T.event) setPhase('event');
    else if (t >= T.route[0]) setPhase('route');
    else if (t >= T.offer) setPhase('match');
    else setPhase('request');

    if (t < T.match || t >= T.fadeOut) setCard(false);
    else if (t < T.walk[0]) setCard(true, `Guide matched · ${guide.name} ★ ${guide.rating}`, 'Meeting you across the bridge', `${km()} km · ${walkMinutes()} min walk`, 'match');
    else if (t < T.walk[1]) setCard(true, `On your way to ${guide.name}`, 'Head south over the bridge', `ETA ${Math.max(1, Math.ceil(walkMinutes() * (1 - walkP)))} min`, 'match');
    else if (t < T.event) setCard(true, `You've met ${guide.name}`, 'Tour started · enjoy the city', 'Shared trip · live', 'met');
    else setCard(true, 'Nearby tonight', s.event.title, `${s.event.place} · ${s.event.going} attending`, 'event');
  };

  // --- Simulation ---------------------------------------------------------------
  const burst = () => {
    const x = w - 70;
    const y = 44;
    const palette = [COLORS.amber, COLORS.ion, COLORS.frost, COLORS.cobalt, '#ffd98a'];
    confetti = Array.from({ length: 46 }, () => {
      const a = Math.PI * (0.55 + rand() * 0.75);
      const v = 90 + rand() * 170;
      return {
        x, y,
        vx: Math.cos(a) * v,
        vy: -Math.sin(a) * v * 0.7 - 40,
        rot: rand() * Math.PI,
        vr: (rand() - 0.5) * 12,
        size: 3 + rand() * 3,
        color: palette[Math.floor(rand() * palette.length)],
        life: 0,
        ttl: 1.6 + rand() * 0.9,
      };
    });
  };

  const advance = (dt) => {
    clock += dt;
    const prev = loopT;
    loopT += dt;
    if (loopT >= LOOP) {
      loopT -= LOOP;
      sceneIndex = (sceneIndex + 1) % SCENES.length;
      planRoute();
    }
    if (motion && prev < T.confetti && loopT >= T.confetti) burst();

    traffic.forEach((c) => {
      c.pos += c.speed * dt;
      if (c.pos > 1) c.pos -= 2;
      if (c.pos < -1) c.pos += 2;
    });
    confetti = confetti.filter((p) => {
      p.life += dt;
      p.vy += 260 * dt;
      p.vx *= 1 - 0.9 * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rot += p.vr * dt;
      return p.life < p.ttl;
    });
    syncDom(loopT);
  };

  // --- Drawing ------------------------------------------------------------------
  const drawTile = () => {
    const E = 1.08;
    const corners = [[-E, -E], [E, -E], [E, E], [-E, E]];
    // Slab sides: only the two faces turned towards the viewer.
    const slab = 0.06;
    for (let i = 0; i < 4; i++) {
      const a = corners[i];
      const b = corners[(i + 1) % 4];
      // Outward normal of edge a->b; only faces turned towards the viewer show.
      const out = [b[1] - a[1], -(b[0] - a[0])];
      if (out[0] * cam.sin + out[1] * cam.cos <= 0) continue;
      poly([P(...a, 0), P(...b, 0), P(...b, -slab), P(...a, -slab)]);
      ctx.fillStyle = out[0] * cam.cos - out[1] * cam.sin > 0 ? 'rgba(14, 19, 25, 0.95)' : 'rgba(20, 27, 35, 0.95)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(127, 231, 255, 0.14)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    poly(corners.map(([x, y]) => P(x, y, 0)));
    const g = ctx.createLinearGradient(0, cam.cy - cam.s * 0.8, 0, cam.cy + cam.s * 0.8);
    g.addColorStop(0, 'rgba(30, 38, 48, 0.96)');
    g.addColorStop(1, 'rgba(22, 29, 37, 0.98)');
    ctx.fillStyle = g;
    ctx.fill();
    ctx.strokeStyle = 'rgba(127, 231, 255, 0.28)';
    ctx.stroke();
  };

  const drawStreets = () => {
    ctx.strokeStyle = 'rgba(233, 239, 244, 0.06)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 5]);
    for (let k = -3; k <= 3; k++) {
      const v = k * GRID;
      ctx.beginPath();
      let down = false;
      for (let u = -1; u <= 1.001; u += 0.05) {
        // Rows (y = v) and columns (x = v) stop at the river, except the bridge road.
        const wet = inRiver(u, v, 0.01);
        if (wet) { down = false; continue; }
        const [sx, sy] = P(u, v);
        if (down) ctx.lineTo(sx, sy); else ctx.moveTo(sx, sy);
        down = true;
      }
      down = false;
      for (let u = -1; u <= 1.001; u += 0.05) {
        const wet = inRiver(v, u, 0.01) && k !== 0;
        if (wet) { down = false; continue; }
        const [sx, sy] = P(v, u, groundZ(v, u));
        if (down) ctx.lineTo(sx, sy); else ctx.moveTo(sx, sy);
        down = true;
      }
      ctx.stroke();
    }
    ctx.setLineDash([]);
  };

  const drawRiver = () => {
    const top = [];
    const bottom = [];
    for (let x = -1.08; x <= 1.081; x += 0.04) {
      top.push(P(x, riverY(x) - RIVER_HALF));
      bottom.push(P(x, riverY(x) + RIVER_HALF));
    }
    poly([...top, ...bottom.reverse()]);
    const g = ctx.createLinearGradient(top[0][0], top[0][1], bottom[0][0], bottom[0][1]);
    g.addColorStop(0, 'rgba(91, 134, 255, 0.28)');
    g.addColorStop(1, 'rgba(127, 231, 255, 0.16)');
    ctx.fillStyle = g;
    ctx.fill();

    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(127, 231, 255, 0.35)';
    [top, bottom.reverse()].forEach((edge) => {
      ctx.beginPath();
      edge.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      ctx.stroke();
    });

    // Current: dashes drifting downstream.
    ctx.setLineDash([6, 14]);
    ctx.lineDashOffset = -clock * 18;
    ctx.strokeStyle = 'rgba(127, 231, 255, 0.22)';
    [-0.06, 0.03, 0.08].forEach((off) => {
      ctx.beginPath();
      for (let x = -1.06; x <= 1.061; x += 0.04) {
        const [sx, sy] = P(x, riverY(x) + off);
        if (x === -1.06) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
      }
      ctx.stroke();
    });
    ctx.setLineDash([]);
    ctx.lineDashOffset = 0;
  };

  const drawParks = () => {
    parks.forEach((p) => {
      poly([P(p.x0, p.y0), P(p.x1, p.y0), P(p.x1, p.y1), P(p.x0, p.y1)]);
      ctx.fillStyle = 'rgba(127, 240, 184, 0.07)';
      ctx.fill();
      ctx.fillStyle = 'rgba(127, 240, 184, 0.28)';
      p.trees.forEach(([x, y]) => {
        const [sx, sy] = P(x, y, 0.012);
        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(1.4, cam.s * 0.012), 0, Math.PI * 2);
        ctx.fill();
      });
    });
  };

  const drawBuilding = (b, highlight) => {
    const base = [[b.x0, b.y0], [b.x1, b.y0], [b.x1, b.y1], [b.x0, b.y1]];
    for (let i = 0; i < 4; i++) {
      const a = base[i];
      const c = base[(i + 1) % 4];
      const out = [c[1] - a[1], -(c[0] - a[0])];
      const facing = out[0] * cam.sin + out[1] * cam.cos;
      if (facing <= 0) continue;
      poly([P(a[0], a[1], 0), P(c[0], c[1], 0), P(c[0], c[1], b.h), P(a[0], a[1], b.h)]);
      // Light from the upper left of the screen.
      const lightness = (out[0] * cam.cos - out[1] * cam.sin) > 0 ? 0 : 1;
      ctx.fillStyle = lightness ? 'rgba(38, 48, 60, 0.98)' : 'rgba(27, 35, 45, 0.98)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(233, 239, 244, 0.07)';
      ctx.stroke();
      // Floors of lit windows on the taller towers.
      if (b.h > 0.08) {
        ctx.strokeStyle = highlight ? 'rgba(242, 183, 102, 0.45)' : `rgba(127, 231, 255, ${0.06 + b.lit * 0.1})`;
        ctx.beginPath();
        for (let z = 0.03; z < b.h - 0.01; z += 0.028) {
          const p0 = P(a[0] + (c[0] - a[0]) * 0.15, a[1] + (c[1] - a[1]) * 0.15, z);
          const p1 = P(a[0] + (c[0] - a[0]) * 0.85, a[1] + (c[1] - a[1]) * 0.85, z);
          ctx.moveTo(...p0);
          ctx.lineTo(...p1);
        }
        ctx.stroke();
      }
    }
    poly(base.map(([x, y]) => P(x, y, b.h)));
    ctx.fillStyle = highlight ? 'rgba(84, 70, 52, 1)' : 'rgba(48, 60, 74, 1)';
    ctx.fill();
    ctx.strokeStyle = highlight ? 'rgba(242, 183, 102, 0.7)' : 'rgba(233, 239, 244, 0.12)';
    ctx.stroke();
  };

  const drawBridge = () => {
    const xs = [-0.04, 0.04];
    // Deck.
    const left = [];
    const right = [];
    for (let y = BRIDGE_Y0; y <= BRIDGE_Y1 + 0.001; y += 0.02) {
      left.push(P(xs[0], y, groundZ(0, y)));
      right.push(P(xs[1], y, groundZ(0, y)));
    }
    poly([...left, ...right.slice().reverse()]);
    ctx.fillStyle = 'rgba(58, 72, 88, 0.98)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(127, 231, 255, 0.55)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Cable for each side: anchored at the deck ends, over both towers, sagging between.
    const cableZ = (y) => {
      const [t0, t1] = TOWER_Y;
      if (y <= t0) return groundZ(0, y) + (TOWER_Z - groundZ(0, y)) * smooth(clamp01((y - BRIDGE_Y0) / (t0 - BRIDGE_Y0)));
      if (y >= t1) return groundZ(0, y) + (TOWER_Z - groundZ(0, y)) * smooth(clamp01((BRIDGE_Y1 - y) / (BRIDGE_Y1 - t1)));
      const u = (y - t0) / (t1 - t0);
      return DECK_Z + 0.03 + (TOWER_Z - DECK_Z - 0.03) * (2 * u - 1) ** 2;
    };

    xs.forEach((x) => {
      // Hangers.
      ctx.strokeStyle = 'rgba(233, 239, 244, 0.22)';
      ctx.beginPath();
      for (let y = TOWER_Y[0] + 0.02; y < TOWER_Y[1]; y += 0.022) {
        ctx.moveTo(...P(x, y, DECK_Z));
        ctx.lineTo(...P(x, y, cableZ(y)));
      }
      ctx.stroke();
      // Main cable.
      ctx.strokeStyle = 'rgba(127, 231, 255, 0.75)';
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      for (let y = BRIDGE_Y0; y <= BRIDGE_Y1 + 0.001; y += 0.01) {
        const [sx, sy] = P(x, y, cableZ(y));
        if (y === BRIDGE_Y0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
      }
      ctx.stroke();
      ctx.lineWidth = 1;
    });

    // Towers.
    TOWER_Y.forEach((y) => {
      ctx.strokeStyle = 'rgba(233, 239, 244, 0.85)';
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      xs.forEach((x) => {
        ctx.moveTo(...P(x, y, DECK_Z));
        ctx.lineTo(...P(x, y, TOWER_Z + 0.015));
      });
      ctx.moveTo(...P(xs[0], y, TOWER_Z - 0.03));
      ctx.lineTo(...P(xs[1], y, TOWER_Z - 0.03));
      ctx.stroke();
      ctx.lineWidth = 1;
      // Aircraft warning light.
      xs.forEach((x) => {
        const [sx, sy] = P(x, y, TOWER_Z + 0.02);
        ctx.fillStyle = `rgba(255, 122, 122, ${0.45 + 0.45 * Math.max(0, Math.sin(clock * 3 + x * 20))})`;
        ctx.beginPath();
        ctx.arc(sx, sy, 1.8, 0, Math.PI * 2);
        ctx.fill();
      });
    });

    // Deck lights: a pulse running across.
    for (let y = BRIDGE_Y0 + 0.02; y < BRIDGE_Y1; y += 0.03) {
      const pulse = Math.max(0, Math.cos((y - BRIDGE_Y0) * 18 - clock * 4)) ** 6;
      xs.forEach((x) => {
        const [sx, sy] = P(x, y, groundZ(0, y) + 0.004);
        ctx.fillStyle = `rgba(127, 231, 255, ${0.25 + pulse * 0.7})`;
        ctx.beginPath();
        ctx.arc(sx, sy, 1.1 + pulse, 0, Math.PI * 2);
        ctx.fill();
      });
    }
  };

  const ring = (x, y, r, alpha, color) => {
    if (alpha <= 0.01) return;
    const [sx, sy] = P(x, y, groundZ(x, y));
    ctx.strokeStyle = color.replace('A', alpha.toFixed(3));
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.ellipse(sx, sy, r * cam.s, r * cam.s * TILT, 0, 0, Math.PI * 2);
    ctx.stroke();
  };

  const ION = 'rgba(127, 231, 255, A)';
  const AMBER = 'rgba(242, 183, 102, A)';

  const drawPin = (x, y, color, glow, scale = 1) => {
    const z = groundZ(x, y);
    const [gx, gy] = P(x, y, z);
    const lift = 0.13 * scale;
    const [hx, hy] = P(x, y, z + lift);
    // Ground shadow.
    ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
    ctx.beginPath();
    ctx.ellipse(gx, gy, 5 * scale, 2.2 * scale, 0, 0, Math.PI * 2);
    ctx.fill();
    // Stem.
    ctx.strokeStyle = color.replace('A', (0.5 + glow * 0.4).toFixed(2));
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(gx, gy);
    ctx.lineTo(hx, hy);
    ctx.stroke();
    // Head: a phone-like rounded badge.
    const r = (5 + glow * 1.8) * scale;
    if (glow > 0.05) {
      ctx.fillStyle = color.replace('A', (0.22 * glow).toFixed(3));
      ctx.beginPath();
      ctx.arc(hx, hy, r * 2.6, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = color.replace('A', (0.55 + glow * 0.45).toFixed(2));
    ctx.beginPath();
    ctx.arc(hx, hy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(6, 8, 11, 0.85)';
    ctx.beginPath();
    ctx.arc(hx, hy, r * 0.42, 0, Math.PI * 2);
    ctx.fill();
  };

  /** Request arc from the traveller to a guide, high over the map. */
  const drawArc = (a, b, progress, alpha, color) => {
    if (alpha <= 0.01 || progress <= 0) return;
    const n = 36;
    const pts = [];
    for (let i = 0; i <= n * progress; i++) {
      const u = i / n;
      const x = a[0] + (b[0] - a[0]) * u;
      const y = a[1] + (b[1] - a[1]) * u;
      pts.push(P(x, y, 0.13 + Math.sin(Math.PI * u) * 0.38));
    }
    ctx.strokeStyle = color.replace('A', (alpha * 0.7).toFixed(3));
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.stroke();
    const [hx, hy] = pts[pts.length - 1];
    ctx.fillStyle = color.replace('A', alpha.toFixed(3));
    ctx.beginPath();
    ctx.arc(hx, hy, 2.4, 0, Math.PI * 2);
    ctx.fill();
  };

  const drawRoute = (drawn, walked, alpha) => {
    if (alpha <= 0.01) return;
    const upto = (d, style, width) => {
      ctx.strokeStyle = style;
      ctx.lineWidth = width;
      ctx.beginPath();
      let started = false;
      for (let i = 0; i < route.pts.length && route.cum[i] <= d; i++) {
        const [sx, sy] = P(...route.pts[i]);
        if (started) ctx.lineTo(sx, sy); else ctx.moveTo(sx, sy);
        started = true;
      }
      const [ex, ey] = P(...pointAlong(route, d));
      ctx.lineTo(ex, ey);
      ctx.stroke();
    };
    const d = route.length * drawn;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    upto(d, `rgba(127, 231, 255, ${(0.18 * alpha).toFixed(3)})`, 7);
    upto(d, `rgba(127, 231, 255, ${(0.9 * alpha).toFixed(3)})`, 2);
    if (walked > 0) upto(route.length * walked, `rgba(242, 183, 102, ${(0.95 * alpha).toFixed(3)})`, 2.4);
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
  };

  const drawEvent = (ev, t) => {
    const k = clamp01((t - T.event) / 0.7);
    const out = 1 - clamp01((t - T.fadeOut + 0.6) / 0.6);
    const a = easeOut(k) * out;
    if (a <= 0.01) return;
    const [x, y] = ev.at;
    const [gx, gy] = P(x, y, 0);
    const [tx, ty] = P(x, y, 0.5 * easeOut(k));
    // Light column.
    const g = ctx.createLinearGradient(gx, gy, tx, ty);
    g.addColorStop(0, `rgba(242, 183, 102, ${(0.65 * a).toFixed(3)})`);
    g.addColorStop(1, 'rgba(242, 183, 102, 0)');
    ctx.strokeStyle = g;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(gx, gy);
    ctx.lineTo(tx, ty);
    ctx.stroke();
    ctx.lineWidth = 1;
    for (let i = 0; i < 2; i++) {
      const p = ((t - T.event) * 0.6 + i * 0.5) % 1;
      ring(x, y, 0.03 + p * 0.16, (1 - p) * 0.8 * a, AMBER);
    }
    drawPin(x, y, AMBER, 1, 1.25);

    // Label.
    const [lx, ly] = P(x, y, 0.2);
    const label = `${ev.place} · ${ev.going} going`;
    ctx.font = MONO(10);
    const tw = ctx.measureText(label).width + 16;
    const bx = Math.min(Math.max(lx - tw / 2, 8), w - tw - 8);
    const by = ly - 26 - (1 - easeOut(k)) * 8;
    ctx.globalAlpha = a;
    ctx.fillStyle = 'rgba(28, 34, 42, 0.94)';
    ctx.beginPath();
    ctx.roundRect(bx, by, tw, 20, 6);
    ctx.fill();
    ctx.strokeStyle = 'rgba(242, 183, 102, 0.6)';
    ctx.stroke();
    ctx.fillStyle = COLORS.amber;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, bx + 8, by + 10.5);
    ctx.globalAlpha = 1;
  };

  const drawTraffic = () => {
    traffic.forEach((c) => {
      const x = c.onBridge ? 0.012 * Math.sign(c.speed) : c.pos;
      const y = c.onBridge ? c.pos : c.row;
      if (!c.onBridge && inRiver(x, y, 0.01)) return;
      const [sx, sy] = P(x, y, groundZ(x, y) + 0.004);
      ctx.fillStyle = c.onBridge ? 'rgba(255, 236, 200, 0.75)' : 'rgba(233, 239, 244, 0.35)';
      ctx.beginPath();
      ctx.arc(sx, sy, c.onBridge ? 1.6 : 1.1, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const drawConfetti = () => {
    confetti.forEach((p) => {
      const a = 1 - clamp01((p.life - p.ttl + 0.5) / 0.5);
      ctx.globalAlpha = a;
      ctx.fillStyle = p.color;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx.restore();
    });
    ctx.globalAlpha = 1;
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    if (!w || !h) return;
    updateCamera();
    const t = loopT;
    const s = scene();
    const guide = GUIDES[s.guide];
    const trav = TRAVELLERS[s.traveller];
    const fade = 1 - clamp01((t - T.fadeOut) / 0.7);

    drawTile();
    drawRiver();
    drawParks();
    drawStreets();

    const walkP = smooth(span(t, T.walk));
    const travPos = t >= T.walk[0] && t < T.fadeOut ? pointAlong(route, route.length * walkP) : [...trav, 0];
    const venue = t >= T.event - 0.2 && t < T.fadeOut
      ? buildings.reduce((best, b) => {
          const d = Math.hypot((b.x0 + b.x1) / 2 - s.event.at[0], (b.y0 + b.y1) / 2 - s.event.at[1]);
          return d < best.d ? { b, d } : best;
        }, { b: null, d: Infinity }).b
      : null;

    // Painter's order: buildings and the bridge, back to front.
    const items = buildings.map((b) => ({ d: depth((b.x0 + b.x1) / 2, (b.y0 + b.y1) / 2), draw: () => drawBuilding(b, b === venue) }));
    items.push({ d: depth(0, riverY(0)), draw: drawBridge });
    items.sort((a, b) => a.d - b.d);

    drawTraffic();
    items.forEach((it) => it.draw());

    // Map overlays sit above the city, like markers on a map app.
    if (t >= T.request && t < T.match) {
      for (let i = 0; i < 3; i++) {
        const p = ((t - T.request) * 0.9 + i / 3) % 1;
        ring(trav[0], trav[1], 0.02 + p * 0.22, (1 - p) * 0.9, ION);
      }
    }
    drawRoute(easeOut(span(t, T.route)), walkP, (t >= T.route[0] ? 1 : 0) * fade);

    const pins = GUIDES.map((g, i) => {
      const active = i === s.guide && t >= T.match && t < T.fadeOut;
      const offered = s.offered.includes(i) && t >= T.offer && t < T.match;
      const glow = active ? 1 : offered ? 0.45 + 0.35 * Math.sin(t * 9) : 0;
      return { d: depth(...g.at), draw: () => drawPin(...g.at, AMBER, glow) };
    });
    TRAVELLERS.forEach((p, i) => {
      if (i !== s.traveller) pins.push({ d: depth(...p), draw: () => drawPin(...p, ION, 0) });
    });
    const travGlow = t >= T.request && t < T.fadeOut ? 1 : 0.2;
    pins.push({ d: depth(travPos[0], travPos[1]), draw: () => drawPin(travPos[0], travPos[1], ION, travGlow) });
    pins.sort((a, b) => a.d - b.d).forEach((it) => it.draw());

    if (t >= T.offer && t < T.match + 0.6) {
      const out = 1 - clamp01((t - T.match) / 0.6);
      s.offered.forEach((gi, k) => {
        const prog = easeOut(clamp01((t - T.offer - k * 0.18) / 0.8));
        const chosen = gi === s.guide && t >= T.match;
        drawArc(trav, GUIDES[gi].at, prog, chosen ? 1 : out * 0.8, chosen ? AMBER : ION);
      });
    }
    if (t >= T.match && t < T.match + 1.2) {
      const p = (t - T.match) / 1.2;
      ring(...guide.at, 0.02 + p * 0.2, 1 - p, AMBER);
    }
    if (t >= T.walk[1] && t < T.walk[1] + 1.2) {
      const p = (t - T.walk[1]) / 1.2;
      ring(...guide.at, 0.02 + p * 0.24, 1 - p, ION);
      ring(...guide.at, 0.02 + p * 0.14, 1 - p, AMBER);
    }
    drawEvent(s.event, t);
    drawConfetti();
  };

  return {
    resize(width, height) {
      w = width;
      h = height;
    },
    settle() {
      // Without motion, rest on the moment the route has been walked and the event shows.
      if (!motion) {
        while (loopT < T.event + 1) advance(1 / 30);
      } else syncDom(0);
    },
    step: advance,
    draw,
  };
}
