import create from "zustand";
import { products } from "../utils/products";

type Cart = {
  items: Map<string, number>;
  addItem: (itemId: typeof products[number]["id"]) => void;
  getNumberOfItems: () => number;
};

export const useCartStore = create<Cart>((set, get) => ({
  items: new Map(),

  addItem: (itemId) => {
    set((state) => {
      const quantityIncremented = (state.items.get(itemId) ?? 0) + 1;

      return {
        items: new Map(state.items).set(itemId, quantityIncremented),
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
