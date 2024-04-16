import styles from "./BlueExpandIcon.module.css";

function BlueExpandIcon({ isExpanded }) {
  const iconStyle = isExpanded ? styles.minusIcon : styles.plusIcon;

  return <div className={`${styles.circleContainer} ${iconStyle}`}></div>;
}

export default BlueExpandIcon;
