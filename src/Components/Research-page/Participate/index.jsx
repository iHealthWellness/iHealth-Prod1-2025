import React from "react";
import "./index.css";
import Research5 from "src/Assets/Images/Research-5.png";

const section6 = () => {
  return (
    <div id="participate">
      <div className="participate">
        <h1 className="participate1">
          Participate in Research for Neurofibromatosis: Making a Difference
        </h1>
        <div className="components">
          <p className="components-p">
            Neurofibromatosis (NF) is a complex genetic disorder that affects
            thousands of individuals worldwide. If you or a loved one is
            affected by NF, you have an opportunity to actively contribute to
            the advancement of knowledge and the development of new treatments
            by participating in research studies. Your participation can make a
            real difference in the lives of individuals with NF, both today and
            in the future.
          </p>
          <img className="components-img" src={Research5} alt="" />
        </div>
      </div>
      <div className="participating">
        <h2>
          <span className="participating-span">
            Participating in NF research offers several benefits:
          </span>
        </h2>

        <p className="participating-p">
          <span className="participating-span2">
            1.Advancing Scientific Knowledge
          </span>{" "}
          By participating in research studies, you contribute to the growing
          body of scientific knowledge about NF. Researchers rely on the
          participation of individuals like you to gain insights into the
          causes, progression, and management of NF.
        </p>
        <p className="participating-p">
          <span className="participating-span2">
            2.Improved Treatment Options
          </span>{" "}
          Your involvement in research can lead to the development of better
          treatment options for NF. Researchers and scientists are constantly
          working to identify new therapies, medications, and interventions that
          can enhance the quality of life for individuals with NF.
        </p>
        <p className="participating-p">
          <span className="participating-span2">
            3.Supporting Future Generations
          </span>{" "}
          Your participation helps future generations affected by NF. The data
          and information gathered through research studies pave the way for
          improved understanding, earlier diagnosis, and more effective
          treatments.
        </p>
        <p className="participating-p">
          <span className="participating-span2">
            4.Empowering the NF Community
          </span>{" "}
          Participating in research provides an opportunity to connect with
          others in the NF community. Through engagement with researchers,
          healthcare professionals, and fellow participants, you can find
          support, share experiences, and contribute to a network of
          understanding and empathy.
        </p>
      </div>
    </div>
  );
};

export default section6;
