import ourMission from "src/Assets/Images/mission.png";
import coreValues from "src/Assets/Images/value.png";
import ourVision from "src/Assets/Images/vision.png";
import useSlideInAnimationRight from "src/hooks/useSlideInAnimationRight";

import styles from "./index.module.css";

const Statement = () => {

  useSlideInAnimationRight(styles.slideInTextFromLeft, styles.activeLeft);
  useSlideInAnimationRight(styles.slideInTextFromRight, styles.activeRight);

  return (
    <section id="Statement" className={styles.statementContainer}>
      {/* Left part */}
      <section>
        <img src={ourMission} alt="our mission" />
        <article className={`SN-D-P-20 ${styles.slideInTextFromLeft}`}>
          <p>
            To improve the quality of life for patients with complex diseases by
            enhancing healthcare access, fostering social connections,
            championing patient advocacy, advancing EHR, and promoting overall
            well-being.
          </p>
          <p className={styles.blueParagraph}>
            By converging empathy with advancement, we aspire to shape a
            brighter future rooted in inclusivity, access, and empowerment. By
            uniting state-of-the-art medical technologies with the power of
            empathy, we strive to create a new paradigm of health and wellness
            rooted in inclusivity, access, and empowerment.
          </p>
        </article>
      </section>
      {/* Center part */}
      <section>
        <img src={coreValues} alt="core values" />
        <article className="SN-D-P-20">
          <aside className={styles.hoverEffect}>
            <h2 className="SN-M-H2-24">Patient-Centered Care</h2>
            <p>
              We are committed to providing our users with the highest level of
              patient-centered care, respecting their individual needs, and
              helping them to make informed decisions about their health and
              wellness.
            </p>
          </aside>
          <aside className={styles.hoverEffect}>
            <h2 className="SN-M-H2-24">Innovation</h2>
            <p>
              We believe in innovation and continuous improvement to provide the
              most comprehensive and reliable resources to our users. We will
              always seek out the latest technology and healthcare trends to
              stay ahead of the curve.
            </p>
          </aside>
          <aside className={styles.blueParagraph}>
            <h2 className="SN-M-H2-24">Integrity</h2>
            <p>
              We hold ourselves to the highest ethical standards and are
              dedicated to providing our users with accurate and reliable
              information. We will always act with honesty, transparency, and
              respect.
            </p>
          </aside>
          <aside className={styles.hoverEffect}>
            <h2 className="SN-M-H2-24">Social Responsibility</h2>
            <p>
              We are committed to being a responsible and contributing member of
              society. As a global non-profit, we will prioritize our users'
              needs over profits and will invest our resources back into the
              community.
            </p>
          </aside>
          <aside className={styles.blueParagraph}>
            <h2 className="SN-M-H2-24">Collaboration</h2>
            <p>
              We understand that complex diseases require a collaborative
              approach, and we strive to foster partnerships with healthcare
              providers, patient advocacy groups, and other stakeholders to
              ensure the best outcomes for our users.
            </p>
          </aside>
          <aside className={styles.hoverEffect}>
            <h2 className="SN-M-H2-24">Professionalism</h2>
            <p>
              We pride ourselves on maintaining a professional and respectful
              environment for our users, partners, and employees. We will always
              operate with the utmost professionalism, following industry
              standards and regulations.
            </p>
          </aside>
        </article>
      </section>
      {/* Right part */}
      <section>
        <img src={ourVision} alt="our vision" />
        <article className={`SN-D-P-20 ${styles.slideInTextFromRight}`}>
          <p>
            Our aim is to empower patients to take control of their health,
            collaborate with healthcare providers, and improve the quality of
            life for all those affected by complex diseases.
          </p>
          <p className={styles.blueParagraph}>
            Our vision is to create a world where patients living with complex
            diseases have access to high-quality healthcare providers and
            resources, regardless of geographic location or financial status.
          </p>
          <p>
            We strive to be a global non-profit leader in the integration of
            major EHR systems, providing innovative medical and wellness social
            networking platforms and patient advocacy services.
          </p>
        </article>
      </section>
    </section>
  );
};

export default Statement;
