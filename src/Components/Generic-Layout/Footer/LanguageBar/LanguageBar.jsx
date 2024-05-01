import { Select, MenuItem } from "@mui/material";
import { useState } from "react";

function LanguageBar() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
      <Select
        value={selectedLanguage}
        onChange={handleChange}
        sx={{
          color: "white",
          border: 0,
          outline: 0,
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(228, 219, 233, 0)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(228, 219, 233, 00)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(228, 219, 233, 0)",
          },
          "& .MuiSelect-icon": {
            color: "white",
          },
          "@media (max-width: 768px)": {
            minWidth: "50px", // Adjust as needed
          },
          "@media (max-width: 576px)": {
            minWidth: "80px",
            fontSize: "0.8rem",
          },
          "& .MuiSelect-select": {
            padding: 0,
          },
        }}
      >
        <MenuItem
          value="en"
          sx={{
            "@media (max-width: 576px)": {
              minWidth: "80px",
              fontSize: "0.8rem",
            },
          }}
        >
          English
        </MenuItem>
        <MenuItem
          value="cn"
          sx={{
            "@media (max-width: 576px)": {
              minWidth: "80px",
              fontSize: "0.8rem",
            },
          }}
        >
          Chinese
        </MenuItem>
        <MenuItem
          value="fr"
          sx={{
            "@media (max-width: 576px)": {
              minWidth: "80px",
              fontSize: "0.8rem",
            },
          }}
        >
          Français
        </MenuItem>
        <MenuItem
          value="es"
          sx={{
            "@media (max-width: 576px)": {
              minWidth: "80px",
              fontSize: "0.8rem",
            },
          }}
        >
          Español
        </MenuItem>
        <MenuItem
          value="de"
          sx={{
            "@media (max-width: 576px)": {
              minWidth: "80px",
              fontSize: "0.8rem",
            },
          }}
        >
          Deutsch
        </MenuItem>
      </Select>
    </>
  );
}

export default LanguageBar;
