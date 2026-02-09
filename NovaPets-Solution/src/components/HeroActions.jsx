import { NavLink } from "react-router-dom";
import "../components-styling/HeroActions.css";

const HeroActions = ({ primaryLinkText, primaryLink, LinkText, Link }) => {
  return (
    <div className="hero-actions">
      <NavLink className="btn btn-primary" Link={primaryLink}>
        {primaryLinkText}
      </NavLink>
      <NavLink className="btn" Link={Link}>
        {LinkText}
      </NavLink>
    </div>
  );
};

export default HeroActions;
