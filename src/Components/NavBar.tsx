import React from "react";
import "../styles/NavBar.scss";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

type Props = {};

function NavBar({}: Props) {
  return (
    <div className="navbar_container">
      <input type="checkbox" className="hidden" id="menu_toggler" />
      <div className="menu_icon">
        <label htmlFor="menu_toggler">
          <RiMenu3Line size={26} id="menu_open" />
          <RiCloseLine size={26} id="menu_close" />
        </label>
      </div>
      <ul className="menu_item_container ">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Home</li>
        </NavLink>
        <NavLink to={"/about"}>
          <li>About Me</li>
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
