//Import Libraries/Packages


//Import Styles
import "./index.css";

//Import Local files/components etc...
import { DonateContextProvider } from 'src/modules/4-Donate-Module/components/Donate/DonateNow/DonateContext';
import DonateController from 'src/modules/4-Donate-Module/components/Donate/DonateNow/DonateController';
import Donate10Days from 'src/modules/4-Donate-Module/components/Donate/Layout/Donate10Days/Donate10Days';
import DonateSteps from 'src/modules/4-Donate-Module/components/Donate/Layout/DonateSteps/DonateSteps';
import DonateTop from 'src/modules/4-Donate-Module/components/Donate/Layout/DonateTop/DonateTop';



const index = () => 
{


  return (
  <>
    <section id='Donate-Main-Container'>
    <DonateContextProvider>
      <DonateTop/>
      <DonateSteps />
      <Donate10Days />
      <DonateController/>
    </DonateContextProvider>
      {/* <DonateTempGuide /> --//Changed Design No more Need this component */} 

    </section>
  </>
  )
};

export default index;