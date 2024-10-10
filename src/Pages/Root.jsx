import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Generic-Layout/Navbar/Navbar";
import Footer from "src/Components/Generic-Layout/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
