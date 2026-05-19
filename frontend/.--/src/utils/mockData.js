const encodeSvg = (markup) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(markup)}`

const buildArtwork = (title, accent, background, pattern) =>
  encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${background[0]}" />
          <stop offset="100%" stop-color="${background[1]}" />
        </linearGradient>
        <linearGradient id="accent" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${accent[0]}" />
          <stop offset="100%" stop-color="${accent[1]}" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" rx="40" fill="url(#bg)" />
      <circle cx="650" cy="120" r="110" fill="${accent[0]}" fill-opacity="0.18" />
      <circle cx="180" cy="460" r="140" fill="${accent[1]}" fill-opacity="0.12" />
      <path d="${pattern}" fill="url(#accent)" fill-opacity="0.92" />
      <rect x="72" y="76" width="656" height="448" rx="28" fill="none" stroke="${accent[0]}" stroke-opacity="0.22" stroke-width="2" />
      <text x="84" y="112" fill="#fff8ef" font-family="Trebuchet MS, sans-serif" font-size="22" letter-spacing="4">SIRPAM</text>
      <text x="84" y="492" fill="#fff8ef" font-family="Palatino Linotype, serif" font-size="44">${title}</text>
    </svg>
  `)

const artworkPalettes = [
  {
    accent: ["#f4c17a", "#b87035"],
    background: ["#34261d", "#8e5a36"],
    pattern:
      "M300 118c94 26 188 108 188 196 0 70-58 120-148 120-104 0-184-68-184-164 0-90 56-174 144-152Z",
  },
  {
    accent: ["#d9b58a", "#8d4f2f"],
    background: ["#50372c", "#2b1a16"],
    pattern:
      "M252 160c42-44 114-62 184-34 86 34 152 122 128 208-22 76-116 114-210 84-84-28-138-106-120-178 8-30 4-52 18-80Z",
  },
  {
    accent: ["#f0d6a5", "#94724f"],
    background: ["#6d5443", "#32231d"],
    pattern:
      "M212 176c88-86 256-72 338 34 52 68 56 152 2 208-44 50-116 72-196 56-88-18-166-84-190-160-18-60 2-104 46-138Z",
  },
  {
    accent: ["#efc98a", "#6c8a8f"],
    background: ["#33454d", "#19252a"],
    pattern:
      "M188 390c74-138 184-242 260-222 70 18 124 126 112 216-10 76-76 136-168 136-104 0-190-54-204-130Z",
  },
]

const createArtwork = (title, paletteIndex) => {
  const palette = artworkPalettes[paletteIndex % artworkPalettes.length]
  return buildArtwork(title, palette.accent, palette.background, palette.pattern)
}

export const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "Collection", path: "/collection" },
  { label: "Customize", path: "/customize" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
]

export const studioMetrics = [
  { label: "Pieces crafted annually", value: "140+" },
  { label: "Custom lead time", value: "3-5 weeks" },
  { label: "Material finishes", value: "12" },
]

export const products = [
  {
    id: "product-dune-vessel",
    slug: "dune-vessel",
    name: "Dune Vessel",
    category: "Vessels",
    material: "Stoneware",
    collection: "Earthen Echoes",
    price: 320,
    rating: 4.9,
    leadTime: "2 weeks",
    dimensions: "14 x 14 x 22 in",
    featured: true,
    finish: "Burnished matte",
    summary: "A tall statement vessel shaped with a desert ridge silhouette.",
    description:
      "Layered by hand and smoke-fired for a warm sandstone variation, Dune Vessel anchors a console or plinth with quiet scale.",
    details: [
      "Wheel-thrown body with hand-carved shoulder lines.",
      "Sealed for dry floral styling and sculptural display.",
      "Each piece carries slight tonal shifts from the firing cycle.",
    ],
    image: createArtwork("Dune Vessel", 0),
  },
  {
    id: "product-monsoon-relief",
    slug: "monsoon-relief",
    name: "Monsoon Relief",
    category: "Wall Reliefs",
    material: "Terracotta",
    collection: "Monsoon Archive",
    price: 410,
    rating: 4.8,
    leadTime: "3 weeks",
    dimensions: "30 x 4 x 30 in",
    featured: true,
    finish: "Mineral wash",
    summary: "Textured wall art with rain-worn grooves and layered patina.",
    description:
      "Monsoon Relief is pressed, carved, and lime-washed to create depth that changes beautifully with daylight.",
    details: [
      "Comes with concealed hanging hardware.",
      "Best styled in entryways, dining rooms, and covered verandas.",
      "Can be commissioned as a diptych for larger walls.",
    ],
    image: createArtwork("Monsoon Relief", 1),
  },
  {
    id: "product-ember-totem",
    slug: "ember-totem",
    name: "Ember Totem",
    category: "Table Objects",
    material: "Brass Inlay",
    collection: "Night Kiln",
    price: 285,
    rating: 4.7,
    leadTime: "10 days",
    dimensions: "8 x 8 x 18 in",
    featured: false,
    finish: "Charred clay and satin brass",
    summary: "A compact sculptural accent with inset brass seams.",
    description:
      "Built from stacked geometric forms, Ember Totem introduces a reflective accent without losing its grounded handmade feel.",
    details: [
      "Brass lines are hand-set and polished after firing.",
      "Ideal for bookshelves, sideboards, and office styling.",
      "Pairs well with linen, travertine, and dark wood.",
    ],
    image: createArtwork("Ember Totem", 2),
  },
  {
    id: "product-tidal-bowl",
    slug: "tidal-bowl",
    name: "Tidal Bowl",
    category: "Serveware",
    material: "Stoneware",
    collection: "Coastline Study",
    price: 190,
    rating: 4.9,
    leadTime: "8 days",
    dimensions: "16 x 16 x 5 in",
    featured: true,
    finish: "Pebble glaze",
    summary: "A wide centerpiece bowl with a tide-mark lip.",
    description:
      "Tidal Bowl is glazed with layered neutrals so fruit, florals, or collected objects sit inside a soft ripple of texture.",
    details: [
      "Food safe interior glaze.",
      "Lightly speckled hand-finished surface.",
      "Designed to move between everyday use and styling moments.",
    ],
    image: createArtwork("Tidal Bowl", 3),
  },
  {
    id: "product-courtyard-lantern",
    slug: "courtyard-lantern",
    name: "Courtyard Lantern",
    category: "Lighting",
    material: "Clay Composite",
    collection: "Courtyard Glow",
    price: 360,
    rating: 4.8,
    leadTime: "2 weeks",
    dimensions: "11 x 11 x 20 in",
    featured: false,
    finish: "Openwork clay lattice",
    summary: "A perforated lantern that throws patterned evening light.",
    description:
      "Hand-cut apertures and a grounded silhouette make Courtyard Lantern equally strong in an indoor nook or covered outdoor corner.",
    details: [
      "Compatible with LED pillar candles.",
      "Ships with a removable brass cup insert.",
      "Available in sand, charcoal, and rust finishes.",
    ],
    image: createArtwork("Courtyard Lantern", 0),
  },
  {
    id: "product-riverline-console-object",
    slug: "riverline-console-object",
    name: "Riverline Console Object",
    category: "Table Objects",
    material: "Teak Wood",
    collection: "Riverline",
    price: 440,
    rating: 5.0,
    leadTime: "3 weeks",
    dimensions: "22 x 6 x 12 in",
    featured: false,
    finish: "Oiled teak with stone powder wash",
    summary: "A long carved object designed for console tables and layered shelving.",
    description:
      "Riverline bridges woodcraft and sculptural carving, with softened edges and a natural grain line that feels almost water-cut.",
    details: [
      "Hand-carved solid teak construction.",
      "Designed for dry display only.",
      "Every piece is grain-matched and signed underneath.",
    ],
    image: createArtwork("Riverline", 1),
  },
]

