import "./SurveyButton.css";
import greyCheck from "src/Assets/Icons/grey-check.svg";

function SurveyButton({
  type,
  className,
  handleAction,
  text,
  disabled,
  changesSaved,
}) {
  return (
    <div className="main-changes-saved">
      <button
        type={type}
        className={className}
        onClick={handleAction}
        disabled={disabled}
      >
        {text}
      </button>
      {changesSaved && (
        <div className={`changes-saved ${changesSaved ? "show" : ""}`}>
          <img src={greyCheck} alt="grey check" className="grey-check" />
          <p>Changes saved</p>
        </div>
      )}
    </div>
  );
}

export default SurveyButton;
