import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const output = fileURLToPath(new URL("../out/", import.meta.url));
const titles = new Set();
let links = 0;
let images = 0;
for (const route of ["", "about", "projects", "contact"]) {
  const html = readFileSync(resolve(output, route ? `${route}.html` : "index.html"), "utf8");
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${route || "home"}: one H1`);
  assert.match(html, /<main\b[^>]*id="main"/);
  assert.match(html, /<link\b[^>]*rel="canonical"/);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), "Unique page title");
  titles.add(title);
  assert.ok(!html.includes("Preview asset pending"), "No unfinished preview copy");
  for (const tag of html.matchAll(/<(?:a|img)\b[^>]*>/g)) {
    const value = tag[0].match(/(?:href|src)="([^"]+)"/)?.[1];
    if (tag[0].startsWith("<img")) {
      images++;
      assert.match(tag[0], /\balt="[^"]*"/, "Image alt attribute");
    } else {
      links++;
      assert.ok(value, "Anchor has an href");
    }
    if (!value || !value.startsWith("/")) continue;
    const path = decodeURIComponent(value.split(/[?#]/)[0]);
    const target = resolve(output, `.${path}`);
    assert.ok(existsSync(target) || existsSync(`${target}.html`), `Missing target: ${value}`);
  }
  console.log(`${route || "home"}: headings, metadata, links, and image assets passed`);
}
assert.ok(existsSync(resolve(output, "robots.txt")));
assert.ok(existsSync(resolve(output, "sitemap.xml")));
console.log(`Checked ${links} links and ${images} images. This is a static audit, not browser or external-link verification.`);
