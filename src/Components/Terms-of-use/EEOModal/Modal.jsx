// import { useEffect } from 'react';
import styles from './EEO.module.css';
import EEOInnerContent from 'src/Components/Terms-of-use/EEOModal/EEOInnerContent.jsx';
// import { useToggle } from "./Components/EqualOpportunityPolicyModal/toggleModal";
// import  EOP  from "./Components/EqualOpportunityPolicyModal/EOP";
function App() {
  // const [isModalOpen, toggleModal] = useToggle(false);  
  return (
    <ModaLayout>
      <div className={styles.jctHolder}>
        <div className={isModalOpen? styles.containerModalopen : styles.container}>
          <h1 className={styles.title}>App Component</h1>
          <button className={styles.button} onClick={toggleModal}>Toggle Modal</button>
          <EOO isModalOpen={isModalOpen} toggleModal={toggleModal}/>
          {isModalOpen && <EEOInnerContent />}
        </div>
      </div>
    </ModaLayout>
  );
}

export default App;
