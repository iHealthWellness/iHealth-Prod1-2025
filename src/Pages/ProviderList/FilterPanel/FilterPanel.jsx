import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './FilterPanel.css';

const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <div className="filter-info">
        {/* <span className="filter-label">Filters:</span>
        <span className="results-found">Results found: 15</span> */}
      </div>
      <div className="filter-buttons">
        <button className="filter-button">Disease Type<FontAwesomeIcon icon={faChevronDown} className="icon-chevron-down" /></button>
        <button className="filter-button">Gender<FontAwesomeIcon icon={faChevronDown} className="icon-chevron-down" /></button>
        <button className="filter-button">Practice<FontAwesomeIcon icon={faChevronDown} className="icon-chevron-down" /></button>
        <button className="filter-button">Language<FontAwesomeIcon icon={faChevronDown} className="icon-chevron-down" /></button>
      </div>
    </div>
  );
};

export default FilterPanel;
