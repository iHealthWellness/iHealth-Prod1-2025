import styles from "./GreyCards.module.css";

function GreyCards({ children }) {
  return (
    <section className={styles.greyCardContainer}>
      {children}
    </section>
  );
}

export default GreyCards;
