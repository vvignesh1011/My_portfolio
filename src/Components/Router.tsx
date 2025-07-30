import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Screens/Home";
import AboutMe from "../Screens/about/AboutMe";
import Contact from "../Screens/Contact";
import MyWork from "../Screens/MyWork";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { element: <Home />, path: "/" },
      { element: <AboutMe />, path: "/about" },
      { element: <Contact />, path: "/contact" },
      { element: <MyWork />, path: "/work" },
      { element: <Home />, path: "*" },
    ],
  },
]);

export default router;
