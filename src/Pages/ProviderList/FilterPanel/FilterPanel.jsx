import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './FilterPanel.css';

const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <span className="filter-label">Filters:</span>
      <div className="filter-buttons">
        <button className="filter-button active">
          Disease Type
          <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
        </button>
        {/* Repeat for other buttons */}
        <button className="filter-button">
          Gender
          <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
        </button>
        <button className="filter-button">
          Practice
          <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
        </button>
        <button className="filter-button">
          Language
          <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
        </button>
      </div>
      <div className="filter-sorting">
        <span>Results found: 15</span>
        <button className="sort-button">sort</button>
      </div>
    </div>
  );
};

export default FilterPanel;
