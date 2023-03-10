export type Product = typeof products[number];
export type ProductCategories = typeof products[number]["category"];
export type ProductCarousel = typeof productsCarousel[number];
export type SortProductsBy = typeof SORT_PRODUCTS_BY[number];
export type ProductsImages = typeof products[number]["coverImage"];
export type ProductsIds = typeof products[number]["id"];

export const productsCarousel = [
  {
    id: "791441b2-f93f-4d99-8508-b89d469d0ab4",
    price: 49.99,
    name: "Jade hoops",
    path: "lira-earring",
    slide: "/slides/slide-1.png",
    text: "Gold big hoops",
  },
  {
    id: "6b2031e4-9c05-4ae6-9759-98568959e96b",
    price: 20,
    name: "Alice ring",
    path: "hal-earrings",
    slide: "/slides/slide-2.png",
    text: "Pure elgence ring",
  },
  {
    id: "f042c1a3-d924-4c93-b131-b26d8b753f65",
    price: 30,
    name: "Belle earring",
    path: "kaede-hair-pin-set-of-three",
    slide: "/slides/slide-3.png",
    text: "Silver rounded erring",
  },
] as const;

export const products = [
  {
    id: "price_1MPt1SCE9h0p6qkdT1IIMCH6",
    name: "lira earring",
    price: 20,
    path: "lira-earring",
    images: ["/products/img-1.png"],
    coverImage: "/products/img-1.png",
    createdAt: new Date("20022-12-01"),
    category: "earring",
    description:
      "Our earrings are the perfect addition to any outfit. These beautiful earrings feature a stunning design, with intricate details and sparkling gemstones. The earrings are made from high-quality materials, ensuring durability and long-lasting wear. They are lightweight and comfortable to wear, making them ideal for everyday use. Whether you're dressing up for a night out or simply want to add some sparkle to your everyday look, these earrings are sure to turn heads. Plus, with their affordable price and easy-to-use ecommerce app, purchasing these earrings has never been easier. So why wait? Add some sparkle to your life today with these stunning earrings!",
    similarProducts: [
      "price_1MPt61CE9h0p6qkdSWCL4MJl",
      "price_1MPt4jCE9h0p6qkd732av4bq",
      "price_1MPt5ECE9h0p6qkdnytXFzWJ",
      "price_1MPt5fCE9h0p6qkdeRUrewSm",
    ],
  },
  {
    id: "price_1MPt4ICE9h0p6qkdMys64Awb",
    name: "hal earrings",
    price: 25,
    path: "hal-earrings",
    images: ["/products/img-2.png"],
    coverImage: "/products/img-2.png",
    createdAt: new Date("20022-12-01"),
    category: "earring",
    description:
      "Introducing our stunning earrings, perfect for any occasion! These earrings feature a unique design, with sparkling gemstones and intricate details that are sure to catch the eye. Made from high-quality materials, these earrings are durable and comfortable to wear all day long. Whether you're dressing up for a special event or simply adding some sparkle to your everyday look, these earrings are the perfect choice. Plus, with their affordable price and easy-to-use ecommerce app, purchasing these earrings has never been simpler. Don't miss out on this opportunity to add some glamour to your life - buy these earrings today!",
    similarProducts: [
      "price_1MPt1SCE9h0p6qkdT1IIMCH6",
      "price_1MPt61CE9h0p6qkdSWCL4MJl",
      "price_1MPt4jCE9h0p6qkd732av4bq",
      "price_1MPt5fCE9h0p6qkdeRUrewSm",
    ],
  },
  {
    id: "price_1MPt4jCE9h0p6qkd732av4bq",
    name: "kaede hair pin set of 3",
    price: 30,
    path: "kaede-hair-pin-set-of-three",
    images: ["/products/img-3.png"],
    coverImage: "/products/img-3.png",
    createdAt: new Date("20022-12-01"),
    category: "hair pin",
    description:
      "Looking for the perfect finishing touch to your hairstyle? Our hair pin set is the answer! These beautiful hair pins feature a chic, minimalist design that is perfect for any occasion. The set includes three hair pins, each with a unique design and sparkling gemstones. Made from high-quality materials, these hair pins are durable and comfortable to wear all day long. Whether you're heading to work, a special event, or simply want to add some sparkle to your everyday look, these hair pins are the perfect choice. Plus, with their affordable price and easy-to-use ecommerce app, purchasing these hair pins has never been simpler. Don't miss out on this opportunity to add some glamour to your life - buy our hair pin set today!",
    similarProducts: [
      "price_1MPt5fCE9h0p6qkdeRUrewSm",
      "price_1MPt1SCE9h0p6qkdT1IIMCH6",
      "price_1MPt5ECE9h0p6qkdnytXFzWJ",
      "price_1MPt61CE9h0p6qkdSWCL4MJl",
    ],
  },
  {
    id: "price_1MPt5ECE9h0p6qkdnytXFzWJ",
    name: "hair pin set of 3",
    price: 30,
    path: "hair-pin-set-of-three",
    images: ["/products/img-4.png"],
    coverImage: "/products/img-4.png",
    createdAt: new Date("20022-12-01"),
    category: "hair pin",
    description:
      "Add some sparkle to your life with our beautiful hair pin set! These hair pins feature a chic, minimalist design that is perfect for any occasion. The set includes three hair pins, each with a unique design and sparkling gemstones. Made from high-quality materials, these hair pins are durable and comfortable to wear all day long. Whether you're heading to work, a special event, or simply want to add some sparkle to your everyday look, these hair pins are the perfect choice. Plus, with their affordable price and easy-to-use ecommerce app, purchasing these hair pins has never been easier. Don't wait any longer - add some glamour to your life with our hair pin set today!",
    similarProducts: [
      "price_1MPt4ICE9h0p6qkdMys64Awb",
      "price_1MPt5fCE9h0p6qkdeRUrewSm",
      "price_1MPt1SCE9h0p6qkdT1IIMCH6",
      "price_1MPt4jCE9h0p6qkd732av4bq",
    ],
  },
  {
    id: "price_1MPt5fCE9h0p6qkdeRUrewSm",
    name: "plaine necklace",
    price: 19,
    path: "plaine-necklace",
    images: ["/products/img-5.png"],
    coverImage: "/products/img-5.png",
    createdAt: new Date("20022-12-01"),
    category: "necklace",
    description:
      "Introducing our stunning necklace, the perfect addition to any outfit! This beautiful necklace features a unique design, with sparkling gemstones and intricate details that are sure to catch the eye. Made from high-quality materials, this necklace is durable and comfortable to wear all day long. Whether you're dressing up for a special event or simply want to add some sparkle to your everyday look, this necklace is the perfect choice. Plus, with its affordable price and easy-to-use ecommerce app, purchasing this necklace has never been simpler. Don't wait any longer - add some glamour to your life with our stunning necklace today!",
    similarProducts: [
      "price_1MPt4jCE9h0p6qkd732av4bq",
      "price_1MPt5ECE9h0p6qkdnytXFzWJ",
      "price_1MPt4ICE9h0p6qkdMys64Awb",
      "price_1MPt61CE9h0p6qkdSWCL4MJl",
    ],
  },
  {
    id: "price_1MPt61CE9h0p6qkdSWCL4MJl",
    name: "yuki hair pin set of 3",
    price: 29,
    path: "yuki-hair-pin-set-of-three",
    images: ["/products/img-6.png"],
    coverImage: "/products/img-6.png",
    createdAt: new Date("20022-12-01"),
    category: "hair pin",
    description:
      "Introducing our stylish hair pin set, perfect for adding some sparkle to any outfit! These hair pins feature a chic, minimalist design that is sure to complement any hairstyle. The set includes three hair pins, each with a unique design and sparkling gemstones. Made from high-quality materials, these hair pins are durable and comfortable to wear all day long. Whether you're dressing up for a special event or simply want to add some glamour to your everyday look, these hair pins are the perfect choice. Plus, with their affordable price and easy-to-use ecommerce app, purchasing these hair pins has never been simpler. Don't miss out on this opportunity to add some sparkle to your life - buy our hair pin set today!",
    similarProducts: [
      "price_1MPt5fCE9h0p6qkdeRUrewSm",
      "price_1MPt1SCE9h0p6qkdT1IIMCH6",
      "price_1MPt4ICE9h0p6qkdMys64Awb",
      "price_1MPt4jCE9h0p6qkd732av4bq",
    ],
  },
] as const;

export const minProductPrice = Math.min(...products.map((p) => p.price));
export const maxProductPrice = Math.max(...products.map((p) => p.price));

export const PRODUCTS_CATEGORIES = Array.from(
  new Set(products.map((product) => product.category))
);
export const SORT_PRODUCTS_BY = Array.from(new Set(["price", "date"] as const));

export const findProductById = (id: ProductsIds) => {
  return products.find((product) => product.id === id)!;
};
