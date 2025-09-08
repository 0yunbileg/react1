export const PRODUCTS_DB = [
  {
    id: 1,
    title: "Eco-Friendly Wooden Mug",
    shortDescription: "Handmade wooden mug.",
    fullDescription:
      "This eco-friendly wooden mug is crafted from sustainable wood. It is durable, stylish, and perfect for hot or cold drinks.",
    price: 15.99,
    image: "/images/wooden-mug.jpg",
  },
  {
    id: 2,
    title: "Leather Journal",
    shortDescription: "Handcrafted leather journal.",
    fullDescription:
      "Premium leather-bound journal with 200 pages of high-quality paper. Ideal for note-taking, journaling, or sketching.",
    price: 22.5,
    image: "/images/leather-journal.jpg",
  },
  {
    id: 3,
    title: "Wireless Earbuds",
    shortDescription: "Compact noise-cancelling earbuds.",
    fullDescription:
      "Enjoy crystal-clear sound with these wireless earbuds featuring noise cancellation, touch controls, and long battery life.",
    price: 49.99,
    image: "/images/wireless-earbuds.jpg",
  },
  {
    id: 4,
    title: "Desk Organizer",
    shortDescription: "Minimalist bamboo desk organizer.",
    fullDescription:
      "Organize your workspace with this sleek bamboo desk organizer. Holds pens, sticky notes, phones, and more.",
    price: 18.75,
    image: "/images/desk-organizer.jpg",
  },
  {
    id: 5,
    title: "Reusable Water Bottle",
    shortDescription: "Stainless steel insulated bottle.",
    fullDescription:
      "Stay hydrated with this BPA-free stainless steel water bottle. Keeps drinks cold for 24h and hot for 12h.",
    price: 19.99,
    image: "/images/water-bottle.jpg",
  },
  {
    id: 6,
    title: "Ergonomic Mouse",
    shortDescription: "Wireless ergonomic design.",
    fullDescription:
      "Reduce wrist strain with this wireless ergonomic mouse. Features adjustable DPI and long battery life.",
    price: 29.99,
    image: "/images/ergonomic-mouse.jpg",
  },
  {
    id: 7,
    title: "Portable Bluetooth Speaker",
    shortDescription: "Water-resistant speaker.",
    fullDescription:
      "Take your music anywhere with this portable Bluetooth speaker. Water-resistant, loud bass, and 12h playtime.",
    price: 35.0,
    image: "/images/bluetooth-speaker.jpg",
  },
  {
    id: 8,
    title: "Smart LED Bulb",
    shortDescription: "WiFi RGB smart bulb.",
    fullDescription:
      "Control your home lighting with this smart LED bulb. Works with Alexa/Google Home, 16M colors, and scheduling.",
    price: 12.99,
    image: "/images/smart-bulb.jpg",
  },
  {
    id: 9,
    title: "Yoga Mat",
    shortDescription: "Non-slip eco yoga mat.",
    fullDescription:
      "Durable, eco-friendly yoga mat with excellent grip and cushioning. Perfect for yoga, pilates, or stretching.",
    price: 25.0,
    image: "/images/yoga-mat.jpg",
  },
  {
    id: 10,
    title: "Mechanical Keyboard",
    shortDescription: "RGB backlit mechanical keyboard.",
    fullDescription:
      "High-performance mechanical keyboard with customizable RGB backlight and tactile switches.",
    price: 79.99,
    image: "/images/mechanical-keyboard.jpg",
  },
  {
    id: 11,
    title: "Gaming Chair",
    shortDescription: "Ergonomic gaming chair.",
    fullDescription:
      "Ergonomic gaming chair with lumbar support, adjustable height, and breathable fabric for long sessions.",
    price: 149.99,
    image: "/images/gaming-chair.jpg",
  },
  {
    id: 12,
    title: "Drone Camera",
    shortDescription: "Compact 4K drone.",
    fullDescription:
      "Capture stunning aerial shots with this foldable 4K drone. Features GPS, image stabilization, and 30min flight time.",
    price: 299.99,
    image: "/images/drone.jpg",
  },
  {
    id: 13,
    title: "Smartwatch",
    shortDescription: "Fitness and health tracking.",
    fullDescription:
      "Track your health and stay connected with this smartwatch. Includes heart rate, sleep tracking, and notifications.",
    price: 99.99,
    image: "/images/smartwatch.jpg",
  },
  {
    id: 14,
    title: "Electric Kettle",
    shortDescription: "Stainless steel fast-boil.",
    fullDescription:
      "1.7L stainless steel electric kettle with auto shut-off, boil-dry protection, and modern design.",
    price: 39.99,
    image: "/images/electric-kettle.jpg",
  },
  {
    id: 15,
    title: "Backpack",
    shortDescription: "Water-resistant travel backpack.",
    fullDescription:
      "Durable, water-resistant backpack with multiple compartments, laptop sleeve, and ergonomic straps.",
    price: 45.0,
    image: "/images/backpack.jpg",
  },
]

export async function GET() {
  const list = PRODUCTS_DB.map((p) => ({
    id: p.id,
    title: p.title,
    shortDescription: p.shortDescription,
    price: p.price,
    image: p.image,
  }))
  return Response.json(list)
}
