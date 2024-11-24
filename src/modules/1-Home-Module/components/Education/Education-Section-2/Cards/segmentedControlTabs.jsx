import React, {useEffect} from "react";
import "./educationCards.css";

function SegmentedControlModule({onTabClick}) {
    useEffect(() => {
        
        const container = document.getElementById('mySegmentedControlContainer');

        if (container && !container.querySelector('.segmented-control')) {
            const segments = ['All', 'Patient', 'Provider', 'Caregiver'];
            setupSegmentedControl(container, segments);
            //add selected to first segmented
            const defaultSegment = container.querySelector('.segment:first-child');
            defaultSegment.classList.add('selected');
        } else {
            //normal error (avoiding creating another segmentedControl)
            // console.error('Container not found or segmentedControl already exists');
        }
        }, []);


    function setupSegmentedControl(container, segments) {
        const segmentedControl = document.createElement('div');
        segmentedControl.className = 'segmented-control';

        segments.forEach((segment, index) => {
            const label = document.createElement('label');
            label.className = 'segment';
            label.innerText = segment;
        
            label.addEventListener('click', () => {
            console.log(`Selected Segment: ${index + 1}`);
    
            const selectedSegments = container.querySelectorAll('.segment');
            selectedSegments.forEach((selectedSegment) => {
                selectedSegment.classList.remove('selected');
                
            });

            label.classList.add('selected');
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