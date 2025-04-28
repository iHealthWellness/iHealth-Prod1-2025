import styles from "./index.module.css"; 
import Team from "src/Assets/Images/team.png";
import Partnership from "src/Assets/Images/partnership.png";
import Launching from "src/Assets/Images/launching.png";
import Driving from "src/Assets/Images/driving-healthcare.png";

const Programs = () => {
  return (
    <div className={styles.container}>
        <div className={styles.programSection}>
            <img
            className={styles.image} 
            src={Team}
            />
            <div className={styles.description}>
                <span  className={`SN-T-H3-24 ${styles.spanText}`}>2025 OUTLOOK</span>
                <h4 className={`SN-D-H2-32 ${styles.titleText}`}>Strengthening Our Team</h4>
                <div className={`${styles.subheading} SN-D-T-M-P-20`}>We are dedicated to growing a multidisciplinary team to serve patients, healthcare providers, and pharmaceutical companies. By building expertise and fostering collaboration, we aim to elevate healthcare experiences for all.</div>
            </div>
        </div>
        <div className={styles.programSection}>
            <img
            className={styles.image}
            src={Partnership}
            />
            <div className={styles.description}>
                <span className={`SN-T-H3-24 ${styles.spanText}`}>2025 OUTLOOK</span>
                <h4 className={`SN-D-H2-32 ${styles.titleText}`}>Forming Strategic Partnerships</h4>
                <div className={`${styles.subheading} SN-D-T-M-P-20`}>To broaden our reach, we will:
                    <ul>
                        <li>Collaborate with leading health systems to improve care delivery.</li>
                        <li>Partner with advocacy organizations to amplify patient voices.</li>
                        <li>Work closely with pharmaceutical companies to enhance clinical trial accessibility.</li>
                    </ul>                    
                </div>
            </div>
        </div>
        <div className={styles.programSection}>
            <img
            className={styles.image}
            src={Launching}
            />
            <div className={styles.description}>
                <span className={`SN-T-H3-24 ${styles.spanText}`}>2025 OUTLOOK</span>
                <h4  className={`SN-D-H2-32 ${styles.titleText}`}>Launching Pilot Programs</h4>
                <div className={`${styles.subheading} SN-D-T-M-P-20`}>In 2025, we will implement a pilot program with select patients and healthcare providers. This initiative will:
                    <ul>
                        <li>Gather real-world insights to refine iHealth360 tools and services.</li>
                        <li>Enhance patient-provider communication through advanced features.</li>
                        <li>Pilot innovative programs to address unmet needs in complex healthcare.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.programSection}>
            <img
            className={styles.image}
            src={Driving}
            />
            <div className={styles.description}>
                <span className={`SN-T-H3-24 ${styles.spanText}`}>2025 OUTLOOK</span>
                <h4 className={`SN-D-H2-32 ${styles.titleText}`}>Driving Healthcare Integration</h4>
                <div className={`${styles.subheading} SN-D-T-M-P-20`}>Our mission is to seamlessly integrate iHealth360 solutions into existing healthcare networks, ensuring:
                    <ul>
                        <li>Full interoperability with EHR systems.</li>
                        <li>Improved care coordination and decision-making.</li>
                        <li>A sustainable and scalable approach to long-term success.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Programs;
