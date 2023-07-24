import "./GdtCancer.css";
import communitylogo from "../../../../../../src/Assets/Images/logo1.svg";
import progressbar1 from "../../../../../../src/Assets/Images/progressbar1.svg";
import progressbar2 from "../../../../../../src/Assets/Images/progressbar2.svg";
import React, { useState } from "react";
import axios from "axios";

const Geriatric = ({ closeModal }) => {
    // Geriatric form api post request and input validation VERSION 2
    const [formData1, setFormData1] = useState({

        community: 'Geriatic Disease Team',
        name: '',
        email: '',
        condition: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const validateForm1 = () => {
        const errors = {};
        if (!formData1.name.trim()) {
            errors.name = 'This field is required';
        }

        if (!formData1.email.trim()) {
            errors.email = 'This field is required';
        }

        if (!formData1.condition.trim()) {
            errors.condition = 'This field is required';
        }

        if (!formData1.message.trim()) {
            errors.message = 'This field is required';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // text shown before submission of form
    const [headText1, setheadText1] = useState('Geriatric Team');
    const [headText01, setheadText01] = useState('(Coming Soon)');
    const [headText001, setheadText001] = useState(' Do not see the condition you are looking for? Let us know. We will be adding new social networks based on community feedback.');
    const [headText0001, setheadText0001] = useState(<img src={progressbar1} alt="progress-bar" />);
    // success form submission Preloader function
    const [isLoading1, setIsLoading1] = useState(false);

    const handleSubmit1 = (event) => {

        event.preventDefault();
        // console.log(formData1)

        // POST CANCER TEAM FORM IF THE VALIDATION AND MAIL IS CORRECT
        const buttonText = document.getElementById("modal__button1");
        if (buttonText.innerHTML === "OK") {
            setIsLoading1(false);
            return;
        }

        if (validateForm1()) {
            // setFormData1({
            //     name: "",
            //     email: "",
            //     condition: "",
            //     phone: "",
            //     message: "",
            // });
            setIsLoading1(true);

            // GERIATRIC POST API
            axios.post('https://ihealth-dev.onrender.com/api/v1/community/', formData1)
                .then(response => {
                    console.log(response.status === 200); {

                        // text shown after successful form submission
                        setheadText1('Thank you');
                        setheadText01('(Coming soon)');
                        setheadText001('Thank you for sharing the information with us. Your contribution is greatly appreciated.');
                        setheadText0001(<img src={progressbar2} alt="progress-bar-success" />);
                        buttonText.innerHTML = "OK"

                        // Set loading state back to false
                        setIsLoading1(false);

                        buttonText.addEventListener("click", () => {
                            window.location = "/";
                        });
                    }
                })

            // IF EMAIL HAS ALREADY BEEN USED TO SEND RESULT CATCH THIS MESSAGE
            // .catch(error => {
            //   console.error(error);
            //   alert("Oops! It seems you've already submitted a request using this email address.");
            // })
        };

    };

    const handleChange1 = (event) => {
        const { name, value } = event.target;
        setFormData1((prevFormData1) => ({ ...prevFormData1, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    // const progress = 1; // Current progress (e.g., user is on step 3)
    // const totalSteps = 2; // Total number of steps in the progress bar

    return (
        <>
            <div className="mod1">
                {/* Close (X) button */}
                <span className="close" onClick={closeModal}>
                    &times;
                </span>

                {/* COMMUNITY LOGO */}

                <div className="community__logo">
                    <img src={communitylogo} alt="ihealth-logo" />
                </div>

                <div className="gdt-head">
                    <h1 id="modal__header">{headText1}</h1>
                    <p>{headText01}</p>
                </div>
                <p className="pxp1">{headText001}</p>
                {/* <ProgressBar progress={progress} totalSteps={totalSteps} /> */}
                <div className="progressbar">{headText0001}</div>

                {/* Geriatric input form section */}
                <form onSubmit={handleSubmit1} >
                    <div className="modal">



                        {/* PRELOADER AFTER FORM IS SUBMITTED */}
                        {isLoading1 && <div className="loader"></div>}

                        <div className="form__content">

                            <div class="input">
                                <input
                                    type="text"
                                    id="name"
                                    class="input__field"
                                    placeholder=" "
                                    name="name"
                                    value={formData1.name}
                                    onChange={handleChange1}
                                />
                                <label for="yourName" class="input__label">
                                    Your Name
                                </label>
                                {errors.name && <span className="error-msg">{errors.name}</span>}
                            </div>

                            <div class="input">
                                <input
                                    type="email"
                                    id="email"
                                    class="input__field"
                                    placeholder=" "
                                    name="email"
                                    value={formData1.email}
                                    onChange={handleChange1}
                                />
                                <label for="email" class="input__label">
                                    Email
                                </label>
                                {errors.email && <span className="error-msg">{errors.email}</span>}
                            </div>

                            <div class="input">
                                <input
                                    // value={condition}
                                    type="text"
                                    id="condition"
                                    class="input__field"
                                    placeholder=" "
                                    name="condition"
                                    value={formData1.condition}
                                    onChange={handleChange1}
                                />
                                {/* <select value={selectedOption} onChange={handleChange1}>
                                    <option value="">-- Select --</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select> */}
                                {/* </select> */}
                                <label for="condition" class="input__label">
                                    Condition
                                </label>
                                {errors.condition && <span className="error-msg">{errors.condition}</span>}
                            </div>

                            <textarea class="textarea__field"
                                placeholder=" "
                                id="message"
                                name="message"
                                value={formData1.message}
                                onChange={handleChange1}
                            ></textarea>

                            <label for="message" class="textarea__label">
                                Message
                            </label>
                            {errors.message && <span className="error-msg">{errors.message}</span>}

                            <p className="pxp2">indicates a required field</p>

                        </div>
                    </div>

                    <div className='Login_down btnx'>
                        <button id="modal__button1" type="submit">
                            submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Geriatric