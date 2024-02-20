import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/HomeLayout";
import { Hero } from "./Components";
import { Dashboard, Login } from "./Pages";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Hero />,
        index: true,
      },
      {
        element: <Dashboard />,
        path: "/dashboard",
      },
      {
        element: <Login />,
        path: "/login",
      },
    ],
  },
]);
