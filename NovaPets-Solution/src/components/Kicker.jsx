import "../components-styling/Kicker.css";

const Kicker = ({ kickerText }) => {
  return (
    <div className="kicker">
      <span className="kicker-dot"></span>
      {kickerText}
    </div>
  );
};

export default Kicker;
