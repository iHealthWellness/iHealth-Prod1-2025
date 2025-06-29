import React from "react";
import "./ProgressBar.css"; // Import the CSS file for styling

const ProgressBar = ({ progress, totalSteps }) => {
  return (
    <div className="progress-dot-bar">
      {/* Generate dots based on the total number of steps */}

      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`dot ${index < progress ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
