import { useContext } from "react";
import { DonateContext } from "../../DonateContext";
import FormButton from "../SubComponents/FormButton/FormButton.jsx";
import DonorInfoForm from "../SubComponents/InformationForm/DonorInfoForm";
import "./DonateNow.css";

const DonateNow = () => {

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
    nextStep,
    isValid,
    isDisabled } = useContext(DonateContext);

// function validateonblur1(name,aa)
// {
//   if (name==="firstName") {
//     if (!aa.trim()) {
//     errors.firstName = "Please enter your name";
//   } else {
//     errors.firstName='';
//   }
// }
//   if (name==="streetAddress") {
//     if (!aa.trim()) {
//     errors.streetAddress = "Please enter your streetaddress";
//   } else {
//     errors.streetAddress='';
//   }
// }
//   if (name==="companyName") {
//     if (!aa.trim()) {
//     errors.companyName = "Please enter your companyname";
//   } else {
//     errors.companyName='';
//   }
// }
//   if (name==="companyAddress") {
//     if (!aa.trim()) {
//     errors.companyAddress= "Please enter your companyaddress";
//   } else {
//     errors.companyAddress='';
//   }
// }
//   if (name==="phoneNumber") {
//     if (!aa.trim()) {
//     errors.phoneNumber= "Please enter your phonenumber";
//   } else if( !/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/i.test(aa)) {
//     errors.phoneNumber ="Please provide valid phone number(example:'100-100-1111').";
//    } else {
//       errors.phoneNumber = '';
//     }
// }
//   if(name === "emailAddress"){
//   if (!aa.trim()) {
//     errors.emailAddress= "Please enter your emailaddress";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(aa)) {
//      errors.emailAddress = 'Invalid email format.Please enter a valid email address(example:"User@domain.com").'
//     } else {
//       errors.emailAddress = '';
//     }
//   }
//     setErrors(errors);
//     console.log(JSON.parse(donorInfo))
//     return Object.keys(errors).length === 0;
// }

//   const validateForm1 = (e) => {
//     const errors = {};
//     if (!donorInfo.firstName.trim()) {
//       errors.firstName = "Please enter your name";
//     }
//     if (!donorInfo.streetAddress.trim()) {
//       errors.streetAddress = "Please enter your streetaddress";
//     }
//     if (!donorInfo.companyName.trim()&&donationInfo.isIndividualSelected===false) {
//       errors.companyName = "Please enter your company name";
//     }
//     if (!donorInfo.companyAddress.trim()&&donationInfo.isIndividualSelected===false) {
//       errors.companyAddress= "Please enter your companyaddress";
//     }
//      if (donationInfo.isIndividualSelected===false) {
//         if(!donorInfo.phoneNumber.trim()){
//        errors.phoneNumber= "Please enter your phonenumber";
        
//         if( !/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/i.test(donorInfo.phoneNumber)&&donationInfo.isIndividualSelected===false)
//         {
//           errors.phoneNumber ="Please provide valid phone number(example:'100-100-1111').";
//         } else {
//            //errors.phoneNumber='';
//          }
//         }
//     }
//     if (!donorInfo.emailAddress.trim()) {
//       errors.emailAddress= "Please enter your email address";
//     }
    

//       else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(donorInfo.emailAddress))
//       {
//         errors.emailAddress = 'Invalid email format.Please enter a valid email address(example:"User@domain.com").'
//     }
//     else
//     {
//       return true;
//     }
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

  const handleClick = (e) => {
    e.preventDefault();
    // Validate the form fields
    // if (isValid) {
      setDonorInfo(donorInfo);
      setCurrentStep(nextStep())
  //  }
  };

  return (
<>
        <section className="donate-now-form-wrap">
          <div className="donatenow-form-heading1">
            Contact Information
          </div>
          <div class={donationInfo.isIndividualSelected ? '': ''} id="formContent"> 
            <DonorInfoForm/>
            <div className="donatenow-btn-wrap">
              <FormButton disabled={isDisabled} text="Next" type="button" onClick={(e) => {handleClick(e)}}/>
            </div>
          </div>
        </section>
  
    </>
  );
};

export default DonateNow;