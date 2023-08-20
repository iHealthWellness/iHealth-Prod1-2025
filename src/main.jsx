//Import Libraries/Packages
import React from "react";
import ReactDOM from "react-dom/client";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles




//Import Local files/components
import App from "./App.jsx";

AOS.init(); // Initialize AOS


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
