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
    slug: "mango-lassi-recipe",
    title: "The Best Mango Lassi — A Recipe From The Farm",
    description:
      "Our family recipe for mango lassi using ripe Chaunsa or Anwar Ratool. Quick, three-ingredient, no added sugar — the way it's meant to taste.",
    date: "2026-06-10",
    readingMinutes: 4,
    image: "/images/varieties/photos/royal-chaunsa-export.jpg",
    imageAlt: "Royal Chaunsa mangoes used for a traditional Pakistani mango lassi",
    keywords: [
      "mango lassi recipe",
      "Pakistani mango lassi",
      "best mango lassi",
      "Chaunsa lassi",
      "Anwar Ratool lassi",
      "mango yoghurt drink",
    ],
    body: [
      {
        heading: "Pick the right mango first",
        paragraphs: [
          "A great lassi starts with a great mango. Use a fully ripe Royal Chaunsa or Anwar Ratool — both have the buttery, low-fibre flesh and the natural sweetness that makes added sugar unnecessary. Sindhri also works beautifully and gives a lighter, more honeyed flavour.",
          "If your mango is still firm, leave it on the counter for another day or two. A lassi made with under-ripe mango is sour and starchy — nothing fixes it after the fact.",
        ],
      },
      {
        heading: "The three-ingredient recipe (serves 2)",
        paragraphs: [
          "2 ripe mangoes (about 500 g of flesh once peeled), 1.5 cups of cold full-fat yoghurt, 1 cup of cold milk (or water for a lighter drink). Optional: a pinch of green cardamom powder, a few ice cubes, a small drizzle of honey only if your mangoes are not quite at peak.",
          "Peel the mangoes, slice the flesh off the stone, and blend everything for 30–40 seconds until smooth. Taste before adding any sweetener — most of the time you won't need any.",
        ],
      },
      {
        heading: "Texture notes",
        paragraphs: [
          "For a thicker, dessert-style lassi, reduce the milk and add more yoghurt. For the lighter Pakistani street-style version, increase the milk and add ice. Both are right — pick by mood.",
          "A pinch of green cardamom lifts the aroma. Saffron is traditional in some households but can overpower a delicate Anwar Ratool — use sparingly.",
        ],
      },
      {
        heading: "When to drink it",
        paragraphs: [
          "Mango lassi is at its best 5 minutes after blending — colder than fridge cold, before the foam settles. It does not hold well overnight; the yoghurt continues to ferment and the colour dulls.",
          "It pairs with everything spicy: biryani, karahi, nihari, qeema. In our family, a jug of lassi sits on the table any day a Chaunsa box is open.",
        ],
      },
    ],
  },
  {
    slug: "aam-ka-achaar-recipe",
    title: "Aam Ka Achaar — A Punjabi Mango Pickle Recipe",
    description:
      "How to make Punjabi-style mango achaar (aam ka achaar) at home — small, sour mangoes, mustard oil, and the spice mix our family has used for generations.",
    date: "2026-06-05",
    readingMinutes: 7,
    image: "/images/varieties/photos/12-no-ratool.jpg",
    imageAlt: "Small green mangoes destined for Punjabi aam ka achaar",
    keywords: [
      "aam ka achaar recipe",
      "Punjabi mango pickle",
      "mango achaar",
      "Pakistani pickle recipe",
      "mango pickle in mustard oil",
      "kairi achaar",
    ],
    body: [
      {
        heading: "Use raw, sour mangoes — not ripe ones",
        paragraphs: [
          "Achaar is made from raw, unripe mangoes (kairi) — firm, sour, green-fleshed. Ripe Chaunsa or Sindhri are for eating; raw early-season mangoes are for pickling. Pick fruit that is hard to the touch, with thick green skin and ivory flesh.",
          "On our farm we set aside the early thinnings of the season — small, sour mangoes that come off the trees in April and early May — specifically for achaar.",
        ],
      },
      {
        heading: "Ingredients (one large jar)",
        paragraphs: [
          "1 kg raw mangoes, washed and chopped into thumbnail-sized pieces (skin on, stone discarded). 4 tbsp salt for the initial cure. For the masala: 3 tbsp fennel seeds (saunf), 2 tbsp yellow mustard seeds (rai), 2 tbsp nigella seeds (kalonji), 1 tbsp fenugreek seeds (methi dana), 1 tbsp turmeric, 2 tbsp red chilli powder (adjust), 1 tbsp salt. 250 ml mustard oil (sarson ka tel).",
        ],
      },
      {
        heading: "Step 1 — Cure the mango",
        paragraphs: [
          "Toss the chopped mango with 4 tbsp salt in a large bowl. Spread on a clean tray and leave in bright sunlight for one full day, turning a few times. The mango will release water and shrink slightly.",
          "By evening, drain the released water. The pieces should feel firmer and tangier.",
        ],
      },
      {
        heading: "Step 2 — Prepare the masala",
        paragraphs: [
          "Dry-roast the fennel, mustard, nigella and fenugreek seeds in a heavy pan over low heat for 60 seconds — until fragrant, not browned. Cool completely, then crush coarsely in a mortar (or pulse in a grinder). Mix with the turmeric, chilli and 1 tbsp salt.",
        ],
      },
      {
        heading: "Step 3 — Combine and seal",
        paragraphs: [
          "Toss the cured mango with the masala until every piece is coated. Pack tightly into a sterilised glass jar. Heat the mustard oil until it smokes lightly, cool, then pour over the mango so it sits about 2 cm above the top. The oil seals it.",
          "Tighten the lid loosely (the achaar needs to breathe for the first few days). Leave on a sunny windowsill for 7–10 days, shaking once a day.",
        ],
      },
      {
        heading: "When to eat it",
        paragraphs: [
          "After about a week the pieces will have softened slightly, the colour will deepen, and the flavour will round out. Tighten the lid and store in a cool, dry place. Properly made achaar keeps for over a year — and only improves.",
          "Serve a small spoonful with paratha and chai, alongside dal-chawal, or with biryani. A jar of homemade aam ka achaar is one of the small luxuries of a Pakistani kitchen.",
        ],
      },
    ],
  },
  {
    slug: "mango-kulfi-recipe",
    title: "Mango Kulfi — A Recipe That Tastes Like Summer",
    description:
      "A traditional Pakistani mango kulfi recipe with Chaunsa or White Chaunsa — no ice-cream machine needed. Dense, creamy, intensely mango.",
    date: "2026-05-28",
    readingMinutes: 5,
    image: "/images/varieties/photos/white-chaunsa-export.jpg",
    imageAlt: "White Chaunsa mangoes used for a creamy Pakistani mango kulfi",
    keywords: [
      "mango kulfi recipe",
      "Pakistani kulfi",
      "Chaunsa kulfi",
      "mango ice-cream Pakistan",
      "homemade kulfi",
      "no churn mango ice-cream",
    ],
    body: [
      {
        heading: "Why kulfi is not ice-cream",
        paragraphs: [
          "Kulfi is denser than Western ice-cream because it is not churned — the milk is reduced slowly, sweetened, flavoured and frozen. The result is a dense, almost chewy texture and a more concentrated flavour. No machine needed.",
          "For mango kulfi, use a variety with intense fragrance and low fibre. Royal Chaunsa and White Chaunsa both work beautifully. Anwar Ratool also makes a more aromatic kulfi for those who like that.",
        ],
      },
      {
        heading: "Ingredients (6 small kulfis)",
        paragraphs: [
          "1 litre full-fat milk, 200 g sweetened condensed milk, 200 g mango pulp from 2–3 ripe mangoes, 4 green cardamom pods (lightly crushed), a small pinch of saffron (optional), 2 tbsp finely chopped pistachios for garnish.",
        ],
      },
      {
        heading: "Step 1 — Reduce the milk",
        paragraphs: [
          "Pour the milk into a heavy-bottomed pan with the cardamom and saffron. Bring to a gentle simmer over medium-low heat and reduce, stirring often, until the volume has dropped by about a third (this takes 25–30 minutes). Scrape the cream that forms on the sides back into the milk — that is the texture you want.",
        ],
      },
      {
        heading: "Step 2 — Sweeten and chill",
        paragraphs: [
          "Stir in the condensed milk and simmer for another 5 minutes. Take off the heat, strain out the cardamom pods, and let cool completely. Once at room temperature, fold in the mango pulp.",
        ],
      },
      {
        heading: "Step 3 — Freeze in moulds",
        paragraphs: [
          "Pour into traditional kulfi moulds, popsicle moulds, or a freezer-safe metal container. Freeze for at least 6 hours, preferably overnight. To unmould, dip the mould briefly in warm water and slide the kulfi out.",
          "Roll in chopped pistachios just before serving. A glass of cold doodh-soda alongside is the traditional accompaniment.",
        ],
      },
    ],
  },
  {
    slug: "gifting-mango-boxes-for-eid",
    title: "Gifting Mango Boxes For Eid — A Short Guide",
    description:
      "Why a box of premium farm-direct mangoes makes one of the best Eid gifts in Pakistan — variety, timing, packaging and how to send across cities.",
    date: "2026-05-20",
    readingMinutes: 4,
    image: "/images/varieties/photos/aseel-anwar-ratool.jpg",
    imageAlt: "Premium Anwar Ratool mango box prepared for Eid gifting in Pakistan",
    keywords: [
      "mango gifting Pakistan",
      "Eid gift ideas Pakistan",
      "premium mango box gift",
      "corporate mango gifts",
      "Eid mango delivery",
      "farm-direct mango gifting",
    ],
    body: [
      {
        heading: "Why mangoes are the gift",
        paragraphs: [
          "In Pakistan, sending a box of mangoes is one of the most personal gifts you can give. It is seasonal — a once-a-year window. It is shared — the box is opened with family, eaten over several days. And it is unmistakably ours — a fruit Pakistanis grow up loving.",
          "Eid often falls inside peak mango season. A premium farm-direct box arriving on Eid morning is a far better gift than another box of dry biscuits.",
        ],
      },
      {
        heading: "Pick the variety by who you're sending to",
        paragraphs: [
          "For family elders and close relatives, send Anwar Ratool — the aristocrat. The aroma alone makes the gift.",
          "For colleagues, clients and households with children, send Royal Chaunsa — the most universally loved variety. It pleases everyone.",
          "For connoisseurs and mango lovers who already know their varieties, send 12 No Ratool. They will recognise what they are receiving.",
        ],
      },
      {
        heading: "Time the delivery to the variety",
        paragraphs: [
          "If Eid lands in late May or early June, Sindhri is your only premium option. From mid-June through mid-July, Anwar Ratool and 12 No Ratool are at peak. Late June through August is Royal Chaunsa season. Late July onwards is White Chaunsa.",
          "Pre-book early. The best gifting weeks fill up quickly — especially the run-up to Eid.",
        ],
      },
      {
        heading: "Packaging and message",
        paragraphs: [
          "Our 8 kg and 10 kg boxes are ventilated, padded with paper, and printed clearly with the Thaheem mark — they look as good as they taste.",
          "On WhatsApp, share the recipient's name, full address and a short message. We include a handwritten card with each gift box. No middlemen, no relabelling, no compromise on quality.",
        ],
      },
    ],
  },
  {
    slug: "why-pakistani-mangoes-are-special",
    title: "Why Pakistani Mangoes Are Considered Among The World's Best",
    description:
      "A grower's perspective on what makes Pakistani mangoes — Sindhri, Anwar Ratool, Chaunsa — distinctive on a world scale. Soil, climate, varieties and the hand-grading tradition.",
    date: "2026-05-12",
    readingMinutes: 6,
    image: "/images/farm/orchard-golden-hour.jpg",
    imageAlt: "Mango trees at golden hour in the Thaheem Fruit Farms orchard near Multan",
    keywords: [
      "Pakistani mangoes",
      "best mangoes in the world",
      "Pakistan vs India mango",
      "Multan mangoes",
      "premium Pakistani mango varieties",
      "Punjab mango farming",
    ],
    body: [
      {
        heading: "The climate makes the fruit",
        paragraphs: [
          "Pakistan's Punjab and Sindh provinces — particularly the Multan, Khanewal and Mirpurkhas belts — share a specific combination: long, dry summers, intense sunshine, alluvial soil from the Indus and its tributaries, and a relatively short, cool winter. This is the climate mango trees evolved for. Every variety we grow tastes more concentrated here than it does anywhere else.",
          "Northern India shares some of this climate, and there are excellent Indian mangoes — Alphonso, Kesar, Dasheri. But the Pakistani varieties — Sindhri, Anwar Ratool, Chaunsa, White Chaunsa — are distinctly ours, with flavour profiles that reflect the soil they came from.",
        ],
      },
      {
        heading: "The varieties themselves",
        paragraphs: [
          "Sindhri — the season-opener, large, fibreless, honey-sweet, almost spoonable.",
          "Anwar Ratool — small, fragrant, creamy, with a layered sweetness that lingers.",
          "Chaunsa — the most beloved Pakistani mango, buttery and intensely aromatic, the variety that has come to define what 'premium mango' means in the region.",
          "White Chaunsa — the late-season delicacy, paler, more refined, the longest keeper.",
          "12 No Ratool — an elite graft selection, smaller, even more aromatic, a connoisseur's variety.",
          "Each one is genuinely distinct. There is no single 'Pakistani mango' the way there is, perhaps, a 'Cavendish banana'. There are five, and each has its own peak window.",
        ],
      },
      {
        heading: "The hand-grading tradition",
        paragraphs: [
          "Pakistani mangoes are still graded almost entirely by hand. On our farm a single mango passes through several pairs of hands between the tree and the box — picker, sorter, grader, packer. We feel each fruit for weight, firmness and aroma. Machines have never quite matched what an experienced hand knows.",
          "The fruit that makes export grade is typically the top 10–15% of a harvest. The rest is sold locally as standard quality — still excellent, but not what we put in an export box.",
        ],
      },
      {
        heading: "Why farm-direct matters",
        paragraphs: [
          "The single biggest determinant of how a mango tastes when it reaches you is how many hands and how many days passed between the tree and your kitchen. Each middleman adds delay, handling, refrigeration cycles and bruising.",
          "Farm-direct boxes — picked, graded and shipped from a single orchard — solve this. That is the standard we hold ourselves to. Forty-four years of family farming, every box graded under one roof, every delivery dispatched without an intermediary.",
        ],
      },
      {
        heading: "Try one and decide",
        paragraphs: [
          "Words about mangoes only go so far. Pre-book a box this season, taste it alongside whatever mangoes you've eaten before, and decide for yourself. We think the comparison speaks louder than any marketing copy.",
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
