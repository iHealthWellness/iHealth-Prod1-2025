import "./index.css";

const PartnerImageContainer = ({ leftImg, topRightImg, bottomRightImg }) => {
  return (
    <div className="partner-img-container">
      <div className="partner-img-left-box">
        <img src={leftImg} className="partner-img-left" />
      </div>
      <div className="partner-img-stacks">
        <img className="partner-img-stack-top" src={topRightImg}></img>
        <img className="partner-img-stack-bottom" src={bottomRightImg}></img>
      </div>
    </div>
  );
};
export default PartnerImageContainer;
