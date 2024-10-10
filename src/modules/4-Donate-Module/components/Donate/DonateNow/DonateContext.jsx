import { createContext, useState } from "react";
import { useModal } from "../../../Context/ModalContext/ModalContext.jsx";

export const DonateContext = createContext();

export const DonateContextProvider = ({ children }) => {

      const [donorInfo, setDonorInfo] = useState({
        firstName: "",
        lastName: "",
        streetAddress:"",
        companyName:"",
        companyAddress:"",
        email:"",
        city: "",
        state:"Alabama",
        zipCode:"",
        country:"USA",
      });

      const [donationInfo, setDonationInfo] = useState({
        isIndividualSelected: true,
        isOneTimeSelected: true,
        amountSelected: 20,
        frequency: "",
        isSubscribedToNewsletter: true,
      })

    const [currentStep, setCurrentStep] = useState(0);
    const [isOpen, setIsOpen] = useState(false); 
    const [errors, setErrors] = useState({});
    const [isLoading1, setIsLoading1] = useState(false);
    const [isGuest, setIsGuest] = useState(true);
    const [isValid, setIsValid] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [success, setSuccess ] = useState(false);

    const nextStep = () => {
      // console.log(currentStep)
      return currentStep + 1;
  
    }
    // const { openModal, closeModal, activeModal} = useModal();

    const toggleModal = () =>{
        if(isOpen === false){
            setIsOpen(!isOpen)
            // openModal()

        } else {
            setIsOpen(!isOpen)
            // closeModal()
        }
    } 


    return (
        <DonateContext.Provider value={{        
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
          isGuest,
          setIsGuest,
          nextStep,
          isValid,
          setIsValid,
          isDisabled,
          setIsDisabled,
          success,
          setSuccess
          }}>
            {children}
        </DonateContext.Provider>
    );
};