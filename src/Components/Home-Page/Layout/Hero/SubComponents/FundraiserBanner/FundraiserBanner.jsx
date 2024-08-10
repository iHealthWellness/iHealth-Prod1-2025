import styles from "./FundraiserBanner.module.css";
import qrBanner from "src/Assets/Images/qr-banner.png";
import handsBanner from "src/Assets/Images/hands-banner.png";
import qrBannerMobile from "src/Assets/Images/qr-banner-mobile.png";
import handsBannerMobile from "src/Assets/Images/hands-banner-mobile.png";

import useCheckWindowSize from "src/hooks/useCheckWindowSize";

function FundraiserBanner() {
  const checkSize = useCheckWindowSize(768);

  return (
    <section className={styles.fundraiserContainer}>
      {checkSize ? (
        <img src={qrBanner} alt="paypal qr code" />
      ) : (
        <img src={handsBannerMobile} alt="image of hands" />
      )}
      <header>
        <h2 className="SN-D-Home-H2-32">Make an impact Today!</h2>
        <p className={`SN-D-T-M-P-16 ${styles.greyText}`}>
          If you have the strength to give, help those facing complex diseases
          with insufficient care and resources:
        </p>
        <a
          href="https://www.paypal.com/donate/?hosted_button_id=VE7E4C2UBA3EN"
          target="_blank"
        >
          <p className={`SN-D-T-M-P-16 ${styles.blueText}`}>
            Open Camera, Scan Code, Give Now!
          </p>
        </a>
      </header>
      {checkSize ? (
        <img src={handsBanner} alt="image of hands" />
      ) : (
        <img src={qrBannerMobile} alt="paypal qr code" />
      )}
    </section>
  );
}

export default FundraiserBanner;
