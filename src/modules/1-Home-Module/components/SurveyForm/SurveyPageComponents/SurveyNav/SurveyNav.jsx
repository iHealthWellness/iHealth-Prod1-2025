import SurveyNavItem from "./SurveyNavItem/SurveyNavItem";
import "./SurveyNav.css";

const ArrowLeftSVG = ({ className, onClick }) => (
  <svg
    onClick={onClick}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="49"
    viewBox="10 0 35 49"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M33.75 24.3767C33.75 25.3669 32.9945 26.1697 32.0625 26.1697H17.1272L21.9821 30.8538C22.6539 31.5401 22.6749 32.6752 22.0289 33.389C21.3829 34.1028 20.3147 34.125 19.6429 33.4387L11.7679 25.6691C11.437 25.3311 11.25 24.8644 11.25 24.3767C11.25 23.889 11.437 23.4223 11.7679 23.0843L19.6429 15.3147C20.3147 14.6284 21.3829 14.6507 22.0289 15.3645C22.6749 16.0782 22.6539 17.2133 21.9821 17.8996L17.1272 22.5837L32.0625 22.5837C32.9945 22.5837 33.75 23.3865 33.75 24.3767Z"
    />
  </svg>
);

const ArrowRightSVG = ({ className, onClick }) => (
  <svg
    onClick={onClick}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="49"
    viewBox="0 0 35 49"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.25 24.3767C11.25 23.3865 12.0055 22.5837 12.9375 22.5837H27.8728L23.0179 17.8996C22.3461 17.2133 22.3251 16.0782 22.9711 15.3645C23.6171 14.6507 24.6853 14.6284 25.3571 15.3147L33.2321 23.0843C33.563 23.4223 33.75 23.889 33.75 24.3767C33.75 24.8644 33.563 25.3311 33.2321 25.6691L25.3571 33.4387C24.6853 34.125 23.6171 34.1028 22.9711 33.389C22.3251 32.6752 22.3461 31.5401 23.0179 30.8538L27.8728 26.1697H12.9375C12.0055 26.1697 11.25 25.3669 11.25 24.3767Z"
      fill="currentColor"
    />
  </svg>
);

function SurveyNav({
  currentPage,
  titles,
  handleNextPage,
  handlePreviousPage,
}) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === titles.length;

  console.log("currentPage", currentPage);

  return (
    <div className={isLastPage ? "nav-section-none" : "nav-section"}>
      <div className="survey-page-arrow">
        <ArrowLeftSVG
          onClick={handlePreviousPage}
          className={isFirstPage ? "disabled" : ""}
        />
      </div>
      {titles.map((title, index) => (
        <SurveyNavItem
          key={index}
          title={title}
          isActive={index === currentPage - 1}
          isChecked={index < currentPage - 1}
        />
      ))}

      <div className="survey-page-arrow">
        <ArrowRightSVG
          onClick={handleNextPage}
          className={isLastPage ? "disabled" : ""}
        />
      </div>
    </div>
  );
}

export default SurveyNav;
