import { HashLink } from "react-router-hash-link";
import styles from "./index.module.css";

const FooterLinkCard = ({ linkCard }) => {
  const { category, links } = linkCard;

  return (
    <div className={styles.footerLinksCard}>
      <p className={styles.footerLinksCategory}>{category}</p>
      <div className={styles.footerLinks}>
        {links.map((link) => {
          if (link.title == "Volunteer") {
            return (
              <a
                className={styles.footerLink}
                key={link.title}
                href="/job-openings"
              >
                {link.title}
              </a>
            );
          }
          return (
            <HashLink
              className={styles.footerLink}
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
