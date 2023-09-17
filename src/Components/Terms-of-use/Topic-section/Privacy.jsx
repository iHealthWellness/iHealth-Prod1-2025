import { useState } from "react";
import "./Privacy.css";
import plusicon from "src/Assets/Icons/plus.png";
import minusicon from "src/Assets/Icons/minus.png";

const Privacy = () => {
  // Expand and collapse function for terms of use topic sections and icons
  const [isExpanded11, setIsExpanded11] = useState(false);
  const handleToggle11 = () => {
    setIsExpanded11(!isExpanded11);
    const header3 = document.querySelector(".header30");
    header3.classList.toggle("header3-remove");
  };
  return (
    <div id="privacy-policy">
      <div className="expand-div">
        <h3 className="header30" onClick={handleToggle11}>
          Privacy Policy
        </h3>
        {/* expand and collapse icon */}
        <img
          onClick={handleToggle11}
          src={isExpanded11 ? minusicon : plusicon}
          alt="expand-icon"
          className="after"
        />
      </div>

      {isExpanded11 && (
        <div>
          <p>
            Protecting your privacy is important to us.
            <br />
            <br />
            This Privacy Policy outlines how we collect, use, and protect your
            personal information when you use our website. By using our website,
            you agree to the terms of this Privacy Policy.
            <br />
            <br />
            We collect personal information such as your name and email address
            when you sign up for our services. We use this information to
            provide you with the services you have requested and to communicate
            with you about our services.
            <br />
            <br />
            We do not share your personal information with third parties, except
            when required by law or when necessary to provide you with the
            services you have requested. We take appropriate measures to protect
            your personal information from unauthorized access, disclosure,
            alteration, or destruction.
            <br />
            <br />
            We may use cookies to collect information about your use of our
            website. This information is used to improve our website and to
            provide you with a more personalized experience. You can choose to
            disable cookies in your web browser, but this may limit your use of
            our website.
            <br />
            <br />
            We may also use third-party services, such as Google Analytics, to
            analyze website traffic and usage. These third-party services may
            collect and use your information in accordance with their own
            privacy policies.
          </p>
          <br />
        </div>
      )}
    </div>
  );
};

export default Privacy;
