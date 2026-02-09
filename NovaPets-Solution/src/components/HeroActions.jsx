import { NavLink } from "react-router-dom";

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
