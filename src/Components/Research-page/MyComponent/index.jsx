
import React, { useState, useEffect, useRef } from 'react';
import './MyComponent.css';
import Research2 from "src/Assets/Images/Research-2.png";
import Close from "src/Assets/Images/close-button.png";
import Open from "src/Assets/Icons/plus.png";

const Section = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`section ${expanded ? 'expanded' : ''}`}>
      <div className="titleContainer">
        <h2>{title}</h2>
        <div className="button" onClick={toggleExpanded} role="button" tabIndex={0}>
          <img src={expanded ? Close : Open} alt={expanded ? 'Read Less' : 'Read More'} />
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
};

const MyComponent = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach(ref => {
        if (ref) {
          const slideInAt = window.scrollY + window.innerHeight - ref.getBoundingClientRect().top;
          const elementBottom = ref.offsetTop + ref.clientHeight;
          const isHalfShown = slideInAt > ref.offsetTop;
          const isNotScrolledPast = window.scrollY < elementBottom;

          if (isHalfShown && isNotScrolledPast) {
            ref.classList.add('active');
          } else {
            ref.classList.remove('active');
          }
        }
      });
    };

    handleScroll(); // Call it once to check on load
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="container" ref={el => sectionRefs.current[0] = el}>
      <div className="textSections active">
        <Section title="1.National Institutes of Health (NIH)" content="Neurofibromatosis Research: The National Institutes of Health (NIH) is a renowned institution at the forefront of medical research. Their dedicated branch, the National Institute of Neurological Disorders and Stroke (NINDS), offers a comprehensive range of resources and updates on neurofibromatosis research. Visit their website to access grants, clinical trials, research publications, and patient support information: NIH - NINDS Neurofibromatosis Research" />
              <Section title="2.PubMed" content="Neurofibromatosis Research Articles: PubMed is a widely recognized database that provides access to a vast collection of biomedical literature. It serves as a valuable resource for researchers and professionals seeking the latest neurofibromatosis research articles, reviews, and clinical studies. Explore PubMed's neurofibromatosis publications here: PubMed - Neurofibromatosis Research" />
              <Section title="3.Neurofibromatosis Network" content="The Neurofibromatosis Network is a non-profit organization committed to supporting individuals and families affected by neurofibromatosis. Their website offers an extensive range of resources, including research updates, educational materials, patient support programs, and community forums. Visit the Neurofibromatosis Network's website for more information: Neurofibromatosis Network" />
              <Section title="4.ClinicalTrials.gov" content="Neurofibromatosis Research Articles: PubMed is a widely recognized database that provides access to a vast collection of biomedical literature. It serves as a valuable resource for researchers and professionals seeking the latest neurofibromatosis research articles, reviews, and clinical studies. Explore PubMed's neurofibromatosis publications here: PubMed - Neurofibromatosis Research" />
        </div>
        <div className="photo">
          <img src={Research2} alt="Display" />
        </div>
      </div>
      <section id="tools" className="research-tools" ref={el => sectionRefs.current[1] = el}>
        <div className="reminder">
          <h2 className="reminder1">Do you know?</h2>
          <p className="reminder2">
            These resources can serve as valuable tools for researchers and individuals interested
            in NF research. It's important to explore specific databases, funding opportunities, and
            networks relevant to your research interests or goals. Additionally, staying up-to-date
            with the latest research publications and attending conferences or scientific meetings
            can further enhance knowledge and collaboration in the field of NF research.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MyComponent;










