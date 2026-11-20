// Entry program for news-image-20261120: copy the committed front-page image
// to the output directory. Runs offline, writes the same bytes every time.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
if (!existsSync(source)) {
  console.error(`missing ${source}`);
  process.exit(1);
}
const target = join(outDir, "entry.png");
copyFileSync(source, target);
console.log(`wrote ${target} (${statSync(target).size} bytes)`);
