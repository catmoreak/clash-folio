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
      {winner && <p className="winner">Winner: {winner === "X" ? "⚔️" : "🏴‍☠️"}</p>}
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
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Pirata+One&display=swap" rel="stylesheet" />
    </div>
  );
}
