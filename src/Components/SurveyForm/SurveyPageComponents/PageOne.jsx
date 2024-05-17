import React, { useState, useEffect } from "react";
import "./Pages.css";
import CustomSelectButton from "./CustomSelectButton/CustomSelectButton";

function PageOne({ updateMainFormData, canProceedToNextPage }) {
  const [formData, setFormData] = useState({
    email: "",
    age: "",
    gender: "",
    pregnant: "",
    ethinicity: "",
  });

  const [selectedGender, setSelectedGender] = useState("");

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleGenderChange = (e) => {
    const value = e.target.value;
    setSelectedGender(value);
    handleInputChange("gender", value);
  };

  const isFormComplete = () => {
    const isFemale = formData.gender === "female";

    return Object.entries(formData).every(([key, value]) => {
      if (!isFemale && key === "pregnant") {
        return true;
      }
      return value.trim() !== "";
    });
  };

  useEffect(() => {
    canProceedToNextPage(isFormComplete());
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMainFormData(formData); // Update the main form's state
    // Later navigate to the result page
  };

  const ageOptions = [
    { value: "", label: "" },
    { value: 1, label: "Less than 1 year" },
  ];

  for (let i = 2; i < 99; i++) {
    ageOptions.push({ value: i, label: i });
  }
  ageOptions.push({ value: 99, label: "> 99" });
  return (
    <form onSubmit={handleSubmit}>
      <div className="survey-required-section SN-D-P-20">
        <label>Email Address*</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
      </div>
      <CustomSelectButton
        options={ageOptions}
        label="Age"
        id="age"
        requiredSymbol="*"
        onChange={(e) => handleInputChange("age", e.target.value)}
      />

      <CustomSelectButton
        options={[
          { value: "", label: "" },
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "other", label: "Other" },
        ]}
        label="Gender"
        id="gender"
        requiredSymbol=""
        onChange={handleGenderChange}
      />

      {selectedGender === "female" && (
        <CustomSelectButton
          options={[
            { value: "", label: "" },
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
          label="Are you pregnant?"
          id="pregnant"
          requiredSymbol="*"
          onChange={(e) => handleInputChange("pregnant", e.target.value)}
        />
      )}

      <CustomSelectButton
        options={[
          { value: "", label: "" },
          { value: "american indian", label: "American Indian" },
          { value: "black", label: "Black" },
          { value: "hispanic", label: "Hispanic" },
          { value: "middle eastern", label: "Middle Eastern" },
          { value: "white", label: "White" },
          { value: "others", label: "Others" },
        ]}
        label="What is your ethnicity?"
        id="ethnicity"
        requiredSymbol=""
        onChange={(e) => handleInputChange("ethinicity", e.target.value)}
      />
    </form>
  );
}

export default PageOne;
