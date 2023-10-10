
import React, { useEffect, useState, useRef} from "react";
import "./index.css";
import Research1 from "src/Assets/Images/Research-1.png";

const section1 = () => {

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
    <div className="first-part">
      <div className="image">
        <img className="image-img" src={Research1} alt="" />
      </div>
      <div>
        <div className="side">
          <h1 className="side1">
            Unraveling the Mysteries of Neurofibromatosis
          </h1>
          <h2 className="side2">Advancing Research for a Brighter Future</h2>
        </div>
        <div  className={`intro ${isVisible ? "slide-in1" : ""}`}
        ref={divRef}>
          <h3 className="introduction">Introduction</h3>
          <p className="welcome">
            Welcome to the Neurofibromatosis Research Homepage, dedicated to
            shedding light on the complexities of Neurofibromatosis (NF) and
            driving advancements in research. NF is a group of genetic disorders
            that cause tumors to form on nerves throughout the body, affecting
            both children and adults.
          </p>
          <p className="welcome">
            On this platform, we aim to provide a comprehensive resource for
            individuals and families impacted by NF, as well as researchers,
            healthcare professionals, and advocates. Our mission is to foster
            collaboration, raise awareness, and accelerate the development of
            effective treatments and ultimately a cure for NF.
          </p>
          <p className="welcome">
            Through informative articles, news updates, and access to
            cutting-edge research findings, we strive to empower the NF
            community with knowledge and support. Together, we can make a
            difference in the lives of those living with NF by driving
            breakthroughs and improving patient outcomes.
          </p>
          <p className="welcome">
            Join us in our journey to unravel the mysteries of Neurofibromatosis
            and work towards a brighter future for individuals and families
            affected by this challenging condition. Together, we can pave the
            way for new discoveries, improved treatments, and increased quality
            of life for NF patients worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default section1;
