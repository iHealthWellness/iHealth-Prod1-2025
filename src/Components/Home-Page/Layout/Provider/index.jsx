import { useState, useEffect } from "react";

import ButtonsSearchDonate from "./ButtonsSearchDonate";
import ProviderAutocomplete from "./ProviderAutocomplete";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import { Button } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import ProviderServices from "src/Services/provider";

import "./index.css";
import ProviderCheckbox from "./ProviderCheckbox";

const Provider = () => {
  const [diseases, setDiseases] = useState([]);
  const [states, setStates] = useState([]);
  const [specialities, setSpecialities] = useState([]);

  const [diseaseValue, setDiseaseValue] = useState("");
  const [specialtyValue, setSpecialtyValue] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [acceptingNewPatients, setAcceptingNewPatients] = useState(false);
  const [treatsChildren, setTreatsChildren] = useState(false);

  const GetLocationInfo = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.log(error)
    );
  };

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const diseaseRes = await ProviderServices.handleGetAllDisease();
        const specialtyRes = await ProviderServices.handleGetAllSpeciality();
        const stateRes = await ProviderServices.handleGetAllState();

        setDiseases(diseaseRes.data);
        setStates(stateRes.data);
        setSpecialities(specialtyRes.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProviders();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(diseaseValue);
    console.log(specialtyValue);
    console.log(stateValue);
    console.log(treatsChildren);
    console.log(acceptingNewPatients);
  };

  return (
    <section id="Home-Page-provider-container" className="provider-container">
      <div className="provider-inner-container">
        <h2 className="provider-heading">
          <PersonSearchOutlinedIcon
            sx={{
              "@media (min-width: 480px)": {
                fontSize: "4rem",
              },
              "@media (min-width: 1024px)": {
                fontSize: "2rem",
              },
            }}
          />
          Search & Find a Medical or Wellness Provider
        </h2>
        <form className="provider-form" onSubmit={handleSubmit}>
          <div className="provider-form-inputs">
            <div className="provider-form-field">
              <ProviderAutocomplete
                options={diseases}
                label="Disease"
                value={diseaseValue}
                onInputChange={setDiseaseValue}
              />
              <ProviderCheckbox
                label="Accepting New Patients"
                value={acceptingNewPatients}
                onCheckboxChange={setAcceptingNewPatients}
              />
            </div>
            <div className="provider-form-field">
              <ProviderAutocomplete
                options={specialities}
                label="Specialties"
                value={specialtyValue}
                onInputChange={setSpecialtyValue}
              />
              <ProviderCheckbox
                label="Treats Children"
                value={treatsChildren}
                onCheckboxChange={setTreatsChildren}
              />
            </div>
            <div className="provider-form-field">
              <ProviderAutocomplete
                options={states}
                label="State"
                value={stateValue}
                onInputChange={setStateValue}
              />
              <Button
                variant="text"
                startIcon={<PinDropIcon style={{ marginBottom: "5px" }} />}
                style={{ color: "#07235B" }}
                sx={{
                  paddingTop: "9px",
                  "@media (max-width: 1023px)": {
                    display: "none",
                  },
                }}
                onClick={GetLocationInfo}
              >
                Use My Location
              </Button>
            </div>
          </div>
          <ButtonsSearchDonate />
        </form>
      </div>
    </section>
  );
};

export default Provider;
