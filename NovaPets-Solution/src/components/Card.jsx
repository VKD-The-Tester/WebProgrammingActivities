const Card = (stepNumber, headingText, paragraphInfo) => {
  return (
    <article className="card">
      <span className="badge">Step {stepNumber}</span>
      <h3>{headingText}</h3>
      <p>{paragraphInfo}</p>
    </article>
  );
};

export default Card;
