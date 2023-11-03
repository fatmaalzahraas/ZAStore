import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop/Shop";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Login from "../pages/Login-Signup/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Signup from "../pages/Login-Signup/Signup";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../admin/Dashboard/Dashboard";
import AllProducts from "../admin/AllProducts/AllProducts";
import AddProducts from "../admin/Add-Edit-Products/AddProducts";
import EditProduct from "../admin/Add-Edit-Products/EditProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />},
      {path: "home", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "shop/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "checkOut", element: <Checkout /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "dashboard/all-products", element: <AllProducts /> },
      { path: "dashboard/add-products", element: <AddProducts /> },
      { path: "dashboard/edit-product/:itemId", element: <EditProduct /> },
    ],
  },
]);

export default router;
