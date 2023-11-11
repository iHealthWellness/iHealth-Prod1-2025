import "./GdtCancer.css";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import communitylogo from "src/Assets/Images/logo1.svg";
import progressbar1 from "src/Assets/Images/progressbar1.svg";
import progressbar2 from "src/Assets/Images/progressbar2.svg";
import buttom_curve from "src/Assets/Images/subtract1.png";
import droparrow from "src/Assets/Icons/arrowdowns.svg";
import CloseImage from "./Community-Team/CloseImage";
import { BASE_URL } from "../../../../../environment/config";

const Geriatric = ({ closeModal }) => {
	// Geriatric form api post request and input validation VERSION 1
	const [formData1, setFormData1] = useState({
		community: "Geriatric Disease Team",
		name: "",
		email: "",
		condition: "Condition",
		otherCondition: "",
		message: "",
	});

	// ERROR MESSAGE TO VALIDATE INPUT
	const [errors, setErrors] = useState({});
	const validateForm1 = () => {
		const errors = {};
		if (!formData1.name.trim()) {
			errors.name = "This field is required";
		}
		if (!formData1.email.trim()) {
			errors.email = "This field is required";
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
		setErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const [showInputField1, setShowInputField1] = useState(false);
	const [isSubmitted1, setIsSubmitted1] = useState(false);

	const handleDropdownChange1 = (e) => {
		const { name, value } = e.target;
		setFormData1((prevFormData1) => ({
			...prevFormData1,
			[name]: value,
		}));

		if (value === "OTHER: Please add a condition if 'Other' is selected.") {
			setErrors((prevErrors1) => ({
				...prevErrors1,
				otherCondition: "",
			}));
		}

		if (
			name === "condition" &&
			value !== "OTHER: Please add a condition if 'Other' is selected."
		) {
			// Close the dropdown if a non-'OTHER' option is selected
			setIsOpen1(false);
			setShowInputField1(false);
		}

		if (
			name === "condition" &&
			value === "OTHER: Please add a condition if 'Other' is selected."
		) {
			// Show the input field if 'OTHER' is selected
			setShowInputField1(true);
		}
		setIsOpen1(false);
	};

	// text shown before submission of form
	const [headText1, setheadText1] = useState("Geriatric Team");
	const [headText01, setheadText01] = useState(
		<p className="gdt__p">(Coming Soon)</p>
	);
	const [headText001, setheadText001] = useState(
		" Do not see the condition you are looking for? Let us know. We will be adding new social networks based on community feedback."
	);
	const [headText0001, setheadText0001] = useState(
		<img className="progressbar__img" src={progressbar1} alt="progress-bar" />
	);

	const [buttonText1, setbuttonText1] = useState(
		<button id="" type="submit">
			submit
		</button>
	);

	// form submission Preloader function
	const [isLoading1, setIsLoading1] = useState(false);

	const handleSubmit1 = (event) => {
		event.preventDefault();
		// console.log(formData1);

		// POST gtd TEAM FORM IF THE VALIDATION AND MAIL IS CORRECT
		setIsLoading1(false);

		if (validateForm1()) {
			setIsLoading1(true);
			// GERIATRIC POST API
			axios
				.post(`${BASE_URL}/api/v1/community/`, formData1)
				.then((response) => {
					if (response.status === 201) {
						// text shown after successful form submission
						setheadText1("Thank you");
						setheadText01(<p className="gdt__p1"></p>);
						setheadText001(
							"Thank you for sharing the information with us. Your contribution is greatly appreciated."
						);
						setheadText0001(
							<img
								className="progressbar__img1"
								src={progressbar2}
								alt="progress-bar-success"
							/>
						);
						setbuttonText1(<CloseImage />);

						// Set loading state back to false
						setIsLoading1(false);

						// Make text not editable after it has been submitted
						setIsSubmitted1(true);

						// Onclick of close button to redirect back to homepage
						const buttonText1 = document.getElementById("closex");
						buttonText1.addEventListener("click", closeModal);
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

	const handleChange1 = (event) => {
		const { name, value } = event.target;
		setFormData1((prevFormData1) => ({ ...prevFormData1, [name]: value }));
		setErrors((prevErrors1) => ({ ...prevErrors1, [name]: "" }));
	};

	// API to fetch disease list
	const [DiseaseList1, setDiseaseList1] = useState([]);
	const [LoadDisease, setLoadDisease] = useState(true);

	useEffect(() => {
		setLoadDisease(true);
		fetch(`${BASE_URL}/api/v1/diseases/list`)
			.then((response) => response.json())
			.then((responseData) => {
				setDiseaseList1(responseData.data);
				setLoadDisease(true);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoadDisease(true);
			});
	}, []);

	// DEFAULT LABEL FUNCTIONS
	const [isOpen1, setIsOpen1] = useState(false);
	const selectRef = useRef(null);

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (selectRef.current && !selectRef.current.contains(e.target)) {
				closeSelect1();
			}
		};

		document.addEventListener("click", handleOutsideClick);

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	// IF FORM SUBMISSION IS SUCCESSFUL THE DROPDOWN OPTION SHOULD NOT OPEN
	const toggleSelect1 = () => {
		if (!isSubmitted1) {
			setIsOpen1(!isOpen1);
		}
	};

	const closeSelect1 = () => {
		setIsOpen1(false);
	};

	// const [DiseaseList, setDiseaseList] = useState([]);
	// useEffect(() => {
	// 	fetch(`${BASE_URL}/api/v1/diseases/list`)
	// 		.then((response) => response.json())
	// 		.then((responseData) => {
	// 			// Add "Other" to the list obtained from the API
	// 			const diseases = responseData.data.concat(
	// 				"OTHER: Please add a condition if 'Other' is selected."
	// 			);

	// 			setDiseaseList(diseases);
	// 		})
	// 		.catch((error) => {
	// 			console.error("Error fetching data:", error);
	// 		});
	// }, []);

	return (
		<div className="jct-holder">
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
				<div className="progressbar">{headText0001}</div>

				{/* Geriatric input form section */}
				<form onSubmit={handleSubmit1}>
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
									disabled={isSubmitted1}
								/>
								<label
									for="yourName"
									class={`input__label ${isSubmitted1 ? "hidden-label" : ""}`}
								>
									Your Name
								</label>
								{errors.name && (
									<span className="error-msg">{errors.name}</span>
								)}
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
									disabled={isSubmitted1}
								/>
								<label
									for="email"
									class={`input__label ${isSubmitted1 ? "hidden-label" : ""}`}
								>
									Email
								</label>
								{errors.email && (
									<span className="error-msg">{errors.email}</span>
								)}
							</div>

							{/* CONDITION DROPDOWN SECTION */}
							<div className="input__field input">
								<div className="custom-select" ref={selectRef}>
									<div
										className={`select-selected ${
											isOpen1 ? "select-arrow-active" : ""
										}`}
										onClick={toggleSelect1}
										name="condition"
										onChange={handleChange1}
									>
										<span
											style={{
												color: "#000000",
												fontSize: "12px",
												fontWeight: "400",
											}}
										>
											{formData1.condition}
										</span>
										{formData1.condition === "Condition" && (
											<span style={{ color: "red", marginLeft: "-5px" }}>
												{" "}
												*
											</span>
										)}
										<span>{LoadDisease && <div className="loader"></div>}</span>

										<img src={droparrow} alt="dropdown-icon" />
									</div>
									{isOpen1 && (
										<div className="select-items input__filed">
											{DiseaseList1.map((item, index) => (
												<div
													key={item.id}
													value={item.id}
													onClick={() =>
														handleDropdownChange1({
															target: { name: "condition", value: item },
														})
													}
													className={
														item === formData1.condition
															? "same-as-selected"
															: "same-as-selected1"
													}
												>
													{item}
												</div>
											))}
										</div>
									)}
									{errors.condition && (
										<span className="error-msg">{errors.condition}</span>
									)}
								</div>
							</div>

							{/* SHOW THIS IF OTHERS IS SELECTED */}
							{showInputField1 && (
								<div className="input">
									<input
										className="input__field"
										type="text"
										placeholder=""
										name="otherCondition"
										value={formData1.otherCondition}
										onChange={handleChange1}
										disabled={isSubmitted1}
									/>
									<label
										class={`input__label ${isSubmitted1 ? "hidden-label" : ""}`}
									>
										Enter Condition
									</label>
								</div>
							)}
							{errors.otherCondition && (
								<span className="error-msg">{errors.otherCondition}</span>
							)}

							<div className="input__textarea">
								<textarea
									class="textarea__field"
									placeholder=" "
									id="message"
									name="message"
									value={formData1.message}
									onChange={handleChange1}
									disabled={isSubmitted1}
								/>

								<label
									for="message"
									class={`textarea__label ${
										isSubmitted1 ? "hidden-label" : ""
									}`}
								>
									Message
								</label>
							</div>

							<p className="pxp2">indicates a required field</p>
						</div>
					</div>
					<div className="xxx btnx" id="closex">
						{buttonText1}
						<img className="xxx-img" src={buttom_curve} alt="ellipse" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default Geriatric;
