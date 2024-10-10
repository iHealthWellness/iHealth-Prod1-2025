import { useContext } from "react";
import { stateData } from "src/Constants/HomePage/StateData.js";
import { DonateContext } from "../../../DonateContext";
import { ErrorIcon } from "../ErrorIcon";
import "./DonorInfoForm.css";


const  DonorInfoForm = () => {

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
    isDisabled,
    setIsDisabled } = useContext(DonateContext);

    // Handle response from USPS API
// const parseXMLResponse = (xmlResponse) => {
//   // Create a new DOM parser
//   const parser = new DOMParser();

//   // Parse the XML string
//   const xmlDoc = parser.parseFromString(xmlResponse, "text/xml");

//   // Extract relevant data from the XML document
//   const resultNode = xmlDoc.getElementsByTagName("Result")[0];
//   const isValid = resultNode.textContent === "true"; // Assuming the text content is 'true' or 'false'

//   // Return whether the address is valid
//   return isValid;
// };

  //     // Function to validate address using USPS API
  // const validateAddress = async () => {
  //   const { streetAddress, companyAddress, city, state, zipCode } = donorInfo;
  //   try {
  //     const response = await axios.get(
  //       `https://secure.shippingapis.com/ShippingAPI.dll?API=Verify&XML=<AddressValidateRequest USERID="8XIHEAL160121"><Address ID="0"><Address1>${streetAddress}</Address1><City>${city}</City><State>${state}</State><Zip5>${zipCode}</Zip5></Address></AddressValidateRequest>`
  //     );
  //     console.log(response)
  //         // Handle response from USPS API
  //       const isValidAddress = parseXMLResponse(response.data);
  //       console.log(isValidAddress)
  //     // You'll need to parse the XML response and determine if the address is valid
  //     // For now, let's assume response.data.isValid indicates whether the address is valid
  //     if (isValidAddress) {
  //       return true; // Address is valid
  //     } else {
  //       return false; // Address is invalid
  //     }
  //   } catch (error) {
  //     console.error("Error validating address:", error);
  //     return false; // Assume address is invalid if there's an error
  //   }
  // };


function validateonblur1(e)
{
  // if (["streetAddress", "companyAddress", "city", "state", "zipCode"].includes(e.target.name)) {
  //   // Validate address asynchronously
  //   validateAddress()
  //     .then(isValidAddress => {
  //       if (!isValidAddress) {
  //         setErrors(prevErrors => ({
  //           ...prevErrors,
  //           [e.target.name]: "Invalid address",
  //         }));
  //       } else {
  //         setErrors(prevErrors => ({
  //           ...prevErrors,
  //           [e.target.name]: "",
  //         }));
  //       }
  //     })
  //     .catch(error => {
  //       console.error("Error validating address:", error);
  //       // Handle error if needed
  //     });
  //   }

  if (e.target.name==="firstName") {
    if (!e.target.value.trim()) {
    errors.firstName = "Please enter your name";
  }
  else
  {
    errors.firstName='';
  }
}
  if (e.target.name==="streetAddress") {
    if (!e.target.value.trim()) {
    errors.streetAddress = "Please enter your Street Address";
  }
  else
  {
    errors.streetAddress='';
  }
}
  if (e.target.name==="companyName") {
    if (!e.target.value.trim()) {
    errors.companyName = "Please enter your companyname";
  }
  else
  {
    errors.companyName='';
  }
}
  if (e.target.name==="companyAddress") {
    if (!e.target.value.trim()) {
    errors.companyAddress= "Please enter your Company Address";
  }
  else
  {
    errors.companyAddress='';
  }
}
if (e.target.name === "phoneNumber") {
  const value = e.target.value.trim(); 
  if (!value) {
    errors.phoneNumber = "Please enter your phone number";
  } else if (!/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/i.test(value)) {
    errors.phoneNumber = "Please provide a valid phone number 555-555-5555";
  } else {
    errors.phoneNumber = ''; 
  }
}
  if(e.target.name === "email"){
  if (!e.target.value.trim()) {
    errors.email= "Please enter your Email Address";
  } 
   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value))
    {
     errors.email = 'Please enter a valid email address'
    }
    else
    {
      errors.email = '';
    }
  }
    
  setErrors(errors);
  setIsDisabled(checkErrors(errors));
  console.log(isDisabled)
  
  return Object.keys(errors).length === 0;
  };

    // Handle form field changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setDonorInfo((prevDonorInfo) => (
        {
        ...prevDonorInfo,
        [name]: value
      }));
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      console.log(errors)
      return validateonblur1(e);
    };

  // Function to check if there are any errors in the errors object
