// Constants for default values
const DEFAULT_API_VERSION = "v1";
// Note: We are using the same URL for both base and production.
// Update this if you plan to have different URLs for each.
const DEFAULT_BASE_URL = "https://ihealth-dev-3u0i.onrender.com/";

class Config {
  constructor() {
    // Using import.meta.env for Vite
    this.envVars = import.meta.env;
  }

  // Internal method to get an environment variable
  _get(varName, defaultValue = "") {
    const value = this.envVars[varName];
    if (!value && !defaultValue) {
      console.warn(`Environment variable ${varName} is not defined.`);
    }
    return value || defaultValue;
  }

  // Method to get a string environment variable
  getString(varName, defaultValue = "") {
    const value = this._get(varName, defaultValue);
    if (typeof value !== "string") {
      console.warn(`Expected string for ${varName}, received ${typeof value}.`);
    }
    return value;
  }

  // Lazy getters for environment variables
  // Note: BASE_URL and BASE_URL are the same in our current setup.
  get baseUrl() {
    return this.getString("VITE_REACT_APP_BASE_URL", DEFAULT_BASE_URL);
  }

  get apiVersion() {
    return this.getString("VITE_REACT_APP_API_VERSION", DEFAULT_API_VERSION);
  }

}

const config = new Config();

export const {
  baseUrl: BASE_URL,
  apiVersion: API_VERSION,
} = config;
