import styles from "./CustomSelectButton.module.css";
import customSelectArrow from "src/Assets/Icons/custom-select-arrow.svg";
import { useState } from "react";

function CustomSelectButton({ label, id, options, requiredSymbol, onChange }) {
  const [inputValue, setInputValue] = useState("");
  const [customOptions, setCustomOptions] = useState(options); // The customOptions is required to be an array of object!

  // Sets the value of the input field
  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  // Removes the empty option after first selection

  return (
    <div className={styles.selectContainerGrid}>
      <div className={styles.selectContainer}>
        <label htmlFor={id} className="SN-D-P-20">
          {label}
          {requiredSymbol}
        </label>{" "}
        {/* requiredSymbol such as "*" (string) if necessary */}
        <div className={styles.customSelect}>
          <div className={styles.selectWrapper}>
            <select id={id} value={inputValue} onChange={handleChange}>
              {/* Add option values */}
              {customOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <img src={customSelectArrow} className={styles.selectArrow} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomSelectButton;

// const [options, setOptions] = useState([
//     { value: '', label: '' },
//     { value: 'male', label: 'Male' },
//     { value: 'female', label: 'Female' },
//     { value: 'other', label: 'Other' }
//   ]);

//   const handleChange = (event) => {
//     setGender(event.target.value);
//     if (options[0].value === '') {
//       setOptions(options.slice(1)); // Remove the empty option after first selection
//     }
//   };

// <select id="gender" value={gender} onChange={handleChange}>
//         {options.map(option => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
