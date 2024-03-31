import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  userCart: [],
  userCartTotal: "",
  addToCart: () => {},
  updateQuantity: () => {},
  deletFromCart: () => {},
});
