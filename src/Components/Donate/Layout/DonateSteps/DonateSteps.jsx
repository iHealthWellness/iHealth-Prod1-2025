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
                    <img loading='lazy' src={manWL} alt='man working laptop picture'/>
                    <div>
                        <p>Step 1</p>
                        <p>Start an Online fundraiser today to make impact</p>
                        <p>Creating an online fundraiser is an easy and effective way to raise money to help make lasting impact with iHealth</p>
                    </div>
                </article>

                <article>
                    <img loading='lazy' src={conceptWS} alt='concept with smartphone picture'/>
                    <div>
                        <p>Step 2</p>
                        <p>Share on social media to attract engagements</p>
                        <p>Share NFT resources on your social media to attract potential doners and spark interests in our initiatives.</p>
                    </div>
                </article>
            
            </div>

        </div>
    </>
  )
}

export default DonateSteps