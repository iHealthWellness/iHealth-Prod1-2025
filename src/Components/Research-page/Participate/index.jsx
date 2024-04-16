import styles from "./index.module.css";
import Research5 from "src/Assets/Images/Research-5.png";
import useSlideInAnimationRight from "src/hooks/useSlideInAnimationRight";

const section6 = () => {
  useSlideInAnimationRight(styles.slideInText, styles.active);

  return (
    <article
      id="participate"
      className={`${styles.slideInText} ${styles.mainSection}`}
    >
      <header className="SN-D-H2-36">
        <h3>
          Participate in Research for Neurofibromatosis: Making a Difference
        </h3>
      </header>
      <aside className="SN-D-P-20">
        <p>
          Neurofibromatosis (NF) is a complex genetic disorder that affects
          thousands of individuals worldwide. If you or a loved one is affected
          by NF, you have an opportunity to actively contribute to the
          advancement of knowledge and the development of new treatments by
          participating in research studies. Your participation can make a real
          difference in the lives of individuals with NF, both today and in the
          future.
        </p>
        <img
          src={Research5}
          alt="doctor and patient interaction"
          loading="lazy"
        />
      </aside>
      <section>
        <h3 className="SN-D-H3-24">
          Participating in NF research offers several benefits:
        </h3>
        <p className="SN-D-P-20">
          <span>1. Advancing Scientific Knowledge</span> By participating in
          research studies, you contribute to the growing body of scientific
          knowledge about NF. Researchers rely on the participation of
          individuals like you to gain insights into the causes, progression,
          and management of NF.
        </p>
        <p className="SN-D-P-20">
          <span>2. Improved Treatment Options</span> Your involvement in
          research can lead to the development of better treatment options for
          NF. Researchers and scientists are constantly working to identify new
          therapies, medications, and interventions that can enhance the quality
          of life for individuals with NF.
        </p>
        <p className="SN-D-P-20">
          <span>3. Supporting Future Generations</span> Your participation helps
          future generations affected by NF. The data and information gathered
          through research studies pave the way for improved understanding,
          earlier diagnosis, and more effective treatments.
        </p>
        <p className="SN-D-P-20">
          <span>4. Empowering the NF Community</span> Participating in research
          provides an opportunity to connect with others in the NF community.
          Through engagement with researchers, healthcare professionals, and
          fellow participants, you can find support, share experiences, and
          contribute to a network of understanding and empathy.
        </p>
      </section>
    </article>
  );
};

export default section6;
