import React, { useState } from "react";

const initialBoard = Array(9).fill(null);

function checkWinner(board) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const winner = checkWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXNext(true);
  };

  return (
    <div className="tic-tac-toe pirate-theme">
      <h1>{'🏴‍☠️ Pirate Tic Tac Toe 🏴‍☠️'}</h1>
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
            style={{ userSelect: "none" }}
          >
            {cell === "X" && <span role="img" aria-label="crossed swords">⚔️</span>}
            {cell === "O" && <span role="img" aria-label="pirate">🏴‍☠️</span>}
          </div>
        ))}
      </div>
      {/* Pirate Winner Popup */}
      {winner && (
        <div className="pirate-popup-overlay">
          <div className="pirate-popup pirate-popup-animate">
            <div className="pirate-popup-header">{winner === "X" ? "⚔️" : "🏴‍☠️"} Ahoy, Matey!</div>
            <div className="pirate-popup-body">
              <p className="pirate-popup-text">
                {winner === "X"
                  ? "The swordsman claims victory!"
                  : "The pirate flag rules the seas!"}
              </p>
              <div style={{ fontSize: "2.5rem", margin: "0.5rem 0" }}>
                {winner === "X" ? "⚔️" : "🏴‍☠️"}
              </div>
              <button className="pirate-popup-btn" onClick={resetGame}>
                Play Again
              </button>
            </div>
          </div>
        </div>
      )}
      <button onClick={resetGame}>Restart</button>
      <style>{`
        .pirate-theme {
          background: linear-gradient(135deg, #1a1a1a 0%, #3e2723 100%);
          color: #ffd700;
          border: 4px solid #8d5524;
          border-radius: 16px;
          box-shadow: 0 8px 32px #000a;
          padding: 2rem;
          max-width: 420px;
          margin: 2rem auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pirate-theme h1 {
          font-family: 'Pirata One', cursive, serif;
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          color: #ffd700;
          text-shadow: 2px 2px 8px #000a;
          text-align: center;
        }
        .pirate-theme .board {
          display: grid;
          grid-template-columns: repeat(3, 100px);
          grid-gap: 5px;
          justify-content: center;
          margin: 20px auto;
        }
        .pirate-theme .cell {
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #222;
          color: #ffd700;
          font-size: 2.5rem;
          cursor: pointer;
          border: 2px solid #8d5524;
          border-radius: 8px;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .pirate-theme .cell:hover {
          background: #3e2723;
          box-shadow: 0 0 8px #ffd70088;
        }
        .pirate-theme .winner {
          font-size: 1.5rem;
          color: #ffd700;
          margin-top: 1rem;
          text-shadow: 1px 1px 6px #000a;
          text-align: center;
        }
        .pirate-theme button {
          margin-top: 20px;
          padding: 10px 24px;
          font-size: 1.1rem;
          background: #8d5524;
          color: #ffd700;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 2px 8px #0006;
          transition: background 0.2s;
        }
        .pirate-theme button:hover {
          background: #ffd700;
          color: #3e2723;
        }
        /* Pirate popup styles */
        .pirate-popup-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(20, 10, 0, 0.7);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pirate-popup {
          background: #2d1606;
          border: 4px solid #ffd700;
          border-radius: 18px;
          box-shadow: 0 8px 32px #000a;
          padding: 2.2rem 2.5rem 1.5rem 2.5rem;
          text-align: center;
          color: #ffd700;
          max-width: 340px;
          font-family: 'Pirata One', cursive, serif;
          position: relative;
        }
        .pirate-popup-header {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }
        .pirate-popup-body {
          font-size: 1.2rem;
        }
        .pirate-popup-text {
          margin-bottom: 0.5rem;
        }
        .pirate-popup-btn {
          margin-top: 1rem;
          padding: 10px 24px;
          font-size: 1.1rem;
          background: #8d5524;
          color: #ffd700;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 2px 8px #0006;
          transition: background 0.2s;
        }
        .pirate-popup-btn:hover {
          background: #ffd700;
          color: #3e2723;
        }
        @keyframes pirate-bounce-in {
          0% { transform: scale(0.7) translateY(-60px); opacity: 0; }
          60% { transform: scale(1.05) translateY(10px); opacity: 1; }
          80% { transform: scale(0.98) translateY(-4px); }
          100% { transform: scale(1) translateY(0); }
        }
        .pirate-popup-animate {
          animation: pirate-bounce-in 0.7s cubic-bezier(.68,-0.55,.27,1.55);
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Pirata+One&display=swap" rel="stylesheet" />
    </div>
  );
}
