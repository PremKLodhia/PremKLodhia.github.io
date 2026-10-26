/**
 * The Core — the hero's 3D centrepiece.
 *
 * A gimbal-mounted computational core: three lathe-turned metal rings with
 * chamfered profiles, engraved graduations and luminous inlays, nested around
 * a glass-encased lattice core. Scroll progress locks the rings into an
 * orthogonal alignment; pointer movement tilts the instrument and the camera.
 *
 * All geometry is procedural and every material is lit by a procedurally
 * built studio environment, so the scene loads no textures or models.
 */
import {
  AdditiveBlending,
  ACESFilmicToneMapping,
  BackSide,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  Color,
  CylinderGeometry,
  DirectionalLight,
  DoubleSide,
  Group,
  HalfFloatType,
  IcosahedronGeometry,
  InstancedMesh,
  LatheGeometry,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  PMREMGenerator,
  PointLight,
  Points,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  SRGBColorSpace,
  TorusGeometry,
  Vector2,
  Vector3,
  WebGLRenderer,
  WebGLRenderTarget,
} from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const ION = new Color('#7fe7ff');
const COBALT = new Color('#3b6cff');
const VOID = new Color('#06080b');

// Ring specifications: radii, axial height, chamfer and finish.
const RINGS = [
  { ri: 2.3, ro: 2.56, h: 0.34, c: 0.03, color: '#7d8792', rough: 0.34, aniso: 0.7, inlay: [0.15, 2.1], packets: 5 },
  { ri: 1.92, ro: 2.14, h: 0.26, c: 0.026, color: '#c9d2db', rough: 0.2, aniso: 0.8, inlay: [2.4, 3.4], packets: 4 },
  { ri: 1.55, ro: 1.74, h: 0.2, c: 0.022, color: '#39414b', rough: 0.42, aniso: 0.4, inlay: [0.9, 4.6], packets: 6 },
];
const OBJECT_RADIUS = 2.66;

// Works on the main thread and inside a worker driving an OffscreenCanvas.
const raf = (cb) => (self.requestAnimationFrame ? self.requestAnimationFrame(cb) : setTimeout(() => cb(performance.now()), 16));
const caf = (id) => (self.cancelAnimationFrame ? self.cancelAnimationFrame(id) : clearTimeout(id));

const smoothstep = (a, b, x) => {
  const t = MathUtils.clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
// Frame-rate independent exponential approach.
const damp = (current, target, lambda, dt) => MathUtils.lerp(current, target, 1 - Math.exp(-lambda * dt));

/* ------------------------------------------------------------------------ */
/* Geometry                                                                  */
/* ------------------------------------------------------------------------ */

/**
 * Closed cross-section of a machined ring, revolved around Y. Corner points
 * are duplicated so LatheGeometry produces crisp, hard-edged chamfers.
 */
function ringGeometry({ ri, ro, h, c }, segments) {
  const hh = h / 2;
  const g = h * 0.12; // groove half-height
  const gd = (ro - ri) * 0.16; // groove depth
  const raw = [
    [ro, -hh + c], [ro, -g], [ro - gd, -g], [ro - gd, g], [ro, g], [ro, hh - c],
    [ro - c, hh], [ri + c, hh], [ri, hh - c], [ri, -hh + c], [ri + c, -hh], [ro - c, -hh],
  ];
  const pts = [];
  raw.forEach(([r, y]) => {
    pts.push(new Vector2(r, y), new Vector2(r, y));
  });
  pts.push(new Vector2(raw[0][0], raw[0][1]));
  const geometry = new LatheGeometry(pts.slice(1), segments);
  // Analytic tangents follow the circumference, so anisotropic highlights
  // stretch the way lathe-turned metal is brushed. Derivative-based tangents
  // are unstable on this geometry and produce firefly highlights.
  const pos = geometry.attributes.position;
  const tangent = new Float32Array(pos.count * 4);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const len = Math.hypot(x, z) || 1;
    tangent.set([-z / len, 0, x / len, 1], i * 4);
  }
  geometry.setAttribute('tangent', new BufferAttribute(tangent, 4));
  return { geometry, grooveRadius: ro - gd };
}

/** Engraved graduation ticks on the top face of a ring. */
function graduations(spec, material, count) {
  const tick = new BoxGeometry(0.008, 0.006, 1);
  const mesh = new InstancedMesh(tick, material, count);
  const dummy = new Object3D();
  const span = spec.ro - spec.ri - spec.c * 2;
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const major = i % 10 === 0;
    const len = span * (major ? 0.8 : 0.38);
    const r = spec.ro - spec.c - len / 2 - span * 0.06;
    dummy.position.set(Math.cos(a) * r, spec.h / 2 + 0.002, Math.sin(a) * r);
    dummy.rotation.set(0, -a + Math.PI / 2, 0);
    dummy.scale.set(major ? 1.6 : 1, 1, len);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  return mesh;
}

