import React, {useEffect} from "react";
import styles from "./educationCards.module.css";

function SegmentedControlModule({onTabClick}) {
    useEffect(() => {
        
        const container = document.getElementById(`${styles.mySegmentedControlContainer}`);

        if (container && !container.querySelector(`.${styles.segmentedControl}`)) {
            const segments = ['All', 'Patient', 'Provider', 'Caregiver'];
            setupSegmentedControl(container, segments);
            //add selected to first segmented
            const defaultSegment = container.querySelector(`.${styles.segment}:first-child`);
            defaultSegment.classList.add(`${styles.selected}`);
        } else {
            //normal error (avoiding creating another segmentedControl)
            // console.error('Container not found or segmentedControl already exists');
        }
        }, []);


    function setupSegmentedControl(container, segments) {
        const segmentedControl = document.createElement('div');
        segmentedControl.className = `${styles.segmentedControl}`;

        segments.forEach((segment, index) => {
            const label = document.createElement('label');
            label.className = `${styles.segment}`;
            label.innerText = segment;
        
            label.addEventListener('click', () => {
            console.log(`Selected Segment: ${index + 1}`);
    
            const selectedSegments = container.querySelectorAll(`.${styles.segment}`);
            selectedSegments.forEach((selectedSegment) => {
                selectedSegment.classList.remove(`${styles.selected}`);
                
            });

            label.classList.add(`${styles.selected}`);
            // Each label when clicked will call this function
            onTabClick(segment);
            });
    
            segmentedControl.appendChild(label);
        });
        container.appendChild(segmentedControl);
    }

    return null; 
}

export default SegmentedControlModule;