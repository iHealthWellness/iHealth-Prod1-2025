import React, { useState } from "react";

import FooterLinkCard from "./FooterLinkCard";

import { Select, MenuItem } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import SocialMedia from "src/Constants/HomePage/SocialMedia.js";
import FooterLink from "src/Constants/FooterLink.js";

import "./index.css";
import axios from "axios";

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState("");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

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
      .post("https://ihealth-prod.onrender.com/api/v1/subscription/", subscribeData)
      .then((response) => {
        setLoading(false);

        if (response.status === 201) {
          // Show loading spinner and set subscribe status
          setSubscribeStatus("Subscribed!");
          setTimeout(() => {
            alert("Thanks for Subscribing!");
          }, 1000);
          // Handle the response as needed, e.g., show a success message
<<<<<<< HEAD
          setEmail("");
        } else {
          // Set subscribe status to an error message
          setSubscribeStatus("Oops! Form not submitted");
=======
        }
        else {
          alert("Oops! Form not submitted");
>>>>>>> 9edfeee (update)
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
            <p className="footer-address-heading">
              iHealth and Wellness Foundation, Inc.
            </p>
            <p className="footer-address">
              115 Broadway St. Fl 5,New York, NY 10006, USA
            </p>
          </div>
          <div className="footer-subscribe-block">
            <p className="footer-subscribe-heading">STAY INFORMED:</p>
            <div className="footer-subscribe-bar">
          <form onSubmit={handleSubmit}>
            <input
              className="footer-subscribe-input"
              placeholder="Your email here"
              value={email}
              onChange={handleEmailChange}
            />
            <button className="footer-subscribe-btn" type="submit">
              {loading ? "Loading..." : subscribeStatus || "Subscribe"}
            </button>
          </form>
          {loading && <div className="loading-spinner"></div>}
        </div>
          </div>
          <div className="footer-follow-block">
            <p className="footer-follow-heading">FOLLOW US:</p>
            <div className="footer-follow-icons">
              {SocialMedia.map((ele, idx) => {
                return (
                  <a
                    className="footer-follow-link"
                    // href={ele.url}
                    onClick={() => {
                      document.querySelector(
                        "#UnderConst-wrapper"
                      ).style.display = "flex";
                    }}
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
      </div>
      <div className="footer-bottom">
        <p className="footer-terms-right SN-M-P-16">
          @2023 iHealth and Wellness Foundation, Inc. All rights reserved
        </p>

        <Select
          value={selectedLanguage}
          onChange={handleChange}
          sx={{
            color: "white",
            border: 0,
            outline: 0,
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(228, 219, 233, 0)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(228, 219, 233, 00)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(228, 219, 233, 0)",
            },
            "& .MuiSelect-icon": {
              color: "white",
            },
            "@media (max-width: 768px)": {
              minWidth: "100px", // Adjust as needed
            },
            "@media (max-width: 576px)": {
              minWidth: "80px",
              fontSize: "0.8rem",
            },
          }}
        >
          <MenuItem
            value="en"
            sx={{
              "@media (max-width: 576px)": {
                minWidth: "80px",
                fontSize: "0.8rem",
              },
            }}
          >
            English
          </MenuItem>
          <MenuItem
            value="cn"
            sx={{
              "@media (max-width: 576px)": {
                minWidth: "80px",
                fontSize: "0.8rem",
              },
            }}
          >
            Chinese
          </MenuItem>
          <MenuItem
            value="fr"
            sx={{
              "@media (max-width: 576px)": {
                minWidth: "80px",
                fontSize: "0.8rem",
              },
            }}
          >
            Français
          </MenuItem>
          <MenuItem
            value="es"
            sx={{
              "@media (max-width: 576px)": {
                minWidth: "80px",
                fontSize: "0.8rem",
              },
            }}
          >
            Español
          </MenuItem>
          <MenuItem
            value="de"
            sx={{
              "@media (max-width: 576px)": {
                minWidth: "80px",
                fontSize: "0.8rem",
              },
            }}
          >
            Deutsch
          </MenuItem>
        </Select>
      </div>
    </footer>
  );
};

export default Footer;
