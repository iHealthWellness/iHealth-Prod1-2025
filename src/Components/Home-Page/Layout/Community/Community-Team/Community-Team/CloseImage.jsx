import buttonclose from "src/Assets/Icons/closes.svg";
import "./CloseImage.css";

const CloseImage = () => {
	return (
		<div>
			<img className="close-img" src={buttonclose} alt="close-button" />
		</div>
	);
};

export default CloseImage;
