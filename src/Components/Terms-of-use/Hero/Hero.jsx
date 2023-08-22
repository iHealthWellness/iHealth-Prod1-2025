import "./Hero.css";
import Termsofusehero from "src/Assets/Images/terms-of-use.png";

const Hero = () => {
  return (
    // Hero image on terms of use page
    <>
      <div className="terms0" id="termsofuse">
        <img src={Termsofusehero} alt="terms-of-use" />
      </div>
    </>
  );
};

export default Hero;
