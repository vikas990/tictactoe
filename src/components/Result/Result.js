import React from "react";
import "./Result.css";

const Result = ({ result, restartGame }) => {
  return (
    <div className="result">
      {result.state === "Draw" ? (
        <h1>Draw</h1>
      ) : (
        <h1>{result.winner === "X" ? "A Wins" : "B Wins"}</h1>
      )}

      <button onClick={restartGame}>Restart</button>
    </div>
  );
};

export default Result;
