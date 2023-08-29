import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import dropdownIcon from "src/Assets/Icons/nav-dropdown.svg";
import "./index.css";

/* 
  ===========================================================
  This is the Navigation Bar for the Tablet and Mobile
  ===========================================================
  */
const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about-us",
    submenu: [
      {
        title: "Corporate Info",
        url: "/about-us/#Hero",
      },
      {
        title: "Our Team",
        //url: "/about-us/#Team",
        url: "/Our-Team/#",
      },
      {
        title: "Financial Transparency",
        url: "/about-us/#Finance",
      },
      {
        title: "Terms Of Use",
        url: "/about-us/#Terms",
      },
      {
        title: "Volunteer from Anywhere",
        url: "/about-us/#",
      },
    ],
  },
  {
    title: "Research",
    url: "/research",
    submenu: [
      {
        title: "Research Tools & Resources",
        url: "/research/#",
      },
      {
        title: "Clinical Drug Therapies",
        url: "/research/#",
      },
      {
        title: "Participate in Research",
        url: "/research/#",
      },
    ],
  },
  {
    title: "Stories of Strength",
    url: "/services",
    submenu: [
      {
        title: "Share Your Story",
        url: "/services/#",
      },
      {
        title: "Create Your Blog",
        url: "/services/#",
      },
      {
        title: "Blogs",
        url: "/services/#",
      },
    ],
  },
  {
    title: "Ways to Give",
    url: "/donate",
    className: "ways-to-give",
    submenu: [
      {
        title: "Donate Online",
        url: "/donate/#",
      },
      {
        title: "Individual Donation",
        url: "/donate/#",
      },
      {
        title: " Make a Corporate Donation",
        url: "/donate/#",
      },
      {
        title: "Fundraise on Facebook",
        url: "/donate/#",
      },
      {
        title: "Create Your Own Fundraiser",
        url: "/donate/#",
      },
      {
        title: "Raise $500 in 10 days",
        url: "/donate/#",
      },
    ],
  },
];

const MenuItems = ({ items, menuId, activeId, setActiveId }) => {
  const [showSubMenu, setSubMenu] = useState(false);

  function handleMenu(menuId) {
    menuId === activeId ? setSubMenu((show) => !show) : setSubMenu(true);
    setActiveId(menuId);
  }

  return (
    <li
      className="nav-dropdown-links-listitem"
      onClick={handleMenu.bind(this, menuId)}
    >
      <NavLink
        to={items.url}
        className={({ isActive }) => {
          return (
            "nav-dropdown-links" + (isActive ? "nav-dropdown-links border" : "")
          );
        }}
      >
        {items.title}
      </NavLink>

      {items.submenu && showSubMenu && activeId === menuId ? (
        <div
          className={
            showSubMenu ? `nav-dropdown-contents` : `nav-dropdown-hidden`
          }
        >
          {items.submenu.map((sub) => (
            <HashLink className="items" to={sub.url} key={sub.title}>
              {sub.title}
            </HashLink>
          ))}
        </div>
      ) : null}
    </li>
  );
};

const NavDropdownButton = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeId, setActiveId] = useState(0);

  function handleShowMenu() {
    setShowMenu((show) => !show);
  }

  return (
    <div className="nav-dropdown-container">
      <button className="nav-dropdown-menu-button" onClick={handleShowMenu}>
        <img className="nav-dropdown-menu-icon" src={dropdownIcon}></img>
      </button>

      {showMenu && (
        <ul className="nav-dropdown-links-list">
          {menuItems.map((menu, index) => (
            <MenuItems
              activeId={activeId}
              setActiveId={setActiveId}
              items={menu}
              key={menu.title}
              menuId={index}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
export default NavDropdownButton;

// Old Codebase
/*

function classnames(...args) {
  const classes = [];

  args.forEach((arg) => {
    if (typeof arg === "string") {
      classes.push(arg);
    } else if (typeof arg === "object" && arg !== null) {
      for (const key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  });

  return classes.join(" ");
}

const [showMenu, setShowMenu] = useState(false);
const [showdropdown, setShowdropdown] = useState(false);
const [showService, setShowService] = useState(false);
const [showResearch, setShowResearch] = useState(false);
const location = useLocation();
const currentPage = location.pathname;
const openMenu = (e) => {
  e.stopPropagation();
  setShowMenu((prev) => !prev);
};
const closeMenu = () => {
  setShowMenu(false);
  setShowdropdown(false);
  setShowService(false);
  setShowResearch(false);
  showResearch(false);
};
const toggleDropdown = () => {
  setShowdropdown((prev) => !prev);
};
const toggleServiceDropdown = (e) => {
  e.preventDefault();
  setShowService((show) => !show);
  setShowMenu(false);
  setShowdropdown(false);
  showResearch(false);
};
const toggleResearchDropdown = () => {
  setShowResearch((show) => !show);
};
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
          <NavLink
            to="/"
            className="nav-dropdown-links nav-home"
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li
          className={`nav-dropdown-links-listitem ${
            currentPage === "/services" ? "active" : ""
          }`}
        >
          <NavLink
            onClick={(e) => toggleServiceDropdown(e)}
            to="/about-us"
            className="nav-dropdown-links nav-services"
          >
            Services
          </NavLink>
          <div
            className={classnames("nav-dropdown-content", {
              block: showService,
            })}
          >
            <a href="#Hero">Stories of Strength</a>
            <a href="/our-team">Share Your Story</a>
            <a href="#Finance">Create Your Blog</a>
          </div>
        </li>
        <li
          className={`nav-dropdown-links-listitem ${
            currentPage === "/about-us" ? "active" : ""
          }`}
        >
          <NavLink
            onClick={toggleDropdown}
            to="/about-us"
            className="nav-links-nav-about-us"
          >
            About Us
          </NavLink>
          <div
            className={classnames("nav-dropdown-content", {
              block: showdropdown,
            })}
          >
            <a href="#Hero">Corporate Info </a>
            <a href="/our-team">Our Team </a>
            <a href="#Finance">Financial Transparency </a>
            <a href="#Terms">Terms Of Use</a>
            <a href="">List Of Openings</a>
          </div>
        </li>
        <li
          className={`nav-dropdown-links-listitem ${
            currentPage === "/research" ? "active" : ""
          }`}
        >
          <NavLink
            onClick={toggleResearchDropdown}
            to="/about-us"
            className="nav-dropdown-links nav-research"
          >
            Research
          </NavLink>
          <div
            className={classnames("nav-dropdown-content", {
              block: showResearch,
            })}
          >
            <a href="#Hero">Research Tools & Resources</a>
            <a href="#Hero">Clinical Drug Therapies</a>
            <a href="#Hero">Participate in Research</a>
          </div>
        </li>
      </ul>
    )}
  </div>
);
*/
