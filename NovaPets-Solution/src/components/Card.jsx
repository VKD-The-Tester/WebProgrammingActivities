import "../components-styling/Card.css";

const Card = ({ badgeInput, headingText, paragraphInfo }) => {
  return (
    <article className="card">
      <span className="badge">{badgeInput}</span>
      <h3>{headingText}</h3>
      <p>{paragraphInfo}</p>
    </article>
  );
};

export default Card;
