//Import Libraries/Packages
import React from 'react'


//Import Styles
import "./DonateTopTypeOfDonate.css"

//Import Local files/components etc..
import oneTO from "../../../../../../Assets/Icons/iconoir_user-love.png"
import recurringO from "../../../../../../Assets/Icons/iconoir_donate.png"


function DonateTopTypeOfDonate() 
{


  return (
    <>
        <div id='Donate-Top-TypeOfDonate'>
            <div>
                <div>
                    <h2>Support Patients with Complex <br/> Diseases: <span> Making a Difference Together</span> </h2>
                </div>
                <div>
                    <p>
                        We are dedicated to revolutionizing healthcare and <br/> empowering individuals to lead healthier lives.
                    </p>
                    <p>
                        Join us in making a profound impact by donating today. Your contribution will drive groundbreaking initiatives, promote preventive care, 
                        and provide access to essential resources.
                    </p>
                    <p>
                        Together, we can transform lives and build a brighter,<br/> healthier future for all.
                    </p>
                </div>
            </div>
            <div>
                <article>
                    <img loading='lazy' src={oneTO} alt='one time option icon'/>
                    <p>Individual Donation</p>
                    <p>Empowering Healing, One Gift at a Time – Donate for Patients, Transform Lives!</p>
                    <button>Donate Now</button>
                </article>
                <article>
                    <img loading='lazy' src={recurringO} alt='recurring option icon'/>
                    <p>Corporate Donation</p>
                    <p>Corporate Caring, Empowering Patients – Together, We Heal!</p>
                    <button>Donate Now</button>
                </article>
            </div>
        </div>
    </>
  )
}

export default DonateTopTypeOfDonate