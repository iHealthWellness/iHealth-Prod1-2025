import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


import dropdownIcon from "src/Assets/Icons/nav-dropdown.svg";

import "./index.css";

function classnames(...args) {
  const classes = [];

  args.forEach(arg => {
    if (typeof arg === 'string') {
      classes.push(arg);
    } else if (typeof arg === 'object' && arg !== null) {
      for (const key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  });

  return classes.join(' ');
}



const NavDropdownButton = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showdropdown, setShowdropdown] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname;

  const openMenu = (e) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev);
  };


  const closeMenu = () => {
    setShowMenu(false);
    setShowdropdown(false)
  };

  const toggleDropdown = () => {

    setShowdropdown((prev) => !prev)

  }

  return (
    <div className="nav-dropdown-container">
      <button className="nav-dropdown-menu-button" onClick={openMenu}>
        <img className="nav-dropdown-menu-icon" src={dropdownIcon}></img>
      </button>

      {showMenu && (
        <ul className="nav-dropdown-links-list">
          <li
            className={`nav-dropdown-links-listitem ${currentPage === "/" ? "active" : ""
              }`}
          >
            <NavLink to="/" className="nav-dropdown-links nav-home" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li
            className={`nav-dropdown-links-listitem ${currentPage === "/services" ? "active" : ""
              }`}
          >
            <NavLink
              onClick={() => {
                document.querySelector("#UnderConst-wrapper").style.display =
                  "flex";
                closeMenu()
              }}
              className="nav-dropdown-links nav-services"
            >
              Services
            </NavLink>
          </li>
          <li
            className={`nav-dropdown-links-listitem ${currentPage === "/about-us" ? "active" : ""
              }`}
          >
            <NavLink
              onClick={toggleDropdown}


              to="/about-us"
              className="nav-links-nav-about-us"
            >
              About Us
            </NavLink>

            <div className={classnames('nav-dropdown-content', { block: showdropdown })}>
              <HashLink to={"/about-us/#Hero"} >Corporate  info</HashLink>
              <HashLink to={"/our-team"}>Our Team </HashLink>
              <HashLink to={"/about-us/#Finance"}>Financial Transparency </HashLink>
              <HashLink to={"/about-us/#Terms"}>Terms Of Use</HashLink>




            </div>
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
                closeMenu()
              }}
              className="nav-dropdown-links nav-services"
            >
              Services
            </NavLink>
          </li>
          <li
            className={`nav-dropdown-links-listitem ${currentPage === "/about-us" ? "active" : ""
              }`}
          >
            <NavLink
              onClick={toggleDropdown}


              to="/about-us"
              className="nav-links-nav-about-us"
            >
              About Us
            </NavLink>

            <div className={classnames('nav-dropdown-content', { block: showdropdown })}>
              <a href="#Hero">Corporate Info </a>
              <a href="/our-team">Our Team </a>
              <a href="#Finance">Financial Transparency </a>
              <a href="#Terms">Terms Of Use</a>
              <a href="">List Of Openings</a>



            </div>
          </li>
          <li
            className={`nav-dropdown-links-listitem ${currentPage === "/research" ? "active" : ""
              }`}
          >
            <NavLink
              onClick={toggleDropdown}
              className="nav-dropdown-links-nav-research"
            >
              Research
            </NavLink>

        {/*<div className={classnames('nav-dropdown-content', { block: showdropdown })}>
            <a href="/research/#tools">Research Tools & Resources</a>
            <a href="/research/#clinical">Clinical Drug Therapies</a>
            <a href="/research/#participate">Participate in Research</a>
            </div>*/}
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavDropdownButton;
