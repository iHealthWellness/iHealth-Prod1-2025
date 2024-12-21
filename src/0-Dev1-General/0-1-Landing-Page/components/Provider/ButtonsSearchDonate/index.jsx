
// Import Libraries/Packages
import React from "react";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// Import Styles
import styles from "./index.module.css"; 

function ButtonsSearchDonate() {
  return (
    <div className={styles.providerBtnBlock}>
      <button
        onClick={() => {
          document.querySelector("#UnderConst-wrapper").style.display = "flex";
        }}
        className={`${styles.providerBtn} ${styles.search}`}
        type="submit"
      >
        Search
        {/* <SearchOutlinedIcon
          sx={{
            "@media (min-width: 1024px)": {
              display: "none",
            },
          }}
        /> */}
      </button>

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

export default ButtonsSearchDonate;




// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// // Import Styles
// import styles from "./index.module.css"; 

// function ButtonsSearchDonate({ onSubmit, isDisabled }) {
 
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

// export default ButtonsSearchDonate;
