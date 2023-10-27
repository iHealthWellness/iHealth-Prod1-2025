import "./index.css";
import doctor from "src/Assets/Images/doctor.jpg";
import React from "react";

function index() {
  return (
    <div>
      <h1 className="causes-heading">Causes and Genetic Aspects</h1>
      <div className="container">
        <div className="overlay">
          <p>
            The primary cause of neurofibromatosis is genetic mutations. NF1,
            NF2, and Schwannomatosis <br /> can be inherited from a parent who
            carries the mutated gene, or they can occur spontaneously deu
            <br /> to new mutations in the affected person. Individuals with NF
            have a 50% chance of passing the condition on to their children.
          </p>
          <p>
            Genetic testing can identify mutations assoiated with specific types
            of NF, aiding in early
            <br /> diagnosis and management. While there is no cure for NF,
            treatment focuses on managing <br /> symptoms, monitoring tumor
            growth, and providing supportive care.
          </p>
          <p>
            In conclusion, neurofibromatosis encompasses a group of genetic
            disorders the result in the <br />
            formation of tumores on nerves, leading to various health issues.
            Understanding the different typesneurofibromatosis of NF, their
            causes, and the genetic aspects involved is crucial for early
            detection, appropriate <br />
            medical intervention, and improved quality of life for affected
            individuals.
          </p>
         
        </div> <img className="doc-img" src={doctor} />
      </div>
    </div>
  );
}

export default index;
