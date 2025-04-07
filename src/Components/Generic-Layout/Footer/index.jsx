import React, { useState } from "react";
import { BASE_URL } from "../../../environment/config";
import axios from "axios";
import styles from "./index.module.css";

import FooterLinkCard from "./FooterLinkCard";
import SocialMedia from "src/Constants/HomePage/SocialMedia.js";
import FooterLink from "src/Constants/FooterLink.js";
import LanguageBar from "./LanguageBar/LanguageBar";
import SasikaQuote from "src/Assets/Images/sasika-quote.png";


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




const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState("");
  const [selectedLink, setSelectedLink] = useState("");
  const [exitModalOpen, setExitModalOpen] = useState(false);  
  const [isOpen, setIsOpen] = useState(() => {
    const popupShown = window.sessionStorage.getItem("popupShown");
    return popupShown !== "true";
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const subscribeData = {
      email: email,
    };

    axios
      .post(`${BASE_URL}/api/v1/subscription/`, subscribeData)
      .then((response) => {
        setLoading(false);

        if (response.status === 201) {
          setSubscribeStatus("Subscribed!");
          setTimeout(() => {
            alert("Thanks for Subscribing!");
          }, 1000);
          setEmail("");
        } else {
          setSubscribeStatus("Oops! Form not submitted");
        }
      })
      .catch((error) => {
        setLoading(false);
        setSubscribeStatus("Oops! Already subscribed!");
      });
  };

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setSelectedLink(link);
    setExitModalOpen(true);
  };

  const handleConfirmExit = (link) => {
    setExitModalOpen(false);
    window.open(link, "_blank");
    window.sessionStorage.setItem("popupShown", "true");
    setIsOpen(false);
  };

  const cancelExit = () => {
    setExitModalOpen(false);
    window.sessionStorage.setItem("popupShown", "true");
    setIsOpen(false);
  };

  const handleClose = () => {
    window.sessionStorage.setItem("popupShown", "true");
    setIsOpen(false);
  };

  return (
    <footer className={styles.container}>
      <div className={styles.top}>
        <div className={styles.contact}>
          <div className={styles.addressBlock}>
            <p className={`${styles.addressHeading} SN-D-T-M-B-16`}>
              iHealth and Wellness Foundation, Inc.
            </p>
            <p className={`${styles.address} SN-D-T-M-P-16`}>
              New York, NY, USA.
            </p>
          </div>
          <div className={styles.subscribeBlock}>
            <p className={`${styles.subscribeHeading} SN-D-T-M-P-16`}>
              STAY INFORMED:
            </p>
            <div className={styles.subscribeBar}>
              <form onSubmit={handleSubmit} className={styles.subscriptionForm}>
                <input
                  className={styles.subscribeInput}
                  placeholder="Your email here"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button className={styles.subscribeBtn} type="submit">
                  {loading ? "Loading..." : subscribeStatus || "Subscribe"}
                </button>
              </form>
              {loading && <div className={styles.loadingSpinner}></div>}
            </div>
          </div>
          <div className={styles.followBlock}>
            <p className={`${styles.followHeading} SN-D-T-M-P-16`}>
              FOLLOW US:
            </p>
            <div className={styles.followIcons}>
              {SocialMedia.map((ele, idx) => {
                return (
                  <a
                    className={styles.followLink}
                    target="_blank"
                    href={ele.url}
                    onClick={(e) => handleLinkClick(e, ele.url)}
                    key={`social-icon-${idx}`}
                  >
                    <img
                      className={styles.followIcon}
                      src={ele.icon}
                      loading="lazy"
                      alt="Social Media Icon"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.linksBlock}>
          {FooterLink.map((ele, idx) => (
            <FooterLinkCard linkCard={ele} key={`footer-link-${idx}`} />
          ))}
        </div>
        <div className={styles.sasikaQuote}>
          <img src={SasikaQuote} alt="quote from CEO/CTO" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={`${styles.termsCenter} SN-M-P-16`}>
          <p className={styles.terms}>
            @2023 iHealth and Wellness Foundation, Inc. All rights reserved.
            iHealth and Wellness Foundation is a 501(c)(3) Nonprofit
            Organization. EIN: 93-1567099
          </p>
        </div>
        <div className={styles.languageSelectCont}>
          <LanguageBar />
        </div>
      </div>
      <ExitConfirmationModal
        isOpen={exitModalOpen}
        onClose={cancelExit}
        onConfirm={handleConfirmExit}
        link={selectedLink}
      />
    </footer>
  );
};

export default Footer;
