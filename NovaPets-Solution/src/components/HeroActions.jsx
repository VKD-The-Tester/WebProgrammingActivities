import { NavLink } from "react-router-dom";
import "../components-styling/HeroActions.css";
import Button from "./Button";

const HeroActions = ({
  buttonClassOne,
  buttonLinkOne,
  buttonTextOne,
  buttonClassTwo,
  buttonLinkTwo,
  buttonTextTwo,
  buttonClassThree = null,
  buttonLinkThree = null,
  buttonTextThree = null,
}) => {
  return (
    <div className="hero-actions">
      <Button
        className={buttonClassOne}
        buttonLink={buttonLinkOne}
        buttonText={buttonTextOne}
      ></Button>
      <Button
        className={buttonClassTwo}
        buttonLink={buttonLinkTwo}
        buttonText={buttonTextTwo}
      ></Button>
      <Button
        className={buttonClassThree}
        buttonLink={buttonLinkThree}
        buttonText={buttonTextThree}
      ></Button>
    </div>
  );
};

export default HeroActions;
