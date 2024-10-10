import "./DonateReturn.css";
import { DonateContext } from "../../DonateContext";
import { useContext } from "react";
import logo from "src/Assets/Icons/ihealth-foundation.png"



const DonateReturn = () => {

    const {     
        toggleModal,
        donationInfo
     } = useContext(DonateContext);


    return (
        <>
        <section className="jct-holder2">
            <div className="mod4">
                <div className="modal4-close-btn">
                    <button aria-label="close" onClick={toggleModal}>
                        <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L17 17M17 1L1 17" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className="donate-return-cont">
                    <div className="logo-cont">
                        <img src={logo} alt="IHealth Logo"/>
                    </div>
                    <div>
                        <h2>Thanks for donating!</h2>
                    </div>
                    <div>
                        <p>
                        Your  
                        <span>{!donationInfo.isIndividualSelect? (" One-time ") : (" Recurring ")}</span> 
                        <span>Donation of ${donationInfo.amountSelected} </span> 
                        has been recieved. You will recieve a confirmation email soon with the details of your donation. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default DonateReturn;