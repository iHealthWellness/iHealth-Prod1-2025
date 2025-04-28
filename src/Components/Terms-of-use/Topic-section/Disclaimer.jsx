import React, { useState } from "react";
import "./Disclaimer.css";
import plusicon from "src/Assets/Icons/plus.png";
import minusicon from "src/Assets/Icons/minus.png";

const Disclaimer = () => {
  const [isExpanded22, setIsExpanded22] = useState(false);
  const handleToggle22 = () => {
    setIsExpanded22(!isExpanded22);
    const header3a = document.querySelector(".header31");
    header3a.classList.toggle("header3-remove");
  };
  return (
    <div id="disclaimer">
      <div className="expand-div">
        <h3 className="header31 SN-D-H3-24" onClick={handleToggle22}>
          Disclaimer
        </h3>

        {/* expand and collapse icon */}
        <img
          onClick={handleToggle22}
          src={isExpanded22 ? minusicon : plusicon}
          alt="expand-icon"
          className="after"
        />
      </div>

      {isExpanded22 && (
        <div>
          <p className="SN-D-T-M-P-16">
            The information provided on this website is for informational purposes 
            only and is not intended to be a substitute for professional medical advice,
            diagnosis, or treatment.
            <br />
            <br />
            The website owner does not endorse or recommend any
            specific healthcare provider listed on the site, and is not responsible for
            the quality or performance of any healthcare provider listed on the site.
            The website owner does not guarantee the accuracy, completeness, or 
            timeliness of the information provided on the site.
            <br />
            <br />
            Users are encouraged
            to verify the credentials and qualifications of any healthcare provider 
            listed on the site before making an appointment. By using this website,
            users agree to hold the website owner harmless from any claims or damages
            arising from the use of the information provided on the site.
            <br />
            <br />
            {/* The ongoing utilization of our services constitutes your clear and
            unambiguous agreement to the gathering and utilization of data from publicly
            accessible sources. */}
          </p>
          <br />
        </div>
      )}
    </div>
  );
};

export default Disclaimer;
