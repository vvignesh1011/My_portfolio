import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Screens/Home";
import AboutMe from "../Screens/AboutMe";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { element: <Home />, path: "/" },
      { element: <AboutMe />, path: "/about" },
      { element: <Home />, path: "*" },
    ],
  },
]);

export default router;
