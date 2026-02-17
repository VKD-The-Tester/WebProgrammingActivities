import { useState } from "react";

export const Clicker = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}></button>
    </>
  );
};

export default Clicker;
