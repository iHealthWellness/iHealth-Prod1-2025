import "./ButtonTab.css";
import { clsx } from "clsx";

export const BntTab = ({ type, icon, onClick, className }) => {
  return (
    <button type={type} className={clsx("button", className)} onClick={onClick}>
      <img src={icon} alt="Toogle" />
    </button>
  );
};
