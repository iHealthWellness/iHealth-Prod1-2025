import "./ButtonTab.css"
import { clsx } from 'clsx';
const BntTab = ({ type, icon, onClick, className }) => {


    return (

        <button type={type} className={clsx('button', className)} onClick={onClick}>
            <img src={icon} alt="Toogle" />
        </button>
    )


}
export default BntTab;