import { useContext } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import "src/Components/Generic-Layout/UserAuthentication/Login/Login.css";

import { DonateContext } from "./DonateContext";
import DonateNowSelectAmount from "./FormComponents/DonateAmount/DonateNowSelectAmount";
import DonateNowLogin from "./FormComponents/DonateLogin/DonateNowLogin";
import DonateReturn from "./FormComponents/DonateReturn/DonateReturn";
import DonateNowReviewInfo from "./FormComponents/DonateReview/DonateNowReviewInfo";
import DonateNow from "./FormComponents/DonateUserInfo/DonateNow";
import DonateWelcome from "./FormComponents/DonateWelcome/DonateWelcome";
import DonateFormLayout from "./FormComponents/SubComponents/FormLayout/DonateFormLayout";
import Payment from "./Stripe/Payment";





const DonateController = () => {

    const { currentStep, isOpen, toggleModal, success } = useContext(DonateContext);

    return(
        <>
            {isOpen && currentStep === 0 ? (
                    <DonateWelcome/>
            ) : (null)
            }
            {isOpen && currentStep === 1 ? (
                    //  <LoginForm/>
                    <DonateFormLayout>
                        <DonateNowLogin/>
                    </DonateFormLayout>
            ) : (null)
            }
            {isOpen && currentStep === 2 ? (
                <DonateFormLayout>
                    <ProgressBar progress={currentStep -1} totalSteps={3}/>
                    <DonateNowSelectAmount/>
                </DonateFormLayout>
            ) : (null)
            }
            {isOpen && currentStep === 3 ? (
                <DonateFormLayout>
                    <ProgressBar progress={currentStep -1} totalSteps={3}/>
                    <DonateNow/>
                </DonateFormLayout>
                ): (null)
                }
            {isOpen && currentStep === 4 ? (
                <DonateFormLayout>
                    <ProgressBar progress={currentStep -1} totalSteps={3}/>
                    <DonateNowReviewInfo/>
                </DonateFormLayout>
                ): (null)
                }
            {isOpen && currentStep === 5 && !success ? (
                <DonateFormLayout>
                <Payment/>
                </DonateFormLayout>
            ) : (null)
            }
            { isOpen && success ? (
                <DonateReturn/>
            ) : (null)}
        </>
    )

}
export default DonateController;