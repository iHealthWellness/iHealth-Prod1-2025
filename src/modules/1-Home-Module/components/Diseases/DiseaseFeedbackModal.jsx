import Modal from "react-modal";
import React, { useEffect, useReducer, useRef, useMemo } from "react";
import axios from "axios";

import ModalLogo, { ModalContentLogo } from "./ModalLogo/ModalLogo";
import progressImgStep1 from "../../assets/Images/progress-step1-light-blue.svg";
import progressImgStep2 from "../../assets/Images/progress-step2-light-blue.svg";
import progressImgStep3 from "../../assets/Images/progress-step3-light-blue.svg";
import { IoClose } from "react-icons/io5";
import goBackArrow from "src/Assets/Icons/arrow-back.svg";
import closeArrow from "src/Assets/Icons/Close-X.png";

import { BASE_URL } from "src/environment/config";
import styles from "./DiseaseFeedbackModal.module.css";
import classes from "./default.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  },
};

const initialState = {
  formData: {
    community: "Team",
    name: "",
    email: "",
    condition: "Condition",
    otherCondition: "",
    message: "",
  },
  modalIsOpen: false,
  conditionMenuIsOpen: false,
  errors: {},
  isReview: false,
  isSubmitted: false,
  showInputField: false,
  mainHeadText: "",
  comingSoonText: <p className={'SN-P'}>(Coming Soon)</p>,
  contentText: [
    "Don't see the condition you are looking for?",
    "Let us know. We will be adding new communities based on community feedback."
  ],
  progressImg: progressImgStep1,
  textAreaCharCount: 0,
  isLoading: false,
  diseaseList: [],
  loadDisease: false,
  showConfirmationPopup: false
};

const ACTION_TYPES = {
  SET_FIELD: 'SET_FIELD',
  SET_FIELD_ERROR: 'SET_FIELD_ERROR',
  // OPEN_CONDITION_MENU: 'OPEN_CONDITION_MENU',
  // CLOSE_CONDITION_MENU: 'CLOSE_CONDITION_MENU',
  SET_DISEASE_LIST: 'SET_DISEASE_LIST',
  SET_LOADING_DISEASE: 'SET_LOADING_DISEASE',
  MOVE_TO_REVIEW: 'MOVE_TO_REVIEW',
  MOVE_TO_FIRST_STEP: 'MOVE_TO_FIRST_STEP',
  SUBMIT_FORM: 'SUBMIT_FORM',
  SUBMIT_SUCCESS: 'SUBMIT_SUCCESS',
  SET_DISEASE_TYPE: 'SET_DISEASE_TYPE',
  SHOW_CONFIRMATION_POPUP: 'SHOW_CONFIRMATION_POPUP',
  HIDE_CONFIRMATION_POPUP: 'HIDE_CONFIRMATION_POPUP'
};

