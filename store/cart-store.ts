import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItemI {
  id: string;
  name: string;
  price: number;
  imageUrl: string | null | undefined;
  quantity: number;
}

interface CartStoreI {
  items: CartItemI[];
  addItem: (item: CartItemI) => void;
  minusItem: (id: string) => void;
  changeQuantity: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStoreI>()(
  // The store of Zustand to execute different functions
  // to get, to delete etc. products including localStorage of the Browser
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          // If the user has previously added the product, then change the quantity
          // of this particular product(quantity:2,3 etc.)
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i,
              ),
            };
          }
          // If there's no such product, add it to the store
          return { items: [...state.items, item] };
        }),

      // Reduce the amount of products which is more than 0
      minusItem: (id) =>
        set((state) => {
          return {
            items: state.items
              .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
              .filter((item) => item.quantity > 0),
          };
        }),

      // Return all the products except the one
      // which is being clicked by user
      removeItem: (id) =>
        set((state) => {
          return {
            items: state.items.filter((item) => item.id !== id),
          };
        }),

      // Add quantity if there's such product in the store
      changeQuantity: (id) =>
        set((state) => {
          return {
            items: state.items.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
            ),
          };
        }),
      // Delete all the products
      clearCart: () =>
        set(() => {
          return { items: [] };
        }),
    }),
    // The localStorage name is 'cart'
    { name: 'cart' },
  ),
);
