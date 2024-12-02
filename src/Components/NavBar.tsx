import React from "react";
import "../styles/NavBar.scss";
import { Link, NavLink } from "react-router-dom";

type Props = {};

function NavBar({}: Props) {
  return (
    <div className="navbar_container">
      <ul className="menu_item_container">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Home</li>
        </NavLink>
        <NavLink to={"/about"}>
          <li>About Me</li>
        </NavLink>
        <NavLink to={"/skills"}>
          <li>Skills</li>
        </NavLink>
        <NavLink to={"/work"} end>
          <li>Work</li>
        </NavLink>
        <NavLink to={"/contact"} end>
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default NavBar;
