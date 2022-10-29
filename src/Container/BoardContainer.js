import React, { useEffect, useState } from "react";
import Board from "../components/Board/Board";
import Header from "../components/Header/Header";
import Result from "../components/Result/Result";

const BoardContainer = () => {
  const WINNING_CONDITIONS = [
    [0, 1, 2], // if first row have either 3 O or 3 X
    [3, 4, 5], // if second row have either 3 O or 3 X
    [6, 7, 8], // if third row have either 3 O or 3 X
    [1, 4, 7], // if first column have either 3 O or 3 X
    [2, 5, 8], // if second column have either 3 O or 3 X
    [0, 4, 8], // Diagonal 1
    [2, 4, 6], // Diagonal 2
  ];

  // Initial States
  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  // Checking after every click if the user wins or it is a Draw.
  useEffect(() => {
    Draw();
    Winner();

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      restartGame();
    }
  }, [result]);

  /**
   *
   * @param {index} index is the position of the box which is selected
   * @description used to select the box and placing X/O;
   */
  const BoxSelect = (index) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === index && val === "") {
          return player;
        }

        return val;
      })
    );
  };

  /**
   *
   * @description used to find the winner of the game
   * @logic first creating the firstPlayer and checking every value in the board if any condition matched then its a win
   */
  const Winner = () => {
    WINNING_CONDITIONS.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  /**
   *
   * @description used to check if the game is draw.
   * @logic checking if all values are filled in board but no one wins the its a draw.
   */
  const Draw = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Draw" });
    }
  };

  /**
   *
   * @description used to restart the game.
   */
  const restartGame = () => {
    setBoard(Array(9).fill(""));
    setPlayer("O");
  };

  return (
    <>
      <Header player={player} />
      <Board boardValue={board} BoxSelect={BoxSelect} />
      {result.state === "none" ? null : (
        <Result result={result} restartGame={restartGame} />
      )}
    </>
  );
};

export default BoardContainer;
