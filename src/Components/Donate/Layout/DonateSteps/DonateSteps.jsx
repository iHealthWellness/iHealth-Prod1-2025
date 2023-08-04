//Import Libraries/Packages
import React from 'react'


//Import Styles
import "./DonateSteps.css"

//Import Local files/components etc...
import manWL from "../../../../Assets/Images/man-working-laptop.png"
import conceptWS from "../../../../Assets/Images/concept-with-smartphone.png"

function DonateSteps() 
{
  return (
    <>
        <div id='Donate-Steps-Wrapper'>
            
            <div>
                <h3>Unite, Fundraise, Transform: Making an Impact Together</h3>
                <p>Unleash the Power of our Initiatives with Tailored Fundraising Resources and Social Media Sharing!</p>
            </div>
            <div>

                <article>
                    <img loading='lazy' src={conceptWS} alt='man working laptop picture'/>
                    <div>
                        <p>Fundraise on Facebook</p>
                        <p>Wellness in Every Connection – Fundraise on Facebook, Change Lives!</p>
                        <div>
                            <p>Login to Facebook. Click create.</p>
                            <p>Click Fundraisers on the left. </p>
                            <p>On the left, click Raise money.</p>
                            <p>Click Nonprofit, Search for the nonprofit you want to raise money for.</p>
                            <p>Select the nonprofit.</p>
                            <p>Enter the amount of money you need and the currency.</p>
                            <p>Click create</p>
                        </div>
                    </div>
                </article>

                <article>
                    <img loading='lazy' src={manWL} alt='concept with smartphone picture'/>
                    <div>
                        <p>Create your own Fundraiser</p>
                        <p>Empower, Inspire, Heal – Your Fundraiser, Your Impact!</p>
                        <div>
                            <p>Define your Purpose and Goals.</p>
                            <p>Choose a fundraising platform.</p>
                            <p>Create a compelling story.</p>
                            <p>Set up your fundraiser page, determine incentives</p>
                            <p>Engage your network, be transparent and responsive.</p>
                            <p>Host fund raising events.</p>
                            <p>Follow up and thank Donors.</p>
                        </div>
                    </div>
                </article>
            
            </div>

        </div>
    </>
  )
}

export default DonateSteps