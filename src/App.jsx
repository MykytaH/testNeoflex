import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Store from "./pages/Store";
import Cart from "./pages/Cart";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/testNeoflex",
    element: <RootLayout />,
    // errorElement: <Error />,
    children: [
      { index: true, element: <Store /> },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}