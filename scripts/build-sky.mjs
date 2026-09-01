/**
 * Builds the Sacred Sky data: the real night sky over Lysos on the night of
 * the Panagia, 15 August, with the nine churches lifted into it.
 *
 *     npm run sky
 *
 * TWO HONEST CLAIMS, kept separate:
 *  1. The STARS are real. Positions come from the HYG astronomical catalogue
 *     and are projected for Lysos's actual latitude and longitude at a real
 *     moment in time. This is the sky that genuinely stands over the village.
 *  2. The CHURCHES are in their real positions RELATIVE TO ONE ANOTHER, taken
 *     from OpenStreetMap. Their placement among the stars is our choice: the
 *     village's own plan, lifted off the ground and hung in the sky. We do not
 *     claim it is an astronomical constellation.
 *
 * Everything is computed here, at build time, and shipped as a plain SVG — so
 * the sky needs no JavaScript in the visitor's browser.
 */
import { writeFile, mkdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const LAT = 34.9949;
const LON = 32.512;

// 15 August, the Dormition of the Virgin — the feast of Panagia Chryseleousa
// herself. 22:00 Cyprus summer time (EEST, UTC+3) = 19:00 UTC.
const WHEN = new Date(Date.UTC(2026, 7, 15, 19, 0, 0));

const MAG_LIMIT = 5.1; // naked-eye limit in a properly dark sky
const CACHE = 'scripts/.hyg-cache.csv';
const HYG =
  'https://raw.githubusercontent.com/astronexus/HYG-Database/main/hyg/CURRENT/hygdata_v41.csv';

const rad = (d) => (d * Math.PI) / 180;
const deg = (r) => (r * 180) / Math.PI;

/** Julian Date from a JS Date (UTC). */
function julian(date) {
  return date.getTime() / 86400000 + 2440587.5;
}

/** Greenwich Mean Sidereal Time in degrees. */
function gmst(date) {
  const d = julian(date) - 2451545.0;
  return ((280.46061837 + 360.98564736629 * d) % 360 + 360) % 360;
}

/** Equatorial (RA hours, Dec degrees) -> horizon (altitude, azimuth) degrees. */
function toHorizon(raHours, decDeg, latDeg, lonDeg, date) {
  const lst = gmst(date) + lonDeg; // local sidereal time, degrees
  const ha = rad(((lst - raHours * 15) % 360 + 540) % 360 - 180);
  const dec = rad(decDeg);
  const lat = rad(latDeg);

  const alt = Math.asin(Math.sin(dec) * Math.sin(lat) + Math.cos(dec) * Math.cos(lat) * Math.cos(ha));
  const az = Math.atan2(
    -Math.cos(dec) * Math.sin(ha),
    Math.sin(dec) * Math.cos(lat) - Math.cos(dec) * Math.sin(lat) * Math.cos(ha)
  );

  return { alt: deg(alt), az: (deg(az) + 360) % 360 };
}

/**
 * Stereographic projection from the zenith onto a unit disc.
 * The horizon lands on r = 1; straight overhead is the centre.
 * North is up, east to the left — the sky as you see it lying on your back.
 */
function project(alt, az) {
  const r = Math.tan(rad((90 - alt) / 2)) / Math.tan(rad(45));
  return { x: r * Math.sin(rad(az)), y: -r * Math.cos(rad(az)) };
}

// ---------------------------------------------------------------- stars

async function loadCatalogue() {
  if (existsSync(CACHE)) {
    console.log('using cached star catalogue');
    return readFile(CACHE, 'utf8');
  }
  console.log('downloading HYG star catalogue …');
  const res = await fetch(HYG);
  if (!res.ok) throw new Error(`HYG catalogue -> HTTP ${res.status}`);
  const text = await res.text();
  await writeFile(CACHE, text);
  console.log(`cached ${(text.length / 1024 / 1024).toFixed(1)}MB`);
  return text;
}

/** CSV line splitter that respects quoted fields. */
function splitCsv(line) {
  const out = [];
  let cur = '';
  let quoted = false;
  for (const ch of line) {
    if (ch === '"') quoted = !quoted;
    else if (ch === ',' && !quoted) {
      out.push(cur);
      cur = '';
    } else cur += ch;
  }
  out.push(cur);
  return out;
}

const csv = await loadCatalogue();
const lines = csv.split('\n');
const head = splitCsv(lines[0]).map((h) => h.replace(/"/g, ''));
const col = (name) => head.indexOf(name);
const iRa = col('ra');
const iDec = col('dec');
const iMag = col('mag');
const iProper = col('proper');
const iCon = col('con');

const stars = [];
for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  if (!line) continue;
  const f = splitCsv(line);
  const mag = parseFloat(f[iMag]);
  if (!Number.isFinite(mag) || mag > MAG_LIMIT) continue;

  const ra = parseFloat(f[iRa]);
  const dec = parseFloat(f[iDec]);
  if (!Number.isFinite(ra) || !Number.isFinite(dec)) continue;
  if (ra === 0 && dec === 0) continue; // the Sun's own row

  const { alt, az } = toHorizon(ra, dec, LAT, LON, WHEN);
  if (alt < 1) continue; // below the horizon from Lysos that night

  const { x, y } = project(alt, az);
  stars.push({
    x: Number(x.toFixed(4)),
    y: Number(y.toFixed(4)),
    m: Number(mag.toFixed(2)),
    alt: Number(alt.toFixed(1)),
    name: (f[iProper] || '').replace(/"/g, '') || undefined,
    con: (f[iCon] || '').replace(/"/g, '') || undefined,
  });
}

stars.sort((a, b) => a.m - b.m);
console.log(`${stars.length} real stars above the horizon over Lysos at ${WHEN.toISOString()}`);
console.log(
  'brightest:',
  stars
    .slice(0, 6)
    .map((s) => `${s.name || '?'} (${s.m})`)
    .join(', ')
);

// ---------------------------------------------------------------- churches

const churchSrc = await readFile('src/data/churches.ts', 'utf8');
// Pull each church id and position out of churches.ts. Done by plain scan
// rather than a regex: entries carry comment lines between the id and the
// position, and a regex loose enough to skip them is a regex that quietly
// matches the wrong thing.
const ids = churchSrc
  .split("id: '")
  .slice(1)
  .map((chunk) => {
    const id = chunk.slice(0, chunk.indexOf("'"));
    const at = chunk.indexOf('pos: { lat: ');
    if (at === -1) return null;
    const body = chunk.slice(at, chunk.indexOf('}', at));
    const nums = body.match(/[0-9]+[.][0-9]+/g) || [];
    const src = body.includes("'approx'") ? 'approx' : 'osm';
    if (nums.length < 2) return null;
    return [null, id, nums[0], nums[1], src];
  })
  .filter(Boolean);
if (ids.length !== 9) throw new Error(`expected 9 churches with positions, found ${ids.length}`);

const anchor = ids.find((m) => m[1] === 'chryseleousa');
const aLat = parseFloat(anchor[2]);
const aLon = parseFloat(anchor[3]);

// Local tangent plane: metres east and north of Chryseleousa.
const mPerDegLat = 111132;
const mPerDegLon = 111320 * Math.cos(rad(aLat));

const raw = ids.map((m) => ({
  id: m[1],
  source: m[4],
  east: (parseFloat(m[3]) - aLon) * mPerDegLon,
  north: (parseFloat(m[2]) - aLat) * mPerDegLat,
}));

const span = Math.max(...raw.map((c) => Math.hypot(c.east, c.north)));
console.log(`furthest church from Chryseleousa: ${(span / 1000).toFixed(2)} km`);

// Lift the village into the sky. Every BEARING is exactly true — a chapel that
// lies north-east of Chryseleousa on the ground lies north-east of it up there.
// Distances are spread by their square root, because otherwise the eight
// churches inside the village collapse into a single unreadable blob beside
// Agios Merkourios five kilometres out. Stated plainly on the page.
const SPREAD = 0.5;
const churchStars = raw.map((c) => {
  const dist = Math.hypot(c.east, c.north);
  const bearing = Math.atan2(c.east, c.north); // clockwise from north, true
  const r = span === 0 ? 0 : SPREAD * Math.sqrt(dist / span);
  return {
    id: c.id,
    source: c.source,
    x: Number((r * Math.sin(bearing)).toFixed(4)),
    y: Number((-r * Math.cos(bearing)).toFixed(4)),
    km: Number((dist / 1000).toFixed(2)),
  };
});

// Join the churches into a figure the honest way: a minimum spanning tree
// rooted at Chryseleousa, so every chapel links to its nearest neighbour and
// the shape radiates out from the mother church. No arbitrary line-drawing.
const edges = [];
const inTree = new Set(['chryseleousa']);
const byId = Object.fromEntries(churchStars.map((c) => [c.id, c]));
while (inTree.size < churchStars.length) {
  let best = null;
  for (const a of inTree) {
    for (const c of churchStars) {
      if (inTree.has(c.id)) continue;
      const d = Math.hypot(byId[a].x - c.x, byId[a].y - c.y);
      if (!best || d < best.d) best = { from: a, to: c.id, d };
    }
  }
  edges.push([best.from, best.to]);
  inTree.add(best.to);
}
console.log('constellation lines:', edges.map((e) => e.join('-')).join(', '));

await mkdir('src/data', { recursive: true });
await writeFile(
  'src/data/sky.json',
  JSON.stringify(
    {
      place: { name: 'Lysos', lat: LAT, lon: LON },
      when: { iso: WHEN.toISOString(), label: '15 August, 22:00', localZone: 'EEST (UTC+3)' },
      magnitudeLimit: MAG_LIMIT,
      starCount: stars.length,
      stars,
      churches: churchStars,
      edges,
      note: 'Stars are real, projected for this place and moment. Church positions are real relative to each other (OpenStreetMap); their placement among the stars is a design choice, not an astronomical claim.',
    },
    null,
    0
  ) + '\n'
);

console.log('wrote src/data/sky.json');
