import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import Headache from "src/Assets/Images/headache.jpg";
import Lab from "src/Assets/Images/understand-nf-lab.jpg";
import Neuron from "src/Assets/Images/understand-nf-neurons.jpg";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: "black", // Text color for unselected tabs
          "&.Mui-selected": {
            color: "black", // Text color for the selected tab
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "black", // Indicator (underline) color
          height: ".3rem",
          borderRadius: ".3rem", // Increase the height to make the indicator taller
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
      <Box
        className="main-tab-container"
        sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <ThemeProvider theme={theme}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className="custom-tabs"
            >
              <Tab
                sx={{
                  textTransform: "none",
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  padding: "1rem",
                }}
                label="NF1"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  textTransform: "none",
                  fontSize: "1.5rem",
                  fontWeight: "500",
                }}
                label="NF2"
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  textTransform: "none",
                  fontSize: "1.5rem",
                  fontWeight: "500",
                }}
                label="Schwannomatosis"
                {...a11yProps(2)}
              />
            </Tabs>
          </ThemeProvider>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="tab-text">
            <img loading="lazy" className="tab-image" src={Headache} />
            <div className="SN-D-P-20">
              NF1 is the most common type of neurofibromatosis, affecting about
              1 in 3,000 people worldwide. It is caused by mutations in the NF1
              gene and results in the growth of tumors on nerves throughout the
              body. These tumors, known as neurofibromas, can vary in size and
              may cause a range of symptoms, including skin changes, bone
              deformities, and learning disabilities.
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="tab-text">
            <img loading="lazy" className="tab-image" src={Lab} />
            <div className="SN-D-P-20">
              NF2 is rarer than NF1, occurring in approximately 1 in 25,000
              births. This type is characterized by the development of tumors on
              the auditory nerves, leading to hearing loss and balance issues.
              NF2 is caused by mutations in the NF2 gene and can also affect
              other nerves in the body, causing problems such as facial weakness
              or numbness.
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className="tab-text">
            <img loading="lazy" className="tab-image" src={Neuron} />
            <div className="SN-D-P-20">
              Schwannomatosis is the least common type of neurofibromatosis.
              Unlike NF1 and NF2, Schwannomatosis only involves the growth of
              schwannomas, which are tumors that develop on the Schwann cells
              that wrap around nerves. These tumors typically cause pain but do
              not lead to hearing loss, making Schwannomatosis distinct from
              NF2.
            </div>
          </div>
        </CustomTabPanel>
      </Box>
      <hr />
    </div>
  );
}

export default index;
