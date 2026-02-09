import { NavLink } from "react-router-dom";
import "../components-styling/Button.css";

const Button = ({ buttonClass, buttonLink, buttonText }) => {
  return (
    <NavLink className={buttonClass} link={buttonLink}>
      {buttonText}
    </NavLink>
  );
};

export default Button;
