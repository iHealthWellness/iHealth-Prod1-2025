
// Import Libraries/Packages
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { donateLinkUrl } from "src/environment/config";

// Import Styles
import styles from "./index.module.css"; 

function DonateNowButton() {
  return (
    <div className={styles.providerBtnBlock}>
      <Link
        to={donateLinkUrl}
        className={`${styles.providerBtn} ${styles.search}`} 
        target="_blank"
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

      {/* <Link
        onClick={() => {
          document.querySelector("#UnderConst-wrapper").style.display = "flex";
        }}
        className={`${styles.providerBtn} ${styles.donate}`}
      >
        Donate Now
      </Link> */}
    </div>
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