// Consolidated validation functions
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateName = (name) => {
  return String(name).match(/^[A-Za-z0-9 '-]+$/);
};

const getFieldError = (field, value, condition) => {
  switch (field) {
    case 'name':
      if (!value.trim()) return "Missing name";
      if (!validateName(value)) return "Names may only contain letters, a hyphen, and an apostrophe";
      break;
    case 'email':
      if (!value.trim()) return "Email is required";
      if (!validateEmail(value)) return 'Email must be in this format "username@domain.com"';
      break;
    case 'condition':
      if (value.trim() === 'Condition' || value.trim() === 'Please Select') return "Field cannot be empty, select an option";
      break;
    case 'otherCondition':
      if (condition === '- Other -') {
        if (!value.trim()) return "Please provide a condition or disease";
        if (value.trim().length > 50) return "Message can only be 50 characters long";
      }
      break;
  }
  return "";
};

// Validation helper
const validateAllFields = (formData) => {
  const errors = {};
  const requiredFields = ['name', 'email', 'condition'];
  
  if (formData.condition === '- Other -') {
    requiredFields.push('otherCondition');
  }
  
  requiredFields.forEach(field => {
    const error = getFieldError(field, formData[field], formData.condition);
    if (error) errors[field] = error;
  });
  
  return errors;
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_FIELD: {
      const { name, value } = action.payload;
      let newState = {
        ...state,
        formData: {
          ...state.formData,
          [name]: value
        }
      };
      
      // Clear error for this field when user starts typing
      if (state.errors[name]) {
        newState.errors = {
          ...state.errors,
          [name]: ""
        };
      }
      
      // Handle special case for condition dropdown
      if (name === 'condition') {
        newState.conditionMenuIsOpen = false;
        
        if (value === '- Other -') {
          newState.showInputField = true;
        } else {
          newState.showInputField = false;
          newState.formData.otherCondition = '';
          // Clear otherCondition error if it exists
          if (newState.errors.otherCondition) {
            newState.errors = { ...newState.errors, otherCondition: "" };
          }
        }
      }
      
      // Handle text area character count
      if (name === 'message') {
        newState.textAreaCharCount = value.length;
      }
      
      return newState;
    }
    
    case ACTION_TYPES.SET_FIELD_ERROR: {
      const { name, error } = action.payload;
      return {
        ...state,
        errors: {
          ...state.errors,
          [name]: error
        }
      };
    }
    
    // case ACTION_TYPES.OPEN_CONDITION_MENU:
      // return {
        // ...state,
        // conditionMenuIsOpen: true
      // };
      
    // case ACTION_TYPES.CLOSE_CONDITION_MENU:
      // return {
        // ...state,
        // conditionMenuIsOpen: false
      // };
    
    case ACTION_TYPES.SET_DISEASE_LIST:
      return {
        ...state,
        diseaseList: action.payload
      };
      
    case ACTION_TYPES.SET_LOADING_DISEASE:
      return {
        ...state,
        loadDisease: action.payload
      };
      
    case ACTION_TYPES.MOVE_TO_REVIEW: {
      const errors = validateAllFields(state.formData);
      
      if (Object.keys(errors).length > 0) {
        return {
          ...state,
          errors
        };
      }
      
      return {
        ...state,
        isReview: true,
        progressImg: progressImgStep2,
        mainHeadText: "Summary of Submission",
        comingSoonText: '',
        contentText: ''
      };
    }
    
    case ACTION_TYPES.MOVE_TO_FIRST_STEP:
      return {
        ...state,
        isReview: false,
        progressImg: progressImgStep1,
        mainHeadText: state.formData.community.includes("Cancer") ? 'Cancer Disease Team' : 'Geriatric Disease Team',
        comingSoonText: <p>(Coming Soon)</p>,
        contentText: [
          "Don't see the condition you are looking for?",
          "Let us know. We will be adding new communities based on community feedback."
        ]
      };
      
    case ACTION_TYPES.SUBMIT_FORM:
      return {
        ...state,
        isLoading: true
      };
      
    case ACTION_TYPES.SUBMIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSubmitted: true,
        isReview: false,
        mainHeadText: "Submitted",
        comingSoonText: '',
        progressImg: progressImgStep3,
        showConfirmationPopup: true
      };
      
    case ACTION_TYPES.SET_DISEASE_TYPE: {
      const { diseaseType } = action.payload;
      let community = "Team";
      let mainHeadText = "";
      
      if (diseaseType === 'cancer') {
        community = 'Cancer Team';
        mainHeadText = 'Cancer Disease Team';
      } else if (diseaseType === 'geriatric') {
        community = 'Geriatric Disease Team';
        mainHeadText = 'Geriatric Disease Team';
      }
      
      return {
        ...state,
        formData: {
          ...state.formData,
          community
        },
        mainHeadText
      };
    }
    
    case ACTION_TYPES.SHOW_CONFIRMATION_POPUP:
      return {
        ...state,
        showConfirmationPopup: true
      };
      
    case ACTION_TYPES.HIDE_CONFIRMATION_POPUP:
      return {
        ...state,
        showConfirmationPopup: false
      };
    
    default:
      return state;
  }
}

