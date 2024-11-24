import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./Navbar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import desktopLogo from "../../../Assets/Brand/logo-nav-desktop.png";
import mobileLogo from "../../../Assets/Brand/logo-nav-mobile.png";
import NavDropdownButton from "./NavDropdown";
import Login from "../UserAuthentication/Login/Login";
import UnderConstruction from "src/Components/Under-Construction/UnderConstruction";
import ToTopBtn from "../TotopBtn/index.jsx";
import useScrollToAnchor from "src/hooks/useScrollToAnchor";
import { KeyboardArrowDown, Groups, Paid, Description, VolunteerActivism, Science, Medication, Biotech, OnlinePrediction, Person, CorporateFare, Facebook, CalendarMonth } from "@mui/icons-material";
import ButtonsSearchDonate from "src/0-Dev1-General/0-1-Landing-Page/components/Provider/ButtonsSearchDonate";
import { donateLinkUrl } from "src/environment/config";


const NavLogo = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = (event) => {
    if (location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if ( location.pathname === "/" || location.pathname === "/about-us" || location.pathname === "/research" || location.pathname === "/Our-Team" || location.pathname === "/donate" || location.pathname === "/job-openings") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <div className={styles.navLogoBlock}>
      <NavLink to="/" className={styles.navLogo} onClick={handleLogoClick}>
        <picture>
          <source media="(max-width: 1023px)" srcSet={mobileLogo} />
          <img className={styles.navLogoImg} src={mobileLogo} alt="confidential" />
        </picture>
      </NavLink>
    </div>
  );
};

const AdjustedHashLink = ({ to, children, ...props }) => {
  const linkRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const [path, hash] = to.split('#');
      const isCurrentPage = path === '' || path === location.pathname;

      const scrollToElement = (elementId) => {
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            const navbarHeight = 140;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;

            // Check if we're already close to the target position
            if (Math.abs(window.pageYOffset - offsetPosition) > 50) {
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }
          }
        }, 500); // Increased timeout to 500ms
      };

      if (isCurrentPage && hash) {
        // Same page navigation
        scrollToElement(hash);
      } else {
        // Different page navigation
        navigate(to);
        if (hash) {
          let scrollAttempts = 0;
          const maxAttempts = 10;

          const scrollInterval = setInterval(() => {
            scrollToElement(hash);
            scrollAttempts++;

            if (scrollAttempts >= maxAttempts) {
              clearInterval(scrollInterval);
            }
          }, 200);

          // Clear the interval after 5 seconds
          setTimeout(() => {
            clearInterval(scrollInterval);
          }, 5000);
        }
      }
    };

    const link = linkRef.current;
    if (link) {
      link.addEventListener('click', handleClick);
    }

    return () => {
      if (link) {
        link.removeEventListener('click', handleClick);
      }
    };
  }, [to, location, navigate]);

  return <HashLink ref={linkRef} to={to} {...props}>{children}</HashLink>;
};

