import { NavLink } from "react-router-dom";
import "../components-styling/HeroActions.css";
import Button from "./Button";

const HeroActions = ({ children }) => {
  return <div className="hero-actions">{children}</div>;
};

export default HeroActions;
