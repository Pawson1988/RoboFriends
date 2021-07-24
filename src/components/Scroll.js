
import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        width: "80%",
        margin: "0 auto",
        height: "500px"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
