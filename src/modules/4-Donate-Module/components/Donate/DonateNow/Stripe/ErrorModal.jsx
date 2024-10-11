import "./Payment.css";
import Checkmark from "src/Assets/Icons/green-check-icon.jpg";




 const ErrorModal = ({message, setErrorModal}) => {



    return(
        <>
            <div className="error-modal-cont">
                <div className="error-modal">
                    <div className="error-modal-inner"> 
                        <div className="checkmark">
                            <img src={Checkmark} alt="Checkmark"/>
                        </div>
                        <div className="error-modal-message-cont">     
                            <h4>{message}</h4>
                            <span>Please Try Again.</span>
                        </div>
                        <button type="button" onClick={()=>setErrorModal(false)}>X</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorModal;
