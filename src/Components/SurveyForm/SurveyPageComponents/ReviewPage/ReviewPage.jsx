import styles from "./ReviewPage.module.css";

function ReviewPage() {
  return (
    <div>
      <div
        className={`
SN-D-T-M-B-16 ${styles.personalInformation}`}
      >
        <h4>PERSONAL INFORMATION</h4>
        <p>Email adress:</p>
        <p>Your age:</p>
        <p>Gender:</p>
        <p>What is your ethnicity:</p>
        <p>Do you speak English?</p>
      </div>
      <div
        className={`
SN-D-T-M-B-16 ${styles.surveyQuestions}`}
      >
        <h4>SURVEY QUESTIONS</h4>
        <p>What type of NF do you have?</p>
        <p>Does any of family members have received the same diagnosis?</p>
        <p>Are you using any kind of medication to treat your condition?</p>
        <p>Have you ever received any of the following therapy?</p>
        <p>Do you have any other comorbities?</p>
      </div>
    </div>
  );
}

export default ReviewPage;
