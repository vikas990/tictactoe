import React from "react";
import Block from "../Block/Block";
import "./Board.css";

const Board = ({ boardValue, BoxSelect }) => {
  return (
    <div className="board">
      {boardValue.map((b, i) => (
        <Block value={b} index={i} BoxSelect={BoxSelect} />
      ))}
    </div>
  );
};

export default Board;
