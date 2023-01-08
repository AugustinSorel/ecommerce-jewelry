export type Product = typeof products[number];
export type ProductCategories = typeof products[number]["category"];
export type ProductCarousel = typeof productsCarousel[number];
export type SortProductsBy = typeof SORT_PRODUCTS_BY[number];

export const productsCarousel = [
  {
    id: "791441b2-f93f-4d99-8508-b89d469d0ab4",
    price: 49.99,
    name: "Jade hoops",
    path: "products/jade-hoops",
    slide: "/slides/slide-1.png",
    text: "Gold big hoops",
  },
  {
    id: "6b2031e4-9c05-4ae6-9759-98568959e96b",
    price: 20,
    name: "Alice ring",
    path: "/products/alice-ring",
    slide: "/slides/slide-2.png",
    text: "Pure elgence ring",
  },
  {
    id: "f042c1a3-d924-4c93-b131-b26d8b753f65",
    price: 30,
    name: "Belle earring",
    path: "products/belle-earring",
    slide: "/slides/slide-3.png",
    text: "Silver rounded erring",
  },
] as const;

export const products = [
  {
    id: "eb6c14ec-014d-4c78-8355-5dc9c44a46e5",
    name: "lira earring",
    price: 20,
    path: "/products/lira-earring",
    images: ["/products/img-1.png"],
    coverImage: "/products/img-1.png",
    createdAt: new Date("20022-12-01"),
    category: "earring",
  },
  {
    id: "24db1045-3beb-41ce-9b19-548bf458529f",
    name: "hal earrings",
    price: 25,
    path: "products/hal-earrings",
    images: ["/products/img-2.png"],
    coverImage: "/products/img-2.png",
    createdAt: new Date("20022-12-01"),
    category: "earring",
  },
  {
    id: "6f40eb48-0072-4ede-a3d3-ed020497e124",
    name: "kaede hair pin set of 3",
    price: 30,
    path: "products/kaede-hair-pin-set-of-three",
    images: ["/products/img-3.png"],
    coverImage: "/products/img-3.png",
    createdAt: new Date("20022-12-01"),
    category: "hair pin",
  },
  {
    id: "03295f6f-e34f-44c6-82d9-127f5b34b9b1",
    name: "hair pin set of 3",
    price: 30,
    path: "products/hair-pin-set-of-three",
    images: ["/products/img-4.png"],
    coverImage: "/products/img-4.png",
    createdAt: new Date("20022-12-01"),
    category: "hair pin",
  },
  {
    id: "c79a9833-3a7b-4bbc-afca-0564844cc2d4",
    name: "plaine necklace",
    price: 19,
    path: "products/plaine-necklace",
    images: ["/products/img-5.png"],
    coverImage: "/products/img-5.png",
    createdAt: new Date("20022-12-01"),
    category: "necklace",
  },
  {
    id: "e214cef6-f668-4ec3-a6ce-e8cd2a975cf9",
    name: "yuki hair pin set of 3",
    price: 29,
    path: "/products/yuki-hair-pin-set-of-three",
    images: ["/products/img-6.png"],
    coverImage: "/products/img-6.png",
    createdAt: new Date("20022-12-01"),
    category: "hair pin",
  },
] as const;

export const minProductPrice = Math.min(...products.map((p) => p.price));
export const maxProductPrice = Math.max(...products.map((p) => p.price));

export const PRODUCTS_CATEGORIES = Array.from(
  new Set(products.map((product) => product.category))
);
export const SORT_PRODUCTS_BY = Array.from(new Set(["price", "date"] as const));
