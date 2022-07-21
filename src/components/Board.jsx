import Square from "./Square";
import { useState } from "react";

let startingBoard = new Array(3).fill(0).map((item) => new Array(3).fill(" "));

function Board(props) {
  return (
    <div className="board">
      <div className="row">
        <Square
          row={0}
          col={0}
          updateBoard={props.updateBoard}
          value={props.currBoard[0][0]}
        />
        <Square
          row={0}
          col={1}
          updateBoard={props.updateBoard}
          value={props.currBoard[0][1]}
        />
        <Square
          row={0}
          col={2}
          updateBoard={props.updateBoard}
          value={props.currBoard[0][2]}
        />
      </div>
      <div className="row">
        <Square
          row={1}
          col={0}
          updateBoard={props.updateBoard}
          value={props.currBoard[1][0]}
        />
        <Square
          row={1}
          col={1}
          updateBoard={props.updateBoard}
          value={props.currBoard[1][1]}
        />
        <Square
          row={1}
          col={2}
          updateBoard={props.updateBoard}
          value={props.currBoard[1][2]}
        />
      </div>
      <div className="row">
        <Square
          row={2}
          col={0}
          updateBoard={props.updateBoard}
          value={props.currBoard[2][0]}
        />
        <Square
          row={2}
          col={1}
          updateBoard={props.updateBoard}
          value={props.currBoard[2][1]}
        />
        <Square
          row={2}
          col={2}
          updateBoard={props.updateBoard}
          value={props.currBoard[2][2]}
        />
      </div>
    </div>
  );
}

// function ticTacToeGameStatus(board) {
//   function hasXWon() {
//     function stateOfX() {
//       var count = 0;
//       for (let indx = 0; indx < board.length; indx++) {
//         for (let scndIndx = 0; scndIndx < board[indx].length; scndIndx++) {
//           if (board[indx][scndIndx] === "X") {
//             count++;
//           }
//         }
//         if (count === 3) {
//           return true;
//         } else {
//           count = 0;
//         }
//       }
//       count = 0;
//       for (let indx = 0; indx < board.length; indx++) {
//         for (let scndIndx = 0; scndIndx < board[indx].length; scndIndx++) {
//           if (board[scndIndx][indx] === "X") {
//             count++;
//           }
//         }
//         if (count === 3) {
//           return true;
//         } else {
//           count = 0;
//         }
//       }

//       if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
//         return true;
//       }
//       if (board[0][2] === "X" && board[1][1] === "X" && board[2][2] === "X") {
//         return true;
//       }
//     }
//     if (stateOfX() != true) {
//       return false;
//     } else {
//       return true;
//     }
//   }

//   function hasOWon() {
//     function stateOfO() {
//       var count = 0;
//       for (let indx = 0; indx < board.length; indx++) {
//         for (let scndIndx = 0; scndIndx < board[indx].length; scndIndx++) {
//           if (board[indx][scndIndx] === "O") {
//             count++;
//           }
//         }
//         if (count === 3) {
//           return true;
//         } else {
//           count = 0;
//         }
//       }
//       count = 0;
//       for (let indx = 0; indx < board.length; indx++) {
//         for (let scndIndx = 0; scndIndx < board[indx].length; scndIndx++) {
//           if (board[scndIndx][indx] === "O") {
//             count++;
//           }
//         }
//         if (count === 3) {
//           return true;
//         } else {
//           count = 0;
//         }
//       }

//       if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") {
//         return true;
//       }
//       if (board[0][2] === "O" && board[1][1] === "O" && board[2][2] === "O") {
//         return true;
//       }
//     }
//     if (stateOfO() != true) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   function boardCount() {
//     var xPiece = 0;
//     var oPiece = 0;
//     for (let indx = 0; indx < board.length; indx++) {
//       for (let scndIndx = 0; scndIndx < board[indx].length; scndIndx++) {
//         if (board[indx][scndIndx] === "O") {
//           oPiece++;
//         }
//         if (board[indx][scndIndx] === "X") {
//           xPiece++;
//         }
//       }
//     }
//     if (xPiece + oPiece === 9) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   if (hasXWon() === true) {
//     return "Player X has won";
//   }
//   if (hasOWon() === true) {
//     return "Player O has won";
//   }
//   if (boardCount() === true) {
//     return "Game is drawn";
//   } else {
//     return "Game in progress";
//   }
// }

export default Board;
