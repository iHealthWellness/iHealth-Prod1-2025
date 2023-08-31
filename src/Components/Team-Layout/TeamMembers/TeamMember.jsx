import { useState, useRef, useEffect } from "react";
import DataPage from "../DataPage/DataPage";

import "./TeamMember.css";
const TeamMember = () => {

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
        <section className="TeamPage-holder-tab" >
            <div className="page-holder" >

                <div className={`teamboard-tab4 ${isVisible.divRef ? "slide-in" : ""}`}
                    ref={divRef}>
                    <h2 className="team-directors-header">Foundation Staff</h2>
                    <h3 className="team-directors-tab">
                        Our team comprises dedicated individuals who bring diverse expertise and
                        a shared commitment to our mission. Our organization deeply appreciates the
                        unwavering dedication of our volunteers, advisors, and board members.
                        Their selfless contributions are indispensable in helping us fulfill our mission.
                        Without their support, we would not be able to make a difference and shape a better future for patients
                        with complex diseases. Together, we are committed to bringing about positive change
                        and improving the lives of those we serve.
                    </h3>
                </div>
                <div className={`gridd ${isVisible.divTwoRef ? "slide-in" : ""}`}
                    ref={divTwoRef}>
                    <div className="grid-tab">
                        <div className="bold-color-text">Team Name</div>
                        {/* <div className="bold-color-text">Roles</div> */}
                        <div className="bold-color-text">Names</div>
                    </div>
                    {
                        DataPage.map((page) => {

                            const { id, TeamName, Roles, Names } = page;

                            return (
                                <div className="grid-tab3">
                                    <div className="grid-tab-texter">{TeamName}</div>
                                    <div className="content-tab">
                                        <p>{Roles}</p>
                                    </div>
                                    <div className="content-name">
                                        {Names.map((name) => {
                                            return <p key={name}>{name}</p>
                                        })}


                                    </div>
                                </div>
                            )

                        })
                    } </div>


            </div>

        </section>

    )
}
export default TeamMember;