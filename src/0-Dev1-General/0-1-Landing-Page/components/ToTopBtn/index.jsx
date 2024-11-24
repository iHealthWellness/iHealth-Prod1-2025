import { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import styles from "./index.module.css"; 

const ToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show the button when the user has scrolled down
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${styles.toTopBtn} ${isVisible ? styles.visible : ""}`} 
      onClick={handleClick}
    >
      {/* <ArrowUpwardIcon /> */}
      {/* <p>TOP</p> */}
    </button>
  );
};

export default ToTopBtn;
