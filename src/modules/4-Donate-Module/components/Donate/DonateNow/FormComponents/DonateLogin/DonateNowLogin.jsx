import React, { useState, useContext } from "react";
import axios from "axios";
import "./DonateNowLogin.css";
import { DonateContext } from "../../DonateContext";
import facebookIcon from "src/Assets/Icons/login-Facebook.svg";
import googleIcon from "src/Assets/Icons/login-Google.svg";
import FormButton from "../SubComponents/FormButton/FormButton";

const DonateNowLogin = () => {

const {     
  donorInfo,
  setDonorInfo,
  currentStep,
  setCurrentStep,
  toggleModal,
  errors,
  setErrors,
  isLoading1,
  setIsLoading1, } = useContext(DonateContext);

  const nextPage = () =>{
    setCurrentStep(2);
  }


  return(
    <>
    <div className="donatenow-form-login-wrap">
    <div className="donatenow-form-login-heading1">
        <h1>Welcome</h1>
    </div>
    <div className="donatenow-form-login-cont">
        <div className="donatenow-form-login-btns">
            <span>Sign In</span>
            <button> As Guest</button>
        </div>
        <div className="donatenow-form-login-input-cont">
            <div className="donatenow-form-input">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.45228 5 3 5.45228 3 6V18C3 18.5477 3.45228 19 4 19H20C20.5477 19 21 18.5477 21 18V6C21 5.45228 20.5477 5 20 5H4ZM1 6C1 4.34772 2.34772 3 4 3H20C21.6523 3 23 4.34772 23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6Z" fill="#8B9094"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.18085 5.42662C1.49757 4.97417 2.1211 4.86414 2.57355 5.18085L12.0001 11.7794L21.4266 5.18085C21.8791 4.86414 22.5026 4.97417 22.8193 5.42662C23.136 5.87907 23.026 6.5026 22.5735 6.81932L12.5735 13.8193C12.2292 14.0603 11.7709 14.0603 11.4266 13.8193L1.42662 6.81932C0.974174 6.5026 0.864139 5.87907 1.18085 5.42662Z" fill="#8B9094"/>
                </svg>
                <input 
                 type="email" 
                 placeholder="Email Address"
                 name="user-email"
                 defaultValue={donorInfo.emailAddress}
                />
            </div>
            <div div className="donatenow-form-input">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C4.44772 12 4 12.4477 4 13V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V13C20 12.4477 19.5523 12 19 12H5ZM2 13C2 11.3431 3.34315 10 5 10H19C20.6569 10 22 11.3431 22 13V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V13Z" fill="#8B9094"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V11C18 11.5523 17.5523 12 17 12C16.4477 12 16 11.5523 16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3Z" fill="#8B9094"/>
                </svg>
                <input 
                 type="password"
                 placeholder="Password"
                />
                <button type="click">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.46967 2.46967C2.76256 2.17678 3.23744 2.17678 3.53033 2.46967L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L13.3408 14.4014C12.9087 14.6429 12.4159 14.7652 11.9139 14.7496C11.2144 14.7279 10.5494 14.4404 10.0545 13.9455C9.55964 13.4506 9.27206 12.7856 9.25039 12.0861C9.23483 11.5841 9.35706 11.0913 9.59857 10.6592L2.46967 3.53033C2.17678 3.23744 2.17678 2.76256 2.46967 2.46967ZM10.7619 11.8225C10.7516 11.894 10.7474 11.9666 10.7497 12.0397C10.7595 12.3576 10.8902 12.6599 11.1152 12.8848C11.3401 13.1098 11.6424 13.2405 11.9603 13.2503C12.0334 13.2526 12.106 13.2484 12.1775 13.2381L10.7619 11.8225Z" fill="#8B9094"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 6C11.25 5.58579 11.5858 5.25 12 5.25C16.4198 5.25 19.3281 8.74068 21.5831 11.5283C21.7853 11.7783 21.8057 12.1293 21.6338 12.401C21.2885 12.9467 20.9113 13.4716 20.5042 13.9729C20.243 14.2944 19.7707 14.3433 19.4492 14.0822C19.1276 13.821 19.0787 13.3487 19.3398 13.0271C19.5971 12.7105 19.8411 12.3834 20.0715 12.0468C17.8285 9.30527 15.4201 6.75 12 6.75C11.5858 6.75 11.25 6.41421 11.25 6ZM7.97615 7.13051C8.2139 7.4697 8.13168 7.9374 7.79249 8.17515C6.35007 9.18622 5.10953 10.6025 3.9285 12.0469C4.80049 13.3204 5.94592 14.5633 7.25513 15.515C8.71884 16.579 10.3452 17.25 12 17.25C13.3792 17.25 14.738 16.7844 16.0036 16.0102C16.357 15.7941 16.8187 15.9053 17.0348 16.2586C17.2509 16.612 17.1397 17.0737 16.7864 17.2898C15.348 18.1696 13.7208 18.75 12 18.75C9.93681 18.75 8.00766 17.9165 6.37313 16.7283C4.73711 15.539 3.35404 13.9651 2.36588 12.4005C2.19427 12.1288 2.21486 11.7779 2.41706 11.5281C3.68962 9.95607 5.15126 8.19472 6.93151 6.94685C7.2707 6.7091 7.7384 6.79133 7.97615 7.13051Z" fill="#8B9094"/>
                    </svg>
                </button>
            </div>
            <div className="donatenow-form-login-checkbox-cont">
            <div>
                <label>
                <input type="checkbox"></input>
                Remember password
                </label>
            </div>
            <div>
                <a>Forgot password?</a>
            </div>
            </div>
        </div>
        <div className="donatenow-form-login-bottom-wrap">
            <div className="donatenow-form-login-bottom-cont">
                <span>Don't have an account? <a>Sign up!</a></span>
                {/* <span>or connect with</span> */}
                {/* <div>
                    <img src={googleIcon} alt="facebook icon"/>
                    <img src={facebookIcon} alt="facebook icon"/>
                </div> */}
                <span>By signing in you are agreeing to our <a>Terms and privacy policy</a></span>
            </div>
        </div>
    </div>
    <FormButton text="Login" type="button" onClick={nextPage}/>
    </div>
    </>
  )

}

export default DonateNowLogin;