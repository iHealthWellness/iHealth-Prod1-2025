import image from "/src/Assets/Images/Titles.png";
import "./Hero.css";

const Hero = () => {

    return (
        <section id="HeroPager" className="Hero-page-tab">
            <div className="container">
                <div className="Hero-Header">

                    <div className="btn-header">
                        <button className="Hero-btn">
                            <p className="Hero-text">Join our Team</p>
                            <p className="Hero-sub-text">View Openings</p>
                        </button>



                    </div>


                </div>
            </div>

            <div className="tab-holder-tab">
                <div className="text-tab-tab">

                    <img className="text-tab-image" src={image} />
                    <h2 className="text-team">Our team comprises dedicated individuals who bring diverse expertise
                        and a shared commitment to our mission.  </h2>
                </div>

                <div className="text-tab-tab">
                    <div className="team-highlight-tab ">
                        <h3 className="team-highlight">Our organization deeply appreciates the unwavering dedication of our Volunteers, Advisors, and Board Members.
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

