import React from 'react';
import './SelectedFilters.css';

const SelectedFilters1 = () => {
  return (

    
    
    <div className="selected-filters1">
     <div className='back-color'>
      <div className="filter-section1">
        <h2>Selected Filters</h2>
        <div className="filter-chip-container1">
          <div className="filter-chip1">
            NF 1
          </div>
          <div className="filter-chip1">
          Clinical
          </div>
          <div className="filter-chip1">
          NY
          </div>
        </div>
      </div>
      </div>

      <div className="filter-section1">
        <h3>Facility Type</h3>
        <div className="filter-chip1">
          
          </div>
      </div>
      <hr className="divider-line" />

      <div className="filter-section1">
        <h3>Scheduling</h3>
        <label className="label-style">
        <input type="checkbox" className="checkbox-style" name="patient1" value="accepting" /> Accepts new patients
      </label>
      <label className="label-style">
        <input type="checkbox" className="checkbox-style" name="patient1" value="not_accepting" /> Not accepting new patients
      </label>
      </div>
      

      <button className="apply-button1">Apply</button>
    </div>
    
  );
};

export default SelectedFilters1;
