import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/HomeLayout";
import { Hero } from "../Components";
import { Dashboard, Login, Favorites, Company, Register } from "../Pages";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Hero />,
        index: true,
      },
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <Register />,
        path: "/register",
      },
      {
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        path: "/dashboard",
      },
      {
        element: <Favorites />,
        path: "/favorites",
      },
      {
        element: <Company />,
        path: "/company/:symbol",
      },
    ],
  },
]);
