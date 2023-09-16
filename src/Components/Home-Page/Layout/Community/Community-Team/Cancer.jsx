import "./GdtCancer.css";
import communitylogo from "src/Assets/Images/logo1.svg";
import progressbar1 from "src/Assets/Images/progressbar1.svg";
import progressbar2 from "src/Assets/Images/progressbar2.svg";
import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../../environment/config";

const Cancer = ({ closeModal }) => {
  // Cancer form api post request VERSION 2

  const [formData2, setFormData2] = useState({
    community: "Cancer Team",
    name: "",
    email: "",
    condition: "",
    message: "",
  });

  const [errors2, setErrors2] = useState({});
  const validateForm2 = () => {
    const newErrors2 = {};

    if (!formData2.name.trim()) {
      newErrors2.name = "This field is required";
    }

    if (!formData2.email.trim()) {
      newErrors2.email = "This field is required";
    }

    if (!formData2.condition.trim()) {
      newErrors2.condition = "This field is required";
    }

    setErrors2(newErrors2);
    return Object.keys(newErrors2).length === 0;
  };

  // text shown before submission of form

  // const [buttonText, setButtonText] = useState('submit');
  const [headText2, setheadText2] = useState("Cancer Team");
  const [headText02, setheadText02] = useState(
    <p className="gdt__p">(Coming Soon)</p>
  );
  const [headText002, setheadText002] = useState(
    " Do not see the condition you are looking for? Let us know. We will be adding new social networks based on community feedback."
  );
  const [headText0002, setheadText0002] = useState(
    <img className="progressbar__img" src={progressbar1} />
  );

  // success form submission Preloader function
  const [isLoading2, setIsLoading2] = useState(false);

  const handleSubmit2 = (event) => {
    event.preventDefault();
    // console.log(formData2)

    // POST CANCER TEAM FORM IF THE VALIDATION AND MAIL IS CORRECT
    const buttonText = document.getElementById("modal__button1");
    if (buttonText.innerHTML === "Close") {
      setIsLoading2(false);
      return;
    }

    if (validateForm2()) {
      setIsLoading2(true);

      // GERIATRIC POST API
      axios
        .post(`${BASE_URL}/api/v1/community/`, formData2)
        .then((response) => {
          console.log(response.status === 200);
          {
            // text shown after successful form submission
            setheadText2("Thank you");
            setheadText02(<p className="gdt__p1"></p>);
            setheadText002(
              "Thank you for sharing the information with us. Your contribution is greatly appreciated."
            );
            setheadText0002(
              <img className="progressbar__img1" src={progressbar2} />
            );
            buttonText.innerHTML = "Close";

            // Set loading state back to false
            setIsLoading2(false);

            buttonText.addEventListener("click", () => {
              window.location = "/";
            });
          }
        });

      // IF EMAIL HAS ALREADY BEEN USED TO SEND RESULT CATCH THIS MESSAGE
      // .catch(error => {
      //   console.error(error);
      //   alert("Oops! It seems you've already submitted a request using this email address.");
      // })
    }
  };

  const handleChange2 = (event) => {
    const { name, value } = event.target;
    setFormData2((prevFormData2) => ({ ...prevFormData2, [name]: value }));
    setErrors2((prevErrors2) => ({ ...prevErrors2, [name]: "" }));
  };

  return (
    <div className="jct-holder">
      <div className="mod1">
        {/* Close (X) button */}
        <span className="close" onClick={closeModal}>
          &times;
        </span>

        {/* COMMUNITY LOGO */}

        <div className="community__logo">
          <img src={communitylogo} alt="logo" />
        </div>

        <div className="gdt-head">
          <h1 id="modal__header">{headText2}</h1>
          <p>{headText02}</p>
        </div>
        <p className="pxp1">{headText002}</p>
        <div className="progressbar">{headText0002}</div>

        {/* Geriatric input form section */}
        <form onSubmit={handleSubmit2}>
          <div className="modal">
            {/* PRELOADER AFTER FORM IS SUBMITTED */}
            {isLoading2 && <div className="loader"></div>}

            <div className="form__content">
              <div class="input">
                <input
                  type="text"
                  id="name"
                  class="input__field"
                  placeholder=" "
                  name="name"
                  value={formData2.name}
                  onChange={handleChange2}
                />
                <label for="yourName" class="input__label">
                  Your Name
                </label>
                {errors2.name && (
                  <span className="error-msg">{errors2.name}</span>
                )}
              </div>

              <div class="input">
                <input
                  type="email"
                  id="email"
                  class="input__field"
                  placeholder=" "
                  name="email"
                  value={formData2.email}
                  onChange={handleChange2}
                />
                <label for="email" class="input__label">
                  Email
                </label>
                {errors2.email && (
                  <span className="error-msg">{errors2.email}</span>
                )}
              </div>

              <div class="input">
                <input
                  type="text"
                  id="condition"
                  class="input__field"
                  placeholder=" "
                  name="condition"
                  value={formData2.condition}
                  onChange={handleChange2}
                />
                <label for="condition" class="input__label">
                  Condition
                </label>
                {errors2.condition && (
                  <span className="error-msg">{errors2.condition}</span>
                )}
              </div>

              <div className="input__textarea">
                <textarea
                  class="textarea__field"
                  placeholder=" "
                  id="message"
                  name="message"
                  value={formData2.message}
                  onChange={handleChange2}
                ></textarea>

                <label for="message" class="textarea__label">
                  Message
                </label>
              </div>

              <p className="pxp2">indicates a required field</p>
            </div>
          </div>
          <div className="Login_down">
            <div className="btnx">
              <button id="modal__button1" type="submit">
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cancer;
