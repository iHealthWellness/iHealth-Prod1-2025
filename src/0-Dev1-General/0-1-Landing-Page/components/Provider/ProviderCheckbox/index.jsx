import { FormControlLabel, Checkbox } from "@mui/material";

const ProviderCheckbox = ({ label, value, onCheckboxChange }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={value}
          onChange={(event) => {
            onCheckboxChange(event.target.checked);
          }}
        />
      }
      label={label}
      style={{ color: "#07235B" }}
      sx={{
        "@media (max-width: 1023px)": {
          display: "none",
        },
      }}
    />
  );
};

export default ProviderCheckbox;
