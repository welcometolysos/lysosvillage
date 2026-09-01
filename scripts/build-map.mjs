/**
 * Fetches a small grid of OpenStreetMap tiles around Lysos, stitches them into
 * ONE image, and saves it to src/assets/. Run once (or when the crop changes):
 *
 *     node scripts/build-map.mjs
 *
 * Why bake the map in rather than load tiles in the browser?
 *  - It always shows the village, even if JS is blocked or the network is slow.
 *    (The previous site's map was a blank box — this cannot be blank.)
 *  - It's served from our own domain: no third-party request on page load,
 *    no dependency on a tile server staying free.
 *  - Astro then optimises it like any other image.
 *
 * Coordinates verified against OpenStreetMap Nominatim, not guessed.
 */
import { writeFile, mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const LAT = 34.9949;
const LON = 32.512;
const ZOOM = 15;
const COLS = 5;
const ROWS = 5;
const OUT_SIZE = 1024; // final centred crop
const TILE = 256;
const OUT = 'src/assets/lysos-map.png';

/** Exact (fractional) tile coordinates for a lat/lon — Web Mercator. */
function project(lat, lon, z) {
  const n = 2 ** z;
  const x = ((lon + 180) / 360) * n;
  const latRad = (lat * Math.PI) / 180;
  const y = ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n;
  return { x, y };
}

async function fetchTile(z, x, y) {
  const url = `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
  const res = await fetch(url, {
    headers: {
      // OpenStreetMap's tile policy asks for a real identifying User-Agent.
      'User-Agent': 'lysosvillage.com static map builder (welcometolysos@gmail.com)',
    },
  });
  if (!res.ok) throw new Error(`tile ${z}/${x}/${y} -> HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

const centre = project(LAT, LON, ZOOM);

// Fetch a grid wide enough that we can crop a window centred EXACTLY on the
// village, rather than wherever the tile boundaries happen to fall.
const x0 = Math.floor(centre.x) - Math.floor((COLS - 1) / 2);
const y0 = Math.floor(centre.y) - Math.floor((ROWS - 1) / 2);

console.log(`Lysos ${LAT}, ${LON} @ z${ZOOM}`);
console.log(`grid ${COLS}x${ROWS} from tile ${x0},${y0}`);

const composites = [];
for (let dy = 0; dy < ROWS; dy++) {
  for (let dx = 0; dx < COLS; dx++) {
    const tx = x0 + dx;
    const ty = y0 + dy;
    process.stdout.write(`  tile ${tx},${ty} … `);
    const buf = await fetchTile(ZOOM, tx, ty);
    composites.push({ input: buf, left: dx * TILE, top: dy * TILE });
    console.log(`${(buf.length / 1024).toFixed(0)}KB`);
    // Be a good citizen towards a free service.
    await new Promise((r) => setTimeout(r, 120));
  }
}

const width = COLS * TILE;
const height = ROWS * TILE;

await mkdir('src/assets', { recursive: true });
const stitched = await sharp({
  create: { width, height, channels: 3, background: { r: 18, g: 16, b: 11 } },
})
  .composite(composites)
  .png()
  .toBuffer();

// Village position inside the stitched grid, in pixels.
const vx = (centre.x - x0) * TILE;
const vy = (centre.y - y0) * TILE;

// Crop a square centred on the village, clamped to stay inside the grid.
const half = OUT_SIZE / 2;
const cropLeft = Math.max(0, Math.min(width - OUT_SIZE, Math.round(vx - half)));
const cropTop = Math.max(0, Math.min(height - OUT_SIZE, Math.round(vy - half)));

await sharp(stitched)
  .extract({ left: cropLeft, top: cropTop, width: OUT_SIZE, height: OUT_SIZE })
  .png()
  .toFile(OUT);

// Where the village actually falls inside the stitched image, as a percentage.
// The pin is positioned with these numbers so it lands on the village, not
// on the middle of the picture.
const pinX = ((vx - cropLeft) * 100) / OUT_SIZE;
const pinY = ((vy - cropTop) * 100) / OUT_SIZE;

console.log(`\nwrote ${OUT} (${width}x${height})`);
console.log(`PIN POSITION -> left: ${pinX.toFixed(2)}%  top: ${pinY.toFixed(2)}%`);

await writeFile(
  'src/map-data.json',
  JSON.stringify(
    {
      lat: LAT,
      lon: LON,
      zoom: ZOOM,
      pin: { leftPct: Number(pinX.toFixed(3)), topPct: Number(pinY.toFixed(3)) },
      attribution: '© OpenStreetMap contributors',
    },
    null,
    2
  ) + '\n'
);
console.log('wrote src/map-data.json');