/** Non-indexed geodesic sphere with barycentric + per-face random attributes. */
function latticeGeometry(radius, detail) {
  const ico = new IcosahedronGeometry(radius, detail);
  const geo = ico.index ? ico.toNonIndexed() : ico;
  const count = geo.attributes.position.count;
  const bary = new Float32Array(count * 3);
  const rand = new Float32Array(count);
  for (let i = 0; i < count; i += 3) {
    bary.set([1, 0, 0, 0, 1, 0, 0, 0, 1], i * 3);
    const r = Math.random();
    rand[i] = rand[i + 1] = rand[i + 2] = r;
  }
  geo.setAttribute('aBary', new BufferAttribute(bary, 3));
  geo.setAttribute('aRand', new BufferAttribute(rand, 1));
  return geo;
}

/* ------------------------------------------------------------------------ */
/* Shaders                                                                   */
/* ------------------------------------------------------------------------ */

const latticeShader = {
  uniforms: {
    uTime: { value: 0 },
    uEnergy: { value: 1 },
    uIon: { value: ION.clone() },
    uCobalt: { value: COBALT.clone() },
  },
  vertexShader: /* glsl */ `
    attribute vec3 aBary;
    attribute float aRand;
    varying vec3 vBary;
    varying float vRand;
    varying vec3 vNormalV;
    varying vec3 vViewDir;
    varying vec3 vLocal;
    void main() {
      vBary = aBary;
      vRand = aRand;
      vLocal = position;
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vNormalV = normalize(normalMatrix * normal);
      vViewDir = normalize(-mv.xyz);
      gl_Position = projectionMatrix * mv;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform float uTime;
    uniform float uEnergy;
    uniform vec3 uIon;
    uniform vec3 uCobalt;
    varying vec3 vBary;
    varying float vRand;
    varying vec3 vNormalV;
    varying vec3 vViewDir;
    varying vec3 vLocal;
    void main() {
      float edge = min(min(vBary.x, vBary.y), vBary.z);
      float w = fwidth(edge);
      float line = 1.0 - smoothstep(0.0, w * 1.6, edge - 0.01);

      // Cells switch on and off like scheduled work, fading rather than blinking.
      float slot = floor(uTime * 0.9 + vRand * 17.0);
      float pick = fract(sin((slot + vRand * 91.7) * 12.9898) * 43758.5453);
      float phase = fract(uTime * 0.9 + vRand * 17.0);
      float busy = step(0.86, pick) * sin(phase * 3.14159);

      // A slow scan band sweeping up the core.
      float scan = pow(0.5 + 0.5 * sin(vLocal.y * 5.0 - uTime * 1.3), 8.0);

      float facing = max(dot(normalize(vNormalV), normalize(vViewDir)), 0.0);
      float fres = pow(1.0 - facing, 2.2);

      vec3 col = vec3(0.004, 0.007, 0.012);
      col += uCobalt * 0.22 * fres;
      col += uIon * line * (0.12 + 0.55 * scan) * uEnergy;
      col += uIon * busy * 0.45 * uEnergy;
      col += uIon * fres * 0.2 * uEnergy;
      gl_FragColor = vec4(col, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `,
};

