//Import Libraries/Packages
import React from 'react'
import { Link } from 'react-router-dom';



//Import Styles
import "./DonateTempGuide.css"

//Import Local files/components etc...
import donateO from "../../../../Assets/Images/donate-online.png"
import femaleLD from "../../../../Assets/Images/female-love-donation.png"

function DonateTempGuide() 
{
  return (
    <>
        <div id='Donate-TempGuide-Wrapper'>

          <h2>How to Raise $500 in 10 Days</h2>
          <div>
            <article>
                  <img loading='lazy' src={donateO} alt='donate online picture'/>
                  <div>
                      <h4>Email Template for donation ask</h4>
                      <p>A carefully templated designed to assist you in your fundraising</p>
                      <Link>Download <i>&#8593;</i></Link>
                  </div>
            </article>

            <article>
                  <img loading='lazy' src={femaleLD} alt='female love donation picture'/>
                  <div>
                    <h4>Guide to fundraising for your company</h4>
                    <p>A guide created for companies to take advantage of for their fundraising initiatives</p>
                    <Link>Download <i>&#8593;</i></Link>
                  </div>
            </article>
          </div>

        </div>
    </>
  )
}

export default DonateTempGuide