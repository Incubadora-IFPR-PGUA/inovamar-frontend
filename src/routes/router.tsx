import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/main-layout";
import CallPage from "../pages/call";
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
      {
        path: "/call/:id",
        element: <CallPage />,
      },
    ],
  },
]);

export default router;
