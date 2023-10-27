import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import Headache from "src/Assets/Images/headache.jpg";
import "./index.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    components: {
        MuiTab: {
          styleOverrides: {
            root: {
              color: 'black', // Text color for unselected tabs
              '&.Mui-selected': {
                color: 'black', // Text color for the selected tab
              },
              minWidth: '30rem', // Increase the minimum width to make the tabs wider
            },
          },
        },
        MuiTabs: {
          styleOverrides: {
            indicator: {
              backgroundColor: 'black', // Indicator (underline) color
              height: '.3rem',
              borderRadius:'.3rem' // Increase the height to make the indicator taller
            },
          },
        },
      },
  });
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function index() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
<div>
    <Box className='main-tab-container' sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <ThemeProvider theme={theme}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab 
          sx={{textTransform:"none",  fontSize:"1.5rem", fontWeight:"500",padding:"1rem"}}
            label="Neurofibromatosis 1 (NF1)"
            {...a11yProps(0)}
          />
          <Tab
             sx={{textTransform:"none",  fontSize:"1.5rem", fontWeight:"500"}}
            label="Neurofibromatosis 2 (NF2)"
            {...a11yProps(1)}
          />
          <Tab
            sx={{textTransform:"none",  fontSize:"1.5rem", fontWeight:"500"}}
            label="Schwannomatosis (SWN/NF3)"
            {...a11yProps(2)}
          />
        </Tabs>
        </ThemeProvider>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="tab-container">
          <div className="tab-paragraph">
          NF1 is the most common type of <br />neurofibromatosis, affecting about 1
            in 3,000 <br />people worldwide. It is caused by mutations in<br /> the NF1 gene
            and results in the growth of tumors <br />on nerves throughout the body.
            These tumors,<br /> known as neurofibromas, can vary in size and<br /> may cause
            a range of symptoms, including skin<br /> changes, bone deformities, and
            learning<br /> disabilities.
          </div>
          <img className="tab-image" src={Headache} />
          </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className="tab-container">
          <div className="tab-paragraph">
            NF2 is the most common type of <br />neurofibromatosis, affecting about 1
            in 3,000 <br />people worldwide. It is caused by mutations in<br /> the NF1 gene
            and results in the growth of tumors <br />on nerves throughout the body.
            These tumors,<br /> known as neurofibromas, can vary in size and<br /> may cause
            a range of symptoms, including skin<br /> changes, bone deformities, and
            learning<br /> disabilities.
          </div>
          <img className="tab-image" src={Headache} />
          </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <div className="tab-container">
          <div className="tab-paragraph">
          NF3 is the most common type of <br />neurofibromatosis, affecting about 1
            in 3,000 <br />people worldwide. It is caused by mutations in<br /> the NF1 gene
            and results in the growth of tumors <br />on nerves throughout the body.
            These tumors,<br /> known as neurofibromas, can vary in size and<br /> may cause
            a range of symptoms, including skin<br /> changes, bone deformities, and
            learning<br /> disabilities.
          </div>
          <img className="tab-image" src={Headache} />
          </div>
      </CustomTabPanel>
     
    </Box>
    <hr />
    </div>
  );
}

export default index;
