import "./FormButton.css"


const ModalButton = ({disabled, text, type, onClick}) => {


    return(
        <div className="modal-btn-cont">
            <button disabled={disabled} id="" type={type} onClick={onClick}>
            {text}
            </button>
        </div>
    )
}

export default ModalButton;