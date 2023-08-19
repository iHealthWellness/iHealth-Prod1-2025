import { HashLink } from "react-router-hash-link";
import "./index.css";

const FooterLinkCard = ({ linkCard }) => {
  const { category, links } = linkCard;
  return (
    <div className="footer-links-card">
      <p className="footer-links-category">{category}</p>
      <div className="footer-links">
        {links.map((link) => (
          // <a
          //   className="footer-link"
          //   // onClick={() => {
          //   //   document.querySelector("#UnderConst-wrapper").style.display =
          //   //     "flex";
          //   // }}
          //   href={link.path}
          //   key={`footer-links-${link.title}`}
          // >
          //   {link.title}
          // </a>

          <HashLink
            className="footer-link"
            to={link.path}
            key={`footer-links-${link.title}`}
          >
            {link.title}
          </HashLink>
        ))}
      </div>
    </div>
  );
};

export default FooterLinkCard;
