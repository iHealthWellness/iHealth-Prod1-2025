import React from "react";

import "./Header.css"
import icon from "src/Assets/Images/Hiring.jpg";



const Header = () => {

    return (

        <section className="openings-container" id="job-openings">

            <div className="container">
                <img className="openings-img" src={icon} alt="" />

            </div>

            <div className="openings-side">
                <h2 className="openings-side-h2">
                    Empower Change Through Volunteer Engagement!
                </h2>
                <h1 className="openings-side-h1">
                    Welcome to our Career Opportunities Page!
                </h1>
            </div>


            <div className="openings-titles container">
                <div className="openings-title">
                    <h2 className="openings-title-h2">
                        Volunteer From Anywhere
                    </h2>

                    <h className="openings-title-h1">Career Opportunities</h>
                    <h3 className="openings-title-h3">To apply for any open position, please contact HR at <span className="openings-span">onehealthconnectapp@gmail.com</span></h3>
                </div>
            </div>
        </section >
    )


}
export default Header;
