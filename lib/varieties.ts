export type Variety = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  taste: string;
  season: string;
  packaging: string[];
  accent: "mango" | "khaki" | "farm";
  origin?: string;
  appearance?: string;
  storage?: string;
  pairings?: string;
  longDescription?: string[];
  searchKeywords?: string[];
};

export const varieties: Variety[] = [
  {
    slug: "export-royal-sindhri",
    name: "Export Royal Sindhri",
    shortName: "Royal Sindhri",
    description:
      "The crown jewel of early-season mangoes — golden skin, fiberless flesh and a clean, honeyed sweetness. Hand-selected for export grade.",
    taste: "Smooth, honey-sweet, low fiber, juicy finish",
    season: "Late May – Late June",
    packaging: ["8 kg Premium Box", "10 kg Premium Box"],
    accent: "mango",
    origin: "Mirpurkhas–Multan belt · Pakistan",
    appearance:
      "Large oval fruit, smooth golden-yellow skin with a faint blush, slight nipple at the tip.",
    storage:
      "Ripens fast — eat within 2–3 days of softening. Refrigerate once fully ripe; bring to room temperature before serving.",
    pairings: "Mango lassi, fresh cream, vanilla ice-cream, sticky rice.",
    longDescription: [
      "Export Royal Sindhri is the variety that opens Pakistan's premium mango season. It arrives at the end of May, peaks through mid-June, and is gone by the first week of July. Each year, the first Sindhri off our orchard is one of the most-awaited boxes of the calendar — for many of our customers it is the first mango their family tastes that summer.",
      "The fruit itself is unmistakably royal. Large, smooth-skinned, deep golden when ripe, with a fragrance that fills the room. The flesh is dense, fiberless, almost spoonable — and the sweetness is honeyed rather than sharp, which makes Sindhri the variety of choice for first-time gifting and for children.",
      "We grade every Sindhri by hand. Boxes ship only when the fruit has the right firmness to ripen evenly on your kitchen counter. Pre-book Sindhri for delivery between late May and the third week of June for the cleanest expression of the variety.",
    ],
    searchKeywords: [
      "Sindhri mango",
      "Sindhri mango Pakistan",
      "buy Sindhri mango online",
      "export Sindhri",
      "best Sindhri mango Multan",
    ],
  },
  {
    slug: "aseel-anwar-ratool",
    name: "Aseel Anwar Ratool",
    shortName: "Anwar Ratool",
    description:
      "The aristocrat of Pakistani mangoes. Compact, fragrant and deeply aromatic with a rich, creamy pulp prized across the world.",
    taste: "Aromatic, creamy, rich body, lingering sweetness",
    season: "Mid June – Mid July",
    packaging: ["8 kg Premium Box", "10 kg Premium Box"],
    accent: "khaki",
    origin: "Punjab (Anwar Ratool origin) · grown at Thaheem near Multan",
    appearance:
      "Compact oval fruit, smooth pale-yellow skin, distinctive aroma when ripe.",
    storage:
      "Let aroma bloom fully on the counter. Refrigerate once ripe; eat within 4–5 days.",
    pairings: "Eaten plain, with cream, or in a yoghurt shake (mango lassi).",
    longDescription: [
      "Aseel Anwar Ratool is, in many connoisseurs' eyes, the finest mango in the country. Compact in size, almost demure in appearance — but cut one open and the aroma alone tells you why it commands the prices it does.",
      "The flesh is creamy and dense, with a richness that lingers on the tongue. There is almost no fiber. The sweetness is layered rather than sharp; it does not punch the way Sindhri does — it unfolds. This is the mango we send to people who already know mangoes.",
      "Our Anwar Ratool harvest peaks between the third week of June and the second week of July. Outside that window the fruit either has not finished developing or has slipped past its prime. Pre-book early — Anwar Ratool is the variety we run short on first.",
    ],
    searchKeywords: [
      "Anwar Ratool mango",
      "Anwar Ratool price Pakistan",
      "buy Anwar Ratool online",
      "Aseel Anwar Ratool",
      "Anwar Ratool delivery",
    ],
  },
  {
    slug: "royal-chaunsa-export",
    name: "Royal Chaunsa Export",
    shortName: "Royal Chaunsa",
    description:
      "The king of mangoes in its export form — buttery flesh, intense fragrance and a deep golden colour that defines premium quality.",
    taste: "Buttery, intensely fragrant, balanced sweetness",
    season: "Late June – Mid August",
    packaging: ["8 kg Premium Box", "10 kg Premium Box"],
    accent: "mango",
    origin: "Multan region · the heartland of Chaunsa",
    appearance:
      "Plump oval fruit, golden-yellow skin sometimes with a green shoulder when ripe, intensely fragrant at the stem-end.",
    storage:
      "Holds beautifully — once ripe, refrigerates well for up to a week without losing character.",
    pairings:
      "Sliced plain, mango cheesecake, mango kulfi, or shake. Excellent gifting variety.",
    longDescription: [
      "Royal Chaunsa is the most beloved mango in Pakistan, and Export Royal Chaunsa is its finest expression — the top of the harvest, hand-selected for size, weight, colour and aroma. Whatever you have eaten labelled 'Chaunsa', export-grade Chaunsa is a different fruit.",
      "The flesh is buttery and golden, fiberless, with a sweetness that is balanced rather than overwhelming. The fragrance is the giveaway: a perfectly ripe Chaunsa can be smelled from across a room. It is the variety we recommend when somebody asks for 'one mango that will please an entire household'.",
      "Chaunsa is also the longest-running variety of our season — it overlaps the Anwar Ratool window in late June and carries through into mid-August. If you are pre-booking for a long stretch of summer, Chaunsa is usually the variety to anchor on.",
    ],
    searchKeywords: [
      "Chaunsa mango",
      "Royal Chaunsa",
      "export Chaunsa mango",
      "buy Chaunsa online Pakistan",
      "best Chaunsa Multan",
    ],
  },
  {
    slug: "white-chaunsa-export",
    name: "White Chaunsa Export",
    shortName: "White Chaunsa",
    description:
      "A late-season delicacy with pale golden skin and a refined, restrained sweetness. Loved for its silky texture and long shelf life.",
    taste: "Silky, refined sweetness, delicate aroma",
    season: "Late July – September",
    packaging: ["8 kg Premium Box", "10 kg Premium Box"],
    accent: "farm",
    origin: "Multan region · a late-season Chaunsa selection",
    appearance:
      "Pale golden, sometimes with a faint blush, slightly larger than Royal Chaunsa with a more elongated shape.",
    storage:
      "The longest keeper of the season — comfortably 7–10 days in the fridge once ripe.",
    pairings:
      "Excellent eaten plain at the end of a meal. Holds shape well in fruit salads and gifting platters.",
    longDescription: [
      "White Chaunsa is the late-season delicacy — the variety that closes the calendar after every other premium mango has finished. It is paler than Royal Chaunsa, with a more refined sweetness and a silky, almost custardy texture.",
      "Where Royal Chaunsa is bold and fragrant, White Chaunsa is restrained — the sweetness is layered, the perfume is gentle, and the finish is clean. Many of our long-time customers ask specifically for White Chaunsa when the season is winding down.",
      "It is also the most travel-friendly variety we grow: White Chaunsa holds shape and flavour for the longest, which makes it the natural pick for late-summer gifting and corporate boxes. Available from late July through September.",
    ],
    searchKeywords: [
      "White Chaunsa",
      "Safed Chaunsa",
      "late season Chaunsa",
      "buy White Chaunsa Pakistan",
      "September mangoes Pakistan",
    ],
  },
  {
    slug: "12-no-ratool",
    name: "12 No Ratool",
    shortName: "12 No Ratool",
    description:
      "Selected from elite Anwar Ratool grafts. Small, fragrant and intensely sweet — the variety connoisseurs reserve for themselves.",
    taste: "Intensely sweet, fragrant, dense fiberless pulp",
    season: "Mid June – Mid July",
    packaging: ["8 kg Premium Box", "10 kg Premium Box"],
    accent: "khaki",
    origin: "Elite graft selection from Anwar Ratool stock",
    appearance:
      "Smaller than Anwar Ratool, very fragrant when ripe, deep yellow flesh.",
    storage:
      "Ripens quickly given its size — eat within 3–4 days of softening.",
    pairings:
      "Best appreciated plain — the flavour is too distinct to dilute with cream or sugar.",
    longDescription: [
      "12 No Ratool is the variety mango farmers grow for themselves. It is a tightly-selected graft from Anwar Ratool stock — smaller, more intense, more aromatic, more sweet. We grow a limited quantity of 12 No each season and most of it goes to customers who specifically request it.",
      "If Anwar Ratool is the aristocrat of Pakistani mangoes, 12 No Ratool is the version reserved for connoisseurs. The flesh is dense, fiberless and almost candy-sweet, with the same lingering aromatic finish — only more concentrated.",
      "Peak window matches Anwar Ratool: mid-June through mid-July. Available in limited quantities — pre-book early in the season.",
    ],
    searchKeywords: [
      "12 No Ratool",
      "12 number Ratool",
      "small Anwar Ratool",
      "graft Anwar Ratool",
      "rare Pakistani mango",
    ],
  },
];

export const varietyBySlug = Object.fromEntries(
  varieties.map((v) => [v.slug, v])
);
