import React from "react";
import styles from "./index.module.css";
import Education from "src/modules/1-Home-Module/components/Education";

const index = () =>{
    return(
        <div className={styles.educationPage}>
            <Education/>
        </div>
        
    );
    

};

export default index;