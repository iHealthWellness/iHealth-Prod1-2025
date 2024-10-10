import React, { useState, useEffect } from "react";
import styles from "./popup.module.css";
import beAHero from "src/Assets/Images/be-a-hero.png"
import popupLabel from "src/Assets/Images/popup-label.svg"

const Popup = ({ isOpen, onClose }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        handleResize(); // Check on initial render

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (!isOpen || !isMobile) return null;

    const handleClose = () => {
        onClose();
    };

    return (
        <div className={styles.container}>
            {isOpen && (
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
                        <h1>
                            Make an Impact Today!
                        </h1>
                        <p>
                            If you've got the strength to give, help those facing complex diseases with insufficient care and resources:
                        </p>
                        <a
                            href="https://www.paypal.com/donate/?hosted_button_id=VE7E4C2UBA3EN"
                            target="_blank"
                        >
                            Click Here and Give Now!
                        </a>
                        <img src={beAHero} alt="" />
                    </div>
                    <img className={styles.label} src={popupLabel} />
                </div>
            )}
        </div>
    );
};

export default Popup;