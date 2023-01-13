import create from "zustand";
import { findProductById, Product, ProductsIds } from "../utils/products";

type Cart = {
  items: Map<ProductsIds, number>;
  lastItemAdded: Product | null;
  addItem: (itemId: ProductsIds, quantity?: number) => void;
  isCartOpen: boolean;
  getNumberOfItems: () => number;
  openCart: () => void;
  closeCart: () => void;
  removeItem: (itemId: ProductsIds) => void;
  getCartPrice: () => number;
};

export const useCartStore = create<Cart>((set, get) => ({
  items: new Map(),
  lastItemAdded: null,
  isCartOpen: false,

  addItem: (itemId, quantity) => {
    set((state) => {
      const quantityIncremented =
        (state.items.get(itemId) ?? 0) + (quantity ?? 1);

      if (quantityIncremented < 1) {
        get().removeItem(itemId);
        return {};
      }

      return {
        items: new Map(state.items).set(itemId, quantityIncremented),
        lastItemAdded: findProductById(itemId),
      };
    });
  },

  getNumberOfItems: () => {
    return [...get().items.values()].reduce((prev, curr) => prev + curr, 0);
  },

  openCart: () => set(() => ({ isCartOpen: true })),

  closeCart: () => set(() => ({ isCartOpen: false })),

  removeItem: (itemId) => {
    set((state) => {
      state.items.delete(itemId);
      return {
        items: state.items,
      };
    });
  },

  getCartPrice: () => {
    return [...get().items].reduce(
      (prev, [itemId, quantity]) =>
        prev + findProductById(itemId).price * quantity,
      0
    );
  },
}));
