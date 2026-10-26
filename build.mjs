/**
 * Build: bundles and minifies the homepage CSS and JS into dist/.
 * The Three.js scene is split into its own chunk and loaded on demand.
 *
 *   node build.mjs          one-off production build
 *   node build.mjs --watch  rebuild on change
 */
import * as esbuild from 'esbuild';
import { rmSync } from 'node:fs';

const watch = process.argv.includes('--watch');

rmSync('dist', { recursive: true, force: true });

const shared = {
  bundle: true,
  minify: true,
  sourcemap: false,
  legalComments: 'none',
  logLevel: 'info',
  target: ['es2020', 'chrome100', 'safari15', 'firefox100'],
};

const js = {
  ...shared,
  entryPoints: { main: 'src/js/main.js', 'core-worker': 'src/js/core/worker.js' },
  outdir: 'dist',
  format: 'esm',
  splitting: true,
  entryNames: '[name]',
  chunkNames: 'chunks/[name]-[hash]',
};

const css = {
  ...shared,
  entryPoints: { site: 'src/css/site.css' },
  outdir: 'dist',
  external: ['/assets/*'],
};

if (watch) {
  const contexts = await Promise.all([esbuild.context(js), esbuild.context(css)]);
  await Promise.all(contexts.map((c) => c.watch()));
} else {
  await Promise.all([esbuild.build(js), esbuild.build(css)]);
}
