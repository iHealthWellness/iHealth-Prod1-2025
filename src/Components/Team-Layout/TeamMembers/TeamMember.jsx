
import DataPage from "../DataPage/DataPage";

import "./TeamMember.css";
const TeamMember = () => {

    return (
        <section className="TeamPage-holder-tab" >
            <div className="page-holder" >

                <div className="teamboard-tab" data-aos="fade-left" data-aos-duration="1000">
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

                <div className="grid-tab">
                    <div className="bold-color-text">Team Name</div>
                    <div className="bold-color-text">Roles</div>
                    <div className="bold-color-text">Names</div>
                </div>
                {
                    DataPage.map((page) => {

                        const { id, TeamName, Roles, Names } = page;

                        return (
                            <div className="grid-tab3" data-aos="fade-right" data-aos-duration="1000" key={id}>
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
                };

            </div>

        </section>

    )
}
export default TeamMember;