//Import Libraries/Packages
import React from 'react'
import { Link } from 'react-router-dom';



//Import Styles
import "./DonateTempGuide.css"


//Import Local files/components etc...
import donateO from "src/Assets/Images/donate-online.png"



function DonateTempGuide() 
{

  
  return (
    <>
        <div id='Donate-TempGuide-Wrapper'>

          <h2>Template for Donation</h2>
          <div>
            <article>
                  <img loading='lazy' src={donateO} alt='donate online picture'/>
                  <div>
                      <h4>Email Template for donation ask</h4>
                      <p>A carefully templated designed to assist you in your fundraising</p>
                      <Link>Download <i>&#8593;</i></Link>
                  </div>
            </article>
          </div>

        </div>
    </>
  )
}

export default DonateTempGuide