import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftSharp, Close } from "@mui/icons-material";
import dropdownIcon from "src/Assets/Icons/nav-dropdown.svg";
import styles from "./index.module.css";

const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about-us",
    submenu: [
      { title: "About Us", url: "/about-us" },
      { title: "Our Team", url: "/Our-Team" },
      { title: "Financial Transparency", url: "/about-us/#Finance" },
      { title: "Terms Of Use", url: "/about-us/#Terms" },
      { title: "Volunteer from Anywhere", url: "/job-openings" },
    ],
  },
  {
    title: "Research",
    url: "/research",
    submenu: [
      { title: "Research", url: "/research" },
      { title: "Research Tools & Resources", url: "/research/#tools" },
      { title: "Clinical Drug Therapies", url: "/research/#clinical" },
      { title: "Participate in Research", url: "/research/#participate" },
      { title: "How to get Involved", url: "/research/#howtogetinvolved" },
    ],
  },
  {
    title: "Ways to Give",
    url: "/donate",
    submenu: [
      { title: "Donate Online", url: "/donate" },
      { title: "Individual Donation", url: "/donate/#individual-donation" },
      { title: "Make a Corporate Donation", url: "/donate/#make-a-corporate-donation" },
      { title: "Fundraise on Facebook", url: "/donate/#fundraise-on-facebook" },
      { title: "Create Your Own Fundraiser", url: "/donate/#create-your-own-fundraiser" },
      { title: "Raise $500 in 10 days", url: "/donate/#Donate10Days-Main-Container" },
    ],
  },
];

const MenuItem = ({ item, onSubmenuOpen, onNavigate }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (item.submenu) {
      onSubmenuOpen(item);
    } else {
      const [path, hash] = item.url.split('#');
      const isMainMenuItem = ['/', '/about-us', '/research', '/donate', '/job-openings'].includes(path);
    
      if (isMainMenuItem) {
        navigate(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(item.url);
        if (hash) {
          setTimeout(() => {
            const element = document.getElementById(hash.slice(1));
            if (element) {
              const navbarHeight = 100;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }
          }, 100);
        }
      }
      onNavigate();
    }
  };

  return (
    <li className={styles.navItem}>
      <Link to={item.url} onClick={handleClick} className={styles.navLink}>
        {item.title}
        {item.submenu && <span className={styles.navArrow}>▶</span>}
      </Link>
    </li>
  );
};

const NavDropdownButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const isMainRoute = ['/', '/about-us', '/research', '/donate'].includes(location.pathname);
    if (isMainRoute) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null);
  };

  const handleSubmenuOpen = (item) => {
    setActiveSubmenu(item);
  };

  const handleBackButton = () => {
    setActiveSubmenu(null);
  };

  const handleNavigate = () => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  };

  const renderMenu = (items) => (
    <ul className={styles.navList}>
      {items.map((item, index) => (
        <MenuItem
          key={index}
          item={item}
          onSubmenuOpen={handleSubmenuOpen}
          onNavigate={handleNavigate}
        />
      ))}
    </ul>
  );

  return (
    <div className={styles.dropdownContainer}>
      <button className={styles.dropdownMenuButton} onClick={toggleMenu}>
        <img className={styles.dropdownMenuIcon} src={dropdownIcon} alt="Menu" />
      </button>

      {isMenuOpen && (
        <nav className={`${styles.mobileNav} ${activeSubmenu ? styles.submenuActive : ''}`}>
          <div className={styles.navHeader}>
            <div className={styles.submenuHeaderContainer}>
              {activeSubmenu && (
                <button onClick={handleBackButton}>
                  <ArrowLeftSharp />
                </button>
              )}
              <h2>{activeSubmenu ? activeSubmenu.title : 'Menu'}</h2>
            </div>
            <button className={styles.closeButton} onClick={() => setIsMenuOpen(false)}>
              <Close />
            </button>
          </div>

          <div className={styles.menuContainer}>
            <div className={styles.menuContent}>
              {renderMenu(menuItems)}
            </div>
            {activeSubmenu && (
              <div className={styles.submenuContent}>
                {renderMenu(activeSubmenu.submenu)}
              </div>
            )}
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavDropdownButton;