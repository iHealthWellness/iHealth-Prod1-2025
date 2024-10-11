import React, { useState, useContext, useEffect } from "react";
import { DonateContext } from "../../DonateContext";
import FormButton from "../SubComponents/FormButton/FormButton.jsx";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import "./DonateNowReviewInfo.css"
import { Checkbox } from "@mui/material";
import DonorInfoForm from "../SubComponents/InformationForm/DonorInfoForm";
import CheckoutForm from "../../Stripe/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
// import { defineConfig } from 'vite';
//import dotenv from 'dotenv';

const DonateNowReviewInfo = () => {

  const {     
    nextStep,
    donorInfo,
    setDonorInfo,
    donationInfo,
    setDonationInfo,
    currentStep,
    setCurrentStep,
    isOpen,
    toggleModal,
    errors,
    setErrors,
    isLoading1,
    setIsLoading1,
    handleSubmit,
    isDisabled } = useContext(DonateContext);

    const [reviewState, setReviewState] = useState(null);


    const toggleSection = (e) => {
      if(reviewState === e.target.value) {
        setReviewState(null);
      }else if (e.target.value === "contact"){
        setReviewState("contact")
      } else{
        setReviewState("payment")
      }
    }


  return (
<>
      <section className="donatereview-section-wrap">
        <div className="donate-review-form-heading1">
          Review Information
        </div>
        <div className="donatereview-main-cont">

          <div className="donatereview-row">
              <div className="donatereview-row-items">
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 3C8.09625 3 2.5 8.59625 2.5 15.5C2.5 22.4037 8.09625 28 15 28C21.9037 28 27.5 22.4037 27.5 15.5C27.5 8.59625 21.9037 3 15 3Z" stroke="#07235B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.33594 23.4325C5.33594 23.4325 8.12219 19.875 14.9972 19.875C21.8722 19.875 24.6597 23.4325 24.6597 23.4325M14.9972 15.5C15.9917 15.5 16.9456 15.1049 17.6488 14.4017C18.3521 13.6984 18.7472 12.7446 18.7472 11.75C18.7472 10.7554 18.3521 9.80161 17.6488 9.09835C16.9456 8.39509 15.9917 8 14.9972 8C14.0026 8 13.0488 8.39509 12.3455 9.09835C11.6423 9.80161 11.2472 10.7554 11.2472 11.75C11.2472 12.7446 11.6423 13.6984 12.3455 14.4017C13.0488 15.1049 14.0026 15.5 14.9972 15.5Z" stroke="#07235B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Contact Information</span>
              </div>
              {reviewState === "contact" ? (
                <button type="button" value="contact" onClick={(e)=>toggleSection(e)}>Edit</button>
              ) : (
              <button type="button" value="contact" onClick={(e)=>toggleSection(e)}>Review</button>
              )}
          </div>

          {reviewState === "contact" ? (
            <DonorInfoForm/>
          ) : (null)} 
          
          <div className="donatereview-row">
              <div className="donatereview-row-items">
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 16.125C13.8397 16.125 12.7269 16.5859 11.9064 17.4064C11.0859 18.2269 10.625 19.3397 10.625 20.5C10.625 21.6603 11.0859 22.7731 11.9064 23.5936C12.7269 24.4141 13.8397 24.875 15 24.875C16.1603 24.875 17.2731 24.4141 18.0936 23.5936C18.9141 22.7731 19.375 21.6603 19.375 20.5C19.375 19.3397 18.9141 18.2269 18.0936 17.4064C17.2731 16.5859 16.1603 16.125 15 16.125ZM13.125 20.5C13.125 20.0027 13.3225 19.5258 13.6742 19.1742C14.0258 18.8225 14.5027 18.625 15 18.625C15.4973 18.625 15.9742 18.8225 16.3258 19.1742C16.6775 19.5258 16.875 20.0027 16.875 20.5C16.875 20.9973 16.6775 21.4742 16.3258 21.8258C15.9742 22.1775 15.4973 22.375 15 22.375C14.5027 22.375 14.0258 22.1775 13.6742 21.8258C13.3225 21.4742 13.125 20.9973 13.125 20.5Z" fill="#07235B"/>
                  <path d="M21.9075 6.89547L17.9338 1.32422L3.3225 12.9967L2.5125 12.988V13.0005H1.875V28.0005H28.125V13.0005H26.9225L24.53 6.00172L21.9075 6.89547ZM24.2812 13.0005H11.7463L21.0825 9.81797L22.985 9.20922L24.2812 13.0005ZM19.4375 7.73797L9.8 11.023L17.4325 4.92547L19.4375 7.73797ZM4.375 23.2117V17.7867C4.90237 17.5998 5.38138 17.2976 5.77712 16.9021C6.17285 16.5066 6.47533 16.0277 6.6625 15.5005H23.3375C23.5246 16.0279 23.827 16.507 24.2228 16.9027C24.6185 17.2984 25.0975 17.6009 25.625 17.788V23.213C25.0975 23.4001 24.6185 23.7025 24.2228 24.0982C23.827 24.494 23.5246 24.973 23.3375 25.5005H6.665C6.47773 24.9726 6.17496 24.4931 5.77877 24.0972C5.38259 23.7012 4.903 23.3987 4.375 23.2117Z" fill="#07235B"/>
                </svg>
                <span>Donation Information</span>
              </div>
              {reviewState === "payment" ? (
                <button type="button" value="payment" onClick={(e)=>toggleSection(e)}>Edit</button>
              ) : (
              <button type="button" value="payment" onClick={(e)=>toggleSection(e)}>Review</button>
              )}      
          </div>

          {reviewState === "payment" ? (
            <>
              <div className="donate-review-wrap">
                <div className="donate-review-cont">
                  <div className="donate-review-item">
                    <label htmlFor="payment-type">Donation Type</label>
                    <select
                     className="donate-review-item-input"
                     defaultValue={donationInfo.isOneTimeSelected ? "One-Time" : "Recurring"}
                     >
                      <option>One-Time</option>
                      <option>Recurring</option>
                    </select>
                  </div>
                  <div className="donate-review-item"> 
                    <label htmlFor="amount">Amount</label>
                    <input className="donate-review-item-input" type="text" defaultValue={donationInfo.amountSelected}></input>
                  </div>
                </div>
              </div>
            </>
          ) : (null)}

        </div>

      <FormButton disabled={isDisabled} text="Submit" type="sumbit" onClick={(e) => {setCurrentStep(nextStep())}}/>
        </section>

    </>
  );
};

export default DonateNowReviewInfo;