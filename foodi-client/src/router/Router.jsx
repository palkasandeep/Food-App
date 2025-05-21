import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menuPage/Menu";
import Signup from "../components/Signup";
import Order from "../pages/dashboard/Order";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UserProfile from "../pages/dashboard/UserProfile";
import CartPage from "../pages/menuPage/CartPage";
import Login from "../components/Login";
import Dashboard from "../layout/Dashboard";
import Dash from "../pages/dashboard/admin/Dash";
import Users from "../pages/dashboard/admin/Users"
import Addmenu from "../pages/dashboard/admin/Addmenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path: "/order",
        element: <PrivateRoute><Order /></PrivateRoute>
      },
      {
        path: "/update-profile",
        element: <UserProfile />
      },
      {
        path: "/cart-page",
        element: <CartPage />
      },
    ]
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: (<PrivateRoute><Dashboard /></PrivateRoute>),
    children: [
      {
        path: "",
        element: <Dash />,
      },
      {
        path: "users",
        element: <Users />,

      },
      {
        path: "add-menu",
        element: <Addmenu />,

      }
    ]
  }
]);

export default router;