export const processSteps = [
  {
    title: "Brief and references",
    copy: "We collect room photos, dimensions, palette cues, and the feeling you want the piece to hold.",
  },
  {
    title: "Material study",
    copy: "A small finish direction is proposed so scale, surface, and texture are approved before production.",
  },
  {
    title: "Handcrafted production",
    copy: "Your piece is sculpted, dried, fired, and refined in studio with milestone updates along the way.",
  },
  {
    title: "Delivery and styling notes",
    copy: "We package the work carefully and share placement guidance so it settles beautifully into the space.",
  },
]

export const testimonials = [
  {
    name: "Aanya Rao",
    role: "Residential stylist",
    quote:
      "The finish variation is what sold it. It feels collected and architectural, never mass produced.",
  },
  {
    name: "Kiran Menon",
    role: "Boutique hotel founder",
    quote:
      "SIRPAM translated our mood board into pieces that made the lobby feel calm, rich, and specific to us.",
  },
  {
    name: "Devika Shah",
    role: "Homeowner",
    quote:
      "The custom wall relief arrived with thoughtful installation guidance, and the craftsmanship is exceptional.",
  },
]

export const customizationOptions = {
  projectTypes: [
    "Entry centerpiece",
    "Dining table sculpture",
    "Wall installation",
    "Hospitality styling set",
  ],
  materials: ["Stoneware", "Terracotta", "Brass Inlay", "Teak Wood"],
  budgets: ["Under $300", "$300 - $600", "$600 - $1,200", "$1,200+"],
  timelines: ["2 weeks", "3-4 weeks", "5-6 weeks", "Flexible"],
}

export const galleryItems = [
  {
    id: "gallery-1",
    title: "Sunlit entry vignette",
    caption: "Dune Vessel paired with plaster walls and smoked oak.",
    image: createArtwork("Entry Vignette", 0),
  },
  {
    id: "gallery-2",
    title: "Hospitality lobby commission",
    caption: "A scaled Monsoon Relief installation created for a boutique stay.",
    image: createArtwork("Lobby Commission", 1),
  },
  {
    id: "gallery-3",
    title: "Console styling set",
    caption: "Layered sculptural objects in warm brass and washed teak.",
    image: createArtwork("Console Styling", 2),
  },
  {
    id: "gallery-4",
    title: "Courtyard evening scene",
    caption: "Lantern forms casting patterned light at dusk.",
    image: createArtwork("Courtyard Scene", 3),
  },
  {
    id: "gallery-5",
    title: "Ceramic study wall",
    caption: "Textural reliefs arranged as a rhythmic salon installation.",
    image: createArtwork("Ceramic Study", 1),
  },
  {
    id: "gallery-6",
    title: "Dining centerpiece",
    caption: "Tidal Bowl styled with fresh citrus and linen.",
    image: createArtwork("Dining Centerpiece", 3),
  },
]

export const contactDetails = {
  email: "studio@sirpamatelier.com",
  phone: "+91 90000 00000",
  location: "Chennai, India",
  hours: "Mon to Sat, 10:00 AM to 6:00 PM",
}

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Pinterest", href: "https://www.pinterest.com/" },
  { label: "Behance", href: "https://www.behance.net/" },
]

export const sortOptions = [
  { value: "featured", label: "Featured first" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
  { value: "name", label: "Name: A to Z" },
]
