import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const assets = [
  ["cpd.png", "cpd"],
  ["cpd-dashboard.png", "cpd-dashboard"],
  ["gymkhana.png", "gymkhana"],
  ["ramzan.png", "ramadan"],
  ["story-magicaian.png", "story-magician"],
  ["texttopia.webp", "textopia"],
  ["MusketeersTech_Thumbnail_1200x627.png", "musketeers"],
  ["stickaball.png", "stickball"],
];

const publicDir = new URL("../public/", import.meta.url);
await mkdir(new URL("projects/", publicDir), { recursive: true });
for (const [source, name] of assets) {
  const result = await sharp(fileURLToPath(new URL(source, publicDir)))
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 90, effort: 6 })
    .toFile(fileURLToPath(new URL(`projects/${name}.webp`, publicDir)));
  console.log(`${name}: ${result.width}x${result.height}, ${result.size} bytes`);
}
