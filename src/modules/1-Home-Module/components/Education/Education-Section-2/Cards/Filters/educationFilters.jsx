import styles from "./educationFilters.module.css";
import { useEffect, useState } from "react";

function EducationFilterModule({onFilterChange}) {
    const [currentFilter, setCurrentFilter] = useState({
        // Initialize filter properties
        disease: {neurofibromatosis:true},
        nfType: {nf1:false, nf2:false, nf3:false },
        sourceType: {article: false, pdf:false, podcast:false, clinicalStudy:false, academicJournal:false },
        age: {children:false}
    });

    const onCheckboxChange= (selectedCheckbox, evt) => { 

        // Which checkbox changed? 
        const mainCategory = selectedCheckbox.split(".")[0];
        const subCategory = selectedCheckbox.split(".")[1];
        const currentFilterCopy = {...currentFilter};
        currentFilterCopy[mainCategory][subCategory] = evt.target.checked;

        setCurrentFilter(currentFilterCopy);
        console.log(evt);
        console.log(currentFilter);

        onFilterChange(currentFilter);
    }

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    useEffect(() => {
        let previousWidth = window.innerWidth;
        const allLists = document.querySelectorAll(`.${styles.dropdownCheckList}`);
        const attachEventListeners = () => {            
            allLists.forEach(
                (dropdownList) => {
                    // Check if screen size is larger than 860 (smaller screen sizes)
                    if(window.innerWidth > 860){
                        // Add the "visible" class initially
                        dropdownList.classList.add(`${styles.visible}`);
                    }
                    // Attach click event listener
                    dropdownList.getElementsByClassName(`${styles.anchor}`)[0].onclick = function(evt) {
                        dropdownList.classList.toggle(`${styles.visible}`);
                    }                        
                }
            )
        };
        attachEventListeners(); // Attach event listeners initially

        // Reattach event listeners whenever the DOM changes
        const observer = new MutationObserver(attachEventListeners);
        observer.observe(document.body, { subtree: true, childList: true });

        // Called each time screen is resized
        window.addEventListener("resize", () => {

                // Check if screen size is less than or equal to 860 
                if(window.innerWidth <= 860 && previousWidth > 860){
                    allLists.forEach((dropdownList) => {
                        // Remove the "visible" class initially
                        dropdownList.classList.remove(`${styles.visible}`);
                    })
                }

                // Complete opposite than first condition
                if(window.innerWidth > 860 && previousWidth <= 860){
                    allLists.forEach((dropdownList) => {
                        dropdownList.classList.add(`${styles.visible}`);
                    })
                }
                // Update previous width so we can track where we resized from 
                previousWidth=window.innerWidth;
            
        });

        return () => {
            observer.disconnect(); // Clean up observer on component unmount
        };
        
        
    }, [])

    return (
        <div className={styles.filterBox}>
            <div className={styles.filterInnerBox}>
                <div className={styles.categorySearch}>
                    <span><h4>Search categories by</h4></span><span class={styles.circle}></span>
                </div>
                <div id={styles.list} class={styles.dropdownCheckList} tabindex="100">
                    <span class={styles.anchor}><h4>Disease</h4></span>    
                    <ul class={styles.items}>
                            <li><input className={styles.checkbox} type="checkbox" checked={currentFilter.disease.neurofibromatosis} onChange={(evt) => onCheckboxChange("disease.neurofibromatosis", evt)}/><span id={styles.checkboxText}>Neurofibromatosis</span></li>
                    </ul>                    
                </div>
                <div id={styles.list} class={styles.dropdownCheckList} tabindex="100">
                    <span class={styles.anchor}><h4>Type</h4></span>
                        <ul class={styles.items}>
                            <li><input className={styles.checkbox} type="checkbox" checked={currentFilter.nfType.nf1} onChange={(evt) => onCheckboxChange("nfType.nf1", evt)}/><span id={styles.checkboxText}>NF 1</span></li>
                            {!currentFilter.sourceType.pdf && !currentFilter.sourceType.podcast && !currentFilter.sourceType.clinicalStudy && !currentFilter.sourceType.academicJournal ? (
                            <li><input className={styles.checkbox} type="checkbox" checked={currentFilter.nfType.nf2} onChange={(evt) => onCheckboxChange("nfType.nf2", evt)}/><span id={styles.checkboxText}>NF 2</span></li>
                            ): null}
                            {!currentFilter.sourceType.pdf && !currentFilter.sourceType.podcast && !currentFilter.age.children ? (
                                <li><input className={styles.checkbox} type="checkbox" checked={currentFilter.nfType.nf3} onChange={(evt) => onCheckboxChange("nfType.nf3", evt)}/><span id={styles.checkboxText}>SWN (NF3)</span></li>
                            ): null}
                        </ul>
                </div>
                <div id={styles.list} class={styles.dropdownCheckList} tabindex="100">
                    <span class = {styles.anchor}><h4>Source Type</h4></span>
                        <ul class={styles.items}>
                                <li><input className={styles.checkbox} type="checkbox" checked={currentFilter.sourceType.article} onChange={(evt) => onCheckboxChange("sourceType.article", evt)}/><span id={styles.checkboxText}>Article</span></li>
                                {!currentFilter.nfType.nf2 && !currentFilter.nfType.nf3 ? (
                                    <li><input className={styles.checkbox} type="checkbox" checked={currentFilter.sourceType.pdf} onChange={(evt) => onCheckboxChange("sourceType.pdf", evt)}/><span id={styles.checkboxText}>PDF</span></li>
                                ):null}
                                {!currentFilter.nfType.nf2 && !currentFilter.nfType.nf3 && !currentFilter.age.children ? (
                                    <li><input className={styles.checkbox} type="checkbox" checked={currentFilter.sourceType.podcast} onChange={(evt) => onCheckboxChange("sourceType.podcast", evt)}/><span id={styles.checkboxText}>Podcast</span></li>
                                ):null}
                                {!currentFilter.disease.neurofibromatosis && !currentFilter.nfType.nf1 && !currentFilter.nfType.nf2 && !currentFilter.nfType.nf3 && !currentFilter.age.children? (
                                    <li><input className={styles.checkbox} type="checkbox" checked={currentFilter.sourceType.clinicalStudy} onChange={(evt) => onCheckboxChange("sourceType.clinicalStudy", evt)}/><span id={styles.checkboxText}>Clinical Study</span></li>
                                ) : null}
                                {!currentFilter.nfType.nf2 && !currentFilter.age.children ? (
                                    <li><input className={styles.checkbox} type="checkbox" checked={currentFilter.sourceType.academicJournal} onChange={(evt) => onCheckboxChange("sourceType.academicJournal", evt)}/><span id={styles.checkboxText}>Academic Journal</span></li>
                                ):null}                               
                        </ul>
                </div>
                {!currentFilter.nfType.nf3 && !currentFilter.sourceType.podcast && !currentFilter.sourceType.clinicalStudy && !currentFilter.sourceType.academicJournal && (
                    <div id={styles.list} class={styles.dropdownCheckList} tabindex="100">
                        <span class = {styles.anchor}><h4>Age</h4></span>
                            <ul class={styles.items}>
                                <li><input className={styles.checkbox} type="checkbox" checked={currentFilter.age.children} onChange={(evt) => onCheckboxChange("age.children", evt)}/><span id={styles.checkboxText}>Children</span></li>
                            </ul>
                    </div>
                )}
            </div>
            
        </div>
        
    );
}

export default EducationFilterModule;
