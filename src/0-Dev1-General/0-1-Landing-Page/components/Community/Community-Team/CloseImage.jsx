import buttonclose from "src/Assets/Icons/closes.svg";
import styles from "./CloseImage.module.css";

const CloseImage = () => {
	return (
		<div>
			<img className={styles.closeImg} src={buttonclose} alt="close-button" />
		</div>
	);
};

export default CloseImage;
