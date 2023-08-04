//Import Libraries/Packages
import React from 'react'


//Import Styles
import "./DonateTopDonateNow.css"


//Import Local files/components etc..
import donateCL from "../../../../../../Assets/Images/donate-colorful-letters.png"
import donateSF from "../../../../../../Assets/Images/Donate-Smiling-Faces.jpeg"
import donateOM from "../../../../../../Assets/Images/Donate-old-man.png"
import DonateYSK from "../../../../../../Assets/Images/Donate-young-sick-kid.jpeg"

function DonateTopDonateNow() 
{
  return (
    <>
        <div id='Donate-Top-Donate-Now'>
            <div>
                <img loading='lazy' src={donateCL} alt='Donate colorful letters picture'/>
                <div>
                    <img loading='lazy' width="100%" src={donateSF} alt='Donate  smiling faces picture'/>
                    <img loading='lazy' width="100%" src={donateOM} alt='Donate old man picture'/>
                </div>
            </div>
            <div>
                <img loading='lazy' width="40%" src={DonateYSK} alt='Donate young sick kid picture'/>
                <div>
                    <p>Share the <br/>
                    Love, Make a <br/>
                    Difference:</p>
                    <p>Donate Today!</p>
                    <button>Donate Online</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default DonateTopDonateNow