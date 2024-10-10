import React, { useEffect, useState, useContext } from "react";
import {
  CardElement,
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { Card } from "@mui/material";
import axios from "axios";
import { DonateContext } from "../DonateContext";
import FormButton from "../FormComponents/SubComponents/FormButton/FormButton"
import "./Payment.css"
import ErrorModal from "./ErrorModal";
import payNowBtn from "src/Assets/Icons/Pay-Now.png";
import DonateReturn from "../FormComponents/DonateReturn/DonateReturn.jsx"

export default function CheckoutForm() {

  const {     
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
    nextStep,
    setSuccess,
   } = useContext(DonateContext);


  const stripe = useStripe();
  const elements = useElements();


  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorModal, setErrorModal] = useState(false);


  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}`,
      },
      redirect: "if_required",
    });

      //   // This point will only be reached if there is an immediate error when
  //   // confirming the payment. Otherwise, your customer will be redirected to
  //   // your `return_url`. For some payment methods like iDEAL, your customer will
  //   // be redirected to an intermediate site first to authorize the payment, then
  //   // redirected to the `return_url`.

    if (error) {
      setMessage(error.message);
      setErrorModal(true);
      console.log(error.message)
    } else {
      setSuccess(true)
    }

    setIsProcessing(false);
  };


  const paymentElementOptions = {
    layout: "tabs"
  }


  return (
    <>
    <form id="payment-form" onSubmit={handlePaymentSubmit}>

      <PaymentElement options={paymentElementOptions} id="payment-element"/>
      <div className="payment-btn-cont">
      {/* <button disabled={isProcessing|| !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing? <div className="loader"></div> :
           <button  type="sumbit" onClick={(e) => {handlePaymentSubmit(e)}}>
            <img src={payNowBtn} alt="Pay Now"/>
            </button>}
        </span>
      </button> */}
          <button disabled={isProcessing|| !stripe || !elements} id="submit">
          <span id="button-text">
          {isProcessing? <div className="loader"></div> : <FormButton text="Submit" type="sumbit" onClick={(e) => {handlePaymentSubmit(e)}}/>}
          </span>
      </button>
      </div>
      {/* Show any error or success messages */}
      {message && errorModal &&
        <>
          <div id="payment-message-holder"/>
          <ErrorModal message={message} setErrorModal={setErrorModal}/>
        </>
        }
    </form>
    </>
  
  );
}