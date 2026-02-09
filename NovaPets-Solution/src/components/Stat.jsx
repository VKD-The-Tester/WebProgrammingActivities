const Stat = (inputLabel, inputValue) => {
  return (
    <div className="stat">
      <div className="label">{inputLabel}</div>
      <div className="value">{inputValue}</div>
    </div>
  );
};

export default Stat;
