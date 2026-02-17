import "../components-styling/HeroCard.css";
import HeroActions from "./HeroActions";
import Kicker from "./Kicker";

const HeroCard = ({ children }) => {
  return <div className="hero-card">{children}</div>;
};

export default HeroCard;
