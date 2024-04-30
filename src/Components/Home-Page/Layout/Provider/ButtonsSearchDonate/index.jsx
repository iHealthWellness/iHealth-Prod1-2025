//Import Libraries/Packages
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
//Import Styles
import "./index.css";

function ButtonsSearchDonate() {
  return (
    <div className="provider-btn-block">
      <button
        onClick={() => {
          document.querySelector("#UnderConst-wrapper").style.display = "flex";
        }}
        className="provider-btn search"
        type="submit"
      >
        Search
        <SearchOutlinedIcon
          sx={{
            "@media (min-width: 1024px)": {
              display: "none",
            },
          }}
        />
      </button>

      {/* <Link
        onClick={() => {
          document.querySelector("#UnderConst-wrapper").style.display = "flex";
        }}
        className="provider-btn donate"
      >
        Donate Now
      </Link> */}
    </div>
  );
}

export default ButtonsSearchDonate;
