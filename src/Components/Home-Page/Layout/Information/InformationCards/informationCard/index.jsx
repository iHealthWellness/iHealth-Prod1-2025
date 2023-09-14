import "./index.css";

const InformationCard = ({ team }) => {
  const { icon, heading, content, detailUrl } = team;
  return (
    <div className="information-card">
      <div className="information-card-heading-block">
        <div className="information-card-icon-box">
          <img
            className="information-card-icon"
            src={icon.src}
            alt={icon.alt}
          ></img>
        </div>
        <h2 className="information-card-heading">{heading}</h2>
      </div>
      <ul className="information-card-list">
        {content.map((c) => (
          <li className="information-card-listitem" key={c}>
            <span className="information-card-listitem-span">&#10004; </span>
            {c}
          </li>
        ))}
      </ul>
      <div className="information-card-link-block">
        <a
          className="information-card-link"
          href={detailUrl}
          // onClick={() => {
          //   document.querySelector("#UnderConst-wrapper").style.display =
          //     "flex";
          // }}
        >
          Learn More &gt;
        </a>
      </div>
    </div>
  );
};

export default InformationCard;
