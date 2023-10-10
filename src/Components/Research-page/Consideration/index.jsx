import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import Research7 from "src/Assets/Images/Research-7.png";

const Consideration = () => {
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
    <div className="Consider">
      <div className={`consider ${isVisible ? "slide-in8" : ""}`}
        ref={divRef}>

          <div className="consideration">
            <h2>
              <span className="consideration-span">
                Important Considerations:
              </span>
            </h2>
            <p className="consideration1">
              {" "}
              Before participating in any research study, it's essential to
              consider the following:
            </p>
            <p className="consideration2">
              <span className="considerspan">1.Informed Consent</span>{" "}
              Understand the purpose, procedures, potential risks, and benefits
              of the study. Make sure you receive and review the informed
              consent document before agreeing to participate. If you have any
              questions, don't hesitate to ask the research team.
            </p>
            <p className="consideration2">
              <span className="considerspan">
                2.Confidentiality and Privacy
              </span>{" "}
              Ensure that your personal information remains confidential and
              protected in accordance with research ethics and regulations.
              Research studies have strict protocols to safeguard participants'
              privacy.
            </p>
            <p className="consideration2">
              <span className="considerspan">3.Time Commitment</span> Evaluate
              the time commitment required for participation, including visits,
              tests, and follow-ups. Determine if the study's timeline aligns
              with your availability and schedule.
            </p>
            <p className="consideration2">
              <span className="considerspan">4.Travel and Expenses</span>{" "}
              Consider any associated travel or financial implications. Inquire
              about reimbursements or compensation available for your
              participation. Some studies may cover certain expenses related to
              your involvement.
            </p>
          </div>

          <img className="consider-img" src={Research7} alt="" />
      </div>
      <div className="difference">
        <h1 className="difference1">Make a Difference Today</h1>
        <p className="difference2">
          Your participation in NF research is invaluable. By contributing your
          time, knowledge, and experiences, you actively contribute to advancing
          the understanding and treatment of NF. Together, we can make a
          difference in the lives of individuals affected by this complex
          condition.
        </p>

        <p className="difference3">
          Take the first step today and explore the research opportunities
          available to you. Your involvement matters, and by participating, you
          play an integral role in shaping a brighter future for those living
          with NF.
        </p>
      </div>
    </div>
  );
};

export default Consideration;
