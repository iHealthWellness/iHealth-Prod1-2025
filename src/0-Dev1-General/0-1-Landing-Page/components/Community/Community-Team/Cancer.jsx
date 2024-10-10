import "./GdtCancer.css";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import communitylogo from "src/Assets/Images/logo1.svg";
import progressbar1 from "src/Assets/Images/progressbar1.svg";
import progressbar2 from "src/Assets/Images/progressbar2.svg";
// import buttom_curve from "src/Assets/Images/logo1.svg";
import buttom_curve from "src/Assets/Images/subtract1.png";
import drop_arrow from "src/Assets/Icons/arrowdowns.svg";
import CloseImage from "./CloseImage";
import { BASE_URL } from "src/environment/config";

const Cancer = ({ closeModal }) => {
	// Geriatric form api post request and input validation VERSION 1

	const [formData2, setFormData2] = useState({
		community: "Cancer Team",
		name: "",
		email: "",
		condition: "Condition",
		otherCondition: "",
		message: "",
	});

	// ERROR MESSAGE TO VALIDATE INPUT
	const [errors2, setErrors2] = useState({});
	const validateForm2 = () => {
		const errors2 = {};
		if (!formData2.name.trim()) {
			errors2.name = "This field is required";
		}
		if (!formData2.email.trim()) {
			errors2.email = "This field is required";
		}
		// if (!formData2.condition.trim()) {
		// 	errors2.condition = "This field is required";
		// }

		// if (!formData2.otherCondition.trim()) {
		// 	errors2.otherCondition = "This field is required";
		// }

		// if (
		// 	formData2.condition === "Condition" ||
		// 	(formData2.condition ===
		// 		"OTHER: Please add a condition if 'Other' is selected." &&
		// 		!formData2.otherCondition.trim())
		// ) {
		// 	errors2.condition = "Please select a valid condition";
		// }
		setErrors2(errors2);
		return Object.keys(errors2).length === 0;
	};

	const [showInputField2, setShowInputField2] = useState(false);
	const [isSubmitted2, setIsSubmitted2] = useState(false);

	const handleDropdownChange2 = (e) => {
		const { name, value } = e.target;
		setFormData2((prevFormData2) => ({
			...prevFormData2,
			[name]: value,
		}));

		if (value === "OTHER: Please add a condition if 'Other' is selected.") {
			setErrors2((prevErrors2) => ({
				...prevErrors2,
				otherCondition: "",
			}));
		}

		if (
			name === "condition" &&
			value !== "OTHER: Please add a condition if 'Other' is selected."
		) {
			// Close the dropdown if a non-'OTHER' option is selected
			setIsOpen2(false);
			setShowInputField2(false);
		}

		if (
			name === "condition" &&
			value === "OTHER: Please add a condition if 'Other' is selected."
		) {
			// Show the input field if 'OTHER' is selected
			setShowInputField2(true);
		}
		setIsOpen2(false);
	};

	// text shown before submission of form
	const [headText2, setheadText2] = useState("Cancer Team");
	const [headText02, setheadText02] = useState(
		<p className="gdt__p">(Coming Soon)</p>
	);
	const [headText002, setheadText002] = useState(
		" Do not see the condition you are looking for? Let us know. We will be adding new social networks based on community feedback."
	);
	const [headText0002, setheadText0002] = useState(
		<img className="progressbar__img" src={progressbar1} alt="progress-bar" />
	);

	const [buttonText2, setbuttonText2] = useState(
		<button id="" type="submit">
			submit
		</button>
	);

	// form submission Preloader function
	const [isLoading2, setIsLoading2] = useState(false);

	const handleSubmit2 = (event) => {
		event.preventDefault();
		// console.log(formData2);

		// POST gtd TEAM FORM IF THE VALIDATION AND MAIL IS CORRECT
		setIsLoading2(false);

		if (validateForm2()) {
			setIsLoading2(true);
			// GERIATRIC POST API
			axios
				.post(`${BASE_URL}/api/v1/community/`, formData2)
				.then((response) => {
					if (response.status === 201) {
						// text shown after successful form submission
						setheadText2("Thank you");
						setheadText02(<p className="gdt__p1"></p>);
						setheadText002(
							"Thank you for sharing the information with us. Your contribution is greatly appreciated."
						);
						setheadText0002(
							<img
								className="progressbar__img1"
								src={progressbar2}
								alt="progress-bar-success"
							/>
						);
						setbuttonText2(<CloseImage />);

						// Set loading state back to false
						setIsLoading2(false);

						// Make text not editable after it has been submitted
						setIsSubmitted2(true);

						// Onclick of close button to redirect back to homepage
						const buttonText2 = document.getElementById("closex");
						buttonText2.addEventListener("click", closeModal);
					} else {
						alert("Oops! Form not submitted");
					}
				})
				.catch((error) => {
					// Handle network errors or other errors here
					console.error("An error occurred:", error);
					// You can also update the state to indicate the error
				});
		}
	};

	const handleChange2 = (event) => {
		const { name, value } = event.target;
		setFormData2((prevFormData2) => ({ ...prevFormData2, [name]: value }));
		setErrors2((prevErrors2) => ({ ...prevErrors2, [name]: "" }));
	};

	// API to fetch disease list
	// const [data, setData] = useState([]);
	const [DiseaseList2, setDiseaseList2] = useState([]);
	const [LoadDisease, setLoadDisease] = useState(true);
	useEffect(() => {
		fetch(`${BASE_URL}/api/v1/diseases/list`)
			.then((response) => response.json())
			.then((responseData) => {
				setDiseaseList2(responseData.data);
				setLoadDisease(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoadDisease(false);
			});
	}, []);

	// DEFAULT LABEL FUNCTIONS
	const [isOpen2, setIsOpen2] = useState(false);
	const selectRef = useRef(null);

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (selectRef.current && !selectRef.current.contains(e.target)) {
				closeSelect2();
			}
		};

		document.addEventListener("click", handleOutsideClick);

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	// IF FORM SUBMISSION IS SUCCESSFUL THE DROPDOWN OPTION SHOULD NOT OPEN
	const toggleSelect2 = () => {
		if (!isSubmitted2) {
			setIsOpen2(!isOpen2);
		}
	};

	const closeSelect2 = () => {
		setIsOpen2(false);
	};

	return (
		<div className="jct-holder">
			<div className="mod1">
				<span className="close" onClick={closeModal}>
					&times;
				</span>

				{/* COMMUNITY LOGO */}

				<div className="community__logo">
					<img src={communitylogo} alt="ihealth-logo" />
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
									disabled={isSubmitted2}
								/>
								<label
									for="yourName"
									class={`input__label ${isSubmitted2 ? "hidden-label" : ""}`}
								>
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
									disabled={isSubmitted2}
								/>
								<label
									for="email"
									class={`input__label ${isSubmitted2 ? "hidden-label" : ""}`}
								>
									Email
								</label>
								{errors2.email && (
									<span className="error-msg">{errors2.email}</span>
								)}
							</div>

							{/* CONDITION DROPDOWN SECTION */}
							<div className="input__field input">
								<div className="custom-select" ref={selectRef}>
									<div
										className={`select-selected ${
											isOpen2 ? "select-arrow-active" : ""
										}`}
										onClick={toggleSelect2}
										name="condition"
										onChange={handleChange2}
										disabled={isSubmitted2}
									>
										<span style={{ color: "#000000", fontSize: "12px" }}>
											{formData2.condition}
										</span>
										{formData2.condition === "Condition" && (
											<span
												style={{
													color: "red",
													marginLeft: "-5px",
												}}
											>
												{" "}
												*
											</span>
										)}

										<span>
											{LoadDisease && <div className="loader1"></div>}
										</span>

										<img src={drop_arrow} alt="dropdown-icon" />
									</div>
									{isOpen2 && (
										<div className="select-items input__filed">
											{DiseaseList2.map((item, index) => (
												<div
													key={item.id}
													value={item.id}
													onClick={() =>
														handleDropdownChange2({
															target: { name: "condition", value: item },
														})
													}
													className={
														item === formData2.condition
															? "same-as-selected"
															: "same-as-selected1"
													}
													disabled={isSubmitted2}
												>
													{item}
												</div>
											))}
										</div>
									)}
									{errors2.condition && (
										<span className="error-msg">{errors2.condition}</span>
									)}
								</div>
							</div>

							{/* SHOW THIS IF OTHERS IS SELECTED */}
							{showInputField2 && (
								<div className="input">
									<input
										className="input__field"
										type="text"
										placeholder=""
										name="otherCondition"
										value={formData2.otherCondition}
										onChange={handleChange2}
										disabled={isSubmitted2}
									/>
									<label
										class={`input__label ${isSubmitted2 ? "hidden-label" : ""}`}
									>
										Enter Condition
									</label>
								</div>
							)}
							{errors2.otherCondition && (
								<span className="error-msg">{errors2.otherCondition}</span>
							)}

							<div className="input__textarea">
								<textarea
									class="textarea__field"
									placeholder=" "
									id="message"
									name="message"
									value={formData2.message}
									onChange={handleChange2}
									disabled={isSubmitted2}
								/>

								<label
									for="message"
									class={`textarea__label ${
										isSubmitted2 ? "hidden-label" : ""
									}`}
								>
									Message
								</label>
							</div>

							<p className="pxp2">indicates a required field</p>
						</div>
					</div>
					<div className="xxx btnx" id="closex">
						{buttonText2}
						<img className="xxx-img" src={buttom_curve} alt="ellipse" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default Cancer;
