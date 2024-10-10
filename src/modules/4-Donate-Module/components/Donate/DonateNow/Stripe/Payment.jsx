import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useContext, useEffect, useState } from "react";
import { getDonationIntent } from "src/config/urls.js";
import { stripeKey } from "src/environment/config.js";
import { DonateContext } from "../DonateContext.jsx";
import CheckoutForm from "./CheckoutForm.jsx";


const Payment = () => {

  const {     
    donorInfo,
    donationInfo,
    currentStep,
    setCurrentStep,
    errors,
    setErrors,
    isLoading1,
    setIsLoading1,
    success
 } = useContext(DonateContext);




    const [clientSecret, setClientSecret] = useState("")
    const [stripePromise, setStripePromise] = useState()


    useEffect(() => {
          const stripe_Key = stripeKey;
          setIsLoading1(true)
          setStripePromise(loadStripe(stripe_Key));
          // console.log("Stripe initialized successfully");
          // console.log(stripeKey)
    }, []);

useEffect(() => {

    const getIntentBody = () => {

        if(donationInfo.isIndividualSelected === true){
            let body = {
                firstname : donorInfo.firstName,
                lastname : donorInfo.lastName,
                donation_type: donationInfo.isOneTimeSelected ? "one-time" : "recurring",
                donation_frequency: donationInfo.frequency,
                donor_mail : donorInfo.email,
                donor_category : "individual", 
                postalCode: donorInfo.zipCode,
                state: donorInfo.state,
                city: donorInfo.city,
                streetAddress: donorInfo.streetAddress,
                country: donorInfo.country,
                subscribeToNewsletter: true,
                amount: donationInfo.amountSelected,
                currency: "usd",
            }
            return body;
        } else {
            let body = {
                firstname : donorInfo.firstName,
                lastname : donorInfo.lastName,
                companyName: donorInfo.companyName,
                donation_type: donationInfo.isOneTimeSelected ? "one-time" : "recurring",
                donation_frequency: donationInfo.frequency,
                donor_mail : donorInfo.email,
                donor_category :"corporate", 
                postalCode: donorInfo.zipCode,
                state: donorInfo.state,
                city: donorInfo.city,
                companyAddress: donorInfo.companyAddress,
                country: donorInfo.country,
                subscribeToNewsletter: true,
                amount: donationInfo.amountSelected,
                currency: "usd",
        }
        return body;
    }
    }

 //   "companyName": "whatever inc",
    // "amount" : 30,
    // "donation_type": "one-time", // "recurring"
    // "donor_mail" : "dffgttygwenrh@gmail.com",
    // "donor_category" : "corporate",
    // "postalCode": "10754",
    // "state": "New York",
    // "city": "New York",
    // "companyAddress": "56 goodnight street",
    // "country": "USA",
    // "subscribeToNewsletter": true

    const url = getDonationIntent;

    const body = getIntentBody();

    const headers={
      "Content-Type":"application/json"
    }

    fetch(url, {
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
    }).then(async (response) => {
        const responseData = await response.json();
        if (responseData && responseData.data && responseData.data.clientSecret) {
          const { clientSecret } = responseData.data;
          setClientSecret(clientSecret); // Set the clientSecret
          setIsLoading1(false)
        } else {
          console.error("Error: clientSecret not found in response data.");
        }
    })
}, []);


  return (
    <>
        <section className="donatereview-section-wrap">
            <div className="donate-review-form-heading1">
                Payment Information
            </div>
            {isLoading1 ? (
               <div className="loader"></div>
            ) : (
                <>
            {stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{clientSecret}}>
                    <CheckoutForm/>
                </Elements>
                )}
            </>
            )}
        </section>
    </>
  );
};

export default Payment;