import { NavLink } from "react-router-dom";

const Button = ({ buttonClass, buttonLink, buttonText }) => {
  return (
    <NavLink className={buttonClass} link={buttonLink}>
      {buttonText}
    </NavLink>
  );
};

export default Button;
