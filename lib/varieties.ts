export type Variety = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  taste: string;
  season: string;
  packaging: string[];
  accent: "mango" | "khaki" | "farm";
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
  },
];
