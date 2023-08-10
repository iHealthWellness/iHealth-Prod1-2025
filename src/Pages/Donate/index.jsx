//Import Libraries/Packages
import React from 'react'


//Import Styles
import "./index.css"

//Import Local files/components etc...
import DonateTop from 'src/Components/Donate/Layout/DonateTop/DonateTop';
import DonateSteps from 'src/Components/Donate/Layout/DonateSteps/DonateSteps';
import DonateTempGuide from 'src/Components/Donate/Layout/DonateTempGuide/DonateTempGuide';
import Donate10Days from 'src/Components/Donate/Layout/Donate10Days/Donate10Days';



const index = () => 
{



  return (
  <>
    <section id='Donate-Main-Container'>
    
      <DonateTop />
      <DonateSteps />
      <Donate10Days />
      {/* <DonateTempGuide /> --//Changed Design No more Need this component */} 

    </section>
  </>
  )
};

export default index;
