import create from "zustand";
import { Product, products } from "../utils/products";

type Cart = {
  items: Map<string, number>;
  addItem: (itemId: typeof products[number]["id"], quantity?: number) => void;
  getNumberOfItems: () => number;
  lastItemAdded: Product | null;
};

export const useCartStore = create<Cart>((set, get) => ({
  items: new Map(),
  lastItemAdded: null,

  addItem: (itemId, quantity) => {
    set((state) => {
      const quantityIncremented =
        (state.items.get(itemId) ?? 0) + (quantity ?? 1);

      return {
        items: new Map(state.items).set(itemId, quantityIncremented),
        lastItemAdded: products.find((p) => p.id === itemId),
      };
    });
  },

  getNumberOfItems: () => {
    return [...Array.from(get().items.values())].reduce(
      (prev, curr) => prev + curr,
      0
    );
  },
}));
