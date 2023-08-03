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
                        <ul>
                            <li>Login to Facebook. Click create.</li>
                            <li> Click Fundraisers on the left. </li>
                            <li>On the left, click Raise money.</li>
                            <li>Click Nonprofit, Search for the nonprofit you want to raise money for.</li>
                            <li>Select the nonprofit.</li>
                            <li>Enter the amount of money you need and the currency.</li>
                            <li>Click create</li>
                        </ul>
                    </div>
                </article>

                <article>
                    <img loading='lazy' src={manWL} alt='concept with smartphone picture'/>
                    <div>
                        <p>Create your own Fundraiser</p>
                        <p>Empower, Inspire, Heal – Your Fundraiser, Your Impact!</p>
                        <ul>
                            <li>Define your Purpose and Goals.</li>
                            <li>Choose a fundraising platform. </li>
                            <li>Create a compelling story.</li>
                            <li>Set up your fundraiser page, determine incentives</li>
                            <li>Engage your network, be transparent and responsive.</li>
                            <li>Host fund raising events.</li>
                            <li>Follow up and thank Donors.</li>
                        </ul>
                    </div>
                </article>
            
            </div>

        </div>
    </>
  )
}

export default DonateSteps