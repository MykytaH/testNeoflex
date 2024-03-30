import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  userCart: [],
  addToCart: () => {},
  updateQuantity: () => {},
  deletFromCart: () => {},
});
