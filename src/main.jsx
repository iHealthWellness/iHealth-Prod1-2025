//Import Libraries/Packages
import React from "react";
import ReactDOM from "react-dom/client";
// import { store } from "./0-Dev1-General/UserAuthentication/redux-store/store";
import { Provider } from 'react-redux'

//Import Local files/components
import App from "./App.jsx";
import { SecurityPrechecks } from './Components/Security-Prechecks/SecurityPrechecks.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SecurityPrechecks>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </SecurityPrechecks>
  </React.StrictMode>
);
