import { Autocomplete, TextField, Tooltip, IconButton, Paper } from "@mui/material";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./index.module.css"; 

const ProviderAutocomplete = ({
  options,
  label,
  value,
  onInputChange,
  loading,
  paperWidth,
  getOptionLabel,
  isOptionDisabled
}) => {
  const defaultGetOptionLabel = (option) => {
    if (typeof option === 'string') return option;
    if (option && typeof option === 'object' && 'name' in option) return option.name;
    return '';
  };

  const finalGetOptionLabel = getOptionLabel || defaultGetOptionLabel;

  return (
    <div className={styles.genericProviderAutocompleteContainer} style={{ position: "relative" }}>
      <Autocomplete
        className={`${styles.genericProviderAutocomplete} ${styles[label]}`}
        value={value}
        onChange={(event, newValue) => {
          onInputChange(newValue);
        }}
        options={options}
        getOptionLabel={finalGetOptionLabel}
        isOptionEqualToValue={(option, value) => 
          finalGetOptionLabel(option) === finalGetOptionLabel(value)
        }
        PaperComponent={(props) => (
          <Paper
            {...props}
            style={{
              width: paperWidth,
              backgroundColor: '#f0f7fd',
              boxShadow: 'none',
            }}
          />
        )}
        componentsProps={{
          clearIndicator: {
            component: (props) => (
              <Tooltip title="Clear" arrow>
                <IconButton {...props}>
                  <ClearIcon />
                </IconButton>
              </Tooltip>
            ),
          },
          popupIndicator: {
            component: (props) => (
              <Tooltip title="Open" arrow>
                <IconButton {...props}>
                  <ArrowDropDownCircleRoundedIcon style={{ color: "#07235B" }} />
                </IconButton>
              </Tooltip>
            ),
          },
          closeIndicator: {
            component: (props) => (
              <Tooltip title="Close" arrow>
                <IconButton {...props}>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            ),
          },
        }}
        renderInput={(params) => <TextField {...params} label={label} />}
        renderOption={(props, option, { selected, inputValue }) => (
          <li
            {...props}
            style={{
              zIndex: 100,
              color: selected ? '#0d99ff' : 'black',
              backgroundColor: selected ? '#f0f7fd' : '#f0f7fd',
              opacity: isOptionDisabled && isOptionDisabled(option) ? 0.5 : 1,
              pointerEvents: isOptionDisabled && isOptionDisabled(option) ? 'none' : 'auto',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'underline';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none';
            }}
          > 
            {finalGetOptionLabel(option)}
          </li>
        )}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "0.5rem",
            position: "relative",
          },
        }}
      />
       {loading && (
        <div
          className={styles.loader}
          style={{
            position: "absolute",
            top: "25%",
            left: "40%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            borderRadius: '50%',
            width: "2rem",
            height: "2rem",
            border: "5px solid #062758",
            borderTop: "5px solid #f1f1f1",
          }}
        ></div>
      )}
    </div>
  );
};

export default ProviderAutocomplete;

