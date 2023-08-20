import "./Button.css"
import { clsx } from 'clsx';
const Button = ({ icon, onClick, className }) => {


    return (

        <button className={clsx('button', className)} onClick={onClick}>
            <img src={icon} alt="icon" />
        </button>
    )


}
export default Button;