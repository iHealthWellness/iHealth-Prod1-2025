import { useState } from "react";

import "./index.css";
import Geriatric from "./Community-Team/Geriatric";
import Cancer from "./Community-Team/Cancer";
import CancerCard from "src/Assets/Images/cancer-card.png";
import GeriatricCard from "src/Assets/Images/geriatric-card.png";
import NfCard from "src/Assets/Images/nf-card.png";

const Community = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  const closeModal = () => {
    setOpenModal(null);
    setOpenModal(null);
  };

  return (
    <section className="community-container">
      <h2 className="community-heading">We give power to you, the patient</h2>
      <p className="community-description">
        Find all the information and resources you need to make informed
        decisions about your health and live your best life. Choose your area of
        interest and take the next step in your wellness journey.
      </p>
      <aside>
        <a href="#Information">
          <img className="nf-first-image" src={NfCard} alt="nf card" />
        </a>
        <img
          src={CancerCard}
          alt="cancer card"
          // onClick={() => handleOpenModal("Cancer")}
        />
        <img
          src={GeriatricCard}
          alt="geriatric card"
          // onClick={() => handleOpenModal("Geriatric")}
        />
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
      {openModal === "Geriatric" && <Geriatric closeModal={closeModal} />}
      {openModal === "Cancer" && <Cancer closeModal={closeModal} />}
    </section>
  );
};

export default Community;
