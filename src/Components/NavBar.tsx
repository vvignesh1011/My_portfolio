import "../styles/NavBar.scss";
import { Link, NavLink } from "react-router-dom";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { useRef } from "react";

type Props = {};

function NavBar({}: Props) {
  const menuIcon = useRef<HTMLLabelElement>(null);
  return (
    <div className="navbar_container">
      <input type="checkbox" className="hidden" id="menu_toggler" />
      <div className="menu_icon">
        <label htmlFor="menu_toggler" ref={menuIcon}>
          <RiMenu3Line size={26} id="menu_open" />
          <RiCloseLine size={26} id="menu_close" />
        </label>
      </div>
      <ul className="menu_item_container ">
        <NavLink
          onClick={() => menuIcon.current?.click()}
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Home</li>
        </NavLink>
        <NavLink onClick={() => menuIcon.current?.click()} to={"/about"}>
          <li>About Me</li>
        </NavLink>

        <NavLink onClick={() => menuIcon.current?.click()} to={"/work"} end>
          <li>Work</li>
        </NavLink>
        <NavLink onClick={() => menuIcon.current?.click()} to={"/contact"} end>
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default NavBar;
