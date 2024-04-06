import "./index.css";

const ServicesCard = ({ service }) => {
  return (
    <div className="services-card">
      <img className="services-icon" src={service.icon} alt="" />
      <div className="services-hover">
        <h3 className="services-card-heading">{service.title}</h3>
        <p className="services-card-content">{service.content}</p>
        <a
          className="services-link"
          onClick={() => {
            document.querySelector("#UnderConst-wrapper").style.display =
              "flex";
          }}
        >
          {/* Learn More &gt; */}
        </a>
      </div>
    </div>
  );
};

export default ServicesCard;
