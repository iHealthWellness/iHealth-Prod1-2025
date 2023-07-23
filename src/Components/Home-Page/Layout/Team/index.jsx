import "./index.css";

const Team = () => {
  return (
    <section className="team-container">
      <h2 className="team-heading-h2">Neurofibromatosis (NF) Team</h2>
      <h3 className="team-heading-h3">Stronger Together</h3>
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
        </div>
      </div>
    </section>
  );
};

export default Team;
