//Import Styles
import "./Hero.css";

//import local assets/files/components
import HeroMobile from "src/Assets/Images/hero-5x.png";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import { useEffect } from "react";

const Hero = () => {
  const text =
    "We're a community-based 501c3 organization offering health-related programs free to patients!";
  const letterElements = text.split("").map((letter, index) => (
    <span key={index} className="letter">
      {letter}
    </span>
  ));

  useEffect(() => {
    const checkOverlap = () => {
      const letters = document.querySelectorAll(".letter");
      letters.forEach((letter) => {
        const letterRect = letter.getBoundingClientRect();
        const leftDiv = document
          .querySelector(".blue-banner:first-child")
          .getBoundingClientRect();
        const rightDiv = document
          .querySelector(".blue-banner:last-child")
          .getBoundingClientRect();

        if (
          (letterRect.right > leftDiv.left &&
            letterRect.left < leftDiv.right) ||
          (letterRect.right > rightDiv.left && letterRect.left < rightDiv.right)
        ) {
          letter.style.color = "white";
        } else {
          letter.style.color = "black";
        }
      });
    };

    const interval = setInterval(checkOverlap, 50);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="hero-container">
      <section className="hero-survey-banner">
        <p className="SN-D-T-M-P-16">
          You are OUR hero, and we would love to hear your NF story.{" "}
          <span className="take-survey-span">
            <a href="https://forms.gle/QAiHQcgtvqfjFtYe6" target="_blank">
              Submit your Story.
            </a>
          </span>
        </p>
        {/* <p className="SN-D-P-20">
          You are OUR hero, and we would love to hear your NF story.{" "}
          <span
            className="take-survey-span"
            onClick={() => {
              document.querySelector("#UnderConst-wrapper").style.display =
                "flex";
            }}
          >
            Submit your Story.
          </span>
        </p> */}
      </section>
      <aside className="second-banner">
        <div className="blue-banner"></div>
        <p>{letterElements}</p>
        <div className="blue-banner"></div>
      </aside>
      <div className="hero-container-inner">
        <div className="hero-heading-container">
          <h3 className="hero-heading-h3">
            <HandshakeOutlinedIcon />
            Committed to success
          </h3>
          <h1 className="hero-heading-h1">Live better. Be well.</h1>
          <h2 className="hero-heading-h2">
            For Patients with Complex Diseases
          </h2>
          <h4 className="hero-heading-h4">
            We believe the care of complex conditions should be simpler for
            everyone
          </h4>
          <h2 className="provider-heading">
            <PersonSearchOutlinedIcon
              sx={{
                "@media (min-width: 480px)": {
                  fontSize: "4rem",
                },
                "@media (min-width: 1024px)": {
                  fontSize: "2rem",
                },
              }}
            />
            Search & Find a Medical or Wellness Provider
          </h2>
        </div>
        <div className="hero-image-container">
          <img
            className="hero-img"
            src={HeroMobile}
            alt="Doctor with patients image for Hero section"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
