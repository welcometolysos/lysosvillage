/**
 * Copies Leaflet's stylesheet into public/ so it can be requested ONLY when a
 * visitor presses "Explore the map".
 *
 * Importing it from JavaScript instead (`import('leaflet/dist/leaflet.css')`)
 * looks lazy but isn't: Vite extracts the CSS and links it from every page, so
 * all 15kB downloads on every visit whether or not anyone touches the map.
 *
 * Runs automatically before `npm run dev` and `npm run build`, so it can never
 * drift from the installed Leaflet version.
 */
import { copyFile, mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

const require = createRequire(import.meta.url);
const leafletDir = dirname(require.resolve('leaflet/dist/leaflet.css'));

await mkdir('public', { recursive: true });
await copyFile(join(leafletDir, 'leaflet.css'), 'public/leaflet.css');

const { version } = require('leaflet/package.json');
console.log(`copied leaflet ${version} css -> public/leaflet.css`);
