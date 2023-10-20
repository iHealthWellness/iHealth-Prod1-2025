import "./index.css";

const HowItWorksCard = ({ icon, title, content, idx, isVisible }) => {
  const buttonStyles = (index) => {
    return index % 2 === 0 ? "even" : "odd";
  };

  const renderCardContent = () => (
    <div 
      className={`how-it-works-card ${isVisible ? "visible" : ""} ${buttonStyles(idx)}`} 
      key={title}
    >
      <div className="how-it-works-content-block">
        <h4 className="how-it-works-number">{idx}</h4>
        <div className="how-it-works-icon">{icon}</div>
        <div className={`how-it-works-button ${buttonStyles(idx)}`}>
          {title === "Learn More" 
           ? <h2 className="how-it-works-button-label"><a href="#">{title}</a></h2>
           : <h2 className="how-it-works-button-label">{title}</h2>
          }
        </div>
        <p className={`how-it-works-content`}>{content}</p>
      </div>
    </div>
  );

  return renderCardContent();
};


export default HowItWorksCard;
