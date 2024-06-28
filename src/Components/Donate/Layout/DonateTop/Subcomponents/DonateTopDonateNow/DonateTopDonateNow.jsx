//Import Libraries/Packages
import React, { useState } from "react";

//Import Styles
import "./DonateTopDonateNow.css";

//Import Local files/components etc..
//import donateCL from "../../../../../../Assets/Images/donate-colorful-letters.png" big size
import donateCL from "../../../../../../Assets/Images/donate-colorful-letters-s.jpg";
//import donateSF from "../../../../../../Assets/Images/Donate-Smiling-Faces.jpeg" biz size
import donateSF from "../../../../../../Assets/Images/Donate-Smiling-Faces-s.png";
//import donateOM from "../../../../../../Assets/Images/Donate-old-man.png" big size
import donateOM from "../../../../../../Assets/Images/Donate-old-man-s.png";
//import DonateYSK from "../../../../../../Assets/Images/Donate-young-sick-kid.jpeg" big size
import DonateYSK from "../../../../../../Assets/Images/Donate-young-sick-kid-s.jpg";
import Twoimgs from "./Subcomponents/Twoimgs";

function DonateTopDonateNow() {
  /* Note for the developer Delete this block of the code after test */
  const [AllScreenSize, setAllScreenSize] = useState(window.outerWidth);
  const SetScreenSize = () => {
    setAllScreenSize(window.outerWidth);
  };
  window.addEventListener("resize", SetScreenSize);
  /* Note for the developer Delete this block of the code after test */

  return (
    <>
      <div id="Donate-Top-Donate-Now">
        <div>
          <img
            loading="lazy"
            src={donateCL}
            alt="Donate colorful letters picture"
          />
          {AllScreenSize > 911 && window.outerWidth > 911 ? (
            <Twoimgs donateSF={donateSF} donateOM={donateOM} />
          ) : null}
        </div>
        <div>
          <div>
            <img
              loading="lazy"
              width="40%"
              src={DonateYSK}
              alt="Donate young sick kid picture"
            />
            <div>
              <p className="D-H3-24">
                Share the <br />
                Love, Make a <br />
                Difference:
              </p>
              <p id="donate-today" className="D-H1-32">
                Donate Today!
              </p>
              <button
                onClick={() => {
                  document.querySelector("#UnderConst-wrapper").style.display =
                    "flex";
                }}
              >
                Donate Online
              </button>
            </div>
          </div>

          {AllScreenSize <= 911 && window.outerWidth <= 911 ? (
            <Twoimgs donateSF={donateSF} donateOM={donateOM} />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default DonateTopDonateNow;
