/**
 * Minimal static file server for local development and QA.
 *   node scripts/serve.mjs [root] [port]
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';

const root = resolve(process.argv[2] || '.');
const port = Number(process.argv[3] || 8080);

// Mirror the production headers from _headers (the "/*" block) so CSP issues show up locally.
const prodHeaders = {};
try {
  let inAll = false;
  for (const line of readFileSync(join(root, '_headers'), 'utf8').split(/\r?\n/)) {
    if (/^\S/.test(line)) inAll = line.trim() === '/*';
    else if (inAll && line.includes(':')) {
      const i = line.indexOf(':');
      prodHeaders[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
  }
} catch {
  // No _headers file: serve without them.
}

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
};

createServer(async (req, res) => {
  try {
    const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let file = normalize(join(root, url));
    if (!file.startsWith(root)) throw new Error('outside root');
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, { ...prodHeaders, 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
}).listen(port, () => console.log(`Serving ${root} at http://localhost:${port}`));
