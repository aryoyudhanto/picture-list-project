import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages";
import Detail from "../pages/Detail"
import Favorite from "../pages/Favorite"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
]);

const index = () => {
  return <RouterProvider router={router} />;
};

export default index;
