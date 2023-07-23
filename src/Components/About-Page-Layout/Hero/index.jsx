import { useState } from "react";
import "./index.css";

import img from "src/Assets/Images/business meeting2.png";

const Hero = () => {


    return (
        <section className="Hero-image">
            <div className="container"> <img src={img} className="img-holder" alt="meeting" /></div>


        </section>
    )
};

export default Hero;
