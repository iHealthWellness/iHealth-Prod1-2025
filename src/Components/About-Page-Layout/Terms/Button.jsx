import "./Button.css"
import { clsx } from 'clsx';
const Button = ({ type, icon, onClick, className }) => {


    return (

        <button type={type} className={clsx('button', className)} onClick={onClick}>
            <img src={icon} alt="Toogle" />
        </button>
    )


}
export default Button;