import { useState } from "react";
import "./index.css";

import img1 from "src/Assets/Images/mission.png";
import img2 from "src/Assets/Images/value.png";
import img3 from "src/Assets/Images/vision.png";

const Statement = () => {


    return (

        <section id="Statement" className="pageholder" >
            <div className="container  " data-aos-container=".custom-scroll-container">
                <div className="page" data-aos-container=".custom-scroll-container">
                    <div>
                        <div data-aos="fade-right" data-aos-duration="1000" className="img-outline">
                            <img src={img1} className="img-mission" alt="mission" />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" className="text-outline">
                            <div className="text">
                                <p>
                                    Our mission is to integrate medical and wellness social networking, patient advocacy, and access to
                                    Major EHR Systems into a platform that connects patients living with complex diseases to high-quality
                                    healthcare providers and resources.</p>
                            </div>
                            <div className="text-layout">
                                <p>
                                    Our goal is to empower patients to take charge of their health by
                                    providing the tools and resources they need to become informed and engaged advocates. By
                                    fostering collaboration and partnership among patients, healthcare providers, and policymakers, we
                                    aim to improve healthcare outcomes for all.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div data-aos="fade-left" data-aos-duration="3000">
                            <img src={img2} className="img-value" alt="core-value" />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="3000" className="text-outline1">
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



                                </div><br />

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
                                    </p></div><br />

                                <div className="text-tab">
                                    <h3>Collaboration</h3>
                                    <p>We understand that complex diseases require a collaborative approach, and we
                                        strive to foster partnerships with healthcare providers, patient advocacy groups, and other
                                        stakeholders to ensure the best outcomes for our users.
                                    </p>
                                </div><br />

                                <div className="text-outline-color-change">
                                    <h3>Professionalism</h3>
                                    <p>We pride ourselves on maintaining a professional and respectful environment
                                        for our users, partners, and employees. We will always operate with the utmost professionalism,
                                        following industry standards and regulations.</p>
                                </div><br />

                            </div>
                        </div>

                    </div>

                    <div data-aos="fade-left" data-aos-duration="3000">
                        <div>
                            <img src={img3} className="img-vision" alt="" />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="3000" className="text-outline">

                            <div className="text">
                                <p>Our aim is to empower patients to take control of their health, collaborate with healthcare providers
                                    and policymakers, and improve the quality of life for all those affected by complex diseases.</p>
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