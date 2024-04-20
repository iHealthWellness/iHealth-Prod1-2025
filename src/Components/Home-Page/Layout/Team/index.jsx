import "./index.css";
import joinVideo from "src/Assets/Images/Join2.mp4";
import iHealth360Logo from "src/Assets/Images/ihealth360.png";

const Team = () => {
  return (
    <section id="Home-page-team-container" className="team-container">
      <h2 className="team-heading-h2">
        <span>Join Your Community:</span> Stronger Together
      </h2>

      <h3 className="team-heading-h3 desktop">
        Meet others who understand what it's like living with your condition. As
        a community member, you'll come together in a safe space to support,
        learn from, and inspire each other.
      </h3>

      <div className="team-bottom-block">
        <div className="team-video-card">
          <video autoPlay muted loop playsInline className="team-video">
            <source src={joinVideo} type="video/mp4" />
          </video>
        </div>

        <div className="team-join-card">
          <p className="team-join-description">
            As a community member, you'll come together with others living with
            your condition to support each other, learn from each other, inspire
            each other, to feel a sense of fellowship, safety and belonging
            together.
          </p>
          <div className="team-join-card-inner">
            <img src={iHealth360Logo} alt="ihealth360 logo" />
            <h2 className="team-join-slogan">Empowering Health Together</h2>
            <p className="team-join-heading SN-D-H2-36">
              Find Your <br />
              Community
            </p>
            <a
              className="team-join-btn"
              onClick={() => {
                document.querySelector("#UnderConst-wrapper").style.display =
                  "flex";
              }}
            >
              Join
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
