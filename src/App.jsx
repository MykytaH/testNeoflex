import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HEADPHONES } from "./data";

import Store from "./pages/Store";
// import Cart from "./pages/Cart";
import RootLayout from "./pages/RootLayout";
import { CartContext } from "./store/cart-context";
import { lazy, Suspense, useState } from "react";
// import Payment from "./pages/Payment";

const Cart = lazy(() => import("./pages/Cart"));
const Payment = lazy(() => import("./pages/Payment"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      // errorElement: <Error />,
      children: [
        { index: true, element: <Store /> },
        {
          path: "cart",
          element: (
            <Suspense>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "payment",
          element: (
            <Suspense>
              <Payment />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    basename: "/testNeoflex",
  }
);

export default function App() {
  const [userCart, setUserCart] = useState({ items: [] });

  let total;
  userCart.items.map((item) => {
    total = +item.price * +item.quantity;
  });

  function handleAddToCart({ title, img, price }) {
    setUserCart((prevState) => {
      let userCart = [...prevState.items];
      const existingCartItemIndex = userCart.findIndex(
        (cartItem) => cartItem.title === title
      );
      let quantity = 1;
      if (existingCartItemIndex !== -1) {
        quantity = userCart[existingCartItemIndex].quantity;
        let itemToUpdate = userCart[existingCartItemIndex];
        itemToUpdate = { ...itemToUpdate, quantity: +quantity + 1 };
        userCart[existingCartItemIndex] = itemToUpdate;
      } else {
        userCart = [...userCart, { title, img, price, quantity }];
      }

      return {
        items: [...userCart],
      };
    });
  }

  function handleUpdateQuantity(title, modifier) {
    setUserCart((prevState) => {
      let userCart = [...prevState.items];
      const existingCartItemIndex = userCart.findIndex(
        (cartItem) => cartItem.title === title
      );
      let itemToUpdate = userCart[existingCartItemIndex];
      itemToUpdate = {
        ...itemToUpdate,
        quantity: +itemToUpdate.quantity + modifier,
      };
      if (itemToUpdate.quantity > 0) {
        userCart[existingCartItemIndex] = itemToUpdate;
      }

      return {
        items: [...userCart],
      };
    });
  }

  function handleDeleteFromCart(title) {
    setUserCart((prevState) => {
      let userCart = [...prevState.items];
      const existingCartItemIndex = userCart.findIndex(
        (cartItem) => cartItem.title === title
      );
      userCart.splice(existingCartItemIndex, 1);
      return {
        items: [...userCart],
      };
    });
  }

  const ctxValue = {
    items: HEADPHONES,
    userCart: userCart,
    userCartTotal: total,
    addToCart: handleAddToCart,
    updateQuantity: handleUpdateQuantity,
    deletFromCart: handleDeleteFromCart,
  };

  return (
    <CartContext.Provider value={ctxValue}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}
