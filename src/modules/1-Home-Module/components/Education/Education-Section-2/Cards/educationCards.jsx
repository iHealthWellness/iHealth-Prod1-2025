import SegmentedControlModule from "./segmentedControlTabs";
import CardList from "./cardList";
import EducationHeaderModule from "../../Education-Section-1/educationHeader";
import EducationFilterModule from "./Filters/educationFilters";
import styles from "./educationCards.module.css";
import { useState } from "react";

function EducationCardModule() {
    const [currentTab, setCurrentTab] = useState("All");
    // Arrow function, name of function to left of equal sign, () is for function parameters, function body in {}
    const onTabClick = (tab) => {
        setCurrentTab(tab);
        // Test
        console.log(tab, " was clicked");
    } 
    const [currentFilter, setCurrentFilter] = useState({
        disease: {neurofibromatosis:false},
        nfType: {nf1:false, nf2:false, nf3:false },
        sourceType: {article:false, pdf:false, podcast:false, clinicalStudy:false, academicJournal:false },
        age: {children:false}
    });
    const onFilterChange = (filter) => {
        setCurrentFilter(filter);
        console.log(filter, " was  checked");
    }

    return (
        <div className={styles.outerBox}>
            {currentTab === "All" ? <EducationHeaderModule/> : null}
            <div
            className={styles.h4Container}
            style={{ alignSelf:"center", marginTop: "20px"  }}
            >
                <h4>
                    <p id="bold-text">Education</p>
                </h4>
            </div>
            <div id={styles.mySegmentedControlContainer} className = {styles.stickyItem} style={{ alignSelf: "center", marginTop: "20px"}}>
                <SegmentedControlModule
                    onTabClick={(tab) => onTabClick(tab)}
                />
                { currentTab === "Patient" ? 
                <div style={{margin: "20px 35px 0px", fontSize: "20px"}}>
                    <p>
                    Discover a wealth of resources to understand NF better, 
                    from treatment options to daily management strategies. 
                    Gain the knowledge to confidently navigate your NF journey with resilience and optimism.                
                    </p>
                </div>: null}
                { currentTab === "Provider" ? 
                <div style={{margin: "20px 35px 0px", fontSize: "20px"}}>
                    <p>
                    Access cutting-edge information, research updates, and best 
                    practices to enhance your care for NF patients. Stay at the forefront of 
                    advancements and connect with a network of professionals committed to improving outcomes.
                    </p>
                </div>: null}
                { currentTab === "Caregiver" ? 
                <div style={{margin: "20px 35px 0px", fontSize: "20px"}}>
                    <p>
                    Find support and guidance as you navigate the role of a caregiver for someone with NF.
                    Access resources that provide insights into caregiving strategies, emotional support, 
                    and ways to optimize the quality of life for your loved ones.
                    </p>
                </div> : null}  
            </div>          
            <div className={styles.innerBox}>
                <EducationFilterModule
                    onFilterChange = {(filter) => onFilterChange(filter)}
                />                    
                <div className={styles.cardBox}>
                    <CardList
                        tab={currentTab}
                        filter ={currentFilter}
                    />
                </div>                
            </div>
        </div>
        
    );
}

export default EducationCardModule;