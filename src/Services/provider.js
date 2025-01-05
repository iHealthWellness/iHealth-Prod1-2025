import axios from "axios";
import { BASE_URL } from "../environment/config";

const handleGetAllDisease = () => {
  return axios.get(
    `${BASE_URL}/api/v1/provider-data/available-data?type=disease_name`
  );
};

const handleGetNewDisease = () => {
  return axios.get(`${BASE_URL}/api/v1/diseases/list`);
};

const handleGetAllSpeciality = () => {
  return axios.get(
    `${BASE_URL}/api/v1/provider-data/available-data?type=speciality`
  );
};

const handleGetAllCity = () => {
  return axios.get(
    `${BASE_URL}/api/v1/provider-data/available-data?type=provider_city`
  );
};

const handleGetAllState = () => {
  return axios.get(
    `${BASE_URL}/api/v1/provider-data/available-data?type=provider_state`
  );
};

const ProviderServices = {
  handleGetAllDisease,
  handleGetNewDisease,
  handleGetAllSpeciality,
  handleGetAllCity,
  handleGetAllState,
};

export default ProviderServices;

