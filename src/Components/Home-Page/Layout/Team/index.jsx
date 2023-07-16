import "./index.css";

const Team = () => {
  return (
    <section className="team-container">
      <h2 className="team-heading-h2"><span>Join Your Community:</span> Stronger Together</h2>
      
      <h3 className="team-heading-h3">As a community member, you'll come together with others living with your condition to support each other,
       learn from each other, inspire each other, to feel a sense of fellowship, safety and belonging together.</h3>
      <div className="team-bottom-block">
        <div className="team-video-card">
          <video autoPlay muted loop className="team-video">
            <source
              src="https://v4.cdnpk.net/videvo_files/video/free/video0455/large_watermarked/_import_609115c00e5a15.53371416_FPpreview.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="team-join-card">
          <div className="team-join-card-inner">

            <h2 className="team-join-heading">Join NF Community</h2>
            <p className="team-join-slogan">
              Connect with other people. Share your story.
            </p>
            <p className="team-join-slogan">Join the discussion today.</p>
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
          <p className="team-join-description">As a community member, you'll come together with others living with your condition to support each other,learn
            from each other, inspire each other, to feel a sense of fellowship, safety and belonging together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
