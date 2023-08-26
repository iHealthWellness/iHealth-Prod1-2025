//Import Libraries/Packages
import React from 'react'


//Import Styles
import "./DonateTop.css"

//Import Local files/components etc..
import DonateTopDonateNow from './Subcomponents/DonateTopDonateNow/DonateTopDonateNow'
import DonateTopTypeOfDonate from './Subcomponents/DonateTopTypeOfDonate/DonateTopTypeOfDonate'


function DonateTop() 
{

  
  return (
    <>
        <div id='Donate-Top-Wrapper'>

            <DonateTopDonateNow />
            <DonateTopTypeOfDonate />

        </div>
    </>
  )
}

export default DonateTop