import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

type Props = {};

function Layout({}: Props) {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;
