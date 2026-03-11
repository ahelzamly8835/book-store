import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product) =>
        set((state) => {
          const exist = state.cart.find((item) => item.id === product.id);

          if (exist) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        }),

      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        })),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
