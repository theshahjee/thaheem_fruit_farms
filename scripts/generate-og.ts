// Pre-build OG image generator.
// Renders 1200x630 branded OG cards for home, varieties and journal posts.
// Output: public/og/<slug>.png referenced from each page's metadata.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";
import { varieties } from "../lib/varieties";
import { journal } from "../lib/journal";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const WIDTH = 1200;
const HEIGHT = 630;

async function loadFonts() {
  const fsDir = path.join(root, "node_modules/@fontsource");
  const [display, italic, mono] = await Promise.all([
    fs.readFile(
      path.join(fsDir, "fraunces/files/fraunces-latin-500-normal.woff")
    ),
    fs.readFile(
      path.join(fsDir, "fraunces/files/fraunces-latin-500-italic.woff")
    ),
    fs.readFile(
      path.join(fsDir, "manrope/files/manrope-latin-600-normal.woff")
    ),
  ]);
  return { display, italic, mono };
}

async function imageDataUrl(relPath: string) {
  const abs = path.join(root, "public", relPath.replace(/^\//, ""));
  const data = await fs.readFile(abs);
  const ext = path.extname(abs).slice(1).toLowerCase();
  const mime =
    ext === "jpg" || ext === "jpeg"
      ? "image/jpeg"
      : ext === "png"
        ? "image/png"
        : `image/${ext}`;
  return `data:${mime};base64,${data.toString("base64")}`;
}

type Card = {
  eyebrow: string;
  title: string;
  italicTitle?: string;
  subtitle: string;
  badge?: string;
  bgDataUrl: string;
};

function buildCard(c: Card): any {
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#f5efe3",
        color: "#1f1a14",
        fontFamily: "Fraunces",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              width: 540,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "56px 56px 48px",
              background: "#f5efe3",
              borderRight: "1px solid rgba(31,26,20,0.12)",
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid rgba(31,26,20,0.18)",
                    paddingBottom: 14,
                    fontFamily: "Manrope",
                    fontSize: 14,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(31,26,20,0.6)",
                  },
                  children: [
                    { type: "span", props: { children: "§ Thaheem Fruit Farms" } },
                    { type: "span", props: { children: "Est · 1982" } },
                  ],
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 16,
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          fontFamily: "Manrope",
                          fontSize: 15,
                          letterSpacing: "0.24em",
                          textTransform: "uppercase",
                          color: "#c46a16",
                          marginBottom: 22,
                        },
                        children: c.eyebrow,
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          fontFamily: "Fraunces",
                          fontSize: 64,
                          fontWeight: 500,
                          lineHeight: 1.02,
                          letterSpacing: "-0.02em",
                          color: "#1f1a14",
                          display: "flex",
                          flexWrap: "wrap",
                        },
                        children: c.italicTitle
                          ? [
                              { type: "span", props: { children: c.title + " " } },
                              {
                                type: "span",
                                props: {
                                  style: {
                                    fontStyle: "italic",
                                    color: "#c46a16",
                                  },
                                  children: c.italicTitle,
                                },
                              },
                            ]
                          : c.title,
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          marginTop: 24,
                          fontFamily: "Fraunces",
                          fontStyle: "italic",
                          fontSize: 22,
                          lineHeight: 1.35,
                          color: "rgba(31,26,20,0.7)",
                          display: "flex",
                          maxWidth: 420,
                        },
                        children: c.subtitle,
                      },
                    },
                  ],
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "1px solid rgba(31,26,20,0.18)",
                    paddingTop: 16,
                    fontFamily: "Manrope",
                    fontSize: 14,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(31,26,20,0.7)",
                  },
                  children: [
                    { type: "span", props: { children: c.badge || "Multan · Punjab" } },
                    {
                      type: "span",
                      props: {
                        style: { color: "#1f1a14" },
                        children: "thaheemfruitfarms.com",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: { width: 660, display: "flex", position: "relative" },
            children: [
              {
                type: "img",
                props: {
                  src: c.bgDataUrl,
                  width: 660,
                  height: 630,
                  style: { width: 660, height: 630, objectFit: "cover" },
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 24px",
                    background: "rgba(245,239,227,0.92)",
                    borderTop: "1px solid rgba(31,26,20,0.15)",
                    fontFamily: "Manrope",
                    fontSize: 13,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(31,26,20,0.7)",
                  },
                  children: [
                    { type: "span", props: { children: "Hand-Graded · Farm-Direct" } },
                    { type: "span", props: { children: "Season 2026" } },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
}

async function renderToPng(node: any, fonts: Awaited<ReturnType<typeof loadFonts>>) {
  const svg = await satori(node, {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      { name: "Fraunces", data: fonts.display, weight: 500, style: "normal" },
      { name: "Fraunces", data: fonts.italic, weight: 500, style: "italic" },
      { name: "Manrope", data: fonts.mono, weight: 600, style: "normal" },
    ],
  });
  const resvg = new Resvg(svg, {
    background: "#f5efe3",
    fitTo: { mode: "width", value: WIDTH },
  });
  const png = resvg.render().asPng();
  return sharp(png).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
}

async function writeOg(relPath: string, jpg: Buffer) {
  const abs = path.join(root, "public", relPath);
  await fs.mkdir(path.dirname(abs), { recursive: true });
  await fs.writeFile(abs, jpg);
  console.log(`  ✓ ${relPath} (${(jpg.byteLength / 1024).toFixed(1)} KB)`);
}

async function main() {
  console.log("Generating OG images...");
  const fonts = await loadFonts();

  const tasks: Array<[string, any]> = [];

  // Home
  {
    const bg = await imageDataUrl("/images/farm/orchard-golden-hour.jpg");
    tasks.push([
      "og/home.jpg",
      buildCard({
        eyebrow: "Pre-Book · Season 2026",
        title: "Mangoes,",
        italicTitle: "from family hands.",
        subtitle:
          "A family orchard near Multan growing premium export-quality Sindhri, Anwar Ratool & Chaunsa — farm-direct, since 1982.",
        badge: "Multan · Punjab",
        bgDataUrl: bg,
      }),
    ]);
  }

  // Varieties
  for (const v of varieties) {
    const bg = await imageDataUrl(`/images/varieties/photos/${v.slug}.jpg`);
    tasks.push([
      `og/varieties/${v.slug}.jpg`,
      buildCard({
        eyebrow: `Varietal · ${v.season}`,
        title: v.shortName,
        italicTitle: "mangoes.",
        subtitle: v.taste,
        badge: "Export Grade · Multan",
        bgDataUrl: bg,
      }),
    ]);
  }

  // Journal
  for (const p of journal) {
    const bg = await imageDataUrl(p.image);
    tasks.push([
      `og/journal/${p.slug}.jpg`,
      buildCard({
        eyebrow: `Journal · ${p.readingMinutes} min read`,
        title: p.title.split(" — ")[0],
        subtitle: p.description,
        badge: "From the orchard",
        bgDataUrl: bg,
      }),
    ]);
  }

  for (const [out, node] of tasks) {
    const jpg = await renderToPng(node, fonts);
    await writeOg(out, jpg);
  }

  console.log(`Done. ${tasks.length} OG images written.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
