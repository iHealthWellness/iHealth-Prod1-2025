import "./Hero.css";
import termsOfuse from "../../../Assets/Images/terms-of-use.png";

const Hero = () => {
  return (
    // Hero image on terms of use page
    <>
      <div id="termsofuse">
        <img src={termsOfuse} alt="terms-of-use" />
      </div>
    </>
  );
};

export default Hero;
