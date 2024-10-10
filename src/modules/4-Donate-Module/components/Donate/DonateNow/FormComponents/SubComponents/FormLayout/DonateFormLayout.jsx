import { createContext, useContext, useState } from "react";
import { DonateContext, DonateContextProvider } from "../../../DonateContext";
import communitylogo from "src/Assets/Images/logo1.svg";
import "./DonateFormLayout.css"; 






const DonateController = ({children}) => {

    const { step, currentStep, isOpen, toggleModal } = useContext(DonateContext);

    return(
        <>
            <div className="jct-holder1" >
                <div className="mod2">
                    <div className="modal-close-btn">
                        <button aria-label="close" onClick={toggleModal}>
                        <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L17 17M17 1L1 17" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </button>
                    </div>
                    <div className="community__logo">
                    <img src={communitylogo} alt="ihealth-logo" />
                    </div>
                    {children}
                </div> 
            </div>
    </>
    )
}
export default DonateController;