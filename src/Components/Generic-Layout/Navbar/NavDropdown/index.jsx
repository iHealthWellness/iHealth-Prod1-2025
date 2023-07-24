import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import dropdownIcon from "src/Assets/Icons/nav-dropdown.svg";

import "./index.css";

const NavDropdownButton = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname;

  const openMenu = (e) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <div className="nav-dropdown-container">
      <button className="nav-dropdown-menu-button" onClick={openMenu}>
        <img className="nav-dropdown-menu-icon" src={dropdownIcon}></img>
      </button>

      {showMenu && (
        <ul className="nav-dropdown-links-list">
          <li
            className={`nav-dropdown-links-listitem ${
              currentPage === "/" ? "active" : ""
            }`}
          >
            <NavLink to="/" className="nav-dropdown-links nav-home">
              Home &gt;
            </NavLink>
          </li>
          <li
            className={`nav-dropdown-links-listitem ${
              currentPage === "/services" ? "active" : ""
            }`}
          >
            <NavLink
              onClick={() => {
                document.querySelector("#UnderConst-wrapper").style.display =
                  "flex";
              }}
              className="nav-dropdown-links nav-services"
            >
              Services &gt;
            </NavLink>
          </li>
          <li
            className={`nav-dropdown-links-listitem ${
              currentPage === "/about-us" ? "active" : ""
            }`}
          >
            <NavLink
              onClick={() => {
                document.querySelector("#UnderConst-wrapper").style.display =
                  "flex";
              }}
              className="nav-dropdown-links nav-about-us"
            >
              About Us &gt;
            </NavLink>
          </li>
          <li
            className={`nav-dropdown-links-listitem ${
              currentPage === "/research" ? "active" : ""
            }`}
          >
            <NavLink
              onClick={() => {
                document.querySelector("#UnderConst-wrapper").style.display =
                  "flex";
              }}
              className="nav-dropdown-links nav-research"
            >
              Research &gt;
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavDropdownButton;
