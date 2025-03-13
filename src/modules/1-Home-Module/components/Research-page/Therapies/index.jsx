import React, { useState } from "react";
import styles from "./index.module.css";
import useSlideInAnimationRight from "src/hooks/useSlideInAnimationRight";



const ExitConfirmationModal = ({ isOpen, onClose, onConfirm, link }) => {
  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.confirmationModal}>
        {/* <h3>You are about to leave the website. Do you want to continue?</h3> */}
        <p>You are about to leave the website. Do you want to continue?</p>
        <div className={styles.modalButtons}>
          <button className={styles.confirmButton} onClick={() => onConfirm(link)}>
            Continue
          </button>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}


const Section3 = () => {
  useSlideInAnimationRight(styles.slideInText, styles.active);

  
  const [exitModalOpen, setExitModalOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setSelectedLink(link);
    setExitModalOpen(true);
  };

  const handleConfirmExit = (link) => {
    setExitModalOpen(false);
    window.open(link, "_blank");
  };

  const cancelExit = () => {
    setExitModalOpen(false);
  };

  return (
    <>
      <div
        id="clinical"
        className={`${styles.slideInText} ${styles.mainSection}`}
      >
        <header>
          <h2 className="D-H1-32">Clinical Drug Therapies</h2>
        </header>
        <section>
          <h3 className="D-H3-24">
            Neurofibromatosis (NF) and its related symptoms are often managed
            using various clinical drug therapies. The following examples
            highlight some of the treatment options available:
          </h3>
          <h2 className="D-H3-24">
            Selumetinib for Children With Neurofibromatosis Type 1
          </h2>
          <p className="D-P-20">
            Selumetinib is a highly promising drug utilized in the treatment of
            NF1-related plexiform neurofibromas, both in children and adults. By
            inhibiting the activity of the MEK protein, which plays a crucial role
            in the development of neurofibromas, Selumetinib has demonstrated
            remarkable efficacy. Numerous clinical trials have been conducted to
            study its effects, and the results have been incredibly encouraging.
            Patients undergoing treatment with Selumetinib have witnessed
            significant tumor shrinkage and noticeable improvements in their
            associated symptoms. This breakthrough holds great potential for
            enhancing the quality of life for individuals affected by NF1.
          </p>
          <a
            href="https://jamanetwork.com/journals/jama/article-abstract/2766145"
            target="_blank"
            rel="noopener noreferrer"
            className="D-P-20"
            onClick={(e) =>
              handleLinkClick(e, "https://jamanetwork.com/journals/jama/article-abstract/2766145")
            }
          >
            Source: https://jamanetwork.com/journals/jama/article-abstract/2766145
          </a>
        </section>
      </div>
      <ExitConfirmationModal
        isOpen={exitModalOpen}
        onClose={cancelExit}
        onConfirm={handleConfirmExit}
        link={selectedLink}
      />
    </>
  );
};

export default Section3;
