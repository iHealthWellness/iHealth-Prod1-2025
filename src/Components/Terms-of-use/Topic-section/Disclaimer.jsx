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
        <h3 className="header31" onClick={handleToggle22}>
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
          <p>
            The information provided may come from different sources, including but not limited
            to information published on the open web and public datasets, to enhance and improve
            our services, products, and user experience.
            <br />
            <br />
            This data may include publicly available information
            such as user-generated content, publicly shared social media posts,
            government records, and other publicly accessible data.
            <br />
            <br />
            We will use such public data in accordance with our Privacy Policy,
            and we will make reasonable efforts to ensure that the data
            collected from public sources is accurate, relevant, and up-to-date.
            <br />
            <br />
            The ongoing utilization of our services constitutes your clear and
            unambiguous agreement to the gathering and utilization of data from publicly
            accessible sources.
          </p>
          <br />
        </div>
      )}
    </div>
  );
};

export default Disclaimer;
