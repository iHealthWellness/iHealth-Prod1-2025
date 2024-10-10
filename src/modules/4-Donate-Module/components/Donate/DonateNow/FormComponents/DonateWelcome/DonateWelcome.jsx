import React, { useState, useContext } from "react";
import axios from "axios";
import "./DonateWelcome.css";
import { DonateContext } from "../../DonateContext";
import payNowBtn from "src/Assets/Icons/Pay-Now.png"

const DonateNowLogin = () => {
    
    const { setCurrentStep, isOpen, toggleModal, setIsGuest } = useContext(DonateContext);

  const handleClick = (e) => {
    if(e.target.value === "login"){
        setCurrentStep(1);
    } else if(e.target.value === "signup"){
        console.log("Sign up btn Clicked!")
    } else {
        setIsGuest(true);
        setCurrentStep(2);
    }
  }


//   return(
//     <>
//     <div className="jct-holder">
//         <div className="mod3">
//             <div className="modal-close-btn">
//                 <button onClick={toggleModal}>
//                     <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 1L17 17M17 1L1 17" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                 </button>
//             </div>
//             <div className="donate-welcome-wrap">
//                 <div>
//                     <h1>Welcome</h1>
//                 </div>
//                 <div className="donate-welcome-text">
//                     <p>To save or make recurring donation to iHealth and wellness Foundation kindly, log in or Sign Up.</p>
//                 </div>
//                 <div className="donate-welcome-btn-cont">
//                     <button type="button" value="login" onClick={(e)=>handleClick(e)}>Log In</button>
//                     <button type="button" value="signup" onClick={(e)=>handleClick(e)}>Sign up</button>
//                 </div>
//                 <div className="donate-welcome-bottom">
//                     <div className="donate-welcome-or">
//                     <svg width="143" height="7" viewBox="0 0 143 7" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M1 3C0.723858 3 0.5 3.22386 0.5 3.5C0.5 3.77614 0.723858 4 1 4L1 3ZM137.333 3.49999C137.333 4.97275 138.527 6.16665 140 6.16665C141.473 6.16665 142.667 4.97275 142.667 3.49999C142.667 2.02723 141.473 0.833321 140 0.833321C138.527 0.833321 137.333 2.02723 137.333 3.49999ZM1 4L140 3.99999L140 2.99999L1 3L1 4Z" fill="#F8FAFC"/>
//                         <path d="M1 3C0.723858 3 0.5 3.22386 0.5 3.5C0.5 3.77614 0.723858 4 1 4L1 3ZM137.333 3.49999C137.333 4.97275 138.527 6.16665 140 6.16665C141.473 6.16665 142.667 4.97275 142.667 3.49999C142.667 2.02723 141.473 0.833321 140 0.833321C138.527 0.833321 137.333 2.02723 137.333 3.49999ZM1 4L140 3.99999L140 2.99999L1 3L1 4Z" fill="black" fillOpacity="0.2"/>
//                     </svg>
//                     <span>Or</span>
//                     <svg width="143" height="7" viewBox="0 0 143 7" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0.333333 3.5C0.333333 4.97276 1.52724 6.16667 3 6.16667C4.47276 6.16667 5.66667 4.97276 5.66667 3.5C5.66667 2.02724 4.47276 0.833333 3 0.833333C1.52724 0.833333 0.333333 2.02724 0.333333 3.5ZM142 4C142.276 4 142.5 3.77614 142.5 3.5C142.5 3.22386 142.276 3 142 3V4ZM3 4H142V3H3V4Z" fill="#F8FAFC"/>
//                         <path d="M0.333333 3.5C0.333333 4.97276 1.52724 6.16667 3 6.16667C4.47276 6.16667 5.66667 4.97276 5.66667 3.5C5.66667 2.02724 4.47276 0.833333 3 0.833333C1.52724 0.833333 0.333333 2.02724 0.333333 3.5ZM142 4C142.276 4 142.5 3.77614 142.5 3.5C142.5 3.22386 142.276 3 142 3V4ZM3 4H142V3H3V4Z" fill="black" fillOpacity="0.2"/>
//                     </svg>
//                     </div>
//                     <div className="donate-welcome-guest">
//                         <span>Donate as a </span>
//                         <button type="button" value="guest" onClick={(e)=>handleClick(e)}>Guest</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//   )


  return(
    <>
    <div className="jct-holder">
        <div className="mod3">
            <div id="guest-cont">
                <div className="donate-welcome-wrap">
                    <div>
                        <h1>Welcome</h1>
                    </div>
                 <div className="donate-welcome-text">
                     <p>Donate as <span className="span-blue">Guest</span></p>
                 </div>
            <div className="modal-close-btn">
                <button onClick={toggleModal}>
                    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L17 17M17 1L1 17" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

                             <div  className="donate-welcome-btn-cont">
                         <button type="button" value="guest" onClick={(e)=>handleClick(e)}>
                            <img src={payNowBtn} alt="Pay Now"/>
                         </button>
                     </div>
                     </div>
                     </div>
                     </div>
                     </div>
                     </>
  )
}

export default DonateNowLogin;