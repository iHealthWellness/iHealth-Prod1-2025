import styles from "./index.module.css";
import { Link } from "react-router-dom";

const FooterLinkCard = ({ linkCard }) => {
  const { category, links } = linkCard;

  return (
    <div className={styles.footerLinksCard}>
      <p className="SN-D-T-M-B-16">{category}</p>
      <div className={`SN-D-T-M-P-16 ${styles.footerLinks}`}>
        {links.map((link) => {
          if (link.title == "Volunteer") {
            return (
              <Link
                className={`SN-D-T-M-P-16 ${styles.footerLink}`}
                key={link.title}
                to="/job-openings"
              >
                {link.title}
              </Link>
            );
          }
          return (
            <Link
              className={`SN-D-T-M-P-16 ${styles.footerLink}`}
              to={link.path}
              key={`footer-links-${link.title}`}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterLinkCard;
