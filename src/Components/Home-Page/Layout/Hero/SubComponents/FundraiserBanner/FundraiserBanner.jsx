import styles from "./FundraiserBanner.module.css";
import qrBanner from "src/Assets/Images/qr-banner.png";
import handsBanner from "src/Assets/Images/hands-banner.png";

function FundraiserBanner() {
  return (
    <section className={styles.fundraiserContainer}>
      <img src={qrBanner} alt="paypal qr code" />
      <header>
        <h2 className="SN-D-Home-H2-32">Make an impact Today!</h2>
        <p className={`SN-D-T-M-P-16 ${styles.greyText}`}>
          If you got the strength to give, help those facing complex diseases
          with insufficient care and resources:
        </p>
        <p className={`SN-D-T-M-P-16 ${styles.blueText}`}>
          Open Camera, Scan Code, Give Now!
        </p>
      </header>
      <img src={handsBanner} alt="image of hands" />
    </section>
  );
}

export default FundraiserBanner;
