/**
 * Runs the Core scene off the main thread on an OffscreenCanvas, so shader
 * compilation, environment pre-filtering and every frame stay clear of
 * scrolling and input. The page talks to it through small messages.
 */
import { createCore } from './scene.js';

let core = null;

self.onmessage = ({ data }) => {
  const { type } = data;
  if (type === 'init') {
    try {
      core = createCore(data.canvas, {
        ...data.options,
        onFirstFrame: () => self.postMessage({ type: 'firstframe' }),
        onTooSlow: () => self.postMessage({ type: 'tooslow' }),
      });
    } catch (err) {
      self.postMessage({ type: 'error', message: String(err && err.message) });
    }
    return;
  }
  if (!core) return;
  if (type === 'progress') core.setProgress(data.value);
  else if (type === 'mode') core.setMode(data.value);
  else if (type === 'pointer') core.setPointer(data.x, data.y);
  else if (type === 'active') core.setActive(data.value);
  else if (type === 'resize') core.resize(data.width, data.height);
};
