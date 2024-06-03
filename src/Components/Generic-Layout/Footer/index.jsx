import React, { useState } from "react";
import { BASE_URL } from "../../../environment/config";
import axios from "axios";

import FooterLinkCard from "./FooterLinkCard";
import SocialMedia from "src/Constants/HomePage/SocialMedia.js";
import FooterLink from "src/Constants/FooterLink.js";
import LanguageBar from "./LanguageBar/LanguageBar";
import SasikaQuote from "src/Assets/Images/sasika-quote.png";
import "./index.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const subscribeData = {
      email: email,
      // Add other fields as needed
    };

    axios
      .post(`${BASE_URL}/api/v1/subscription/`, subscribeData)
      .then((response) => {
        setLoading(false);

        if (response.status === 201) {
          // Show loading spinner and set subscribe status
          setSubscribeStatus("Subscribed!");
          setTimeout(() => {
            alert("Thanks for Subscribing!");
          }, 1000);
          // Handle the response as needed, e.g., show a success message
          setEmail("");
        } else {
          // Set subscribe status to an error message
          setSubscribeStatus("Oops! Form not submitted");
        }
      })
      .catch((error) => {
        setLoading(false);
        // Set subscribe status to an error message
        setSubscribeStatus("Error sending data");
      });
  };

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-contact">
          <div className="footer-address-block">
            <p className="footer-address-heading SN-D-T-M-B-16">
              iHealth and Wellness Foundation, Inc.
            </p>
            <p className="footer-address SN-D-T-M-P-16">New York, NY, USA.</p>
          </div>
          <div className="footer-subscribe-block">
            <p className="footer-subscribe-heading SN-D-T-M-P-16">
              STAY INFORMED:
            </p>
            <div className="footer-subscribe-bar">
              <form onSubmit={handleSubmit}>
                <input
                  className="footer-subscribe-input"
                  placeholder="Your email here"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button className="footer-subscribe-btn " type="submit">
                  {loading ? "Loading..." : subscribeStatus || "Subscribe"}
                </button>
              </form>
              {loading && <div className="loading-spinner"></div>}
            </div>
          </div>
          <div className="footer-follow-block">
            <p className="footer-follow-heading SN-D-T-M-P-16">FOLLOW US:</p>
            <div className="footer-follow-icons">
              {SocialMedia.map((ele, idx) => {
                return (
                  <a
                    className="footer-follow-link"
                    target="_blank"
                    href={ele.url}
                    key={`social-icon-${idx}`}
                  >
                    <img
                      className="footer-follow-icon"
                      src={ele.icon}
                      loading="lazy"
                      alt="Social Media Icon"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer-links-block">
          {FooterLink.map((ele, idx) => (
            <FooterLinkCard linkCard={ele} key={`footer-link-${idx}`} />
          ))}
        </div>
        <div className="sasika-quote">
          <img src={SasikaQuote} alt="quote from CEO/CTO" />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-terms-center SN-M-P-16">
          <p className="footer-terms">
            @2023 iHealth and Wellness Foundation, Inc. All rights reserved.
            iHealth and Wellness Foundation is a 501(c)(3) Nonprofit
            Organization. EIN: 93-1567099
          </p>
        </div>
        <div className="language-select-cont">
          <LanguageBar />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