const MenuList = ({ setIsMenuOpen, closeSubMenu }) => {
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleLinkClick = (menu) => {
    setActiveMenu(menu);
    closeSubMenu();
    setIsMenuOpen(false);
  }

  const menuItems = [
    {
      title: "About Us",
      url: "/about-us",
      className: styles.navAboutUs,
      subMenu: [
        {
          title: "Our Team",
          paragraph: "Meet the Dedicated Professionals behind our mission",
          icon: <Groups />,
          url: "/Our-Team",
        },
        {
          title: "Financial Transparency",
          paragraph: "See how we allocate funds and maintain accountability",
          icon: <Paid />,
          url: "/about-us/#Finance",
        },
        {
          title: "Terms Of Use",
          paragraph: "Learn about the rules and guidelines for using",
          icon: <Description />,
          url: "/about-us/#Terms",
        },
        {
          title: "Volunteer from Anywhere",
          paragraph: "Join our cause remotely and make a difference globally",
          icon: <VolunteerActivism />,
          url: "/job-openings",
        },
      ],
    },
    {
      title: "Research",
      url: "/research",
      className: styles.navResearch,
      subMenu: [
        {
          title: "Research Tools & Resources",
          paragraph: "Access the latest tools and data for groundbreaking research",
          icon: <Science />,
          url: "/research/#tools",
        },
        {
          title: "Clinical Drug Therapies",
          paragraph: "Explore cutting-edge drug therapies in clinical trials",
          icon: <Medication />,
          url: "/research/#clinical",
        },
        {
          title: "Participate in Research",
          paragraph: "Contribute to innovative research by becoming a participant",
          icon: <Biotech />,
          url: "/research/#participate",
        },
      ],
    },
    {
      title: "Ways to Give",
      url: "/donate",
      className: styles.waysToGive,
      subMenu: [
        {
          title: "Donate Online",
          paragraph: "Support our cause with a quick and easy online donation",
          icon: <OnlinePrediction />,
          url: "/donate",
        },
        {
          title: "Individual Donation",
          paragraph: "Make a personal contribution to support our mission",
          icon: <Person />,
          url: "/donate/#individual-donation",
        },
        {
          title: "Make a Corporate Donation",
          paragraph: "Help us by making a corporate donation to aid our cause",
          icon: <CorporateFare />,
          url: "/donate/#make-a-corporate-donation",
        },
        {
          title: "Fundraise on Facebook",
          paragraph: "Leverage social media to fundraise for our cause",
          icon: <Facebook />,
          url: "/donate/#fundraise-on-facebook",
        },
        {
          title: "Create Your Own Fundraiser",
          paragraph: "Start your own fundraising campaign to support us",
          icon: <VolunteerActivism />,
          url: "/donate/#create-your-own-fundraiser",
        },
        {
          title: "Raise $500 in 10 days",
          paragraph: "Achieve fundraising goals quickly with our tips",
          icon: <CalendarMonth />,
          url: "/donate/#Donate10Days-Main-Container",
        },
      ],
    },
  ];

  return (
    <ul className={`${styles.navLinksList} ${styles.desktop}`}>
      {menuItems.map((menu) => (
        <li
          className={`${styles.navLinksListitem} ${styles.navDropdown}`}
          key={menu.title}
          onMouseEnter={() => setActiveMenu(menu.title)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <NavLink
            to={menu.url}
            className={({ isActive }) =>
              `${styles.navLinks} ${menu.className}` +
              (isActive ? ` ${styles.actives} ${menu.className}` : "")
            }
            onClick={() => handleLinkClick(menu.title)}
          >
            {menu.title}
          </NavLink>
          <KeyboardArrowDown
            sx={{ marginBottom: "-7px", color: "white" }}
            color="#fff"
          />
          {activeMenu === menu.title && menu.subMenu && (
            <div className={styles.navDropdownContent}>
              {menu.subMenu.map((sub) => (
                <AdjustedHashLink to={sub.url} key={sub.title} onClick={handleLinkClick}>
                  <div className={styles.navDropdownContentInner}>
                    <div className={styles.navDropdownContentInnerIcon}>
                      {/* {sub.icon} */}
                    </div>
                    <div className={styles.navDropdownContentInnerText}>
                      {sub.title}
                    </div>
                  </div>
                </AdjustedHashLink>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

const SignUpSignIn = () => {
  return (
    <li className={styles.navDropdown}>
      <NavLink className={`${styles.navLinks} ${styles.desktop} ${styles.navSignin}`}>
        <a
          onClick={() => {
            document.querySelector("#UnderConst-wrapper").style.display = "flex";
          }}
          href="#"
        >
        </a>
        <div className={styles.navCircleIcon}>
          <AccountCircleIcon
            sx={{ fontSize: 32, marginLeft: 0 }}
            sm={{ fontSize: 48 }}
          />
        </div>
      </NavLink>
      <div className={styles.navSigninDropdownContent}>
        <a
          onClick={() => {
            document.querySelector("#UnderConst-wrapper").style.display = "flex";
          }}
          href="#"
        >
          Sign In
        </a>
        <a
          onClick={() => {
            document.querySelector("#UnderConst-wrapper").style.display = "flex";
          }}
          href="#"
        >
          Sign Up Now
        </a>
        <a
          id="12"
          onClick={() => {
            document.querySelector("#UnderConst-wrapper").style.display = "flex";
          }}
          href="#"
        >
          Donate as Guest
        </a>
      </div>
    </li>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const closeSubMenu = () => setActiveSubmenu(null);

  useScrollToAnchor();

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(false);
      setActiveSubmenu(null);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={styles.navbarFiller}>
        <nav className={styles.navContainer}>
          <NavDropdownButton
            isOpen={isMenuOpen}
            setIsOpen={setIsMenuOpen}
            activeSubmenu={activeSubmenu}
            setActiveSubmenu={setActiveSubmenu}
          />

          <div className={styles.navInnerContainer}>
            <div className={styles.navLinksContainer}>
              <NavLogo />

              <div className={styles.navButtons}>
                <ul className={styles.navLinksList}>
                  <div className={styles.navLinksBlock}>
                    <MenuList
                      setIsMenuOpen={setIsMenuOpen}
                      closeSubMenu={closeSubMenu}
                    />
                  </div>

                  <SignUpSignIn />
                  <li className={styles.navButtonDonate}>
                    <Link className={`${styles.navLinks} ${styles.navDonate}`} target="_blank" to={donateLinkUrl}>
                      Donate
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <ToTopBtn />

      <UnderConstruction />
      <Login />
    </>
  );
};

export default Navbar;



// Old codebase
/*
const Navbar = () => {
  
  return (
    <>
    <nav className="generic-nav-container">
      <div className="generic-nav-inner-container">
        <NavDropdownButton />
        <div className="generic-nav-links-container">
          <div className="generic-nav-logo-block">
            <NavLink to="/" className="generic-nav-logo">
              <picture>
                <source media="(max-width: 1023px)" srcSet={mobileLogo} />
                <img
                  className="generic-nav-logo-img"
                  src={desktopLogo}
                  alt="confidential"
                />
              </picture>
            </NavLink>
          </div>

          <div className="generic-nav-links-block">
            // Desktop 

            <ul className="generic-nav-links-list desktop">
              <li className="generic-nav-links-listitem">
                <NavLink to="/" className="generic-nav-links nav-home">
                  Home
                </NavLink>
              </li>

              <li className="generic-nav-links-listitem nav-dropdown">
                <NavLink to="/services" className="generic-nav-links nav-services">
                  Services
                </NavLink>
                <div className="generic-nav-dropdown-content">
                  <a href="#">Stories of Strength</a>
                  <a href="#">Share Your Story</a>
                  <a href="#">Create Your Blog</a>
                </div>
              </li>

              // about us 
              <li className="generic-nav-links-listitem nav-dropdown">
                <NavLink to="/about-us" className="generic-nav-links nav-about-us">
                  About Us
                </NavLink>
                <div className="generic-nav-dropdown-content">
                  <HashLink to={"/about-us/#Hero"} >Corporate  info</HashLink>
                  <HashLink to={"/our-team"}>Our Team </HashLink>
                  <HashLink to={"/about-us/#Finance"}>Financial Transparency </HashLink>
                  <HashLink to={"/about-us/#Terms"}>Terms Of Use</HashLink>
                  <HashLink to={""}>Volunteer from Anywhere</HashLink>



                </div>
              </li>

              // Research 
              <li className="generic-nav-links-listitem nav-dropdown">
                <NavLink to="/" className="generic-nav-links nav-research">
                  Research
                </NavLink>
                <div className="research-dropdown">
                   <HashLink to={"/research/#tools"}>Research Tools & Resources</HashLink>
                   <HashLink to={"/research/#clinical"}>Clinical Drug Therapies</HashLink>
                   <HashLink to={"/research/#participate"}>Participate in Research</HashLink> 
                </div>
              </li>
              </ul>

            // Sign up & sign in 
            <ul className="generic-nav-links-list">
              <li className="generic-nav-links-listitem nav-dropdown">
                <NavLink
                  className="generic-nav-links nav-signin"
                  onClick={() => {
                    document.querySelector(
                      "#UnderConst-wrapper"
                    ).style.display = "flex";
                  }}
                >
                  <AccountCircleIcon
                    className="circle-icon"
                    sx={{ fontSize: 32, marginLeft: 0 }}
                    sm={{ fontSize: 48 }}
                  />
                  <span className="generic-nav-signin-span">Sign up or Log In</span>
                </NavLink>
                <div className="generic-nav-dropdown-content ">
                  <a href="#" onClick={() => {document.querySelector("#Login-Main-Container").style.display = "flex";}} >Sign In</a>
                  <a href="#">Sign Up Now</a>
                  <a href="#">Donate as a Guest</a>
                </div>
              </li>

              // Donate Link
              <li>
                <NavLink className="generic-nav-links nav-donate ">Donate</NavLink>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </nav>

      
  );
};
*/