/** Data packets with comet tails riding a ring's groove, animated on the GPU. */
function packetSystem(radius, packets, trail, pixelRatio) {
  const count = packets * trail;
  const phase = new Float32Array(count);
  const speed = new Float32Array(count);
  const tail = new Float32Array(count);
  for (let p = 0; p < packets; p++) {
    const ph = Math.random() * Math.PI * 2;
    const sp = (0.25 + Math.random() * 0.35) * (Math.random() < 0.5 ? -1 : 1);
    for (let t = 0; t < trail; t++) {
      const i = p * trail + t;
      phase[i] = ph;
      speed[i] = sp;
      tail[i] = t / (trail - 1);
    }
  }
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(new Float32Array(count * 3), 3));
  geo.setAttribute('aPhase', new BufferAttribute(phase, 1));
  geo.setAttribute('aSpeed', new BufferAttribute(speed, 1));
  geo.setAttribute('aTail', new BufferAttribute(tail, 1));
  const mat = new ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uRadius: { value: radius },
      uSize: { value: 44 * pixelRatio },
      uColor: { value: ION.clone().multiplyScalar(0.9) },
      uEnergy: { value: 1 },
    },
    vertexShader: /* glsl */ `
      attribute float aPhase;
      attribute float aSpeed;
      attribute float aTail;
      uniform float uTime;
      uniform float uRadius;
      uniform float uSize;
      varying float vAlpha;
      void main() {
        float a = aPhase + uTime * aSpeed - sign(aSpeed) * aTail * 0.55;
        vec3 p = vec3(cos(a) * uRadius, 0.0, sin(a) * uRadius);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float head = 1.0 - aTail;
        vAlpha = head * head;
        gl_PointSize = uSize * (0.2 + 0.8 * head * head) / -mv.z;
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      uniform float uEnergy;
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d);
        a *= a;
        gl_FragColor = vec4(uColor * a * vAlpha * uEnergy, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
  const pts = new Points(geo, mat);
  pts.frustumCulled = false;
  return pts;
}

/** Fine atmospheric particulate around the instrument. */
function dustField(count, pixelRatio) {
  const pos = new Float32Array(count * 3);
  const seed = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const r = 3.4 + Math.pow(Math.random(), 0.7) * 9;
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
    pos[i * 3 + 1] = r * Math.cos(ph) * 0.7;
    pos[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
    seed[i] = Math.random();
  }
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(pos, 3));
  geo.setAttribute('aSeed', new BufferAttribute(seed, 1));
  const mat = new ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uSize: { value: 5.5 * pixelRatio },
      uIon: { value: ION.clone() },
    },
    vertexShader: /* glsl */ `
      attribute float aSeed;
      uniform float uTime;
      uniform float uSize;
      varying float vAlpha;
      varying float vSeed;
      void main() {
        vec3 p = position;
        p.x += sin(uTime * 0.07 + aSeed * 40.0) * 0.25;
        p.y += sin(uTime * 0.05 + aSeed * 23.0) * 0.35;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float twinkle = 0.55 + 0.45 * sin(uTime * (0.4 + aSeed) + aSeed * 60.0);
        vAlpha = twinkle * smoothstep(30.0, 9.0, -mv.z);
        vSeed = aSeed;
        gl_PointSize = uSize * (0.6 + aSeed) / -mv.z * 10.0;
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uIon;
      varying float vAlpha;
      varying float vSeed;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.05, d) * vAlpha;
        vec3 col = mix(vec3(0.55, 0.62, 0.7), uIon, step(0.8, vSeed));
        gl_FragColor = vec4(col * a * 0.32, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
  const pts = new Points(geo, mat);
  pts.frustumCulled = false;
  return pts;
}

