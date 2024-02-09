import { useRef, useEffect } from "react";
import "./index.css";
import doctor from "src/Assets/Images/doctor.jpg";

function index() {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          textRef.current.classList.add("animated-text");
        }
      },
      { threshold: 0.4 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="cause-container">
        <img loading="lazy" className="doc-img" src={doctor} />
        <div ref={textRef}>
          <h1 className="SN-D-H2-36">Causes and Genetic Aspects:</h1>
          <div className="SN-D-P-20">
            <p>
              The primary cause of neurofibromatosis is genetic mutations. NF1,
              NF2, and Schwannomatosis can be inherited from a parent who
              carries the mutated gene, or they can occur spontaneously due to
              new mutations in the affected person. Individuals with NF have a
              50% chance of passing the condition on to their children.
            </p>
            <p>
              Genetic testing can identify mutations associated with specific
              types of NF, aiding in early diagnosis and management. While there
              is no cure for NF, treatment focuses on managing symptoms,
              monitoring tumor growth, and providing supportive care.
            </p>
            <p>
              In conclusion, neurofibromatosis encompasses a group of genetic
              disorders that result in the formation of tumors on nerves,
              leading to various health issues. Understanding the different
              types of NF, their causes, and the genetic aspects involved is
              crucial for early detection, appropriate medical intervention, and
              improved quality of life for affected individuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
