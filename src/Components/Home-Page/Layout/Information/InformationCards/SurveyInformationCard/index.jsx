import Trials from "src/Constants/SurveyForm/Trials";
import "./index.css";

function SurveyInformationCard() {
  const handleNavigate = (e, path) => {
    e.preventDefault();

    // If path is not defined, display UnderConstruction page
    if (!path) {
      document.querySelector("#UnderConst-wrapper").style.display = "flex";
      return;
    }
    console.log(path);
  };

  const renderTrial = (trial, index) => {
    const {
      header: { part1, part2 },
      text,
      images,
      path,
      buttonText,
      buttonIcon,
    } = trial;

    return (
      <div key={index} className="card-container">
        <h2 className="card-header">
          <span className="SN-D-H1-48 part-1">{part1}</span>
          <span className="SN-D-H3-24 part-2">{part2}</span>
        </h2>
        <div className="content-section">
          <div className="images-container">
            {images.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="centered-image"
              />
            ))}
          </div>
          <p className="SN-D-T-M-P-16">{text}</p>
          <div className="btn-container">
            <button
              className="SN-D-T-M-B-16"
              onClick={(e) => handleNavigate(e, path)}
            >
              {buttonText}
              {buttonIcon && (
                <img src={buttonIcon} alt="" className="button-img" />
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="outer-card-container">
      {Trials.map((trial, index) => renderTrial(trial, index))}
    </div>
  );
}

export default SurveyInformationCard;
