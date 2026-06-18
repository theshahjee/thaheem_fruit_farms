export type JournalPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  image: string;
  imageAlt: string;
  keywords: string[];
  body: { heading: string; paragraphs: string[] }[];
};

export const journal: JournalPost[] = [
  {
    slug: "how-to-store-mangoes-at-home",
    title: "How To Store Mangoes At Home — A Practical Guide",
    description:
      "How to ripen, store and refrigerate mangoes at home so they stay sweet, aromatic and fiber-free for as long as possible.",
    date: "2026-05-01",
    readingMinutes: 6,
    image: "/images/varieties/photos/royal-chaunsa-export.jpg",
    imageAlt: "Royal Chaunsa mangoes ripening on a kitchen counter",
    keywords: [
      "how to store mangoes",
      "mango ripening guide",
      "ripen mango at home",
      "mango shelf life",
      "store mangoes in fridge",
    ],
    body: [
      {
        heading: "Ripen on the counter, never in the fridge",
        paragraphs: [
          "Mangoes are climacteric — they ripen after they are picked. A firm, fragrance-light mango is not bad fruit, it is unfinished fruit. Leave it on the counter, away from direct sunlight, until the skin yields gently to a thumb press and the stem-end smells distinctly sweet.",
          "Refrigerating an unripe mango stops the ripening process and locks it in a starchy, sour state. Hold off until the mango is fully ripe — only then does the fridge become your friend.",
        ],
      },
      {
        heading: "Speed up ripening with a paper bag",
        paragraphs: [
          "A brown paper bag traps the ethylene gas mangoes release as they ripen. Pop a firm mango into a closed bag and check in 24 hours. To accelerate further, add a banana or apple — both are ethylene heavyweights.",
          "Plastic bags are a bad idea: they trap moisture and invite mould. Paper breathes; plastic suffocates.",
        ],
      },
      {
        heading: "Once ripe, refrigerate — but only briefly",
        paragraphs: [
          "A fully ripe mango holds for 3–5 days in the fridge crisper, ideally placed in a perforated bag or wrapped loosely in newspaper to absorb condensation.",
          "Cold storage dulls aroma — bring the mango back to room temperature for 30 minutes before serving to wake the flavour up.",
        ],
      },
      {
        heading: "Freezing for the off-season",
        paragraphs: [
          "Peel and dice ripe mango, spread the cubes on a tray, freeze flat, then transfer to a zip bag. Frozen mango keeps 6–8 months and is excellent for lassis, smoothies and mango ice-cream bases.",
          "Note: thawed frozen mango loses its bite — use it where texture is processed, not where it shows.",
        ],
      },
      {
        heading: "Variety-by-variety notes",
        paragraphs: [
          "Sindhri ripens fast and is best eaten within 2–3 days of softening — it is the most fragile of the export varieties.",
          "Anwar Ratool and 12 No Ratool reward patience — let the fragrance bloom fully before cutting.",
          "Royal Chaunsa holds beautifully for a week in the fridge once ripe; White Chaunsa is the longest keeper of the season.",
        ],
      },
    ],
  },
  {
    slug: "pakistan-mango-season-calendar",
    title: "The Pakistan Mango Season Calendar — Variety By Variety",
    description:
      "A month-by-month guide to when each premium Pakistani mango variety is at its peak — Sindhri, Anwar Ratool, Chaunsa, White Chaunsa and 12 No Ratool.",
    date: "2026-04-15",
    readingMinutes: 5,
    image: "/images/varieties/photos/aseel-anwar-ratool.jpg",
    imageAlt: "Aseel Anwar Ratool mangoes from Thaheem Fruit Farms in Multan",
    keywords: [
      "Pakistan mango season",
      "when is Sindhri season",
      "Anwar Ratool season",
      "Chaunsa mango season",
      "mango harvest calendar Pakistan",
    ],
    body: [
      {
        heading: "Why timing matters",
        paragraphs: [
          "A pre-booked mango is only as good as the week it ships. Order too early and you taste starch; too late and you miss the variety entirely. Pakistan's mango season runs roughly late May through September — but each premium variety has its own window inside that.",
        ],
      },
      {
        heading: "Late May – Late June · Export Royal Sindhri",
        paragraphs: [
          "Sindhri is the season-opener. Golden skin, fibreless flesh, honeyed sweetness. The first export Sindhri leaves the orchard in the last week of May and the variety peaks through mid-June.",
          "If you want to gift the very first mangoes of the year, this is the only variety on the table.",
        ],
      },
      {
        heading: "Mid June – Mid July · Anwar Ratool & 12 No Ratool",
        paragraphs: [
          "The fragrant heart of the season. Anwar Ratool is the aristocrat — small, deeply aromatic, creamy. 12 No Ratool is its elite graft cousin: even more intense, slightly smaller, the variety connoisseurs reserve for themselves.",
          "Both peak in the last two weeks of June and the first week of July.",
        ],
      },
      {
        heading: "Late June – Mid August · Royal Chaunsa Export",
        paragraphs: [
          "The longest-running and best-loved of the export cultivars. Royal Chaunsa is the king — buttery flesh, intense fragrance, deep golden colour. It overlaps the Ratool window and then carries the season through July.",
          "If you are picking one variety for a whole household, Chaunsa is usually the answer.",
        ],
      },
      {
        heading: "Late July – September · White Chaunsa Export",
        paragraphs: [
          "The late-season delicacy. Pale golden skin, refined restrained sweetness, silky texture and the longest shelf life of the bunch. White Chaunsa closes the season — the last premium mangoes you'll get until next May.",
        ],
      },
      {
        heading: "Pre-booking, simply",
        paragraphs: [
          "Pre-book a single variety to enjoy one cultivar at its peak, or pre-book a season pass that mixes the calendar — one box of Sindhri in June, Anwar Ratool in early July, and Chaunsa late July.",
        ],
      },
    ],
  },
  {
    slug: "how-to-tell-a-good-mango",
    title: "How To Tell A Good Mango — Buying Guide From A Family Farm",
    description:
      "A mango grower's checklist for picking a great mango — what to look for in colour, smell, weight, firmness and origin.",
    date: "2026-03-20",
    readingMinutes: 5,
    image: "/images/varieties/photos/export-royal-sindhri.jpg",
    imageAlt: "Export Royal Sindhri mangoes laid out for hand grading",
    keywords: [
      "how to pick a good mango",
      "ripe mango signs",
      "best mango buying guide",
      "export quality mango",
      "premium mango Pakistan",
    ],
    body: [
      {
        heading: "Use your nose first",
        paragraphs: [
          "Aroma is the single best signal. A great mango smells distinctly sweet at the stem-end — floral, fruity, unmistakable. No smell means underripe; sharp fermented smell means overripe.",
          "Colour is a poor proxy. A green-shouldered Chaunsa can be perfectly ripe while a fully yellow Sindhri can still be a day away.",
        ],
      },
      {
        heading: "Then your thumb",
        paragraphs: [
          "Press gently near the stem with your thumb. The flesh should yield a millimetre or two — like a ripe avocado. Hard means wait; mushy means too late.",
          "Soft spots, deep wrinkles or weeping skin are a no.",
        ],
      },
      {
        heading: "Heft it",
        paragraphs: [
          "Pick the mango up. A good mango feels heavy for its size — that's juice, not air. Lightweight fruit is often dry, fibrous or harvested too early.",
        ],
      },
      {
        heading: "Look at the skin",
        paragraphs: [
          "Tiny dark freckles ('sugar spots') are a positive sign in some varieties — they signal high sugar content. Large black bruises are not.",
          "Skin should be taut, not shrivelled. A waxy bloom is natural in some varieties and brushes off easily.",
        ],
      },
      {
        heading: "Ask about the origin",
        paragraphs: [
          "Premium mangoes are a regional product. The best Sindhri comes from southern Punjab and northern Sindh; the best Anwar Ratool and Chaunsa from the Multan region. Mangoes that have travelled through multiple middlemen lose freshness with every step.",
          "Farm-direct boxes — picked, graded and shipped from a single orchard — solve this. That is the standard we hold ourselves to.",
        ],
      },
    ],
  },
];

export const journalBySlug = Object.fromEntries(
  journal.map((p) => [p.slug, p])
);
