import React from "react";
import { NavLink } from "react-router-dom";

import NavDropdownButton from "./NavDropdown";
import desktopLogo from "src/Assets/Brand/logo-nav-desktop.png";
import mobileLogo from "src/Assets/Brand/logo-nav-mobile.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css";

const Navbar = () => {


  return (
    <nav className="nav-container">
      <div className="nav-inner-container">
        <NavDropdownButton />
        <div className="nav-links-container">
          <div className="nav-logo-block">
            <NavLink to="/" className="nav-logo">
              <picture>
                <source media="(max-width: 1023px)" srcSet={mobileLogo} />
                <img
                  className="nav-logo-img"
                  src={desktopLogo}
                  alt="confidential"
                />
              </picture>
            </NavLink>
          </div>

          <div className="nav-links-block">
            <ul className="nav-links-list desktop">
              <li className="nav-links-listitem">
                <NavLink to="/" className="nav-links nav-home">
                  Home
                </NavLink>
              </li>
              <li className="nav-links-listitem">
                <NavLink
                  onClick={() => {
                    document.querySelector(
                      "#UnderConst-wrapper"
                    ).style.display = "flex";
                  }}
                  className="nav-links nav-services"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-links-listitem nav-dropdown">
                <NavLink
                  to="/about-us"
                  className="nav-links nav-about-us"
                >
                  About Us
                </NavLink>
                <div className="nav-dropdown-content">
                  <a href="#Statement">Corporate Info </a>
                  <a href="">Our Team </a>
                  <a href="#Finance">Financial Transparency </a>
                  <a href="#Terms">Terms Of Use</a>
                  <a href="">List Of Openings</a>



                </div>
              </li>
              <li className="nav-links-listitem">
                <NavLink
                  onClick={() => {
                    document.querySelector(
                      "#UnderConst-wrapper"
                    ).style.display = "flex";
                  }}
                  className="nav-links nav-research"
                >
                  Research
                </NavLink>
              </li>
            </ul>
            <ul className="nav-links-list">
              <li className="nav-links-listitem">
                <NavLink
                  onClick={() => {
                    document.querySelector(
                      "#UnderConst-wrapper"
                    ).style.display = "flex";
                  }}
                  className="nav-links nav-signin"
                >
                  <AccountCircleIcon
                    className="circle-icon"
                    sx={{ fontSize: 32, marginLeft: 0 }}
                    sm={{ fontSize: 48 }}
                  />
                  <span className="nav-signin-span">Sign up or Log In</span>
                </NavLink>
              </li>
              <li className="nav-links-listitem">
                <NavLink
                  onClick={() => {
                    document.querySelector(
                      "#UnderConst-wrapper"
                    ).style.display = "flex";
                  }}
                  className="nav-links nav-donate"
                >
                  Donate
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
