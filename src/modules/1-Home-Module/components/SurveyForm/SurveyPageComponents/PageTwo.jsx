import "./Pages.css";
import CustomSelectButton from "./CustomSelectButton/CustomSelectButton";
import { useState, useEffect } from "react";

function PageTwo({ updateMainFormData, canProceedToNextPage }) {
  const [formData, setFormData] = useState({
    medication: "",
    treatment: "",
    therapy: "",
    comorbities: "",
    family: "",
  });

  const isFormComplete = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  useEffect(() => {
    canProceedToNextPage(isFormComplete());
  }, [formData]);

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMainFormData(formData);
  };

  console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
      <CustomSelectButton
        options={[
          { value: "", label: "" },
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ]}
        label="Are you using any kind of medication to treat your condition?"
        id="medication"
        requiredSymbol=""
        onChange={(e) => handleInputChange("medication", e.target.value)}
      />

      <CustomSelectButton
        options={[
          { value: "", label: "" },
          { value: "selumetinib", label: "Selumetinib (Kosulego)" },
          { value: "bevacizumab", label: "Bevacizumab (Avastin)" },
          { value: "everolimus", label: "Everolimus (Afinitor)" },
          { value: "trametinib", label: "Trametinib (Mekinist)" },
          { value: "others", label: "Others" },
          { value: "n/a", label: "N/a" },
        ]}
        label="Have you ever used any of the following to treat your condition?"
        id="treatment"
        requiredSymbol=""
        onChange={(e) => handleInputChange("treatment", e.target.value)}
      />

      <CustomSelectButton
        options={[
          { value: "", label: "" },
          { value: "chemotherapy", label: "Chemotherapy" },
          { value: "radiation", label: "Radiation" },
          { value: "surgery", label: "Surgery" },
          { value: "n/a", label: "N/a" },
        ]}
        label="Have you ever received any of the following therapy?"
        id="therapy"
        requiredSymbol=""
        onChange={(e) => handleInputChange("therapy", e.target.value)}
      />

      <CustomSelectButton
        options={[
          { value: "", label: "" },
          { value: "diabetes", label: "Diabetes" },
          { value: "hypertension", label: "Hypertension" },
          { value: "asthma", label: "Asthma" },
          { value: "others", label: "Others" },
          { value: "n/a", label: "N/a" },
        ]}
        label="Do you have any other comorbities?"
        id="comorbities"
        requiredSymbol=""
        onChange={(e) => handleInputChange("comorbities", e.target.value)}
      />

      <CustomSelectButton
        options={[
          { value: "", label: "" },
          { value: "parents", label: "Parents" },
          { value: "siblings", label: "Siblings" },
          { value: "children", label: "Children" },
          { value: "no-family", label: "No one in the family" },
          { value: "others", label: "Others" },
        ]}
        label="Have any family members received the same diagnosis?"
        id="family-diagnosis"
        requiredSymbol=""
        onChange={(e) => handleInputChange("family", e.target.value)}
      />
    </form>
  );
}

export default PageTwo;
