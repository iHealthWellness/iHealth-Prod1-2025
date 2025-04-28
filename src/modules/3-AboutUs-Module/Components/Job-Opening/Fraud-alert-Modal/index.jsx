import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import icon from "src/Assets/Images/Hiring.jpg"; 
import closeIcon from "src/Assets/Images/close-button-2.png";
import logo from "src/Assets/Images/logo1.svg";

const FraudAlertModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(true); 

    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    useEffect(() => {
      // Prevent scrolling when modal is open
      if (isModalOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
  
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isModalOpen]);
  
    if (!isModalOpen) return null;
  
    return (
      <div className="container openings-tab">
        <div className={`${styles.jctHolder} ${styles.containerModalopen}`}>
          <div className={styles.containerModalopen}>
            <div className={styles.modal}>
              <img
                className={styles.closeIcon}
                src={closeIcon}
                onClick={closeModal}
                alt="Close"
              />
              <div className={styles.header}>
              <img className={styles.logo} src={logo} alt="" />
                <h2 className={`${styles.foundationName} SN-D-H2-32`}>Disclaimer and Fraud Alert</h2>
              </div>
              <div className={`${styles.mainParagraph} SN-D-T-M-P-16`}>
                <p>
                  At iHealth and Wellness, we are deeply committed to transparency and integrity in our recruitment process. Please note that all current opportunities within our organization are volunteer roles.
                </p>
                <p>
                  We ensure every volunteer candidate is thoroughly screened and personally reviewed by our Founder and CEO to align with our mission and values. To avoid misinformation or potential scams, we encourage applicants to apply exclusively through our designated platforms.
                </p>
              </div>
              <div className={styles.sectionsContainer}>
                <div className={styles.section}>
                  <h2 className={`${styles.sectionTitle} SN-D-T-M-B-16`}>Fraud Warning</h2>
                  <p className={`${styles.sectionContent} SN-D-T-M-P-16`}>
                    Beware of fraudulent activities where bad actors may impersonate iHealth and Wellness using fake domain names or email addresses. All official recruitment communications will come from <a href="mailto:hr-recruiting@ihealthwellness.org">hr-recruiting@ihealthwellness.org</a>.
                  </p>
                </div>
                <div className={styles.section}>
                  <h3 className={`${styles.sectionTitle} SN-D-T-M-B-16`}>To protect yourself:</h3>
                  <ul className={`${styles.sectionContent} SN-D-T-M-P-16`}>
                    <li>Ensure all emails are sent from <a href="mailto:hr-recruiting@ihealthwellness.org">hr-recruiting@ihealthwellness.org</a>.</li>
                    <li>Verify the authenticity of emails and job postings.</li>
                    <li>Remember, we will never request payment, banking information, or sensitive personal details as part of the application process.</li>
                  </ul>
                </div>
                <div className={styles.section}>
                  <p className={`${styles.sectionContent} SN-D-T-M-P-16`}>
                    If you come across suspicious communications or have concerns, please contact us immediately at <a href="mailto:hr-recruiting@ihealthwellness.org">hr-recruiting@ihealthwellness.org</a>.
                  </p>
                </div>
                <p className={`${styles.sectionContent} SN-D-T-M-P-16`}>
                Thank you for helping us maintain a safe and trustworthy recruitment process.
              </p>
              </div>
              
              <button
                className={`${styles.closeButton} SN-D-T-M-B-16`}
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FraudAlertModal;