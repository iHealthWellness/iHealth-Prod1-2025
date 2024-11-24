import { useState, useRef, useEffect } from "react";
import OurServices from "src/Constants/HomePage/OurServices";
import ServicesCard from "./ServicesCard";
import styles from "./index.module.css";

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
    <section className={styles.servicesContainer}>
      <h2 className={`${styles.servicesHeading} SN-D-Home-H2-32`}>
        We Believe Patients Deserve Better Services
      </h2>

      <div
        className={`${styles.servicesInner} ${
          isVisible ? styles.servicesInnerSlideIn : ""
        }`}
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
