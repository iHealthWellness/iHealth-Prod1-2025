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
import qrBanner from "src/Assets/Images/qr-banner.png";
import DonateNowButton from "./donateNowButton";



const Provider = () => {
  const navigate = useNavigate();
  const [diseases, setDiseases] = useState([]);
  const [states, setStates] = useState([]);
  const [specialties, setSpecialties] = useState([]);
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

  const text = "We're a community-based 501c3 organization offering health-related programs free to patients!";
  const letterElements = text.split("").map((letter, index) => (
    <span key={index} className={styles.letter}>
      {letter}
    </span>
  ));


  useEffect(() => {
    const checkOverlap = () => {
      const letters = document.querySelectorAll(`.${styles.letter}`);
      letters.forEach((letter) => {
        const letterRect = letter.getBoundingClientRect();
        const leftDiv = document.querySelector(`.${styles.blueBanner}:first-child`).getBoundingClientRect();
        const rightDiv = document.querySelector(`.${styles.blueBanner}:last-child`).getBoundingClientRect();
        letter.style.color = "#E3E6EE";

        //   (letterRect.right >= leftDiv.left && letterRect.left <= leftDiv.right) ||

        //     (letterRect.right >= rightDiv.left && letterRect.left <= rightDiv.right)

        //     ? "black"

        //     : "white";

        // letter.style.color =

        //   (letterRect.right >= leftDiv.left && letterRect.left <= leftDiv.right) ||

        //     (letterRect.right >= rightDiv.left && letterRect.left <= rightDiv.right)

        //     ? "black"

        //     : "white";

      });

    };



    const interval = setInterval(checkOverlap, 5);

    return () => clearInterval(interval);

  }, []);


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
    const fetchDiseases = async () => {
      const cachedDiseases = JSON.parse(sessionStorage.getItem("newDiseases"));
      if (cachedDiseases && cachedDiseases.length > 0) {
        setDiseases(cachedDiseases);
        const neurofibromatosis = cachedDiseases.find(d => d.name === "Neurofibromatosis");
        if (neurofibromatosis) {
          setDiseaseValue(neurofibromatosis);
        }
      } else {
        try {
          const newDiseaseRes = await ProviderServices.handleGetNewDisease();
          const newDiseaseData = newDiseaseRes.data;
          if (newDiseaseData.status === 'success' && Array.isArray(newDiseaseData.data)) {
            const processedDiseases = sortDiseases(
              newDiseaseData.data.map(disease => ({
                name: disease,
                disabled: disease !== "Neurofibromatosis"
              }))
            );
            const otherIndex = processedDiseases.findIndex(d => d.name === "- Other -");
            if (otherIndex !== -1) {
              const otherDisease = processedDiseases.splice(otherIndex, 1)[0];
              otherDisease.disabled = true;
              processedDiseases.push(otherDisease);
            }
            setDiseases(processedDiseases);
            const neurofibromatosis = processedDiseases.find(d => d.name === "Neurofibromatosis");
            if (neurofibromatosis) {
              setDiseaseValue(neurofibromatosis);
            }
            sessionStorage.setItem("newDiseases", JSON.stringify(processedDiseases));
          } else {
            console.error("New disease data is not in expected format:", newDiseaseData);
          }
        } catch (e) {
          console.error('Error fetching diseases:', e);
        }
      }
    };

    const fetchSpecialties = async () => {
      const cachedSpecialties = JSON.parse(sessionStorage.getItem("specialties"));
      if (cachedSpecialties && cachedSpecialties.length > 0) {
        setSpecialties(cachedSpecialties);
      } else {
        try {
          const specialtyRes = await ProviderServices.handleGetAllSpecialty();
          setSpecialties(specialtyRes.data);
          sessionStorage.setItem("specialties", JSON.stringify(specialtyRes.data));
        } catch (e) {
          console.error('Error fetching specialties:', e);
        }
      }
    };

    const fetchStates = async () => {
      const cachedStates = JSON.parse(sessionStorage.getItem("states"));
      if (cachedStates && cachedStates.length > 0) {
        setStates(cachedStates);
      } else {
        try {
          const stateRes = await ProviderServices.handleGetAllState();
          setStates(stateRes.data);
          sessionStorage.setItem("states", JSON.stringify(stateRes.data));
        } catch (e) {
          console.error('Error fetching states:', e);
        }
      }
    };

    setIsLoading(true);
    Promise.all([fetchDiseases(), fetchSpecialties(), fetchStates()]).finally(() => {
      setIsLoading(false);
    });
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

    // if (queryParams.toString()) {
    //   navigate(`/providers?${queryParams.toString()}`);
    // }
  };

  console.log("Rendering with diseases:", diseases);
  console.log("Rendering with specialties:", specialties);
  console.log("Rendering with states:", states);

  return (
    <>
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
            Thousands of providers in one place
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
                  options={specialties}
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
                      // display: "none",
                      marginLeft: "auto",
                      textAlign: "end",
                    },
                  }}
                  onClick={GetLocationInfo}
                >
                  Use My Location
                </Button>
              </div>
            </div>
            <ButtonsSearchDonate onSubmit={handleSubmit} isDisabled={!diseaseValue && !specialtyValue && !stateValue} />
            {/* <DonateNowButton /> */}
          </form>
        </div>
      </section>
      <section className={styles.qrSection}>
        <div className={styles.qrContainer}>
          <p>Open Camera, Scan Code, Give Now!</p>
          <img src={qrBanner} alt="paypal qr code" />
        </div>
      </section>
      <aside className={styles.secondBanner}>
        <div className={styles.blueBanner}></div>
        <p>{letterElements}</p>
        <div className={styles.blueBanner}></div>
      </aside>
    </>
  );
};

export default Provider;