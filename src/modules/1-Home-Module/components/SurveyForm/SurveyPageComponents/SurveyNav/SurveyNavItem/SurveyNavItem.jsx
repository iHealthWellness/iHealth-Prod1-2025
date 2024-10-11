import "./SurveyNavItem.css";

function SurveyNavItem({ title, isActive, isChecked }) {
  return (
    <div
      className={`nav-item SN-D-T-M-B-16 ${isActive ? "active" : ""} ${
        isChecked ? "checked" : ""
      }`}
    >
      {title}
    </div>
  );
}

export default SurveyNavItem;
