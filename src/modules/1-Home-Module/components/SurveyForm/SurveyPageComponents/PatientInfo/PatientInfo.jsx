import "./PatientInfo.css";

function PatientInfo({ currentPage }) {
  return (
    <div
      className={currentPage < 3 ? "survey-form-user" : "survey-form-user-none"}
    >
      <div className="patient-name">
        <div className="patient-circle-letter">
          <span className="SN-D-T-M-B-16">R</span>
        </div>
        <span className="patient-full-name SN-D-T-M-B-16">Rosa L.</span>
        <span className="patient-status SN-D-T-M-B-16">Patient</span>
      </div>
    </div>
  );
}

export default PatientInfo;
