import "./index.css";

const InformationCard = ({ team }) => {
  const { icon, heading, content, detailPath } = team;

  const handleOnClick = (e, path) => {
    if (["Living with NF", "Education"].includes(heading)) {
      e.preventDefault();
      document.querySelector("#UnderConst-wrapper").style.display = "flex";
      return;
    }

    if (path && path.includes("#")) {
      e.preventDefault();

      // Directly set the window's location href to the desired URL.
      window.location.href = path;
    }
  };

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
          <li className="information-card-listitem" key={c.text}>
            <span className="information-card-listitem-span">&#10004; </span>
            <a href={c.path} onClick={(e) => handleOnClick(e, c.path)}>
              {c.text}
            </a>
          </li>
        ))}
      </ul>
      <div className="information-card-link-block">
        <a
          className="information-card-link"
          href={detailPath}
          onClick={(e) => handleOnClick(e, detailPath)}
        >
          Learn More &gt;
        </a>
      </div>
    </div>
  );
};

export default InformationCard;
