import { useState } from "react";

import "./index.css";

const Community = () => {
  const [team, setTeam] = useState("NF TEAM");

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
          onClick={() => {
            setTeam("Geriatric Disease Team");
            document.querySelector("#UnderConst-wrapper").style.display =
              "flex";
          }}
          className={
            team === "Geriatric Disease Team"
              ? "community-team-btn focus"
              : "community-team-btn"
          }
        >
          Geriatric Disease Hub <p className="coming-soon-p">(Coming soon)</p>
        </button>
        <button
          onClick={() => {
            setTeam("Cancer Team");
            document.querySelector("#UnderConst-wrapper").style.display =
              "flex";
          }}
          className={
            team === "Cancer Team"
              ? "community-team-btn focus"
              : "community-team-btn"
          }
        >
          Cancer Hub <p className="coming-soon-p">(Coming soon)</p>
        </button>
      </div>
    </section>
  );
};

export default Community;
