import { useState, useRef, useEffect } from "react";
import "./index.css";

import img1 from "src/Assets/Images/mission.png";
import img2 from "src/Assets/Images/value.png";
import img3 from "src/Assets/Images/vision.png";

const Statement = () => {

    const divRef = useRef(null);
    const divTwoRef = useRef(null);
    const divThreeRef = useRef(null);

    const [isVisible, setIsVisible] = useState({
        divRef: false,
        divTwoRef: false,
        divThreeRef: false,

    });


    useEffect(() => {
        const handleScroll = () => {


            applyVisibleEffect(divRef, "divRef");
            applyVisibleEffect(divTwoRef, "divTwoRef");
            applyVisibleEffect(divThreeRef, "divThreeRef");
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

        <section id="Statement" className="pageholder" >
            <div className="statement-container">
                <div className="page">
                    <div>
                        <div className="img-outline">
                            <img src={img1} className="img-mission" alt="mission" />
                        </div>
                        {/* <div className="text-outline"> */}
                        <div className={`text-outline ${isVisible.divRef ? "slide-in" : ""}`}
                            ref={divRef}>
                            <div className="text">
                                <p>
                                    To improve the quality of life for patients with complex diseases by enhancing healthcare access,
                                    fostering social connections, championing patient advocacy, advancing EHR, and promoting overall well-being.
                                </p>
                            </div>
                            <div className="text-layout">
                                <p>
                                    By converging empathy with advancement, we aspire to shape a brighter future
                                    rooted in inclusivity, access, and empowerment. By uniting state-of-the-art medical technologies with the power of empathy,
                                    we strive to create a new paradigm of health and wellness rooted in inclusivity, access, and empowerment.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div>
                            <img src={img2} className="img-value" alt="core-value" />
                        </div>
                        <div className={`text-outline1  ${isVisible.divTwoRef ? "slide-in" : ""}`}
                            ref={divTwoRef}>
                            <div className="text1">
                                <div className="text-tab">
                                    <h3>Patient-Centered Care</h3>
                                    <p>
                                        We are committed to providing our users with the highest level of patient-centered care, respecting their individual needs, and helping them to make informed decisions about
                                        their health and wellness.
                                    </p>
                                </div>

                                <div className="text-outline-color-change">

                                    <h3>Innovation</h3>
                                    <p>We believe in innovation and continuous improvement to provide the most
                                        comprehensive and reliable resources to our users. We will always seek out the latest technology and healthcare trends to stay ahead of the curve.</p>



                                </div>

                                <div className="text-tab">
                                    <h3>Integrity</h3>
                                    <p>We hold ourselves to the highest ethical standards and are dedicated to providing our
                                        users with accurate and reliable information. We will always act with honesty, transparency, and
                                        respect.</p>
                                </div>


                                <div className="text-outline-color-change"><h3>Social Responsibility</h3>
                                    <p>We are committed to being a responsible and contributing member of
                                        society. As a global non-profit, we will prioritize our users' needs over profits and will invest our
                                        resources back into the community.
                                    </p></div>

                                <div className="text-tab">
                                    <h3>Collaboration</h3>
                                    <p>We understand that complex diseases require a collaborative approach, and we
                                        strive to foster partnerships with healthcare providers, patient advocacy groups, and other
                                        stakeholders to ensure the best outcomes for our users.
                                    </p>
                                </div>

                                <div className="text-outline-color-change">
                                    <h3>Professionalism</h3>
                                    <p>We pride ourselves on maintaining a professional and respectful environment
                                        for our users, partners, and employees. We will always operate with the utmost professionalism,
                                        following industry standards and regulations.</p>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div>
                        <div>
                            <img src={img3} className="img-vision" alt="" />
                        </div>
                        {/* <div className="text-outline2"> */}
                        <div className={`text-outline2 ${isVisible.divThreeRef ? "slide-in" : ""}`}
                            ref={divThreeRef}>

                            <div className="text">
                                <p>Our aim is to empower patients to take control of their health, collaborate with healthcare providers, and improve the quality of life for all those affected by complex diseases.</p>
                            </div>
                            <div className="text-layout">
                                <p>Our vision is to create a world where patients living with complex diseases have access to
                                    high-quality healthcare providers and resources, regardless of geographic location or financial status.
                                </p>
                            </div><br /><br />
                            <div className="text">
                                <p>We strive to be a global non-profit leader in the integration of major EHR systems, providing
                                    innovative medical and wellness social networking platforms and patient advocacy services.</p>

                            </div>


                        </div>

                    </div>


                </div>
            </div>

        </section>
    )
};

export default Statement;