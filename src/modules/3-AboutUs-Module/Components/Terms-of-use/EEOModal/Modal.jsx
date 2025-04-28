import React, { useState } from 'react';
import styles from './EEO.module.css';

  /*EEO Inner content logic*/
  import stylesEEOContent from "src/Components/Terms-of-use/EEOModal/EEO.module.css";
  import plusIcon from "src/Assets/Icons/plus.png"; 
  import minusIcon from "src/Assets/Icons/minus.png";
  import closeIcon from "src/Assets/Images/close-button-2.png"; 
  import logo from "src/Assets/Images/logo1.svg";



  const sections = [
    "Equal Opportunity",
    "Non-Discrimination and Inclusivity",
    "Reporting and Resolution",
    "Accountability",
    "Compliance with Applicable Laws",
    "Policy Review",
    "Contact Information",
  ];
  let sectionsParagraph = {
    "Equal Opportunity": `The Foundation is an equal opportunity organization. We do not discriminate on the basis of race, color, religion, sex, gender identity or expression, sexual orientation, national origin, disability, age, or any other characteristic protected by applicable law. We provide equal opportunities for individuals to volunteer and participate in our programs and activities, ensuring a welcoming and inclusive environment for all. We expect all employees, volunteers, and stakeholders to adhere to this policy and contribute to a positive and inclusive atmosphere.`,
    "Non-Discrimination and Inclusivity": `We are dedicated to creating a volunteer community that values and respects the individuality of each volunteer. We celebrate diversity in all its forms and recognize the positive impact it has on our mission and organizational culture. Discrimination, harassment, or any form of unfair treatment based on protected characteristics is strictly prohibited. 
    `,
    "Reporting and Resolution": `Any concerns or complaints regarding violations of this policy should be promptly reported to the Human Resources department or an appropriate designated individual. All reports will be treated confidentially, and appropriate measures will be taken to address the situation. The Foundation is committed to protecting individuals who report violations of this policy from any form of retaliation. 
    `,
    Accountability: `All employees, volunteers, including managers and supervisors, share responsibility for upholding this policy and promoting a culture of equal opportunity and inclusion. Failure to comply with this policy may result in disciplinary action, up to and including termination of employment or engagement. 
    `,
    "Compliance with Applicable Laws": `The Foundation is committed to complying with all relevant federal, state, and local laws pertaining to equal opportunity, non-discrimination, and volunteer engagement. 
    `,
    "Policy Review": `As an early-stage nonprofit organization, we understand the importance of continuous improvement. We will periodically review and update this EEO Policy to ensure its alignment with our commitment to diversity and inclusion, as well as with changing legal requirements and organizational growth. 
    `,
    "Contact Information": `For inquiries or concerns regarding this EEO Policy, please contact:legal-team@ihealthwellness.one.
    `,
  };
  


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen); // Toggle function

  /*EEO Inner content logic*/
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section],
    }));
  };

  /*EEO Inner content logic*/
  return (
    <>
        <button className={`${styles.buttonEEO} SN-D-T-M-B-16`} onClick={toggleModal}>Equal Opportunity Policy</button>
        {isModalOpen && (
          <div className={`${styles.jctHolder} ${isModalOpen ? styles.containerModalopen : ''}`}>

          <div className={isModalOpen ? styles.containerModalopen : styles.container}>
            <div className={stylesEEOContent.modal}>
            <img className={stylesEEOContent.closeIcon} src={closeIcon} onClick={toggleModal} alt=""/>
          <div className={stylesEEOContent.header}>
            <img className={styles.logo} src={logo} alt="" />
            <h1 className={`${stylesEEOContent.foundationName} SN-D-H1-40`}>
              iHealth and Wellness Foundation, Inc.
            </h1>
            <h2 className={`${stylesEEOContent.subheader} SN-D-H2-32`}>Equal Opportunity Policy</h2>
            <p className={`${stylesEEOContent.date} SN-D-T-M-P-16`}>Effective: May 23, 2023</p>
          </div>
          <div className={`${stylesEEOContent.mainParagraph} SN-D-T-M-P-16`}>
            <p>
              This EEO Policy applies to all volunteers and participants involved
              with iHealth and Wellness Foundation, Inc.
            </p>
            <p>
              iHealth and Wellness Foundation, Inc. ("the Foundation") is dedicated
              to creating an inclusive and diverse community, where everyone is
              treated with respect and dignity. As an early-stage nonprofit
              organization primarily staffed by volunteers, we are committed to
              providing equal opportunities to all individuals regardless of their
              background, and we embrace the unique perspectives that volunteers
              bring to our mission.
            </p>
          </div>
          <div className={stylesEEOContent.sectionsContainer}>
          {sections.map((section) => (
            <div key={section} className={stylesEEOContent.section}>
              <div className={stylesEEOContent.sectionTitleContainer}>
              <h3 className={`${stylesEEOContent.sectionTitle} SN-D-T-M-B-16`}>{section}</h3>
              <button
                className={stylesEEOContent.toggleButton}
                onClick={() => toggleSection(section)}
              >
                <img
                  src={openSections[section] ? minusIcon : plusIcon}
                  alt="Toggle"
                />
              </button>
              </div>
              {openSections[section] && (
                <p className={`${stylesEEOContent.sectionContent} SN-D-T-M-P-16`}>
                  {sectionsParagraph[section]}
                </p>
              )}
            </div>
          ))}
          </div>
          <button className={`${stylesEEOContent.closeButton} SN-D-T-M-B-16`}  onClick={toggleModal}>Close</button>
        </div>
            {/*EEO Inner content logic*/}
          </div>
          </div>
        )}
      {/* </ModaLayout> */}
    </>
  );
}

export default App;
