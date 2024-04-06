//Import Styles
import "./Hero.css";

//import local assets/files/components
import HeroMobile from "src/Assets/Images/hero-5x.png";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";

const Hero = () => {
  return (
    <section className="hero-container">
      {/* <section className="hero-survey-banner">
        <p className="SN-D-P-20">
          Patients, your voice matters! Join us in shaping your NF treatment.{" "}
          <span
            className="take-survey-span"
            onClick={() => {
              document.querySelector("#UnderConst-wrapper").style.display =
                "flex";
            }}
          >
            Take the NF Survey.
          </span>
        </p>
        <p className="SN-D-P-20">
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
        </p>
      </section> */}
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
