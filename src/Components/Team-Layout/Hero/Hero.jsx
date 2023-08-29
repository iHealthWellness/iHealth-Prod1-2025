import { useState, useRef, useEffect } from "react";

import image from "/src/Assets/Images/Titles.png";
import image2 from "/src/Assets/Images/teamwork.png";
import "./Hero.css";

const Hero = () => {

    const divRef = useRef(null);
    const divTwoRef = useRef(null);


    const [isVisible, setIsVisible] = useState({
        divRef: false,
        divTwoRef: false,


    });


    useEffect(() => {
        const handleScroll = () => {


            applyVisibleEffect(divRef, "divRef");
            applyVisibleEffect(divTwoRef, "divTwoRef");

        }
        const applyVisibleEffect = (div, key) => {
            if (div.current) {
                const rect = div.current.getBoundingClientRect();
                const windowHeight =
                    window.innerHeight || document.documentElement.clientHeight;

                if (rect.top <= windowHeight && rect.bottom >= 0) {
                    setIsVisible((prevState) => ({

                        ...prevState,
                        [key]: true
                    }));

                } else {
                    setIsVisible((prevState) => ({

                        ...prevState,
                        [key]: false
                    }));
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <section id="HeroPager" className="Hero-page-tab">
            <div className="container">
                <div className="Hero-Header">

                    <img className="Teamss-image-tab" src={image2} alt="" />

                    <div className="btn-header">
                        <button className="Hero-btn">
                            <p className="Hero-text">View Openings</p>
                            <p className="Hero-sub-text">Volunteer from Anywhere</p>
                        </button>



                    </div>


                </div>
            </div>

            <div className="tab-holder-tab">
                <div className="text-tab-tab">

                    <img className="text-tab-image" src={image} />
                    <h2 className={`text-team ${isVisible.divRef ? "slide-in" : ""}`}
                        ref={divRef}>Our team comprises dedicated individuals who bring diverse expertise
                        and a shared commitment to our mission.  </h2>
                </div>

                <div className="text-tab-tab">
                    <div className="team-highlight-tab ">
                        <h3 className={`team-highlight ${isVisible.divTwoRef ? "slide-in" : ""}`}
                            ref={divTwoRef}>Our organization deeply appreciates the unwavering dedication of our Volunteers, Advisors, and Board Members.
                            Their selfless contributions are indispensable in helping us fulfill our mission. Without their support,
                            we would not be able to make a difference and shape a better future for patients with complex diseases.<br /><br />

                            Together, we are committed to bringing about positive change and improving the lives of those we serve.

                            We are grateful for their contributions and the collective impact we can achieve together.</h3>
                    </div>


                </div>

            </div>


        </section>


    )
}

export default Hero;

