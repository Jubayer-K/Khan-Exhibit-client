import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import AllArt from "../pages/AllArt/AllArt";
import AddCraft from "../pages/AddCraft/AddCraft";
import MyArt from "../pages/MyArt/MyArt";
import Update from "../pages/Upadate/Update";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-art",
        element:<AllArt></AllArt>,
      },
      {
        path: "/add-craft",
        element: <PrivateRoutes><AddCraft></AddCraft></PrivateRoutes>,
      },
      {
        path: "/my-art",
        element: <PrivateRoutes><MyArt></MyArt></PrivateRoutes>,
      },
      {
        path: "/update",
        element: <PrivateRoutes><Update></Update></PrivateRoutes>,
      },
      
    ],
  },
]);


export default routes;