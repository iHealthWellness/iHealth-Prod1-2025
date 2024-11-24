import React, { useState } from 'react';
import './pageControl.css';


function PageControl({ pages, currentPage, onPageChange }) {
    const handlePageChange = (pageNumber) => {
        onPageChange(pageNumber);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        // Array starts at 0 instead of 1, make sure reaching end of array
        if (currentPage < pages.length - 1) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className='pagination'>
            <button onClick={() => handlePrevPage()}>←</button>
            {pages.map((_, index) => (
            <button
                //ID is good for key
                key={index}
                className={currentPage === index ? 'active' : ''}
                onClick={() => onPageChange(index)}
            >
                {index+1}
            </button>
            ))}
            <button onClick={() => handleNextPage()}>→</button>
        </div>
        );
}

export default PageControl;