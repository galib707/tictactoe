import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./components/Game";
import "./styles.css"


function Main() {

    return (
        <div className="main">

            <h1>TicTacToe</h1>

            <Game />
        </div>

    )
}




let reactRoot = ReactDOM.createRoot(document.getElementById('root'))

reactRoot.render(<Main />)