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
import Details from "../pages/Details/Details";
import FilterCategory from "../pages/FIlterCategory/FilterCategory";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      // {
      //   path: "/",
      //   element: <Home></Home>,
      //   loader : () => fetch('http://localhost:5000/subcategory')
      // },
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const subcategoryPromise = fetch('http://localhost:5000/subcategory').then(res => res.json());
          const addCraftPromise = fetch('http://localhost:5000/add-craft').then(res => res.json());
      
          const [subcategoryData, addCraftData] = await Promise.all([subcategoryPromise, addCraftPromise]);
      
          return { subcategoryData, addCraftData };
        }
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
        loader : () => fetch('http://localhost:5000/add-craft')
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
        path: "/filter-category/:id",
        element: <PrivateRoutes><FilterCategory></FilterCategory></PrivateRoutes>,
        loader:({ params }) =>  fetch(`http://localhost:5000/crafts-by-category?category=${encodeURIComponent(params.id)}`)
      },
      {
        path: "my-art/update/:id",
        element: <PrivateRoutes><Update></Update></PrivateRoutes>,
        loader : ({params}) => fetch(`http://localhost:5000/add-craft/${params.id}`)
      },
      {
        path: "/all-art/details/:id",
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader : ({params}) => fetch(`http://localhost:5000/add-craft/${params.id}`)
      },
      {
        path: "/filter-category/Landscape Painting/details/:id",
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader : ({params}) => fetch(`http://localhost:5000/add-craft/${params.id}`)
      },
      {
        path: "/filter-category/Oil Painting/details/:id",
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader : ({params}) => fetch(`http://localhost:5000/add-craft/${params.id}`)
      },
      {
        path: "/filter-category/Charcoal Sketching/details/:id",
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader : ({params}) => fetch(`http://localhost:5000/add-craft/${params.id}`)
      },
      {
        path: "/filter-category/Cartoon Drawing/details/:id",
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader : ({params}) => fetch(`http://localhost:5000/add-craft/${params.id}`)
      },
      {
        path: "/filter-category/Classic Portrait/details/:id",
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader : ({params}) => fetch(`http://localhost:5000/add-craft/${params.id}`)
      },
      {
        path: "/filter-category/Watercolour Painting/details/:id",
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader : ({params}) => fetch(`http://localhost:5000/add-craft/${params.id}`)
      },
      {
        path: "/my-art/details/:id",
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader : ({params}) => fetch(`http://localhost:5000/add-craft/${params.id}`)
      }, 
      {
        path: "/details/:id",
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader : ({params}) => fetch(`http://localhost:5000/add-craft/${params.id}`)
      }, 
      {
        path: "/subcategory/details/:id",
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader : ({params}) => fetch(`http://localhost:5000/subcategory/${params.id}`)
      }, 
      {
        path: "/subcategory/details/:subcategoryName",
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader : ({params}) => fetch(`http://localhost:5000/subcategory/${params.subcategoryName}`)
      }, 
    ],
  },
]);


export default routes;