import React from "react";
import css from "./Menu.module.css";
import { logout } from "../firebase";
import { adminUID } from "../../config";

import { Link } from "react-router-dom";

const links = [
  { text: "My Profile", path: "/profile" },
  { text: "Dashboard", path: "/" },
  { text: "Messages", path: "/messages" },
  { text: "Companies", path: "/companies" },
  { text: "Bootcampers", path: "/Bootcampers" },
  { text: "Events", path: "/events" },
  { text: "Useful Links", path: "/links" },
];

function Menu({ isMenuOpen, setIsMenuOpen, uid, hamburger }) {
  function handleClick() {
    setIsMenuOpen(false);
    hamburger.classList.remove("is-active");
  }

  return (
    <div className={css.menu}>
      <ul className={css.ul}>
        {uid === adminUID ? (
          <Link to="/admin" className={css.link} onClick={handleClick}>
            <li>Admin Dash</li>
          </Link>
        ) : null}
        {links.map(({ text, path }) => (
          <Link key={path} to={path} className={css.link} onClick={handleClick}>
            <li>{text}</li>
          </Link>
        ))}
        <li className={css.link} onClick={logout}>
          Logout
        </li>
      </ul>
    </div>
  );
}

export default Menu;
