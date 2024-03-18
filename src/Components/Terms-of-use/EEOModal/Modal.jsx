// import { useEffect } from 'react';
import styles from './App.module.css';
import EqualOpportunityPolicy from './Components/EqualOpportunityPolicyModal/EOP';
import { useToggle } from "./Components/EqualOpportunityPolicyModal/toggleModal";
import  EOP  from "./Components/EqualOpportunityPolicyModal/EOP";
function App() {
  const [isModalOpen, toggleModal] = useToggle(false);  
  return (
    <div className={styles.jctHolder}>
      <div className={isModalOpen? styles.containerModalopen : styles.container}>
        <h1 className={styles.title}>App Component</h1>
        <button className={styles.button} onClick={toggleModal}>Toggle Modal</button>
        <EOP isModalOpen={isModalOpen} toggleModal={toggleModal}/>
        {isModalOpen && <EqualOpportunityPolicy />}
      </div>
    </div>

  );
}

export default App;
