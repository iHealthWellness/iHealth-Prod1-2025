import styles from "./index.module.css";

const PartnerImageContainer = ({ leftImg, topRightImg, bottomRightImg }) => {
  return (
    <div className={styles["partner-img-container"]}>
      <div className={styles["partner-img-left-box"]}>
        <img src={leftImg} className={styles["partner-img-left"]} alt="Left" />
      </div>
      <div className={styles["partner-img-stacks"]}>
        <img className={styles["partner-img-stack-top"]} src={topRightImg} alt="Top Right" />
        <img className={styles["partner-img-stack-bottom"]} src={bottomRightImg} alt="Bottom Right" />
      </div>
    </div>
  );
};

export default PartnerImageContainer;
