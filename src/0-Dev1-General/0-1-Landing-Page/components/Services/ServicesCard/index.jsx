import styles from "./index.module.css";

const ServicesCard = ({ service }) => {
  return (
    <div className={styles.servicesCard}>
      <img className={styles.servicesIcon} src={service.icon} alt="" />
      <div className={styles.servicesHover}>
        <h3 className={`${styles.servicesCardHeading} SN-D-Home-H3-24`}>
          {service.title}
        </h3>
        <p className={`${styles.servicesCardContent} SN-D-T-M-Home-P-16`}>
          {service.content}
        </p>
        {/* <a
          className={styles.servicesLink}
          onClick={() => {
            document.querySelector("#UnderConst-wrapper").style.display =
              "flex";
          }}
        >
          Learn More &gt;
        </a> */}
      </div>
    </div>
  );
};

export default ServicesCard;