function checkErrors(errors) {
  for (let key in errors) {
    if (errors[key] !== '') {
      return true;
    }
  }
  return false;
}

  return (
<>
    <div id="formContent"> 
        <form>
        <div className="donateInfo-form-cont">
          <div>
         {/* <div className={selection[0].isIndividualSelected ? 'modal': 'donatenow_modal'}>  */}
            {/* PRELOADER AFTER FORM IS SUBMITTED */}
            {isLoading1 && <div className="loader"></div>}
            <div className="donatenow_form__content">
            {/* <div className="" >
                <label htmlFor="companyName"  className={donationInfo.isIndividualSelected? 'hideCorporate' : 'donatenow_input__label1' }>
                 Company Name{errors.companyName && (
                  <span className="donatenow_errorMessage">{errors.companyName}</span>
                )}
                </label>
              <input
                maxLength={100}
                autoFocus
                type="text"
                id="companyName"
                className={donationInfo.isIndividualSelected? 'hideCorporate' : 'donatenow_input__field3' }
                value={donorInfo.companyName}
                onChange={handleChange1}
                onBlur={handleChange1}
                placeholder=" "
                name="companyName"          
                />
              <label htmlFor="companyNames" className={donationInfo.isIndividualSelected? 'hideCorporate' : 'donatenow_input__label2'}>
              Company Name
                </label>
              </div> */}
          <div className="input1">
            {/* <div className="" >
                <label htmlFor="companyAddress"  className={donationInfo.isIndividualSelected? 'hideCorporate' : 'donatenow_input__label1' }>
                 Company Address
                 {errors.companyAddress && (<span className="donatenow_errorMessage">{errors.companyAddress}</span>)}
                </label> 
              <input
                  maxLength={100}
                  type="text"
                  id="companyAddress"
                  className={donationInfo.isIndividualSelected? 'hideCorporate' : 'donatenow_input__field3' }
                  value={donorInfo.companyAddress}
                  onChange={handleChange1}
                  onBlur={handleChange1}
                  placeholder=" "
                  name="companyAddress"
                />       
              <label htmlFor="companyAddresss" className={donationInfo.isIndividualSelected? 'hideCorporate' : 'donatenow_input__label2'}>
                Company Address
              </label>
            </div> */}
             <div className="">
              <div className="donateInfo_input__label1">
                {donationInfo.isIndividualSelected ? (
                <label htmlFor="firstName">
                  <span>First Name</span>
              <div className="donorInfo-input1">
                <input
                  type="given-name"
                  id="firstName"
                  className="donateInfo_text__field1"
                  value={donorInfo.firstName}
                  // onBlur={(e)=>validateonblur1(e)}
                  onChange={(e)=>handleChange(e)}
                  placeholder="First"
                  name="firstName"
                  autoComplete="on"
                />
                <input
                  type="family-name"
                  id="lastName"
                  className="donateInfo_text__field1"
                  defaultValue={donorInfo.lastName}
                  name="lastName"
                  autoComplete="on"
                  placeholder="Last"
                  // onBlur={(e)=>validateonblur1(e)}
                  onChange={(e)=>handleChange(e)}
                />
                </div>
                {errors.firstName && (
                  <div className="donatenow_errorMessage">
                    <ErrorIcon/>
                    <span>{errors.firstName}</span>
                  </div>
                )}  
                </label> 
                ): (
                  <label htmlFor="companyName">
                  <span>Company Name</span>
              <div className="donorInfo-input1">
                <input
                  type="given-name"
                  id="companyName"
                  className="donateInfo_text__field1"
                  value={donorInfo.companyName}
                  // onBlur={(e)=>validateonblur1(e)}
                  onChange={(e)=>handleChange(e)}
                  placeholder="Company Name"
                  name="companyName"
                  autoComplete="on"
                />
                </div>
                {errors.firstName && (
                  <div className="donatenow_errorMessage">
                    <ErrorIcon/>
                    <span>{errors.firstName}</span>
                  </div>
                )}  
                </label> 
                )
                }
              </div>
            </div>
            </div>
               <div className="input1">
                <label htmlFor="email" className ="donateInfo_input__label1" >
                   Email Address
                <input
                  type="email"
                  id="email"
                  className="donateInfo_input__field3"
                  defaultValue={donorInfo.email}
                  placeholder="Email"
                  autoComplete="on"
                  name="email"
                  // onBlur={(e)=>validateonblur1(e)}
                  onChange={(e)=>handleChange(e)}
                />      
                {errors.email && (
                  <div className="donatenow_errorMessage">
                    <ErrorIcon/>
                    <span>{errors.email}</span>
                  </div>
                )}  
               </label>
              </div>

              <div className="input1">
                <label htmlFor={donationInfo.isIndividualSelected? "streetAddress" : 'companyAddress'} className='donateInfo_input__label1' >
                {donationInfo.isIndividualSelected? 'Street Address' : 'Company Street Address'}
                <input
                  type="street-address"
                  id={donationInfo.isIndividualSelected? "streetAddress" : 'companyAddress'}
                  className='donateInfo_input__field3'
                  autoComplete="on"
                  defaultValue={donationInfo.isIndividualSelected? donorInfo.streetAddress : donorInfo.companyAddress}
                  placeholder={donationInfo.isIndividualSelected? 'Street Address' : 'Company Street Address'}
                  name= {donationInfo.isIndividualSelected? "streetAddress" : 'companyAddress'}
                  // onBlur={(e)=>validateonblur1(e)}
                  onChange={(e)=>handleChange(e)}
                />  
                {errors.streetAddress && (
                  <div className="donatenow_errorMessage">
                    <ErrorIcon/>
                    <span>{errors.streetAddress}</span>
                  </div>
                )}  
                {errors.companyAddress && (
                  <div className="donatenow_errorMessage">
                    <ErrorIcon/>
                    <span>{errors.companyAddress}</span>
                  </div>
                )}  
                </label>           
              </div>
             
            <div className="input1" >
                <label htmlFor="phoneNumber"  className={donationInfo.isIndividualSelected? 'donateInfo_input__label1' : 'donateInfo_input__label1' }>
                Phone Number
              <input
                  maxLength={12}
                  type="text"
                  id="phoneNumber"
                  className="donateInfo_text__field1"
                  value={donorInfo.phoneNumber}
                  onChange={(e)=>handleChange(e)}
                  placeholder="Phone Number"
                  name="phoneNumber"
                />
                  {errors.phoneNumber && (
                  <div className="donatenow_errorMessage">
                    <ErrorIcon/>
                    <span>{errors.phoneNumber}</span>
                  </div>
                )}  
                </label>
              </div>

              <div className="donateInfo-input-label-row">

              <div className="donateInfo-input-row-item">
                    <label htmlFor="country">Country</label>
                    <select name="country" onClick={(e)=>handleChange(e)} defaultValue={donorInfo.country} className="donateInfo-input-row-item-content">
                    <option value="USA" >USA</option>
                    <option value="Canada" >Canada</option>
                    </select>
                    {errors.country && (
                    <span className="donatenow_error-msg">{errors.country}</span>
                    )}
                </div>

              <div className="donateInfo-input-row-item">
                    <label htmlFor="city">City</label>
                    <input
                    type="text"
                    id="city"
                    className="donateInfo-input-row-item-content"
                    defaultValue={donorInfo.city}
                    placeholder="City "
                    name="city"
                    // onBlur={(e)=>validateonblur1(e)}
                    onChange={(e)=>handleChange(e)}
                    />
                    {errors.city && (
                    <span className="donatenow_error-msg">{errors.city}</span>
                    )}
                </div>
                <div className="donateInfo-input-row-item">
                    <label htmlFor="state">State/Province</label>
                    <select name="state" autoComplete="on" onChange={(e)=>handleChange(e)} defaultValue={donorInfo.state} className="donateInfo-input-row-item-content">
                    {stateData.map((state, key) => (
                        <option key={key} value={Object.values(state)}>{Object.values(state)}</option>
                    ))}
                    </select>
                    {errors.state && (
                    <span className="donatenow_error-msg">{errors.state}</span>
                    )}
                </div>
                <div className="donateInfo-input-row-item">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                    type="postal-code"
                    id="zipCode"
                    className="donateInfo-input-row-item-content"
                    placeholder=" "
                    autoComplete="on"
                    defaultValue={donorInfo.zipCode}
                    name="zipCode"
                    onChange={(e)=>handleChange(e)}
                    />
                    {errors.zipCode && (
                    <span className="donatenow_error-msg">{errors.zipCode}</span>
                    )}
                </div>

              </div>

              <div className="donateInfo-input-checkbox">
                <input 
                  defaultChecked='true'
                  type="checkbox"
                  id="billingAddress"
                  className="donatenow_billingAddressField"
                  placeholder=" "
                  name="checkbox"
                  defaultValue={donationInfo.billingAddress}
                  // onBlur={(e)=>validateonblur1(e)}
                  onChange={(e)=>handleChange(e)}
                />
                <label htmlFor="billingAddress" className="donatenow_input__label5">
                  Use current address as billing address?
                </label>
                {errors.billingAddress && (
                  <span className="donatenow_error-msg">{errors.billingAddress}</span>
                )}
              </div>

           </div>
          </div>
          </div>
        </form>
        </div>
  
    </>
  );
};

export default DonorInfoForm;