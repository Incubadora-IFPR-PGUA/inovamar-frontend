import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/main-layout";
import Home from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
