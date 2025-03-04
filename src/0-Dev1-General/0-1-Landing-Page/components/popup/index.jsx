import React, { useState, useEffect } from "react";
import styles from "./popup.module.css";
import beAHero from "src/Assets/Images/be-a-hero.png";
import popupLabel from "src/Assets/Images/popup-label.svg";
import { donateLinkUrl } from "src/environment/config";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";



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



const Popup = () => {

      const isMobile = useMediaQuery("(max-width: 480px)"); 
      const [exitModalOpen, setExitModalOpen] = useState(false)
      const [selectedLink, setSelectedLink] = useState("")
      const [isOpen, setIsOpen] = useState(() => {
            const popupShown = window.sessionStorage.getItem('popupShown');
            return popupShown !== 'true'; 
        });
    
      
     const link = donateLinkUrl;
      
      const handleLinkClick = (e, link) => {
        e.preventDefault()
        setSelectedLink(link)
        setExitModalOpen(true)
      }
    
      const handleConfirmExit = (link) => {
        setExitModalOpen(false)
        window.open(link, '_blank')
        window.sessionStorage.setItem('popupShown', 'true');
        setIsOpen(false);
      }

      const cancelExit = () => {
        setExitModalOpen(false);
        window.sessionStorage.setItem('popupShown', 'true');
        setIsOpen(false);
      }
    
    
    const handleClose = () => {
        window.sessionStorage.setItem('popupShown', 'true');
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className={styles.container}>
            <div className={styles.Popup}>
                <button className={styles.closeButton} onClick={handleClose}>
                    <svg
                        className={styles.closeIcon}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                </button>
                <div className={styles.PopupContent}>
                    <h1>Make an Impact Today!</h1>
                    <p>
                        If you've got the strength to give, help those facing complex diseases with insufficient care and resources:
                    </p>
                  {isMobile ? 
                   ( <Link
                    to='/donate'
                    onClick={handleClose} 
                    // rel="noopener noreferrer"
                    >  Click Here and Give Now! </Link> )
                    :
                  (  <a
                        href={donateLinkUrl}
                        // onClick={handleClose}
                        onClick={(e) => handleLinkClick(e, link)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >  Click Here and Give Now!</a>)
                  }
                    <img className={styles.popup_poster} src={beAHero} alt="" />
                </div>
                <img className={styles.label} src={popupLabel} alt="Label" />
            </div>
            <ExitConfirmationModal 
                isOpen={exitModalOpen}
                onClose={cancelExit}
                onConfirm={handleConfirmExit}
                link={selectedLink}
            />
        </div>
    );
};

export default Popup;
