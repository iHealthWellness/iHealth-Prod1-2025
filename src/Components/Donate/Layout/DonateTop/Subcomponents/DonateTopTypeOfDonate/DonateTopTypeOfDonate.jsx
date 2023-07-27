//Import Libraries/Packages
import React from 'react'


//Import Styles
import "./DonateTopTypeOfDonate.css"

//Import Local files/components etc..
import oneTO from "../../../../../../Assets/Icons/one-time-option.svg"
import recurringO from "../../../../../../Assets/Icons/recurring-option.svg"


function DonateTopTypeOfDonate() 
{


  return (
    <>
        <div id='Donate-Top-TypeOfDonate'>
            <div>
                <div>
                    <h2>Support Patients with<br/> Complex Diseases: </h2>
                    <p>Making a Difference Together</p>
                </div>
                <p>
                    We are dedicated to revolutionizing healthcare and empowering individuals to lead healthier lives. Join us in making a profound 
                    impact by donating today. Your contribution will drive groundbreaking initiatives, promote preventive care, and provide access to 
                    essential resources. Together, we can transform lives and build a brighter, healthier future for all.
                </p>
            </div>
            <div>
                <article>
                    <img loading='lazy' src={oneTO} alt='one time option icon'/>
                    <p>One-time option</p>
                    <p>You have the option to donate once to cause a change</p>
                </article>
                <article>
                    <img loading='lazy' src={recurringO} alt='recurring option icon'/>
                    <p>Recurring Gifts</p>
                    <p>You can schedule donations with us today</p>
                </article>
            </div>
        </div>
    </>
  )
}

export default DonateTopTypeOfDonate