/** Full-screen backdrop: deep void with a cobalt bloom behind the object. */
function backdrop() {
  const mat = new ShaderMaterial({
    uniforms: {
      uResolution: { value: new Vector2(1, 1) },
      uCenter: { value: new Vector2(0.5, 0.5) },
      uRadius: { value: 0.4 },
      uVoid: { value: VOID.clone() },
      uCobalt: { value: COBALT.clone() },
      uIon: { value: ION.clone() },
      uGlow: { value: 1 },
    },
    vertexShader: /* glsl */ `
      void main() { gl_Position = vec4(position.xy, 1.0, 1.0); }
    `,
    fragmentShader: /* glsl */ `
      uniform vec2 uResolution;
      uniform vec2 uCenter;
      uniform float uRadius;
      uniform vec3 uVoid;
      uniform vec3 uCobalt;
      uniform vec3 uIon;
      uniform float uGlow;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution;
        vec2 d = (uv - uCenter) * vec2(uResolution.x / uResolution.y, 1.0);
        float r = length(d) / uRadius;
        float halo = exp(-r * r * 1.1);
        float wide = exp(-r * 0.9);
        vec3 col = uVoid;
        col += uCobalt * 0.018 * wide * uGlow;
        col += uIon * 0.006 * halo * uGlow;
        // Dither to keep the dark gradient free of banding.
        col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
    depthWrite: false,
    depthTest: false,
  });
  const mesh = new Mesh(new PlaneGeometry(2, 2), mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -10;
  return mesh;
}

/** A dark studio with soft-box panels, pre-filtered into an environment map. */
function studioEnvironment(renderer) {
  const studio = new Scene();
  const owned = [];
  const room = new Mesh(new SphereGeometry(30, 32, 16), new MeshBasicMaterial({ color: new Color('#030405'), side: BackSide }));
  studio.add(room);
  owned.push(room);
  const panel = (w, h, color, intensity, x, y, z) => {
    const m = new Mesh(
      new PlaneGeometry(w, h),
      new MeshBasicMaterial({ color: new Color(color).multiplyScalar(intensity), side: DoubleSide })
    );
    m.position.set(x, y, z);
    m.lookAt(0, 0, 0);
    studio.add(m);
    owned.push(m);
  };
  panel(9, 5, '#ffffff', 4.2, -8, 8, 9); // key soft box, high left front
  panel(1.2, 16, '#9fefff', 2.6, 11, 1, -3); // cool rim strip, right
  panel(1, 13, '#4a74ff', 2.2, -11, 0, -7); // cobalt kicker, back left
  panel(13, 0.7, '#ffffff', 4, 0, 11, -4); // overhead strip
  panel(14, 3, '#2b3138', 1.2, 0, -10, 4); // floor bounce
  const pmrem = new PMREMGenerator(renderer);
  const target = pmrem.fromScene(studio, 0.035);
  pmrem.dispose();
  owned.forEach((m) => {
    m.geometry.dispose();
    m.material.dispose();
  });
  return target;
}

/* ------------------------------------------------------------------------ */
/* Controller                                                                */
/* ------------------------------------------------------------------------ */

/**
 * @param {HTMLCanvasElement | OffscreenCanvas} canvas
 * @param {{ width: number, height: number, dpr: number, tier: 'high'|'medium', reducedMotion: boolean,
 *           onFirstFrame?: () => void, onTooSlow?: () => void }} options
 * Throws if WebGL2 is missing or only available as a software rasteriser.
 */
export function createCore(canvas, { width, height, dpr = 1, tier = 'high', reducedMotion = false, onFirstFrame, onTooSlow, onStats } = {}) {
  const high = tier === 'high';
  const renderer = new WebGLRenderer({
    canvas,
    antialias: !high,
    alpha: false,
    powerPreference: 'high-performance',
  });
  const gl = renderer.getContext();
  const info = gl.getExtension('WEBGL_debug_renderer_info');
  if (info && /swiftshader|llvmpipe|software|basic render/i.test(String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)))) {
    renderer.dispose();
    throw new Error('Software WebGL renderer');
  }
  // Budget the drawing buffer by pixel count rather than DPR alone: a large
  // high-DPI screen otherwise multiplies the fill cost of MSAA, transmission
  // and bloom on integrated GPUs.
  const pixelBudget = high ? 2.2e6 : 1.4e6;
  let dprCeiling = Math.min(dpr || 1, 1.5);
  const fitPixelRatio = (w, h) => Math.max(0.75, Math.min(dprCeiling, Math.sqrt(pixelBudget / Math.max(1, w * h))));
  let pixelRatio = fitPixelRatio(width || 1, height || 1);
  renderer.setPixelRatio(pixelRatio);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.setClearColor(VOID, 1);
  renderer.transmissionResolutionScale = 0.6;

  const scene = new Scene();
  const envTarget = studioEnvironment(renderer);
  scene.environment = envTarget.texture;

  const camera = new PerspectiveCamera(26, 1, 0.1, 100);
  scene.add(camera);

  const bg = backdrop();
  scene.add(bg);

  // Lights: the environment carries most of the look; these add crisp speculars
  // on the chamfers and let the core cast ion light onto the inner faces.
  const key = new DirectionalLight('#ffffff', 3.4);
  key.position.set(-5, 6, 7);
  scene.add(key);
  const rim = new DirectionalLight('#8feaff', 2.2);
  rim.position.set(7, 1, -5);
  scene.add(rim);
  const coreLight = new PointLight(ION, 3, 3.6, 1.8);
  scene.add(coreLight);

  /* --- The instrument -------------------------------------------------- */
  const root = new Group();
  scene.add(root);
  const gimbals = [new Group(), new Group(), new Group()];
  root.add(gimbals[0]);
  gimbals[0].add(gimbals[1]);
  gimbals[1].add(gimbals[2]);
  const spindle = new Group();
  gimbals[2].add(spindle);

  const segments = high ? 320 : 200;
  const disposables = [];
  const track = (o) => (disposables.push(o), o);

  const tickMaterial = track(new MeshPhysicalMaterial({ color: '#e6edf3', metalness: 0.7, roughness: 0.25, envMapIntensity: 1.2 }));
  const inlayMaterial = track(new MeshBasicMaterial({ color: ION.clone().multiplyScalar(high ? 1.5 : 1.2), toneMapped: true }));
  const pinMaterial = track(new MeshPhysicalMaterial({ color: '#d6dde4', metalness: 1, roughness: 0.16, envMapIntensity: 1.3 }));
  const capMaterial = track(new MeshPhysicalMaterial({ color: '#4a525c', metalness: 1, roughness: 0.3, clearcoat: 0.6, clearcoatRoughness: 0.2 }));

  const packetSystems = [];
  // Ring planes for the aligned state: XY, XZ, YZ — an orthogonal triad.
  const ringOrientations = [
    (m) => (m.rotation.x = Math.PI / 2),
    () => {},
    (m) => (m.rotation.z = Math.PI / 2),
  ];

  RINGS.forEach((spec, i) => {
    const holder = new Group();
    ringOrientations[i](holder);
    gimbals[i].add(holder);

    const { geometry, grooveRadius } = ringGeometry(spec, segments);
    track(geometry);
    const mat = track(
      new MeshPhysicalMaterial({
        color: spec.color,
        metalness: 1,
        roughness: spec.rough,
        anisotropy: spec.aniso,
        clearcoat: i === 1 ? 0.5 : 0.15,
        clearcoatRoughness: 0.18,
        envMapIntensity: 1.7,
      })
    );
    holder.add(new Mesh(geometry, mat));

    const ticks = graduations(spec, tickMaterial, i === 0 ? 120 : 72);
    track(ticks.geometry);
    holder.add(ticks);

    const [a0, a1] = spec.inlay;
    const inlayGeo = track(new TorusGeometry(grooveRadius + 0.004, 0.011, 8, 160, a1 - a0));
    const inlay = new Mesh(inlayGeo, inlayMaterial);
    inlay.rotation.set(Math.PI / 2, 0, a0);
    holder.add(inlay);

    const packets = packetSystem(spec.ro + 0.012, spec.packets, 18, pixelRatio);
    track(packets.geometry);
    track(packets.material);
    holder.add(packets);
    packetSystems.push(packets);
  });

  // Pins on each gimbal's rotation axis, bridging adjacent rings.
  const addPin = (parent, axis, rInner, rOuter, radius, material) => {
    const len = rOuter - rInner;
    const geo = track(new CylinderGeometry(radius, radius, len, 24));
    [-1, 1].forEach((s) => {
      const pin = new Mesh(geo, material);
      const mid = s * (rInner + len / 2);
      if (axis === 'x') { pin.rotation.z = Math.PI / 2; pin.position.x = mid; }
      if (axis === 'y') { pin.position.y = mid; }
      if (axis === 'z') { pin.rotation.x = Math.PI / 2; pin.position.z = mid; }
      parent.add(pin);
    });
  };
  addPin(gimbals[0], 'y', RINGS[0].ro - 0.01, RINGS[0].ro + 0.18, 0.05, pinMaterial); // mount stubs
  addPin(gimbals[0], 'y', RINGS[0].ro + 0.06, RINGS[0].ro + 0.12, 0.085, capMaterial); // bearing caps
  addPin(gimbals[1], 'x', RINGS[1].ro - 0.01, RINGS[0].ri + 0.01, 0.042, pinMaterial);
  addPin(gimbals[1], 'x', RINGS[0].ro - 0.005, RINGS[0].ro + 0.05, 0.07, capMaterial);
  addPin(gimbals[2], 'z', RINGS[2].ro - 0.01, RINGS[1].ri + 0.01, 0.036, pinMaterial);
  addPin(gimbals[2], 'z', RINGS[1].ro - 0.005, RINGS[1].ro + 0.04, 0.06, capMaterial);
  addPin(gimbals[2], 'y', 1.0, RINGS[2].ri + 0.01, 0.03, pinMaterial); // core spindle

  // Lattice core inside a glass shell.
  const latticeMat = track(new ShaderMaterial({ ...latticeShader, uniforms: latticeShader.uniforms }));
  const lattice = new Mesh(track(latticeGeometry(0.6, high ? 5 : 4)), latticeMat);
  spindle.add(lattice);

  const shellMat = track(
    high
      ? new MeshPhysicalMaterial({
          color: '#ffffff',
          metalness: 0,
          roughness: 0.07,
          transmission: 1,
          thickness: 0.55,
          ior: 1.48,
          attenuationColor: new Color('#bdf3ff'),
          attenuationDistance: 2.5,
          clearcoat: 1,
          clearcoatRoughness: 0.04,
          envMapIntensity: 1.4,
          specularIntensity: 1,
        })
      : new MeshPhysicalMaterial({
          color: '#a9dfff',
          metalness: 0,
          roughness: 0.06,
          transparent: true,
          opacity: 0.16,
          depthWrite: false,
          clearcoat: 1,
          envMapIntensity: 1.8,
        })
  );
  const shell = new Mesh(track(new SphereGeometry(1.02, 64, 48)), shellMat);
  spindle.add(shell);
  // Equatorial collar where the spindle meets the shell.
  const collar = new Mesh(track(new TorusGeometry(1.02, 0.022, 12, 128)), pinMaterial);
  collar.rotation.x = Math.PI / 2;
  spindle.add(collar);

  const dust = dustField(high ? 520 : 260, pixelRatio);
  track(dust.geometry);
  track(dust.material);
  scene.add(dust);

  /* --- Post-processing -------------------------------------------------- */
  let composer = null;
  let bloom = null;
  const size = new Vector2();
  if (high) {
    const rt = new WebGLRenderTarget(1, 1, { type: HalfFloatType, samples: 4 });
    composer = new EffectComposer(renderer, rt);
    composer.addPass(new RenderPass(scene, camera));
    bloom = new UnrealBloomPass(new Vector2(1, 1), 0.3, 0.4, 1.4);
    composer.addPass(bloom);
    composer.addPass(new OutputPass());
  }

  /* --- State ------------------------------------------------------------ */
  const state = {
    progress: 0, // hero scroll progress 0..1
    mode: 'hero',
    pointer: new Vector2(),
    pointerSmooth: new Vector2(),
    tilt: new Vector2(),
    ringLag: RINGS.map(() => new Vector2()),
    lock: [0, 0, 0],
    lockVel: [0, 0, 0],
    energy: 1,
    flash: 0,
    framing: { x: 0, y: 0, dist: 14, glowR: 0.4 },
    framingTarget: { x: 0, y: 0, dist: 14, glowR: 0.4 },
    width: width || 1,
    height: height || 1,
    time: reducedMotion ? 12 : 0,
    active: false,
    raf: 0,
    last: 0,
    firstFrame: false,
    ready: false,
    allLocked: false,
  };

  function computeFraming() {
    const w = state.width;
    const h = state.height;
    const aspect = w / h;
    const tanHalf = Math.tan(MathUtils.degToRad(camera.fov / 2));
    const contact = state.mode === 'contact';
    let diameterFrac, cx, cy;
    if (aspect >= 1.05) {
      diameterFrac = contact ? 0.92 : 0.7; // of viewport height
      cx = contact ? 0.235 : 0.2; // offset as a fraction of width from centre
      cy = contact ? 0.02 : 0.0;
      const halfH = OBJECT_RADIUS / diameterFrac;
      return { x: cx, y: cy, dist: halfH / tanHalf, glowR: 0.42 };
    }
    // Portrait / narrow: fit the width and lift the object into the upper half.
    diameterFrac = contact ? 0.7 : 0.74;
    cx = 0;
    cy = contact ? 0.3 : 0.27;
    const halfW = OBJECT_RADIUS / diameterFrac;
    const halfH = halfW / aspect;
    return { x: cx, y: cy, dist: halfH / tanHalf, glowR: 0.36 };
  }

  function resize(nextWidth = state.width, nextHeight = state.height) {
    const w = Math.max(1, nextWidth);
    const h = Math.max(1, nextHeight);
    state.width = w;
    state.height = h;
    pixelRatio = fitPixelRatio(w, h);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    if (composer) {
      composer.setPixelRatio(pixelRatio);
      composer.setSize(w, h);
    }
    renderer.getDrawingBufferSize(size);
    bg.material.uniforms.uResolution.value.copy(size);
    packetSystems.forEach((p) => (p.material.uniforms.uSize.value = 44 * pixelRatio));
    dust.material.uniforms.uSize.value = 5.5 * pixelRatio;
    state.framingTarget = computeFraming();
    if (!state.firstFrame || reducedMotion) Object.assign(state.framing, state.framingTarget);
    if (!state.active || reducedMotion) renderOnce();
  }

  const tmp = new Vector3();
  const lookTarget = new Vector3();

  function update(dt) {
    const t = state.time;
    const motion = reducedMotion ? 0 : 1;

    // Framing eases between hero and contact compositions.
    const f = state.framing;
    const ft = state.framingTarget;
    const fl = reducedMotion ? 1000 : 3;
    f.x = damp(f.x, ft.x, fl, dt);
    f.y = damp(f.y, ft.y, fl, dt);
    f.dist = damp(f.dist, ft.dist, fl, dt);
    f.glowR = damp(f.glowR, ft.glowR, fl, dt);

    // Pointer smoothing; the tilt and each ring lag at different rates for depth.
    const p = state.pointer;
    state.pointerSmooth.x = damp(state.pointerSmooth.x, p.x * motion, 7, dt);
    state.pointerSmooth.y = damp(state.pointerSmooth.y, p.y * motion, 7, dt);
    state.tilt.x = damp(state.tilt.x, p.y * motion, 4.5, dt);
    state.tilt.y = damp(state.tilt.y, p.x * motion, 4.5, dt);
    state.ringLag.forEach((v, i) => {
      const k = 2.5 + i * 1.5;
      v.x = damp(v.x, p.y * motion, k, dt);
      v.y = damp(v.y, p.x * motion, k, dt);
    });

    // Lock targets: contact always shows the aligned instrument.
    const prog = state.mode === 'contact' ? 1 : state.progress;
    for (let i = 0; i < 3; i++) {
      const target = smoothstep(0.08 + i * 0.16, 0.26 + i * 0.16, prog);
      if (reducedMotion) {
        state.lock[i] = target;
        continue;
      }
      // Slightly under-damped spring: rings settle with a mechanical click.
      const stiffness = 60;
      const damping = 11;
      const accel = stiffness * (target - state.lock[i]) - damping * state.lockVel[i];
      state.lockVel[i] += accel * dt;
      state.lock[i] += state.lockVel[i] * dt;
    }
    const locked = state.lock.every((l) => l > 0.97);
    if (locked && !state.allLocked && !reducedMotion) state.flash = 1;
    state.allLocked = locked;
    state.flash = damp(state.flash, 0, 1.6, dt);

    // Free gimbal swing, collapsing to zero as each ring locks.
    const free = [
      0.95 * Math.sin(t * 0.21 + 0.5) + 0.35 * Math.sin(t * 0.13 + 2.0),
      1.05 * Math.sin(t * 0.17 + 1.3) + 0.25 * Math.sin(t * 0.29),
      1.2 * Math.sin(t * 0.25 + 2.1) + 0.3 * Math.sin(t * 0.11 + 0.7),
    ];
    gimbals[0].rotation.y = free[0] * (1 - state.lock[0]) + state.ringLag[0].y * 0.12;
    gimbals[1].rotation.x = free[1] * (1 - state.lock[1]) + state.ringLag[1].x * 0.16;
    gimbals[2].rotation.z = free[2] * (1 - state.lock[2]) - state.ringLag[2].y * 0.2;
    spindle.rotation.y = t * 0.35;
    lattice.rotation.x = Math.sin(t * 0.3) * 0.2;

    root.rotation.y = -0.55 + Math.sin(t * 0.05) * 0.25 + state.tilt.y * 0.22;
    root.rotation.x = 0.08 + state.tilt.x * 0.14;
    root.rotation.z = -state.tilt.y * 0.05;

    // Energy rises as the instrument aligns, with a brief pulse on full lock.
    const lockAvg = (state.lock[0] + state.lock[1] + state.lock[2]) / 3;
    const near = Math.max(0, 1 - Math.hypot(p.x - f.x * 2, p.y + f.y * 2) * 0.9) * motion;
    state.energy = damp(state.energy, 0.85 + lockAvg * 0.35 + near * 0.3, 3, dt);
    const energy = state.energy + state.flash * 0.9;
    latticeMat.uniforms.uTime.value = t;
    latticeMat.uniforms.uEnergy.value = energy;
    packetSystems.forEach((s) => {
      s.material.uniforms.uTime.value = t;
      s.material.uniforms.uEnergy.value = 0.7 + energy * 0.3;
    });
    dust.material.uniforms.uTime.value = t;
    coreLight.intensity = 1.5 + energy * 2.5;
    if (bloom) bloom.strength = 0.26 + state.flash * 0.35 + lockAvg * 0.08;

    // Camera: telephoto orbit that drifts with the pointer and dollies on lock.
    const az = MathUtils.degToRad(18 - lockAvg * 10) + state.pointerSmooth.x * 0.16;
    const el = MathUtils.degToRad(9 + lockAvg * 6) + state.pointerSmooth.y * 0.1;
    const dist = f.dist * (1 - lockAvg * 0.05);
    camera.position.set(Math.sin(az) * Math.cos(el) * dist, Math.sin(el) * dist, Math.cos(az) * Math.cos(el) * dist);
    camera.lookAt(lookTarget);

    // Shift-lens framing: offsets the projection so the object sits off-centre
    // without perspective distortion.
    const w = state.width;
    const h = state.height;
    const drift = state.mode === 'hero' && w > h ? lockAvg * 0.06 : 0;
    camera.setViewOffset(w, h, -(f.x + drift) * w, f.y * h, w, h);

    tmp.set(0, 0, 0).project(camera);
    bg.material.uniforms.uCenter.value.set(tmp.x * 0.5 + 0.5, tmp.y * 0.5 + 0.5);
    bg.material.uniforms.uRadius.value = f.glowR;
    bg.material.uniforms.uGlow.value = 0.8 + lockAvg * 0.4;
  }

  function draw() {
    if (composer) composer.render();
    else renderer.render(scene, camera);
    if (!state.firstFrame) {
      state.firstFrame = true;
      if (onFirstFrame) onFirstFrame();
    }
  }

  function renderOnce() {
    if (!state.ready) return;
    update(1 / 60);
    draw();
  }

  // Adaptive quality: if frames are consistently slow, drop bloom and pixel
  // ratio once; if they are still slow after that, hand back to the still.
  const perf = { frames: 0, total: 0, warmup: 30, degraded: false, gaveUp: false };
  // Average frame time that triggers a step down (the lighter tier is capped at 30 fps).
  const frameBudget = high ? 1 / 40 : 1 / 15;
  function adapt(dt) {
    if (perf.gaveUp || !state.firstFrame) return;
    if (perf.warmup > 0) {
      perf.warmup--;
      return;
    }
    perf.frames++;
    perf.total += dt;
    if (perf.frames < 60) return;
    const avg = perf.total / perf.frames;
    perf.frames = 0;
    perf.total = 0;
    if (avg <= frameBudget) return;
    if (perf.degraded) {
      perf.gaveUp = true;
      api.setActive(false);
      if (onTooSlow) onTooSlow();
      return;
    }
    perf.degraded = true;
    if (composer) {
      composer.dispose();
      composer = null;
      bloom = null;
    }
    dprCeiling = Math.min(dprCeiling, pixelRatio * 0.8);
    resize();
  }

  // The lighter tier runs at up to 30 fps to spare battery on phones.
  const minStep = high ? 0 : 1 / 31;
  function frame(now) {
    state.raf = raf(frame);
    const elapsed = (now - (state.last || now)) / 1000;
    if (state.last && elapsed < minStep) return;
    const dt = Math.min(elapsed, 1 / 20);
    state.last = now;
    state.time += dt;
    update(dt);
    const t0 = performance.now();
    draw();
    adapt(dt);
    if (onStats) {
      stats.frames++;
      stats.cpu += performance.now() - t0;
      if (now - stats.since > 1000) {
        onStats({ fps: Math.round((stats.frames * 1000) / (now - stats.since)), drawMs: +(stats.cpu / stats.frames).toFixed(1), dpr: pixelRatio, bloom: !!composer, tier });
        Object.assign(stats, { frames: 0, cpu: 0, since: now });
      }
    }
  }
  const stats = { frames: 0, cpu: 0, since: performance.now() };

  const api = {
    setProgress(p) {
      state.progress = p;
      if (reducedMotion && state.active) renderOnce();
    },
    setMode(mode) {
      if (mode === state.mode) return;
      state.mode = mode;
      state.framingTarget = computeFraming();
      // Mode switches happen while the canvas is hidden, so snap.
      Object.assign(state.framing, state.framingTarget);
      if (reducedMotion) renderOnce();
    },
    setPointer(x, y) {
      state.pointer.set(x, y);
    },
    setActive(active) {
      if (perf.gaveUp) active = false;
      if (active === state.active) return;
      state.active = active;
      if (reducedMotion) {
        if (active) renderOnce();
        return;
      }
      if (active && state.ready) {
        state.last = 0;
        state.raf = raf(frame);
      } else {
        caf(state.raf);
      }
    },
    resize,
    dispose() {
      caf(state.raf);
      disposables.forEach((d) => d.dispose && d.dispose());
      bg.geometry.dispose();
      bg.material.dispose();
      envTarget.dispose();
      if (composer) composer.dispose();
      renderer.dispose();
    },
  };

  resize();

  // Compile every shader program without blocking the main thread (uses
  // KHR_parallel_shader_compile where available), then start rendering.
  const begin = () => {
    state.ready = true;
    if (state.active && !reducedMotion) {
      state.last = 0;
      state.raf = raf(frame);
    } else {
      renderOnce();
    }
  };
  // With post-processing the scene renders into a linear target, so compile
  // the program variants for that target rather than for the screen.
  if (composer) renderer.setRenderTarget(composer.renderTarget1);
  const compiling = renderer.compileAsync(scene, camera);
  renderer.setRenderTarget(null);
  compiling.then(begin, begin);

  return api;
}
