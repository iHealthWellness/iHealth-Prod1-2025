import React, { useState, useContext } from "react";
import axios from "axios";
import FormButton from "../SubComponents/FormButton/FormButton.jsx";
import "./DonateNowSelectAmount.css";
import { DonateContext } from "../../DonateContext";

const DonateNowSelectAmount = () => {

const {     
  donorInfo,
  setDonorInfo,
  donationInfo,
  setDonationInfo,
  setCurrentStep,
  errors,
  setErrors,
  nextStep } = useContext(DonateContext);

  const validateForm1 = (e) => {
    const errors = {};
    setErrors(errors);
    // console.log(errors);
    // console.log(Object.keys(errors).length);
    return Object.keys(errors).length === 0;
  };


//Toggles Between Individual and Corporate
  const handleOnClick = (e,type) => {
    e.preventDefault();

    setDonationInfo(prevState => ({
      ...prevState,   
      isIndividualSelected: type
    }));

    if(donationInfo.isIndividualSelected === true){
        setDonationInfo(prevState => ({
          ...prevState,
          amountSelected : 20
        }))
    } else {
      setDonationInfo(prevState => ({
        ...prevState,
        amountSelected : 500
      }))
    }
  }

  //Handles Recurring payment frequency
  const handleRecurringFrequency = (e) => {
    e.preventDefault();
    if(donationInfo.frequency === ""){
      setDonationInfo(prevState => ({
        ...prevState,
        frequency:"daily",
      }) 
    )      
    } else {
    setDonationInfo(prevState => ({
      ...prevState,
      frequency: e.target.value
    }))
  }
  }

  //Toggles Between One-Time Donation and Recurring Donations
  const handleOnClick1 = (e,type) => {
    e.preventDefault();

    setDonationInfo(prevState => ({
      ...prevState,
      isOneTimeSelected: type
    }));
  };


// HANDLES DONATE AMOUNT CHANGE ON CLICK
const handleOnClickAmount = (e, amount) => {
  if(e.target.name === "otherAmount"){
    setDonationInfo(prevState => ({
      ...prevState,
      amountSelected: e.target.value
    }));
  } else {
  setDonationInfo(prevState => ({
    ...prevState,
    amountSelected: amount
  }));
  }
  // console.log(e.target.checked)
  // console.log(Object.values(donorInfo) + "    " + Object.values(donationInfo))
};

const handleDefaultRadio = () =>{
  const defaultValue = document.getElementById('defaultValue');
  if(defaultValue.hasAttribute("checked")){
    defaultValue.classList.add('removeCheckedStyle');
  }
}

const toggleCheckbox = (e) => {
  setDonationInfo.isSubscribedToNewsletter(!donationInfo.isSubscribedToNewsletter);
}

//Function to Continue to next step of form
const handleClick=(e)=>{
  e.preventDefault();
  validateForm1(donationInfo);
  setDonationInfo(donationInfo);
  // console.log(JSON.stringify(donationInfo));
  // console.log(JSON.stringify(donorInfo))
  setCurrentStep(nextStep());
};

  return (
    <form >
        <div className="donatenow-inner-cont">
          <div className="links1">
            <label htmlFor="individual" id="individual" className={donationInfo.isIndividualSelected ? "activeLink1" : "inActiveLink1"} onClick={(e) => handleOnClick(e, true)} >
              Individual
            </label>
            <label htmlFor="corporate" id="corporate" className={donationInfo.isIndividualSelected ? "inActiveLink1" : "activeLink1"} onClick={(e) => handleOnClick(e, false)} >
              Corporate
            </label>
          </div>

          <div className="sublink1">
            <button type="button" id="lblOneTime"  className={donationInfo.isOneTimeSelected ? "activeSubLink1" : "inActiveSubLink1"} onClick={(e) => handleOnClick1(e, true)}>
              One Time
            </button>
            <button type="button" id="lblRecurring" className={!donationInfo.isOneTimeSelected ? "activeSubLink1" : "inActiveSubLink1"} onClick={(e) => (handleOnClick1(e, false), handleRecurringFrequency(e))}>
            Recurring
            </button>
          </div>
          <div className="donatenow-form-heading1">
            <span>Select Amount</span>
          </div>

          {donationInfo.isOneTimeSelected !== true ? (
              <div id="recurring">
                <div className="donate-freq-input-cont" >
                  <label htmlFor="Name" className="input__labels6" >
                  How often do you want to donate?
                  </label>   
                </div>
                <div className="donate-freq-input"  >
                  <select name="recurring" className="dropdown-contents11" defaultValue={"daily"} onChange={(e)=>handleRecurringFrequency(e)}>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                  </select>     
                </div>
              </div>
            ) : (null) }
       
        
          <div className="donatenow-form-cont">          
            <div>            
              {donationInfo.isIndividualSelected === true ? (
                <div className="donatenow-amount-radio-cont" id="individual"  >
                  <label htmlFor="Amount20" className="donatenow-amount-radio-btn">
                    <input 
                      type="radio" 
                      id="Amount20" 
                      name="donationAmount" 
                      value="20" 
                      defaultChecked={true} 
                      onChange={(e) => handleOnClickAmount(e,20)}>
                    </input>
                    <span id="defaultValue">$20</span>
                  </label>
                  <label htmlFor="Amount30" className="donatenow-amount-radio-btn">
                    <input 
                      type="radio" 
                      id="Amount30" 
                      name="donationAmount" 
                      value="30" 
                      checked={donationInfo.amountSelected === 30} 
                      onChange={(e) => handleOnClickAmount(e,30)}>
                    </input>
                    <span>$30</span>
                  </label>
                  <label htmlFor="Amount50" className="donatenow-amount-radio-btn">
                    <input 
                      type="radio" 
                      id="Amount50" 
                      name="donationAmount" 
                      value="50" 
                      checked={donationInfo.amountSelected === 50} 
                      onChange={(e) => handleOnClickAmount(e,50)}>
                    </input>
                    <span>$50</span>
                  </label>
                  <label htmlFor="Amount100" className="donatenow-amount-radio-btn">
                    <input 
                      type="radio" 
                      id="Amount100" 
                      name="donationAmount" 
                      value="100" 
                      checked={donationInfo.amountSelected === 100} 
                      onChange={(e) => handleOnClickAmount(e,100)}>
                    </input>
                    <span>$100</span>
                  </label>
                </div>
                ):(
                <div className="donatenow-amount-radio-cont" id="corporate"  >
                  <label htmlFor="Amount500" className="donatenow-amount-radio-btn">
                      <input 
                        type="radio" 
                        id="Amount500" 
                        name="donationAmount" 
                        value="500" 
                        defaultChecked={true} 
                        onChange={(e) => handleOnClickAmount(e,500)}>
                      </input>
                      <span>$500</span>
                  </label>
                  <label for="Amount1000" className="donatenow-amount-radio-btn">
                    <input 
                      type="radio" 
                      id="Amount1000" 
                      name="donationAmount" 
                      value="1000" 
                      checked={donationInfo.amountSelected === 1000} 
                      onChange={(e) => handleOnClickAmount(e,1000)}>
                    </input>
                    <span>$1000</span>
                  </label>
                  <label htmlFor="Amount2500" className="donatenow-amount-radio-btn">
                    <input 
                      type="radio" 
                      id="Amount2500" 
                      name="donationAmount" 
                      value="2500" 
                      checked={donationInfo.amountSelected === 2500} 
                      onChange={(e) => handleOnClickAmount(e,2500)}>
                    </input>
                    <span>$2500</span>
                  </label>
                  <label htmlFor="Amount3000" className="donatenow-amount-radio-btn">
                    <input 
                      type="radio" 
                      id="Amount3000" 
                      name="donationAmount" 
                      value="3000" 
                      checked={donationInfo.amountSelected === 3000} 
                      onChange={(e) => handleOnClickAmount(e,3000)}>
                    </input>
                    <span>$3000</span>
                  </label>
                </div>
                )}

              <div className="donatenow-other-amount-input">
                <select name="USD" className="dropdown-contents12">
                  <option value="USD">USD</option>              
                </select>
                  {/* {errors.USD && (<span className="errorMessage">{errors.USD}</span>)}
               <label for="otherAmount" class="input__labelserrormsg8"></label>
                  {errors.otherAmount && (<span className="errorMessage">{errors.otherAmount}</span>)} */}
                <input
                  type="text"
                  id="otherAmount"
                  className="input__fields8"
                  placeholder="$ Other"
                  name="otherAmount"
                  onFocus={() => handleDefaultRadio()}
                  onChange={(e) => handleOnClickAmount(e)}
                />
                       
              </div>

              <div className="donatenow-checkbox-cont">
                <div className="donatenow-checkbox-wrap">
                <div className="transactionField-cont">
                  <input 
                    defaultChecked='true'
                    type="checkbox"
                    id="coverTransactionfees"
                    className="transactionField"
                    placeholder=" "
                    name="checkbox"
                    value="coverTransactionfees"
                    disabled
                  />
                  <label htmlFor="cover-Transactionfees" className="input__labels5">
                  Cover transaction fees,to ensure the cause <br/>recieves my entire contribution.
                  </label>
                  {errors.coverTransactionfees&& (
                    <span className="error-msg">{errors.coverTransactionfees}</span>
                  )}
                </div>
                <div className="transactionField-cont">
                  <input
                    defaultChecked='true'
                    type="checkbox"
                    id="Newsletter"
                    className="transactionField"
                    placeholder=" "
                    name="checkbox"
                    value="Newsletter"
                    onClick={(e) => toggleCheckbox(e)}
                  />
                  <label htmlFor="Newsletter" className="input__labels5">
                  Subscribe to our Newsletter
                  </label>
                  {errors.Newsletter && (
                    <span className="error-msg">{errors.Newsletter}</span>
                  )}
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-btn-cont">
            <FormButton type="button" text="Next" onClick={(e) => {handleClick(e)}}/>
          </div>
  
        </div>
        </form>
  );
};

export default DonateNowSelectAmount;