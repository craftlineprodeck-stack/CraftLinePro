// Converts the portfolio photos listed in portfolio-manifest.mjs into site images:
// upright, optional crop, 1920px long side, WebP, no EXIF/GPS/ICC metadata.
// Writes public/projects/<slug>/<slug>-NN.webp and data/projects/photo-sizes.json.
// Run on the owner's Mac (needs ../Portfolio): npm run import-portfolio
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { manifest, PORTFOLIO_DIR } from './portfolio-manifest.mjs';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const portfolio = path.resolve(root, PORTFOLIO_DIR);
const LONG_SIDE = 1920;
const QUALITY = 78;

const sizes = {};
let total = 0;

for (const project of manifest) {
  const outDir = path.join(root, 'public', 'projects', project.slug);
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });
  sizes[project.slug] = {};

  for (const [i, photo] of project.photos.entries()) {
    const id = String(i + 1).padStart(2, '0');
    const input = path.join(portfolio, project.folder, photo.src);
    const output = path.join(outDir, `${project.slug}-${id}.webp`);

    // Bake EXIF orientation into pixels first, so crop fractions refer to the upright image.
    let img = sharp(await sharp(input).rotate().toBuffer());
    if (photo.crop) {
      const { width, height } = await img.metadata();
      const c = photo.crop;
      img = img.extract({
        left: Math.round(c.left * width),
        top: Math.round(c.top * height),
        width: Math.round(c.width * width),
        height: Math.round(c.height * height),
      });
      img = sharp(await img.toBuffer());
    }
    // sharp drops all metadata unless .withMetadata()/.keepMetadata() is called — never call them here.
    const info = await img
      .resize(LONG_SIDE, LONG_SIDE, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(output);

    const meta = await sharp(output).metadata();
    if (meta.exif || meta.xmp || meta.iptc || meta.icc) throw new Error(`Metadata left in ${output}`);

    sizes[project.slug][id] = { width: info.width, height: info.height };
    total += info.size;
    console.log(`${project.slug}-${id}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB  <- ${photo.src}`);
  }
}

fs.writeFileSync(path.join(root, 'data', 'projects', 'photo-sizes.json'), JSON.stringify(sizes, null, 2) + '\n');
console.log(`\n${Object.values(sizes).reduce((n, s) => n + Object.keys(s).length, 0)} photos, ${(total / 1024 / 1024).toFixed(1)} MB`);
