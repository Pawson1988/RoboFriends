import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  function countUp(){
    setCount(count + 1)
  }

  const style = {
    border: "2px solid black",
    padding: 30,
    color: "blue",
  };

  const style1 = {
    fontSize: "3rem",
    color: "purple",
  };

  return (
    <>
      <p style={style1}>{count}</p>
      <button onClick={countUp} style={style}>
        Count UP
      </button>
      <button onClick={() => setCount(count - 1)} style={style}>
        Count DOWN
      </button>
    </>
  );
}

export default Button;
