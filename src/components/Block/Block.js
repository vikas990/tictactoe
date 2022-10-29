import React from "react";
import "./Block.css";

const Block = ({ value, index, BoxSelect }) => {
  return (
    <>
      <p
        className={value === "X" ? "block x" : "block o"}
        onClick={() => value === "" && BoxSelect(index)}
        style={{ cursor: `${value === "" ? "pointer" : "default"}` }}
      >
        {value}
      </p>
    </>
  );
};

export default Block;
