
// Import Libraries/Packages
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { donateLinkUrl } from "src/environment/config";

// Import Styles
import styles from "./index.module.css"; 

const ExitConfirmationModal = ({ isOpen, onClose, onConfirm, link }) => {
  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.confirmationModal}>
        {/* <h3>You are about to leave the website. Do you want to continue?</h3> */}
        <p>You are about to leave the website. Do you want to continue?</p>
        <div className={styles.modalButtons}>
          <button className={styles.confirmButton} onClick={() => onConfirm(link)}>
            Continue
          </button>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}


function DonateNowButton() {

  
    const [exitModalOpen, setExitModalOpen] = useState(false)
    const [selectedLink, setSelectedLink] = useState("")
  
    const link = donateLinkUrl;
  
  const handleLinkClick = (e, link) => {
    e.preventDefault()
    setSelectedLink(link)
    setExitModalOpen(true)
  }

  const handleConfirmExit = (link) => {
    window.open(link, '_blank')
    setExitModalOpen(false)
  }


  return (
    <>
    <div className={styles.providerBtnBlock}>
      <Link
        to={link}
        className={`${styles.providerBtn}  ${styles.search}`} 
        target="_blank"
        onClick={(e) => handleLinkClick(e, link)}
      >
        Donate Now
        {/* <SearchOutlinedIcon
          sx={{
            "@media (min-width: 1024px)": {
              display: "none",
            },
          }}
        /> */}
      </Link>

      <Link
        to={link}
        className={`${styles.providerBtn} ${styles.mobile} ${styles.search}`} 
        target="_blank"
        onClick={(e) => handleLinkClick(e, link)}
      >
        Donate
        {/* <SearchOutlinedIcon
          sx={{
            "@media (min-width: 1024px)": {
              display: "none",
            },
          }}
        /> */}
      </Link>

      {/* <Link
        onClick={() => {
          document.querySelector("#UnderConst-wrapper").style.display = "flex";
        }}
        className={`${styles.providerBtn} ${styles.donate}`}
      >
        Donate Now
      </Link> */}
    </div>
    <ExitConfirmationModal 
        isOpen={exitModalOpen}
        onClose={() => setExitModalOpen(false)}
        onConfirm={handleConfirmExit}
        link={selectedLink}
      />
    </>
  );
}

export default DonateNowButton;




// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// // Import Styles
// import styles from "./index.module.css"; 

// function DonateNowButton({ onSubmit, isDisabled }) {
 
//   return (
//     <div className={styles.providerBtnBlock}>
  
//   <button
//         // onClick={onSubmit}
//         onClick={() => {
//           document.querySelector("#UnderConst-wrapper").style.display = "flex";
//         }}
//         className={`${styles.providerBtn} ${styles.search}`}
//         type="submit"
//         disabled={isDisabled}
//       >
//         Search
//         <SearchOutlinedIcon
//           sx={{
//             "@media (min-width: 1024px)": {
//               display: "none",
//             },
//           }}
//         />
//       </button>

//       {/* <Link
//         onClick={() => {
//           document.querySelector("#UnderConst-wrapper").style.display = "flex";
//         }}
//         className={`${styles.providerBtn} ${styles.donate}`}
//       >
//         Search
//       </Link> */}
//     </div>
//   );
// }

// export default DonateNowButton;
