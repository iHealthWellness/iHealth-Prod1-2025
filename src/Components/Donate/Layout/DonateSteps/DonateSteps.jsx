//Import Libraries/Packages
import React, { useRef } from 'react'


//Import Styles
import "./DonateSteps.css"


//Import Local files/components etc...
//import manWL from "../../../../Assets/Images/man-working-laptop.png" big size
import manWL from "../../../../Assets/Images/man-working-laptop-s.jpg"
//import conceptWS from "../../../../Assets/Images/concept-with-smartphone.png" big size
import conceptWS from "../../../../Assets/Images/concept-with-smartphone-s.jpg"
import ObvserverFunc from '../../Utiility/SlideAnimationObserver/ObvserverFunc'


function DonateSteps() 
{


    /* References for Html elements to be animated */
    const leftArticle = useRef()
    const rightArticle = useRef()
    const rootElm = useRef()
    

    /* Function for Animation Logic as when elements got into viewport */
    ObvserverFunc(leftArticle,rightArticle,{root:rootElm?.current,rootMargin:'100px',threshold:0})





  return (
    <>
        <div id='Donate-Steps-Wrapper' ref={rootElm}>
            
            <div>
            <h3>Unite, Fundraise, Transform:<span> Making an Impact Together</span> </h3>

                <p>Unleash the Power of our Initiatives with Tailored Fundraising Resources and Social Media Sharing!</p>
            </div>
            <div>

                <article id='beforeanimationleft' ref={leftArticle}>
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

                <article id='beforeanimationright' ref={rightArticle}>
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