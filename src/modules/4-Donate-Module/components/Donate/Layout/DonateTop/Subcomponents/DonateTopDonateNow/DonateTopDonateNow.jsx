//Import Libraries/Packages
import { useContext, useState } from 'react';
import { DonateContext } from '../../../../DonateNow/DonateContext.jsx';
import donateLink from "src/modules/4-Donate-Module/utils/donateLink.js";

//Import Styles
import "./DonateTopDonateNow.css";


//Import Local files/components etc..
//import donateCL from "src/Assets/Images/donate-colorful-letters.png" big size
import donateCL from "src/Assets/Images/donate-colorful-letters-s.jpg";
//import donateSF from "src/Assets/Images/Donate-Smiling-Faces.jpeg" biz size
import donateSF from "src/Assets/Images/Donate-Smiling-Faces-s.png";
//import donateOM from "src/Assets/Images/Donate-old-man.png" big size
import donateOM from "src/Assets/Images/Donate-old-man-s.png";
//import DonateYSK from "src/Assets/Images/Donate-young-sick-kid.jpeg" big size
import DonateYSK from "src/Assets/Images/Donate-young-sick-kid-s.jpg";
import Twoimgs from './Subcomponents/Twoimgs';



function DonateTopDonateNow() 
{
    /* Note for the developer Delete this block of the code after test */
    const [AllScreenSize, setAllScreenSize] = useState(window.outerWidth)
    const SetScreenSize = ()=>{setAllScreenSize(window.outerWidth )}
    window.addEventListener("resize",SetScreenSize)
    /* Note for the developer Delete this block of the code after test */

const { toggleModal } = useContext(DonateContext);


  return (
    <>
        <div id='Donate-Top-Donate-Now'>
            <div>
                <img loading='lazy' src={donateCL} alt='Donate colorful letters picture'/>
                {AllScreenSize > 911 && window.outerWidth > 911 ? <Twoimgs donateSF={donateSF} donateOM={donateOM } /> : null}
            </div>
            <div>
                <div>
                    <img loading='lazy' width="40%" src={DonateYSK} alt='Donate young sick kid picture'/>
                    <div>
                        <p>Share the <br/>
                        Love, Make a <br/>
                        Difference:</p>
                        
                        <p>Donate Today!</p>
                        {/* <button onClick={() => {document.querySelector("#UnderConst-wrapper").style.display ="flex";}} >Donate Online</button> */}
                        {/* <button onClick={() => toggleModal()} >Donate Online</button> */}
                        <button onClick={donateLink}>Donate Online</button>
                    </div>
                </div>
                
                {AllScreenSize <= 911 && window.outerWidth <= 911 ? <Twoimgs donateSF={donateSF} donateOM={donateOM} /> : null}

            </div>
        </div>
    </>
  )
}

export default DonateTopDonateNow