import Board from "./Board";
import { useState } from "react";
import Moves from "./Moves";
let startingBoard = new Array(3).fill(0).map((item) => new Array(3).fill(" "));

function Game(props) {
  let [currBoard, setCurrBoard] = useState(startingBoard);
  let [isXplaying, setIsXPlaying] = useState(true);
  let [gameStatus, setGameStatus] = useState("Start");

  let [history, setHistory] = useState([]);

  let handleClick = (row, col) => {
    if (gameStatus !== "Game in progress" && gameStatus !== "Start") {
      return;
    }
    if (currBoard[row][col] !== " ") {
      return;
    }
    let copyBoard = JSON.parse(JSON.stringify(currBoard));
    copyBoard[row][col] = isXplaying ? "X" : "O";

    setHistory(() => history.concat(JSON.stringify(copyBoard)));

    setCurrBoard(copyBoard);
    setIsXPlaying(!isXplaying);
    setGameStatus(() => ticTacToeGameStatus(copyBoard));
    // console.log(ticTacToeGameStatus(copyBoard));
    console.log(history);
  };

  const resetMoves = (idx) => {
    setCurrBoard(JSON.parse(history[idx]));
    setHistory(() => history.slice(0, idx));
    setIsXPlaying(() => (idx % 2 === 0 ? false : true));
  };

  return (
    <div className="game_container">
      <p>Palyer: {isXplaying ? "X" : "0"}</p>
      <p> {gameStatus}</p>
      <Board updateBoard={handleClick} currBoard={currBoard} />
      <div className="container_for_history">
        <p>Undo</p>
        {history.map((moves, idx) => (
          <Moves id={idx} resetMoves={resetMoves} />
        ))}
      </div>
    </div>
  );
}

function ticTacToeGameStatus(board) {
  function hasXWon() {
    function stateOfX() {
      var count = 0;
      for (let indx = 0; indx < board.length; indx++) {
        for (let scndIndx = 0; scndIndx < board[indx].length; scndIndx++) {
          if (board[indx][scndIndx] === "X") {
            count++;
          }
        }
        if (count === 3) {
          return true;
        } else {
          count = 0;
        }
      }
      count = 0;
      for (let indx = 0; indx < board.length; indx++) {
        for (let scndIndx = 0; scndIndx < board[indx].length; scndIndx++) {
          if (board[scndIndx][indx] === "X") {
            count++;
          }
        }
        if (count === 3) {
          return true;
        } else {
          count = 0;
        }
      }

      if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
        return true;
      }
      if (board[0][2] === "X" && board[1][1] === "X" && board[2][2] === "X") {
        return true;
      }
    }
    if (stateOfX() !== true) {
      return false;
    } else {
      return true;
    }
  }

  function hasOWon() {
    function stateOfO() {
      var count = 0;
      for (let indx = 0; indx < board.length; indx++) {
        for (let scndIndx = 0; scndIndx < board[indx].length; scndIndx++) {
          if (board[indx][scndIndx] === "O") {
            count++;
          }
        }
        if (count === 3) {
          return true;
        } else {
          count = 0;
        }
      }
      count = 0;
      for (let indx = 0; indx < board.length; indx++) {
        for (let scndIndx = 0; scndIndx < board[indx].length; scndIndx++) {
          if (board[scndIndx][indx] === "O") {
            count++;
          }
        }
        if (count === 3) {
          return true;
        } else {
          count = 0;
        }
      }

      if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") {
        return true;
      }
      if (board[0][2] === "O" && board[1][1] === "O" && board[2][2] === "O") {
        return true;
      }
    }
    if (stateOfO() !== true) {
      return false;
    } else {
      return true;
    }
  }
  function boardCount() {
    var xPiece = 0;
    var oPiece = 0;
    for (let indx = 0; indx < board.length; indx++) {
      for (let scndIndx = 0; scndIndx < board[indx].length; scndIndx++) {
        if (board[indx][scndIndx] === "O") {
          oPiece++;
        }
        if (board[indx][scndIndx] === "X") {
          xPiece++;
        }
      }
    }
    if (xPiece + oPiece === 9) {
      return true;
    } else {
      return false;
    }
  }

  if (hasXWon() === true) {
    return "Player X has won";
  }
  if (hasOWon() === true) {
    return "Player O has won";
  }
  if (boardCount() === true) {
    return "Game is drawn";
  } else {
    return "Game in progress";
  }
}

export default Game;
