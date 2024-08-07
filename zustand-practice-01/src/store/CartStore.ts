import { create } from "zustand";

const initialProducts = [
  {
    id: "a1b2",
    name: "Aurora Lamp",
    price: 56.78,
  },
  {
    id: "b2c3",
    name: "Bliss Speaker",
    price: 33.45,
  },
  {
    id: "c3d4",
    name: "Comet Headphones",
    price: 40.21,
  },
  {
    id: "d4e5",
    name: "Dream Tablet",
    price: 75.32,
  },
  {
    id: "e5f6",
    name: "Echo Watch",
    price: 27.89,
  },
];

type Product = {
  id: string;
  name: string;
  price: number;
};

type ProductStore = {
  avaliableItems: Product[];
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
};

export const useCartStore = create<ProductStore>((set) => {
  return {
    cart: [],
    avaliableItems: initialProducts,
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id) =>
      set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  };
});
