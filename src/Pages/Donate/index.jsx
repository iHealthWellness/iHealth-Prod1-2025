//Import Libraries/Packages
import React from 'react'


//Import Styles
import "./index.css"

//Import Local files/components etc...
import DonateTop from 'src/Components/Donate/Layout/DonateTop/DonateTop';
import DonateSteps from 'src/Components/Donate/Layout/DonateSteps/DonateSteps';
import DonateTempGuide from 'src/Components/Donate/Layout/DonateTempGuide/DonateTempGuide';



const index = () => 
{



  return (
  <>
    <section id='Donate-Main-Container'>

      <DonateTop />
      <DonateSteps />
      <DonateTempGuide />

    </section>
  </>
  )
};

export default index;
