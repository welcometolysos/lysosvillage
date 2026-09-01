/**
 * Prepares photos for the site.
 *
 *     npm run photos            # report only, changes nothing
 *     npm run photos -- --write # actually import
 *
 * WHY THIS EXISTS: phone photos carry an EXIF "orientation" tag instead of
 * being stored the right way up. Phones honour it; plenty of web tooling does
 * not, which is how sideways photos end up on websites. Kleo's photos are
 * orientation 6 — rotate 90° — so every one of them would have landed on the
 * site lying on its side.
 *
 * This bakes the rotation into the pixels, drops the now-meaningless metadata
 * (which also strips GPS coordinates from the file — worth doing before
 * publishing anyone's photos), and caps the size so a 4000px, 11MB original
 * doesn't sit in the repo.
 */
import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';

const SRC = 'photos-from-kleo';
const DEST = 'src/assets/village';
const MAX_EDGE = 2400;
const WRITE = process.argv.includes('--write');

const IMAGE = /\.(jpe?g|png|webp|heic|heif)$/i;

/** photo-name.JPG -> photo-name  (safe, lowercase, no spaces) */
function slug(file) {
  return basename(file, extname(file))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (IMAGE.test(e.name)) out.push(p);
  }
  return out;
}

const files = await walk(SRC);
if (!files.length) {
  console.log(`no photos found in ${SRC}/`);
  process.exit(0);
}

if (WRITE) await mkdir(DEST, { recursive: true });

let rotated = 0;
let savedBytes = 0;

console.log(`${files.length} photo(s) in ${SRC}/\n`);

for (const file of files) {
  const meta = await sharp(file).metadata();
  const before = (await stat(file)).size;
  const needsRotate = (meta.orientation ?? 1) > 1;
  if (needsRotate) rotated++;

  const name = slug(file) + '.jpg';
  const out = join(DEST, name);

  if (WRITE) {
    const info = await sharp(file)
      .rotate() // bakes in the EXIF orientation
      .resize(MAX_EDGE, MAX_EDGE, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 86, mozjpeg: true })
      .toFile(out); // sharp drops metadata unless asked to keep it
    savedBytes += before - info.size;
    console.log(
      `  ${needsRotate ? 'rotated' : 'ok     '}  ${(before / 1024 / 1024).toFixed(1)}MB -> ${(
        info.size / 1024
      ).toFixed(0)}KB  ${name}`
    );
  } else {
    console.log(
      `  ${needsRotate ? 'WOULD ROTATE' : 'upright     '}  ${(before / 1024 / 1024).toFixed(1)}MB  ${name}`
    );
  }
}

console.log(
  `\n${rotated} of ${files.length} were stored sideways` +
    (WRITE ? ` — fixed. Saved ${(savedBytes / 1024 / 1024).toFixed(1)}MB.` : '.')
);
if (!WRITE) console.log('Report only. Re-run with --write to import.');

// Warn about anything already in the project that is stored sideways.
const existing = await walk('src/assets');
const crooked = [];
for (const f of existing) {
  const m = await sharp(f).metadata();
  if ((m.orientation ?? 1) > 1) crooked.push(f);
}
if (crooked.length) {
  console.log(`\nWARNING: ${crooked.length} photo(s) already in src/assets are stored sideways:`);
  crooked.forEach((f) => console.log('  ' + f));
} else {
  console.log('\nEverything already in src/assets is stored the right way up.');
}