const DiseaseFeedbackModal = ({ closeModal, diseaseType }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const selectRef = useRef(null);
  
  const {
    formData,
    errors,
    conditionMenuIsOpen,
    isReview,
    isSubmitted,
    showInputField,
    mainHeadText,
    comingSoonText,
    contentText,
    progressImg,
    textAreaCharCount,
    isLoading,
    diseaseList,
    loadDisease,
    showConfirmationPopup
  } = state;
  
  // Memoized validation to avoid recalculating on every render
  const isFormValid = useMemo(() => {
    const requiredFields = ['name', 'email', 'condition'];
    if (formData.condition === '- Other -') {
      requiredFields.push('otherCondition');
    }
    
    return requiredFields.every(field => {
      const value = formData[field];
      return value && value.trim() && value !== 'Condition' && value !== 'Please Select';
    });
  }, [formData]);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: ACTION_TYPES.SET_FIELD,
      payload: { name, value }
    });
  };
  
  const handleFieldBlur = (event) => {
    const { name, value } = event.target;
    const error = getFieldError(name, value, formData.condition);
    
    if (error) {
      dispatch({
        type: ACTION_TYPES.SET_FIELD_ERROR,
        payload: { name, error }
      });
    }
  };
  
  const handleDropdownChange = (event) => {
    const value = event.target.value;
    event.stopPropagation();
    dispatch({
      type: ACTION_TYPES.SET_FIELD,
      payload: { name: 'condition', value: value === 'Please Select' ? '' : value }
    });
    // dispatch({ type: ACTION_TYPES.CLOSE_CONDITION_MENU });
  };
  
  // NOTE: Deactivated to use standard select menu, but left here in case we need
  // custom menu later
  //
  // const toggleSelect = (e) => {
    // // e.preventDefault();
    // e.stopPropagation();
    // if (!isSubmitted && e.target.tagName !== 'OPTION') {
      // if (conditionMenuIsOpen) {
        // dispatch({ type: ACTION_TYPES.CLOSE_CONDITION_MENU });
      // } else {
        // dispatch({ type: ACTION_TYPES.OPEN_CONDITION_MENU });
      // }
    // }
  // };
  
  const handleNext = (event) => {
    event.preventDefault();
    dispatch({ type: ACTION_TYPES.MOVE_TO_REVIEW });
  };
  
  const goBack = () => {
    dispatch({ type: ACTION_TYPES.MOVE_TO_FIRST_STEP });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ACTION_TYPES.SUBMIT_FORM });
    
    // Simulated API call for testing
    // setTimeout(() => {
      // dispatch({ type: ACTION_TYPES.SUBMIT_SUCCESS });
    // }, 1000);
    
    // Production API call
    axios
      .post(`${BASE_URL}/api/v1/community/`, formData)
      .then((response) => {
        if (response.status === 201) {
          dispatch({ type: ACTION_TYPES.SUBMIT_SUCCESS });
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };
  
  // NOTE: Deactivated to use standard select menu, but left here in case we need
  // custom menu later
  //
  // useEffect(() => {
    // if (!conditionMenuIsOpen) return;
    // const handleOutsideClick = (e) => {
      // // Only close if menu is open and click is outside
      // // if (conditionMenuIsOpen && selectRef.current && !selectRef.current.contains(e.target)) {
      // if (selectRef.current && !selectRef.current.contains(e.target)) {
        // dispatch({ type: ACTION_TYPES.CLOSE_CONDITION_MENU });
      // }
    // };
    
    // // Use capture phase to handle before other listeners
    // document.addEventListener("mousedown", handleOutsideClick, true);
    
    // return () => {
      // document.removeEventListener("mousedown", handleOutsideClick, true);
    // };
  // }, [conditionMenuIsOpen]); // Only re-attach when menu state changes
  
  // Disease list fetch effect
  useEffect(() => {
    dispatch({
      type: ACTION_TYPES.SET_DISEASE_TYPE,
      payload: { diseaseType }
    });
    
    dispatch({ type: ACTION_TYPES.SET_LOADING_DISEASE, payload: true });
    
    fetch(`${BASE_URL}/api/v1/diseases/list`)
      .then((response) => response.json())
      .then((responseData) => {
        responseData.data.sort();
        dispatch({
          type: ACTION_TYPES.SET_DISEASE_LIST,
          payload: responseData.data
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        dispatch({ type: ACTION_TYPES.SET_LOADING_DISEASE, payload: false });
      });
  }, [diseaseType]);
  
  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      isOpen={true}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      className={classes.modalContent}
    >
      
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          <ModalLogo></ModalLogo>
        </div>
        <div className={`${classes.rightContainer} ${styles.relative}`}>
          <div className={classes.modalCloseButton}>
            <img onClick={closeModal} src={closeArrow}></img>
          </div>
          <div className={`${styles.contentWithScrolling}`}>
            <ModalContentLogo></ModalContentLogo>
            <div>
              <div className={`${styles.headWrapper} ${styles.relative}`}>
                {isReview && 
                  <div className={styles.backButton} title="Back" onClick={goBack}>
                    <img src={goBackArrow} alt="goBack" />
                  </div>
                }
                <div className={`${classes.subheader} SN-H3`}>
                  {mainHeadText}
                </div>
                {comingSoonText}
              </div>
              <div className={styles.progressbar}>
                <img src={progressImg} alt="progress-bar" />	
              </div>
              {!isSubmitted && !isReview &&
                <p className={`${styles.contentText} SN-P`}>{contentText[0]}<br/>{contentText[1]}</p>
              }

              {/* Form section with optimized validation */}
              <form className={isSubmitted && styles.flexCenter && styles.confirmationPopupMinSize}>
                {!isSubmitted && !isReview && <div>
                  <div className={styles.formContent}>
                    <div className={`${styles.inputGroup} ${styles.relative}`}>
                      <input
                        type="text"
                        id="name"
                        className={`${styles.fieldBorder} SN-P`}
                        placeholder="Your Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleFieldBlur}
                        disabled={isSubmitted}
                      />
                      {errors.name &&
                        <div className={`${styles.errorMsg} SN-P-Small`}>
                          <IoClose color='var(--SN-Color-Red-Orange)' style={{ margin: "2px" }} />
                          <span>{errors.name}</span>
                        </div>
                      }
                    </div>

                    <div className={`${styles.inputGroup} ${styles.relative}`}>
                      <input
                        type="email"
                        id="email"
                        className={`${styles.fieldBorder} SN-P`}
                        placeholder="Email *"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleFieldBlur}
                        disabled={isSubmitted}
                      />
                      {errors.email &&
                        <div className={`${styles.errorMsg} SN-P-Small`}>
                          <IoClose color='var(--SN-Color-Red-Orange)' style={{ margin: "2px" }} />
                          <span>{errors.email}</span>
                        </div>
                      }
                    </div>

                    {/* CONDITION DROPDOWN SECTION */}
                    <div className={`${styles.relative} ${styles.inputGroup}`}>
                      <div style={{'padding':'unset'}}>
                        <div className={styles.customSelect}>
                          <div
                            className={`
                              ${styles.conditionMenu}
                              ${styles.relative}
                            `}
                            disabled={isSubmitted}
                          >
                            <select
                              name="condition"
                              className={`
                                ${styles.conditionDropdown}
                                ${styles.fieldBorder}
                                SN-P
                                ${''/*conditionMenuIsOpen ? styles.conditionArrowOpen : styles.conditionArrowClosed*/}
                                ${formData.condition === "Condition" ? styles.conditionDropdownTextEmpty : styles.conditionDropdownTextSelected}
                              `}
                              id="condition"
                              // ref={selectRef}
                              // onFocus={(e) => toggleSelect(e)}
                              // onBlur={(e) => handleOutsideClick(e)}
                              onChange={handleDropdownChange}
                              value={formData.condition}
                            > 
                              <option className={styles.conditionOptionOne}>
                                Health Condition
                              </option>
                              <option>Please Select</option>
                              {diseaseList.map((item, index) => (
                                <option
                                  key={index}
                                  value={item}
                                  disabled={isSubmitted}
                                >
                                  {item}
                                </option>
                              ))}
                            </select>
                            <span>
                              {loadDisease && <div className={styles.loader}></div>}
                            </span>
                          </div>
                        </div>
                        {errors.condition && 
                          <div className={`${styles.errorMsg} SN-P-Small`}>
                            <IoClose color='var(--SN-Color-Red-Orange)' style={{ margin: "2px" }} />
                            <span>{errors.condition}</span>
                          </div>
                        }
                      </div>
                    </div>

                    {/* SHOW THIS IF OTHERS IS SELECTED */}
                    {showInputField && (
                      <div className={styles.inputGroup}>
                        <input
                          className={`${styles.fieldBorder} SN-P`}
                          type="text"
                          placeholder="Write the Condition *"
                          name="otherCondition"
                          id="otherCondition"
                          value={formData.otherCondition}
                          onChange={handleChange}
                          onBlur={handleFieldBlur}
                          disabled={isSubmitted}
                        />
                        {errors.otherCondition &&
                          <div className={`${styles.errorMsg} SN-P-Small`}>
                            <IoClose color='var(--SN-Color-Red-Orange)' style={{ margin: "2px" }} />
                            <span>{errors.otherCondition}</span>
                          </div>
                        }
                      </div>
                    )}

                    <div className={`${styles.inputGroup}`}>
                      <textarea
                        placeholder="Message"
                        id="message"
                        name="message"
                        className={`${styles.fieldBorder} SN-P`}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleFieldBlur}
                        disabled={isSubmitted}
                        maxLength="200"
                      />
                      <div className={styles.textAreaChars}>{textAreaCharCount}/200</div>
                    </div>
                    <p className={`${styles.requiredDesc} SN-P-Small`}>* indicates a required field</p>
                  </div>
                </div>}

                {!isSubmitted && isReview && 
                  <div className={`${styles.reviewTableWrapper} SN-P`}>
                    <table className={styles.reviewTable}>
                      <tbody>
                        <tr>
                          <td>Name:</td>
                          <td>{formData.name}</td>
                        </tr>
                        <tr>
                          <td>Email address:</td>
                          <td>{formData.email}</td>
                        </tr>
                        <tr>
                          <td>Health Condition:</td>
                          <td>{formData.condition === "- Other -" ? formData.otherCondition : formData.condition}</td>
                        </tr>
                        <tr>
                          <td>Message:</td>
                          <td>{formData.message}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                }

                {/* Confirmation Popup */}
                {showConfirmationPopup && (
                  <div className={`${styles.confirmationPopupOverlay} ${styles.flexCenter}`}>
                    <div className={`${styles.confirmationPopup} ${styles.relative}`}>
                      <div className={styles.confirmationPopupContent}>
                        <div className={styles.confirmationCheckmark}>
                          <div className={styles.checkCircle}>
                            <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                        </div>
                        <div className={`SN-H3`}>Thank you!</div>
                        <p className={`SN-P`}>Thank you for sharing the information with us. Your contribution is greatly appreciated.</p>
                        <button 
                          className={`${styles.confirmationButton} SN-Button`}
                          onClick={closeModal}
                        >
                          OK
                        </button>
                      </div>
                    </div>
                  </div>
                )}

              </form>
            </div>
          </div>
          <div className={`${classes.bottomButtonActionNavContainer} ${styles.leftRightPadding}`}>
            {!isSubmitted && !isReview && 
              <button 
                id="actionButton" 
                className={`${classes.actionBtn} SN-Button ${!isFormValid ? classes.buttonWithError : ''}`} 
                type="button" 
                onClick={handleNext} 
                disabled={!isFormValid}
              >
                Next
              </button>
            }
            {!isSubmitted && isReview && 
              <button id="actionButton" className={`${classes.actionBtn} SN-Button`} type="button" onClick={handleSubmit}>
                Submit
              </button>
            }
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DiseaseFeedbackModal;
