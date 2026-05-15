// Render all SVGs in public/ and public/social/ to PNGs at exact target dimensions.
// Renders at high DPI then downsamples for crisp anti-aliased output.
// Usage: node scripts/render-pngs.mjs

import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const projectRoot = new URL('..', import.meta.url).pathname;

const targets = [
  { svg: 'public/og.svg',                       png: 'public/og.png',                       w: 1200, h: 630  },
  { svg: 'public/social/linkedin-banner.svg',   png: 'public/social/linkedin-banner.png',   w: 1584, h: 396  },
  { svg: 'public/social/x-header.svg',          png: 'public/social/x-header.png',          w: 1500, h: 500  },
  { svg: 'public/social/substack-header.svg',   png: 'public/social/substack-header.png',   w: 1500, h: 500  },
  { svg: 'public/social/youtube-banner.svg',    png: 'public/social/youtube-banner.png',    w: 2560, h: 1440 },
];

for (const { svg, png, w, h } of targets) {
  const svgPath = join(projectRoot, svg);
  const pngPath = join(projectRoot, png);
  const buf = await readFile(svgPath);

  await sharp(buf, { density: 300 })
    .resize(w, h, { fit: 'fill' })
    .png({ compressionLevel: 9, quality: 95 })
    .toFile(pngPath);

  console.log(`✓ ${svg} → ${png}  (${w}x${h})`);
}

console.log('\nAll PNGs rendered at native dimensions.');
