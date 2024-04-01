import { useState } from "react";

import "./index.css";
import Geriatric from "./Community-Team/Geriatric";
import Cancer from "./Community-Team/Cancer";
import { Link } from "react-router-dom";

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

  const underConstruction = () => {
    document.querySelector("#UnderConst-wrapper").style.display = "flex";
  };

  return (
    <section className="community-container">
      <h2 className="community-heading">We give power to you, the patient</h2>
      <p className="community-description">
        Find all the information and resources you need to make informed
        decisions about your health and live your best life.
      </p>

      <aside>
        <section className="new-disease-card disease-green">
          <h1 className="large-disease-title">
            NF
            <p className="disease-before-content">iHealth</p>
          </h1>
          <button>
            <a href="#Information">Hub</a>
          </button>
        </section>
        <section className="new-disease-card disease-purple">
          <h1>
            Cancer
            <p className="disease-before-content">iHealth</p>
            <p>Hub</p>
          </h1>
          <button onClick={underConstruction}>Coming soon</button>
        </section>
        <section className="new-disease-card disease-yellow">
          <h1>
            Geriatric
            <p className="disease-before-content">iHealth</p>
            <p>Hub</p>
          </h1>
          <button onClick={underConstruction}>Coming soon</button>
        </section>
      </aside>

      {/* <div className="community-teams">
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
          // onClick={() => {
          //   setTeam("Geriatric Disease Team");
          //   document.querySelector("#UnderConst-wrapper").style.display =
          //     "flex";
          // }}
          onClick={toggleModal}
          className={
            team === "Geriatric Disease Team"
              ? "community-team-btn focus"
              : "community-team-btn"
          }
        >
          Geriatric Disease Hub <p className="coming-soon-p">(Coming soon)</p>
        </button>
        <button
          // onClick={() => {
          //   setTeam("Cancer Team");
          //   document.querySelector("#UnderConst-wrapper").style.display =
          //     "flex";
          // }}
          onClick={toggleModal1}
          className={
            team === "Cancer Team"
              ? "community-team-btn focus"
              : "community-team-btn"
          }
        >
          Cancer Hub <p className="coming-soon-p">(Coming soon)</p>
        </button>
      </div> */}
      {/* MODAL POPUP FOR GERIATRIC TEAM */}

      <div>{isOpen && <Geriatric closeModal={closeModal} />}</div>

      {/* MODAL POPUP FOR CANCER TEAM */}

      <div>{isOpens && <Cancer closeModal={closeModal} />}</div>
    </section>
  );
};

export default Community;
