/**
 * Starts the Core scene and returns one interface for the page to drive,
 * whether the scene runs in a worker (preferred) or on the main thread.
 */

/** @returns {Promise<{ setProgress, setMode, setPointer, setActive, resize }>} */
export async function startCore(canvas, { tier, reducedMotion, onFirstFrame, onTooSlow }) {
  const options = {
    width: canvas.clientWidth || window.innerWidth,
    height: canvas.clientHeight || window.innerHeight,
    dpr: window.devicePixelRatio || 1,
    tier,
    reducedMotion,
  };

  if (canvas.transferControlToOffscreen && 'Worker' in window) {
    const worker = new Worker(new URL('./core-worker.js', import.meta.url), { type: 'module' });
    const offscreen = canvas.transferControlToOffscreen();
    await new Promise((resolve, reject) => {
      worker.onmessage = ({ data }) => {
        if (data.type === 'firstframe') {
          onFirstFrame();
          resolve();
        } else if (data.type === 'tooslow') onTooSlow();
        else if (data.type === 'error') reject(new Error(data.message));
      };
      worker.onerror = (e) => reject(new Error(e.message || 'Core worker failed'));
      worker.postMessage({ type: 'init', canvas: offscreen, options }, [offscreen]);
    }).catch((err) => {
      worker.terminate();
      throw err;
    });
    const send = (msg) => worker.postMessage(msg);
    return {
      setProgress: (value) => send({ type: 'progress', value }),
      setMode: (value) => send({ type: 'mode', value }),
      setPointer: (x, y) => send({ type: 'pointer', x, y }),
      setActive: (value) => send({ type: 'active', value }),
      resize: () => send({ type: 'resize', width: canvas.clientWidth, height: canvas.clientHeight }),
    };
  }

  // Fallback for browsers without OffscreenCanvas: same scene, main thread.
  const { createCore } = await import('./scene.js');
  const core = createCore(canvas, { ...options, onFirstFrame, onTooSlow });
  return { ...core, resize: () => core.resize(canvas.clientWidth, canvas.clientHeight) };
}
