import { HashLink } from "react-router-hash-link";
import "./index.css";

const FooterLinkCard = ({ linkCard }) => 
{

  const { category, links } = linkCard;


  return (
    <div className="footer-links-card">
      <p className="footer-links-category">{category}</p>
      <div className="footer-links">
        {
            links.map((link) => 
          {
            {/* This block of code for Volunteer Link in the footer After the related page/section implemented, We dont need this block of code */}
            if(link.title == "Volunteer")
            {
              return (
              <a className="footer-link" key={link.title} onClick={()=>{document.querySelector('#UnderConst-wrapper').style.display = "flex"}} >
                {link.title}
              </a>)
            }
            {/* This block of code for Volunteer Link in the footer After the related page/section implemented, We dont need this block of code */}

            return (
              <HashLink className="footer-link" to={link.path} key={`footer-links-${link.title}`}>
                {link.title}
              </HashLink>)
          })
        }
      </div>
    </div>
  );
};

export default FooterLinkCard;
