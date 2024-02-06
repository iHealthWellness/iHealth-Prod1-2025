import { Autocomplete, TextField } from "@mui/material";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import "./index.css";
const ProviderAutocomplete = ({
  options,
  label,
  value,
  onInputChange,
  loading,
}) => {
  return (
    <div
      className="provider-autocomplete-container"
      style={{ position: "relative" }}
    >
      <Autocomplete
        className={`provider-autocomplete ${label}`}
        value={value}
        onChange={(event, newValue) => {
          onInputChange(newValue);
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "0.5rem",
            position: "relative",
          },
        }}
        options={options}
        renderInput={(params) => <TextField {...params} label={label} />}
        popupIcon={
          <ArrowDropDownCircleRoundedIcon style={{ color: "#07235B" }} />
        }
      />
      {loading && (
        <div
          className="loader"
          style={{
            position: "absolute",
            top: "25%",
            left: "40%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            width: "2rem",
            height: "2rem",
          }}
        ></div>
      )}
    </div>
  );
};

export default ProviderAutocomplete;
