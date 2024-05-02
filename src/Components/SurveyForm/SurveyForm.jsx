import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

// Import other necessary components and styles
import "./SurveyForm.css";
import closeButtonX from "src/Assets/Icons/close-button-x.svg";
import logo1 from "src/Assets/Images/logo1.svg";
import ProgressBar from "src/Components/Home-Page/Layout/Community/Community-Team/ProgressBar.jsx";
import SurveyNav from "./SurveyPageComponents/SurveyNav/SurveyNav.jsx";
import PageOne from "./SurveyPageComponents/PageOne.jsx";
import PageTwo from "./SurveyPageComponents/PageTwo.jsx";
import SubmitPage from "./SurveyPageComponents/SubmitPage/SubmitPage";
import PatientInfo from "./SurveyPageComponents/PatientInfo/PatientInfo";
import SurveyButton from "./SurveyPageComponents/SurveyButton/SurveyButton";
import SurveyDisclaimer from "./SurveyPageComponents/SurveyDisclaimer/SurveyDisclaimer";
import ReviewPage from "./SurveyPageComponents/ReviewPage/ReviewPage";

const SurveyForm = ({ open, toggleModal }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [mainFormData, setMainFormData] = useState({}); // Store the form data
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [showChangesSaved, setShowChangesSaved] = useState(false);

  const updateMainFormData = (pageData) => {
    setMainFormData({ ...mainFormData, ...pageData });
  };

  const handleNextPage = () => {
    setIsNextEnabled((prev) => !prev);
    if (currentPage === 3) return;

    setShowChangesSaved(true); // Show the changes saved message
    console.log(isNextEnabled);

    setTimeout(() => {
      setCurrentPage((prev) => prev + 1);
      setShowChangesSaved(false);
      setIsNextEnabled((prev) => !prev);
    }, 1000);
  };

  const handlePreviousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  const handleClose = () => {
    toggleModal();
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleCanProceedToNextPage = (canProceed) => {
    setIsNextEnabled(canProceed);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <PageOne
            updateMainFormData={updateMainFormData}
            canProceedToNextPage={handleCanProceedToNextPage}
          />
        );
      case 2:
        return (
          <PageTwo
            updateMainFormData={updateMainFormData}
            canProceedToNextPage={handleCanProceedToNextPage}
          />
        );
      case 3:
        return (
          <ReviewPage
            mainFormData={mainFormData}
            updateMainFormData={updateMainFormData}
          />
        );
    }
  };

  const handleModalClose = (_, reason) => {
    if (reason !== "backdropClick") {
      setIsOpen(false);
    }
  };

  const titles = ["PERSONAL INFORMATION", "MEDICAL", "REVIEW"];

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="lg"
      onClick={handleModalClose}
      disableEscapeKeyDown
      PaperProps={{
        className: `${
          isSubmitted ? "custom-dialog-congratulatory" : "custom-dialog-default"
        } custom-main-dialog`,
      }}
    >
      {currentPage === 0 ? (
        // Render only the SurveyDisclaimer when currentPage is 0
        <DialogContent>
          <SurveyDisclaimer
            handleNextPage={handleNextPage}
            handleClose={handleClose}
            disabled={isNextEnabled}
          />
        </DialogContent>
      ) : (
        <DialogContent>
          {isSubmitted ? (
            // Display only the congratulatory message after submission
            <SubmitPage handleClose={handleClose} />
          ) : (
            <div className="form-container">
              <div className="top-section">
                <img src={logo1} alt="Logo" className="logo" />
                <button onClick={handleClose}>
                  <img
                    className="survey-close-btn"
                    src={closeButtonX}
                    alt="close button"
                  />
                </button>
                <div className="progress-bar-section">
                  <ProgressBar progress={currentPage} totalSteps={3} />
                </div>
                <span className="SN-D-P-20 text-section">
                  <p>Let us start to get to know you!</p>
                </span>
              </div>

              {/* Main Section */}

              <div className="main-section">
                <PatientInfo currentPage={currentPage} />
                <div
                  className={
                    currentPage < 3
                      ? "nav-content-section"
                      : "nav-content-section-review"
                  }
                >
                  <SurveyNav
                    currentPage={currentPage}
                    titles={titles}
                    handleNextPage={handleNextPage}
                    handlePreviousPage={handlePreviousPage}
                  />

                  <div className="form-content-section">
                    {/* Render the current page */}
                    {renderCurrentPage()}
                    {/* Display required field only in the first 2 pages */}
                    {currentPage < 3 && (
                      <div className="form-content-section-footer SN-D-T-M-B-16">
                        <span>* indicates a required field</span>
                      </div>
                    )}
                  </div>
                </div>

                <DialogActions className="form-actions">
                  {/* Back button appear after 1st page */}
                  <SurveyButton
                    type="button"
                    className={`not-finished ${
                      currentPage > 1 ? "" : "invisible"
                    }`}
                    handleAction={handlePreviousPage}
                    text="Back"
                  />
                  {currentPage < 3 && (
                    <SurveyButton
                      type="button"
                      className="not-finished"
                      handleAction={handleClose}
                      text="Finish Later"
                    />
                  )}
                  {/* Submit button only appears on last page */}
                  {currentPage === 2 ? (
                    <SurveyButton
                      type="submit"
                      className={`submit-next-page SN-D-T-M-B-16 ${
                        isNextEnabled ? "" : "disabled"
                      }`}
                      handleAction={handleNextPage}
                      text="Review"
                      disabled={!isNextEnabled}
                      changesSaved={showChangesSaved}
                    />
                  ) : currentPage === 3 ? (
                    <SurveyButton
                      type="submit"
                      className={`submit-next-page SN-D-T-M-B-16 ${
                        isNextEnabled ? "" : "disabled"
                      }`}
                      handleAction={handleSubmit}
                      text="Submit"
                      disabled={!isNextEnabled}
                      changesSaved={showChangesSaved}
                    />
                  ) : (
                    <SurveyButton
                      type="button"
                      className={`submit-next-page SN-D-T-M-B-16 ${
                        isNextEnabled ? "" : "disabled"
                      }`}
                      handleAction={handleNextPage}
                      text="Next Page"
                      disabled={!isNextEnabled}
                      changesSaved={showChangesSaved}
                    />
                  )}
                </DialogActions>
              </div>
            </div>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
};

export default SurveyForm;
