import { Routes, Route, Navigate, createBrowserRouter } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import Login from "../component/LoginForm";
import Register from "../component/Register";
import Header from "../component/Layout/Header";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default AppRoutes;
