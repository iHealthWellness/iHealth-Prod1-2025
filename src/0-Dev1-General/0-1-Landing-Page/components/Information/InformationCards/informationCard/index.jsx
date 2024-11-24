import { HashLink } from "react-router-hash-link";
import styles from "./index.module.css"; 

const InformationCard = ({ team }) => {
  const { icon, heading, content, detailPath } = team;

  const handleOnClick = (e, path) => {
    if (heading.includes("Education")) {
      e.preventDefault();
      document.querySelector("#UnderConst-wrapper").style.display = "flex";
      return;
    }
  };

  return (
    <div className={styles.informationCard}>
      <div className={styles.informationCardHeadingBlock}>
        <div className={styles.informationCardIconBox}>
          <img
            className={styles.informationCardIcon}
            src={icon.src}
            alt={icon.alt}
          />
        </div>
        <h2 className={`${styles.informationCardHeading} SN-D-Home-H3-24`}>
          {heading}
        </h2>
      </div>
      <ul className={styles.informationCardList}>
        {content.map((c) => (
          <li className={`${styles.informationCardListItem} SN-D-P-20`} key={c.text}>
            <span className={styles.informationCardListItemSpan}>&#10004; </span>
            {heading.includes("Education") ? (
              <a href={c.path} onClick={(e) => handleOnClick(e, c.path)}>
                {c.text}
              </a>
            ) : (
              <HashLink smooth to={c.path}>
                {c.text}
              </HashLink>
            )}
          </li>
        ))}
      </ul>
      <div className={styles.informationCardLinkBlock}>
        <a
          className={styles.informationCardLink}
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
