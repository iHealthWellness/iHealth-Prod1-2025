import "./ButtonTab.css";
import { clsx } from "clsx";

export const BntTab = ({ type, icon, onClick, className }) => {
  return (
    <button type={type} className={clsx("button", className)} onClick={onClick}>
      <img src={icon} alt="Toogle" />
    </button>
  );
};

export const ArrowTab = ({ type, icon, onClick, className }) => {
  return (
    <button
      type={type}
      className={clsx("buttontab", className)}
      onClick={onClick}
    >
    <img src={icon} alt="Toogle" />
    </button>
  );
};
