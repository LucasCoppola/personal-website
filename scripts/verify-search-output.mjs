import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";

const output = path.resolve(import.meta.dirname, "../.vercel/output");
const config = JSON.parse(await readFile(path.join(output, "config.json"), "utf8"));
const sitemap = await readFile(path.join(output, "static/sitemap-0.xml"), "utf8");
const rss = await readFile(path.join(output, "static/rss.xml"), "utf8");
const projects = [
  { previous: "project-1", slug: "lift", title: "Lift — Training Block Planner and Workout Tracker" },
  { previous: "project-2", slug: "thullo", title: "Thullo — Collaborative Task Boards" },
  { previous: "project-3", slug: "music-player", title: "Music Player — Customizable Web Music Player" },
  { previous: "project-4", slug: "sql-database", title: "SQL Database Engine Built in C" },
  { previous: "project-5", slug: "cashboard", title: "Cashboard — Monthly Expense Tracker" },
];

await Promise.all(projects.map(async (project) => {
  const pathname = `/projects/${project.slug}/`;
  const canonical = `https://lcoppola.com${pathname}`;
  const html = await readFile(path.join(output, "static", pathname, "index.html"), "utf8");
  assert.ok(html.includes(`<title>${project.title} | Lucas Coppola</title>`));
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}">`));
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`));
  assert.ok(rss.includes(canonical));
  assert.ok(!sitemap.includes(`/projects/${project.previous}/`));
  assert.ok(html.includes('content="https://lcoppola.com/social-preview.png"'));
  assert.ok(!html.includes('"@type":"ProfilePage"'));
  assert.ok(!config.routes.some((route) => route.src?.includes(`/projects/${project.previous}`)));
  await assert.rejects(
    access(path.join(output, "static/projects", project.previous, "index.html")),
    { code: "ENOENT" },
  );
}));

const homepage = await readFile(path.join(output, "static/index.html"), "utf8");
assert.ok(homepage.includes('"@type":"ProfilePage"'));
assert.ok(homepage.includes('"@type":"Person"'));
assert.ok(homepage.includes("https://github.com/LucasCoppola"));
assert.ok(homepage.includes("https://www.linkedin.com/in/lucas-coppola"));
assert.ok(!homepage.includes("/projects/project-1"));
const image = await readFile(path.join(output, "static/social-preview.png"));
assert.equal(image.readUInt32BE(16), 1200);
assert.equal(image.readUInt32BE(20), 630);
console.log("Verified project titles, canonicals, sitemap, RSS, retired numbered paths, profile schema, and social image.");
