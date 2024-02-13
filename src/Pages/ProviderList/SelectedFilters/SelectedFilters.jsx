import React from 'react';
import './SelectedFilters.css';

const SelectedFilters1 = () => {
  return (
    <div className="selected-filters1">
      <div className="filter-section1">
        <h2>Selected Filters</h2>
        <div className="filter-chip-container1">
          <div className="filter-chip1">
            Neurofibromatosis
          </div>
          <div className="filter-chip1">
          00501
          </div>
          <div className="filter-chip1">
          NY
          </div>
        </div>
      </div>

      <div className="filter-section1">
        <h3>Provider Who Treat</h3>
        <label> 
          <input type="radio" name="provider1" value="all" /> All ages
        </label>
        <label>
          <input type="radio" name="provider1" value="children" /> Children
        </label>
        <label>
          <input type="radio" name="provider1" value="adults" /> Adults
        </label>
      </div>

      <div className="filter-section1">
        <h3>Provider Who</h3>
        <label>
          <input type="radio" name="patient1" value="accepting" /> Accepts new patients
        </label>
        <label>
          <input type="radio" name="patient1" value="not_accepting" /> Not accepting new patients
        </label>
      </div>

      <button className="apply-button1">Apply</button>
    </div>
  );
};

export default SelectedFilters1;
