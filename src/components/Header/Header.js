import React from "react";
import Reset from "../../Images/reset.png";
import "./Header.css";

const Header = ({ player }) => {
  return (
    <div className="header">
      <header>
        <h1>Tic Tac Toe Game</h1>
      </header>
      <h2>{player === "X" ? "A Turn" : "B Turn"}</h2>
    </div>
  );
};

export default Header;
