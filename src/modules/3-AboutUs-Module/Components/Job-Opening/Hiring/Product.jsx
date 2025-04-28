import React from "react";
import { BntTab } from "./ButtonTab";
import "./Hiring.css";
import plusbtn from "src/Assets/Icons/plus-circle.png";
import minusbtn from "src/Assets/Icons/minus-circle.png";
import { Link } from "react-router-dom";

import { useState } from "react";

const Product = () => {
  const [productVisible, setProductVisible] = useState(false);

  const toggleProduct = () => {
    setProductVisible((prev) => !prev);
  };

  return (
    <div className="layerOne-tab">
      <div>
        <div className="flex-tab">
          <h3 className="Text-header SN-D-H3-24" onClick={toggleProduct}>
            PRODUCT MANAGEMENT
          </h3>
          <BntTab
            icon={productVisible ? minusbtn : plusbtn}
            onClick={toggleProduct}
          />
        </div>

        <div className="job-body">
          {productVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text SN-D-T-M-P-16"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/a4f3ecff-56fa-4078-940f-019f8d1721be/?rs=15190316"
              >
                Pro Bono Generalist
              </Link>
              <h2 className="grid-text SN-D-T-M-P-16">Remote</h2>
            </div>
          )}

          <hr />
        </div>

        <div className="job-body">
          {productVisible && (
            <div className="grid">
              <Link
                className="grid-title link-text SN-D-T-M-P-16"
                to="https://app.dover.io/apply/2d71c19b-3348-4bae-bbc2-a5ea3d500bc7/dfa1ec30-29dd-4ec6-b56a-7af25fc83675/?rs=15190316"
              >
                Product Specialist/Associate
              </Link>
              <h2 className="grid-text SN-D-T-M-P-16">Remote</h2>
            </div>
          )}
          {productVisible && <hr />}
        </div>
      </div>
    </div>
  );
};

export default Product;
