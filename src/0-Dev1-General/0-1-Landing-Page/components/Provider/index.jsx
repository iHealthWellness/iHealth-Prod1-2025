import { useState, useEffect } from "react";
import ButtonsSearchDonate from "./ButtonsSearchDonate";
import ProviderAutocomplete from "./ProviderAutocomplete";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import { Button } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import ProviderServices from "src/Services/provider";
import { stateData } from "../../../../Constants/HomePage/StateData";
import styles from './index.module.css';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "src/environment/config";

const Provider = () => {
  const navigate = useNavigate();
  const [diseases, setDiseases] = useState([]);
  const [states, setStates] = useState([]);
  const [specialities, setSpecialities] = useState([]);
  const [diseaseValue, setDiseaseValue] = useState(null);
  const [specialtyValue, setSpecialtyValue] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [acceptingNewPatients, setAcceptingNewPatients] = useState(false);
  const [treatsChildren, setTreatsChildren] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const GetLocationInfo = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.log(error)
    );
  };

  const handleLoading = (loading) => {
    setIsLoading(loading);
  };

  const sortDiseases = (diseases) => {
    return diseases.sort((a, b) => {
      if (a.name === "Neurofibromatosis") return -1;
      if (b.name === "Neurofibromatosis") return 1;
      if (a.name === "- Other - ") return 1;
      if (b.name === "- Other - ") return -1;
      return a.name.localeCompare(b.name);
    });
  };

  useEffect(() => {
    const fetchProviders = async () => {
      const cache = {
        newDiseases: sessionStorage.getItem("newDiseases"),
        specialities: sessionStorage.getItem("specialities"),
        states: sessionStorage.getItem("states"),
      };

      if (cache.newDiseases && cache.specialities && cache.states) {
        console.log("Using cached data");
        const processedDiseases = JSON.parse(cache.newDiseases);
        setDiseases(processedDiseases);
        setSpecialities(JSON.parse(cache.specialities));
        setStates(JSON.parse(cache.states));
      } else {
        console.log("Fetching new data");
        setIsLoading(true);
        try {
          const [newDiseaseRes, specialtyRes, stateRes] = await Promise.all([
            ProviderServices.handleGetNewDisease(),
            ProviderServices.handleGetAllSpeciality(),
            ProviderServices.handleGetAllState(),
          ]);

          console.log("New disease response:", newDiseaseRes);
          console.log("Specialty response:", specialtyRes);
          console.log("State response:", stateRes);

          const newDiseaseData = newDiseaseRes.data;

          if (newDiseaseData.status === 'success' && Array.isArray(newDiseaseData.data)) {
            const processedDiseases = sortDiseases(
              newDiseaseData.data.map(disease => ({
                name: disease,
                disabled: disease !== "Neurofibromatosis"
              }))
            );
            // Ensure "- Other -" is always the last and unselectable
            const otherIndex = processedDiseases.findIndex(d => d.name === "- Other -");
            if (otherIndex !== -1) {
              const otherDisease = processedDiseases.splice(otherIndex, 1)[0];
              otherDisease.disabled = true;
              processedDiseases.push(otherDisease);
            }
            setDiseases(processedDiseases);
            // Update sessionStorage with sorted diseases
            sessionStorage.setItem("newDiseases", JSON.stringify(processedDiseases));
          } else {
            console.error("New disease data is not in expected format:", newDiseaseData);
          }

          setSpecialities(specialtyRes.data);
          setStates(stateRes.data);

          sessionStorage.setItem("specialities", JSON.stringify(specialtyRes.data));
          sessionStorage.setItem("states", JSON.stringify(stateRes.data));

        } catch (e) {
          console.error('Error fetching provider data:', e);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchProviders();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = {
      disease: diseaseValue ? diseaseValue.name : "",
      specialty: specialtyValue,
      state: stateValue,
    };

    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        queryParams.append(key, value);
      }
    });

    if (queryParams.toString()) {
      navigate(`/providers?${queryParams.toString()}`);
    }
  };

  console.log("Rendering with diseases:", diseases);
  console.log("Rendering with specialities:", specialities);
  console.log("Rendering with states:", states);

  return (
    <section id="Home-Page-provider-container" className={styles.providerContainer}>
      <div className={styles.providerInnerContainer}>
        <h2 className={`${styles.providerHeading} SN-D-Home-H3-24`}>
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
        <form className={styles.providerForm} onSubmit={handleSubmit}>
          <div className={styles.providerFormInputs}>
            <div className={styles.providerFormField}>
              <ProviderAutocomplete
                options={diseases}
                label="Disease"
                value={diseaseValue}
                onInputChange={setDiseaseValue}
                loading={isLoading}
                paperWidth="100%"
                getOptionLabel={(option) => option.name}
                isOptionDisabled={(option) => option.disabled}
              />
            </div>
            <div className={styles.providerFormField}>
              <ProviderAutocomplete
                options={specialities}
                label="Specialties"
                value={specialtyValue}
                onInputChange={setSpecialtyValue}
                loading={isLoading}
                paperWidth="100%"
                getOptionLabel={(option) => option}
              />
            </div>
            <div className={styles.providerFormField}>
              <ProviderAutocomplete
                options={states}
                label="State"
                value={stateValue}
                onInputChange={setStateValue}
                loading={isLoading}
                paperWidth="100%"
                getOptionLabel={(option) => option}
              />
              <Button
                variant="text"
                startIcon={<PinDropIcon style={{ marginBottom: "5px" }} />}
                style={{ color: "#07235B" }}
                className={`SN-D-P-20`}
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
          <ButtonsSearchDonate onSubmit={handleSubmit} isDisabled={!diseaseValue && !specialtyValue && !stateValue} />
        </form>
      </div>
    </section>
  );
};

export default Provider;

