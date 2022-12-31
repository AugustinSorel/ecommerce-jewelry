export type Product = {
  id: string;
  text: string;
  price: number;
  slide?: string;
};

export const products: Product[] = [
  {
    id: "gold-big-hoops",
    text: "Gold big hoops",
    price: 600,
    slide: "/slide-1.png",
  },
  {
    id: "nice-silver-ring",
    text: "Nice silver ring",
    price: 899,
    slide: "/slide-2.png",
  },
  {
    id: "simple-elegant-earring",
    text: "Simple elegant earring",
    price: 299,
    slide: "/slide-3.png",
  },
];
