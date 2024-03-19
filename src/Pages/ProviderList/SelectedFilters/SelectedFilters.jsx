import React from 'react';
import './SelectedFilters.css';

const SelectedFilters1 = () => {
  return (

    
    
    <div className="selected-filters1">
      <div className="filter-section1">
        <h2>Selected Filters</h2>
        <div className="filter-chip-container1">
          <div className="filter-chip1">
            NF 1
          </div>
          <div className="filter-chip1">
          NY
          </div>
          <div className="filter-chip1">
          00501
          </div>
        </div>
      </div>

      <div className="filter-section1">
        <h3>Age</h3>
        <label> 
          <input type="radio" name="provider1" value="all" /> All ages
        </label>
        <label> 
          <input type="radio" name="provider1" value="all" /> &lt;2
        </label>
        <label>
          <input type="radio" name="provider1" value="adults" /> 3-12
        </label>
        <label>
          <input type="radio" name="provider1" value="adults" /> 13-18
        </label>
        <label>
          <input type="radio" name="provider1" value="adults" /> 19-64
        </label>
        <label>
          <input type="radio" name="provider1" value="adults" /> +65
        </label>
      </div>

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
