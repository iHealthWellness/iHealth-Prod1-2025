
import React from 'react';
import './SelectedFilters.css';

const SelectedFilters = () => {
  return (
    <div className="selected-filters">
      <div className="filter-section">
        <h2>Selected Filters</h2>
        <div className="filter-chip-container">
          <div className="filter-chip">
            Neurofibromatosis
          </div>
          <div className="filter-chip">
          00501
          </div>
          <div className="filter-chip">
          NY
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h3>Provider Who Treat</h3>
        <label> 
          <input type="radio" name="provider" value="all" /> All ages
        </label>
        <label>
          <input type="radio" name="provider" value="children" /> Children
        </label>
        <label>
          <input type="radio" name="provider" value="adults" /> Adults
        </label>
      </div>

      <div className="filter-section">
        <h3>Provider Who</h3>
        <label>
          <input type="radio" name="patient" value="accepting" /> Accepts new patients
        </label>
        <label>
          <input type="radio" name="patient" value="not_accepting" /> Not accepting new patients
        </label>
      </div>

      <button className="apply-button">Apply</button>
    </div>
  );
};

export default SelectedFilters;
