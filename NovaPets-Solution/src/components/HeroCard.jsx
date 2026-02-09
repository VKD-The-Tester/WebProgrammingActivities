import "../components-styling/HeroCard.css";
import HeroActions from "./HeroActions";
import Kicker from "./Kicker";

const HeroCard = ({
  kickerText,
  headingText,
  paragraphInfo,
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
    <>
      <Kicker kickerText={kickerText}></Kicker>
      <h1>{headingText}</h1>
      <p>{paragraphInfo}</p>
      <HeroActions
        buttonClassOne={buttonClassOne}
        buttonLinkOne={buttonLinkOne}
        buttonTextOne={buttonTextOne}
        buttonClassTwo={buttonClassTwo}
        buttonLinkTwo={buttonLinkTwo}
        buttonTextTwo={buttonClassTwo}
        buttonClassThree={buttonClassThree}
        buttonLinkThree={buttonLinkThree}
        buttonTextThree={buttonTextThree}
      ></HeroActions>
    </>
  );
};

export default HeroCard;
