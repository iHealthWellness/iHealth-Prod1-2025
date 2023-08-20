import { useState } from "react";

import "./index.css";
import Geriatric from "./Community-Team/Geriatric";
import Cancer from "./Community-Team/Cancer";

const Community = () => {
  const [team, setTeam] = useState("NF TEAM");

  // Geriatric disesea team modal popup js

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);


  // Cancer team modal popup js

  const toggleModal1 = () => {
    setIsOpens(!isOpens);
  };
  const [isOpens, setIsOpens] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setIsOpens(false);
  };

  return (
    <section className="community-container">
      <h2 className="community-heading">Empowering Health and Wellness</h2>
      <p className="community-description">
        Empower yourself with the information you need to make informed
        decisions and lead a healthier, happier life. Choose your area of
        interest and embark on a journey towards improved well-being.
      </p>

      <div className="community-teams">
        <button
          onClick={() => {
            setTeam("NF TEAM");
            document
              .querySelector(".information-container")
              .scrollIntoView({ behavior: "smooth" });
            console.log(document.querySelector(".information-container"));
          }}
          className={
            team === "NF TEAM"
              ? "community-team-btn focus"
              : "community-team-btn"
          }
        >
          Neurofibromatosis (NF) HUB


        </button>

        <button
        onClick={toggleModal}
        
          className={
            team === "Geriatric Disease Team"
              ? "community-team-btn focus"
              : "community-team-btn"
          }
        >
          Geriatric Disease Team <p className="coming-soon-p">(Coming soon)</p>
        </button>

        <button
        onClick={toggleModal1}
          // onClick={() => {
          //   setTeam("Cancer Team");
          //   document.querySelector("#UnderConst-wrapper").style.display =
          //     "flex";
          // }}
          className={
            team === "Cancer Team"
              ? "community-team-btn focus"
              : "community-team-btn"
          }
        >
          Cancer Team <p className="coming-soon-p">(Coming soon)</p>
        </button>
      
      </div>

       {/* MODAL POPUP FOR GERIATRIC TEAM */}

       <div>
        {isOpen && (
          <Geriatric closeModal={closeModal} />
        )}
      </div>

      {/* MODAL POPUP FOR CANCER TEAM */}

      <div>
        {isOpens && (
          <Cancer closeModal={closeModal} />
        )}
      </div>

    </section>
  );
};

export default Community;
