import React, { useEffect } from 'react';
import "./index.css";
import Research1 from "src/Assets/Images/Research-1.png"
import AOS from 'aos';
import 'aos/dist/aos.css'

const section1 = () => {
  useEffect(() => {
    AOS.init({
      duration:800,
      mirror: false,
    });
  }, []);

  return (
  <div>
    <div className="image">
          <img src={Research1} alt="" />
          </div>
      <div className="section1">
      <div className="side">
            <h1>Unraveling the Mysteries of Neurofibromatosis:</h1>
            <h2>Advancing Research for a Brighter Future</h2>
          </div>
        
          <div className="intro">
              <h3 className="introduction">Introduction</h3>
              <p data-aos="slide-left" className="welcome">Welcome to the Neurofibromatosis Research Homepage, 
              dedicated to shedding light on the complexities of Neurofibromatosis (NF) and driving 
              advancements in research. NF is a group of genetic disorders that cause tumors to form
               on nerves throughout the body, affecting both children and adults.</p>
              <p data-aos="slide-left">On this platform, we aim to provide a comprehensive resource for individuals and families impacted by NF, 
               as well as researchers, healthcare professionals, and advocates. Our mission is to foster 
               collaboration, raise awareness, and accelerate the development of effective treatments and 
               ultimately a cure for NF.</p>
              <p data-aos="slide-left">Through informative articles, news updates, and access to cutting-edge
                research findings, we strive to empower the NF community with knowledge and support. 
                Together, we can make a difference in the lives of those living with NF by driving breakthroughs 
                and improving patient outcomes.</p>
              <p data-aos="slide-left">Join us in our journey to unravel the mysteries of Neurofibromatosis
                 and work towards a brighter future for individuals and families affected by this challenging 
                 condition. Together, we can pave the way for new discoveries, improved treatments, 
                 and increased quality of life for NF patients worldwide.</p>
          </div>
          </div>
  </div>
)};

export default section1;
