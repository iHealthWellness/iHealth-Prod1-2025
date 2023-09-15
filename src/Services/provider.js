import axios from "axios";
import { PROD_URL } from "../environment/config";

const handleGetAllDisease = () => {
  return axios.get(
    `${PROD_URL}/api/v1/provider-data/available-data?type=disease_name`
  );
};

const handleGetAllSpeciality = () => {
  return axios.get(
    `${PROD_URL}/api/v1/provider-data/available-data?type=speciality`
  );
};

const handleGetAllCity = () => {
  return axios.get(
    `${PROD_URL}/api/v1/provider-data/available-data?type=provider_city`
  );
};

const handleGetAllState = () => {
  return axios.get(
    `${PROD_URL}/api/v1/provider-data/available-data?type=provider_state`
  );
};

const ProviderServices = {
  handleGetAllDisease,
  handleGetAllSpeciality,
  handleGetAllCity,
  handleGetAllState,
};

export default ProviderServices;
