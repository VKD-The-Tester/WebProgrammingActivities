import "../components-styling/HeroCard.css";
import Kicker from "./Kicker";

const HeroCard = ({ kickerText, headingText, paragraphInfo }) => {
  return (
    <>
      <Kicker kickerText={kickerText}></Kicker>
      <h1>{headingText}</h1>
      <p>{paragraphInfo}</p>
    </>
  );
};

export default HeroCard;
