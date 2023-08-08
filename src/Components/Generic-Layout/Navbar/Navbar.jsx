import React from "react";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


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
            {/* Desktop */}
            <ul className="nav-links-list desktop">
              <li className="nav-links-listitem">
                <NavLink to="/" className="nav-links nav-home">
                  Home
                </NavLink>
              </li>
              <li className="nav-links-listitem nav-dropdown">
                <NavLink to="/services" className="nav-links nav-services">
                  Services
                </NavLink>
                <div className="nav-dropdown-content">
                  <a href="#">Stories of Strength</a>
                  <a href="#">Share Your Story</a>
                  <a href="#">Create Your Blog</a>
                </div>
              </li>

              {/* about us */}
              <li className="nav-links-listitem nav-dropdown">
                <NavLink to="/about-us" className="nav-links nav-about-us">
                  About Us
                </NavLink>
                <div className="nav-dropdown-content">
                  {/* <NavLink to="/about-us/#Hero" >Corporate Info </NavLink>
                  <NavLink to="/about-us/#Statement">Our Team </NavLink>
                  <NavLink to="/about-us/#Finance">Financial Transparency </NavLink>
                  <NavLink to="/about-us/#Terms">Terms Of Use</NavLink> */}

                  <a href="/about-us/#Hero">Corporate Info </a>
                  <a href="/our-team">Our Team </a>
                  <a href="/about-us/#Finance">Financial Transparency </a>
                  <a href="#Terms">Terms Of Use</a>
                  <a href="#Statement">List Of Openings</a>



                </div>
              </li>

              {/* Research */}
              <li className="nav-links-listitem-research">
                <NavLink
                  to="/research"
                  className="nav-links research">
                  Research
                </NavLink>
                <div className="research-dropdown">
                   <HashLink to={"/research/#tools"}>Research Tools & Resources</HashLink>
                   <HashLink to={"/research/#clinical"}>Clinical Drug Therapies</HashLink>
                   <HashLink to={"/research/#participate"}>Participate in Research</HashLink> 
                </div>
              </li>
              </ul>

            {/* Sign up & sign in */}
            <ul className="nav-links-list">
              <li className="nav-links-listitem nav-dropdown">
                <NavLink className="nav-links nav-signin">
                  <AccountCircleIcon
                    className="circle-icon"
                    sx={{ fontSize: 32, marginLeft: 0 }}
                    sm={{ fontSize: 48 }}
                  />
                  <span className="nav-signin-span">Sign up or Log In</span>
                </NavLink>
                <div className="nav-dropdown-content ">
                  <a href="#">Sign In</a>
                  <a href="#">Sign Up Now</a>
                  <a href="#">Donate as a Guest</a>
                </div>
              </li>

              {/* Donate Link */}
              <li className="nav-links-listitem nav-dropdown">
                <NavLink className="nav-links nav-donate ">Donate</NavLink>
                <div className="nav-dropdown-content ">
                  <Link to="/donate">Ways to give</Link>
                  <a href="#">Donate Online</a>
                  <a href="#">Individual Donation</a>
                  <a href="#">Make a Corporate Donation</a>
                  <a href="#">Fundraise on Facebook</a>
                  <a href="#">Create Your Own Fundraiser</a>
                  <hr />
                  <a href="#"> Raise $500 in 10 days</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// onClick={() => {
//   document.querySelector(
//     "#UnderConst-wrapper"
//   ).style.display = "flex";
// }}
