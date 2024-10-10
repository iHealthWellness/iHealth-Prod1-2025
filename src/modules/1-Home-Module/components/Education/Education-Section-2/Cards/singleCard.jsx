import styles from "./educationCards.module.css";

function getColor(educationData) {
    switch(true) {
        case educationData.audience === "Patient":
            return  '#9ad4ff';
        case educationData.audience === "Provider":
            return '#94f9d2';
        case educationData.audience === "Caregiver":
            return '#F1B2C7';
        default:
            return null; // Default color if none of the cases match
    }
}

function checkIfNull(educationData){
    switch(true) {
        case educationData.focus === "Children":
            return "#ECECEC";
        default: 
            return null;
    }
}

function Card(educationData) {
    const audienceStyle = {
        backgroundColor: getColor(educationData),
    };

    const focusStyle = {
        backgroundColor: checkIfNull(educationData),
    };

    return (
        <div className={styles.card}>
            <div className={styles.audienceBox} style={audienceStyle}>
                <h3>{educationData.audience}</h3> 
            </div>
            <div className={styles.box}>
                <p>{educationData.subCategories.map((item) => (<span className={styles.subcategoryBox}>{item}</span>))}</p>
            </div>
            <p><a className={styles.cardLink} href={educationData.contentLink} target="_blank" rel="noopener noreferrer">{educationData.name}</a></p>
            <div className={styles.focusBox} style={focusStyle}>
                <p>{educationData.focus}</p>
            </div>
            
        </div>
    );
}

export default Card;