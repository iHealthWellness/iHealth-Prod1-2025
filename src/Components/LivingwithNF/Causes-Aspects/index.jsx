import "./index.css";
import doctor from "src/Assets/Images/doctor.jpg";
import React from "react";

function index() {
  return (
    <div className="cause-container">
      <h1 className="causes-heading">Causes and Genetic Aspects:</h1>
      <div className="img-container">
        <div className="overlay">
          <p>
          The primary cause of neurofibromatosis is genetic mutations. NF1, NF2, and Schwannomatosis can be inherited from a parent who carries the mutated gene, or they can occur spontaneously due to new mutations in the affected person. Individuals with NF have a 50% chance of passing the condition on to their children. <br /> <br />
          </p>
          <p>
          Genetic testing can identify mutations associated with specific types of NF, aiding in early diagnosis and management. While there is no cure for NF, treatment focuses on managing symptoms, monitoring tumor growth, and providing supportive care. <br />
            <br />
          </p>
          <p>
          In conclusion, neurofibromatosis encompasses a group of genetic disorders that result in the formation of tumors on nerves, leading to various health issues. Understanding the different types of NF, their causes, and the genetic aspects involved is crucial for early detection, appropriate medical intervention, and improved quality of life for affected individuals.
          </p>
        </div>{" "}
        <img className="doc-img" src={doctor} />
      </div>
    </div>
  );
}

export default index;
