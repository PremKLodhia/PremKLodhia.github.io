/**
 * One scroll/resize-driven frame scheduler for every scroll-linked effect.
 * Tasks split into a read phase (layout queries) and a write phase (style
 * updates) so the page never interleaves the two and forces extra layouts.
 */

const tasks = new Set();
let queued = false;

function run() {
  queued = false;
  const reads = [];
  tasks.forEach((task) => reads.push(task.read ? task.read() : undefined));
  let i = 0;
  tasks.forEach((task) => task.write && task.write(reads[i++]));
}

export function requestFrame() {
  if (queued) return;
  queued = true;
  requestAnimationFrame(run);
}

/** @param {{ read?: () => any, write?: (data: any) => void }} task */
export function addFrameTask(task) {
  tasks.add(task);
  requestFrame();
  return () => tasks.delete(task);
}

window.addEventListener('scroll', requestFrame, { passive: true });
window.addEventListener('resize', requestFrame, { passive: true });
