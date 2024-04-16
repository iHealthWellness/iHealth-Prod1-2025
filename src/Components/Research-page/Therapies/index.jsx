import styles from "./index.module.css";
import useSlideInAnimationRight from "src/hooks/useSlideInAnimationRight";

const Section3 = () => {
  useSlideInAnimationRight(styles.slideInText, styles.active);

  return (
    <div
      id="clinical"
      className={`${styles.slideInText} ${styles.mainSection}`}
    >
      <header>
        <h2 className="SN-T-H1-36">Clinical Drug Therapies</h2>
      </header>
      <section>
        <h3 className="SN-D-H3-24">
          Neurofibromatosis (NF) and its related symptoms are often managed
          using various clinical drug therapies. The following examples
          highlight some of the treatment options available:
        </h3>
        <h2 className="SN-D-H3-24">
          Selumetinib for Children With Neurofibromatosis Type 1
        </h2>
        <p className="SN-D-P-20">
          Selumetinib is a highly promising drug utilized in the treatment of
          NF1-related plexiform neurofibromas, both in children and adults. By
          inhibiting the activity of the MEK protein, which plays a crucial role
          in the development of neurofibromas, Selumetinib has demonstrated
          remarkable efficacy. Numerous clinical trials have been conducted to
          study its effects, and the results have been incredibly encouraging.
          Patients undergoing treatment with Selumetinib have witnessed
          significant tumor shrinkage and noticeable improvements in their
          associated symptoms. This breakthrough holds great potential for
          enhancing the quality of life for individuals affected by NF1.
        </p>
        <a
          href="https://jamanetwork.com/journals/jama/article-abstract/2766145"
          target="_blank"
          rel="noopener noreferrer"
          className="SN-D-P-20"
        >
          Source: https://jamanetwork.com/journals/jama/article-abstract/2766145
        </a>
      </section>
    </div>
  );
};

export default Section3;
