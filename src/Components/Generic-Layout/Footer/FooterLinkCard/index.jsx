import { HashLink } from "react-router-hash-link";
import styles from "./index.module.css";

const FooterLinkCard = ({ linkCard }) => {
  const { category, links } = linkCard;

  return (
    <div className={styles.footerLinksCard}>
      <p className="SN-D-T-M-B-16">{category}</p>
      <div className={`SN-D-T-M-P-16 ${styles.footerLinks}`}>
        {links.map((link) => {
          if (link.title == "Volunteer") {
            return (
              <a
                className={`SN-D-T-M-P-16 ${styles.footerLink}`}
                key={link.title}
                href="/job-openings"
              >
                {link.title}
              </a>
            );
          }
          return (
            <HashLink
              className={`SN-D-T-M-P-16 ${styles.footerLink}`}
              to={link.path}
              key={`footer-links-${link.title}`}
            >
              {link.title}
            </HashLink>
          );
        })}
      </div>
    </div>
  );
};

export default FooterLinkCard;
