//Import Libraries/Packages
import React, { useEffect, useRef } from 'react'


//Import Styles
import "./DonateTopTypeOfDonate.css"

//Import Local files/components etc..
import oneTO from "src/Assets/Icons/iconoir_user-love.png"
import recurringO from "src/Assets/Icons/iconoir_donate.png"
import ObvserverFunc from '../../../../Utiility/SlideAnimationObserver/ObvserverFunc'
import donateLink from "src/modules/4-Donate-Module/utils/donateLink.js";

function DonateTopTypeOfDonate() 
{

    /* References for Html elements to be animated */
    const leftArticle = useRef()
    const rightArticle = useRef()
    const rootElm = useRef()
    

    /* Function for Animation Logic as when elements got into viewport */
    ObvserverFunc(leftArticle,rightArticle,{root:rootElm?.current,rootMargin:'100px',threshold:0})

    
  return (
    <>
        <div id='Donate-Top-TypeOfDonate'>
            <div>
                <div>
                    <h2>Support Patients with Complex Diseases: <span> Making a Difference Together</span> </h2>
                </div>
                <div>
                    <p>
                        We are dedicated to revolutionizing healthcare and empowering individuals to lead healthier lives.
                    </p>
                    <p>
                        Join us in making a profound impact by donating today. Your contribution will drive groundbreaking initiatives, promote preventive care, 
                        and provide access to essential resources.
                    </p>
                    <p>
                        Together, we can transform lives and build a brighter,healthier future for all.
                    </p>
                </div>
            </div>
            <div>
                <article id='beforeanimationleft' ref={leftArticle}>
                <div id="individual-donation"></div>               
                    <img loading='lazy' src={oneTO} alt='one time option icon'/>
                    <p>Individual Donation</p>
                    <p>Empowering Healing, One Gift at a Time – Donate for Patients, Transform Lives!</p>
                    {/* <button onClick={() => {document.querySelector("#UnderConst-wrapper").style.display ="flex";}} >Donate Now</button> */}
                    <button onClick={donateLink}>Donate Now</button>
                </article>
                <article id='beforeanimationright' ref={rightArticle}>
                <div id="make-a-corporate-donation"></div>
                    <img loading='lazy' src={recurringO} alt='recurring option icon'/>
                    <p>Corporate Donation</p>
                    <p>Corporate Caring, Empowering Patients – Together, We Heal!</p>
                    {/* <button onClick={() => {document.querySelector("#UnderConst-wrapper").style.display ="flex";}} >Donate Now</button> */}
                    <button onClick={donateLink}>Donate Now</button>
                </article>
            </div>
        </div>
    </>
  )
}

export default DonateTopTypeOfDonate