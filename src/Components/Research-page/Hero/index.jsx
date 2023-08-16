<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect} from "react";
=======
import React from "react";
>>>>>>> e05d4fd (update on research)
=======
import React, { useEffect} from "react";
>>>>>>> 16586ad (update)
import "./index.css";
import Research1 from "src/Assets/Images/Research-1.png";

const section1 = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 16586ad (update)

  useEffect(() => {
    const textElements = document.querySelectorAll('.slide-in-text');

    const handleScroll = () => {
      textElements.forEach((textElement) => {
        const slideInAt = (window.scrollY + window.innerHeight) - textElement.clientHeight / 2;
        const elementBottom = textElement.offsetTop + textElement.clientHeight;
        const isHalfShown = slideInAt > textElement.offsetTop;
        const isNotScrolledPast = window.scrollY < elementBottom;

        if (isHalfShown && isNotScrolledPast) {
          textElement.classList.add('active');
        } else {
          textElement.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

<<<<<<< HEAD
=======
>>>>>>> e05d4fd (update on research)
=======
>>>>>>> 16586ad (update)
  return (
    <div className="first-part">
      <div className="image">
        <img className="image-img" src={Research1} alt="" />
      </div>
      <div>
        <div className="side">
          <h1 className="side1">
            Unraveling the Mysteries of Neurofibromatosis:
          </h1>
          <h2 className="side2">Advancing Research for a Brighter Future</h2>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="slide-in-text">
=======

>>>>>>> e05d4fd (update on research)
=======
        <div className="slide-in-text">
>>>>>>> 16586ad (update)
        <div className="intro">
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
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
=======
>>>>>>> e05d4fd (update on research)
=======
        </div>
>>>>>>> 16586ad (update)
      </div>
    </div>
  );
};

export default section1;
