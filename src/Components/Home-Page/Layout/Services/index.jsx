import { useState, useRef, useEffect } from "react";

import OurServices from "src/Constants/HomePage/OurServices";
import ServicesCard from "./ServicesCard";

import "./index.css";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const div = divRef.current;
      if (div) {
        const rect = div.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="services-container">
      <h2 className="services-heading">
        We believe patients deserve better services
      </h2>

      <div
        className={`services-inner ${isVisible ? "slide-in" : ""}`}
        ref={divRef}
      >
        {OurServices.map((service, idx) => (
          <ServicesCard service={service} key={`services-${idx}`} />
        ))}
      </div>
    </section>
  );
};

export default Services;
