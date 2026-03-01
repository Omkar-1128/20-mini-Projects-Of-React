import React, { useEffect, useState } from "react";
import "./style.css";

function Square({ value, HandleSquareClick }) {
  return (
    <button onClick={HandleSquareClick} className="Square">
      {value}
    </button>
  );
}

function TicTakTok() {
  const [isX, setIsX] = useState("X");
  const [values, setValues] = useState(Array(9).fill(""));
  const [status, setStatus] = useState(`${isX} Starts First`);
  const [isWinnerFound, setIsWinnerFound] = useState(false);
  const [starter, setStarter] = useState("X");
  const [checkDraw, setCheckDraw] = useState(false);
  const winnerStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function HandleSquareClick(currSquare) {
    const copyArray = [...values];
    if (copyArray[currSquare] != "" || isWinnerFound) {
      return;
    }
    copyArray[currSquare] = isX;
    if (isX == "X") {
      setStatus("Next Turn O");
      setIsX("O");
    } else {
      setStatus("Next Turn X");
      setIsX("X");
    }

    setValues(copyArray);
  }

  function checkWinner() {
    for (let i = 0; i < winnerStates.length; i++) {
      if (
        values[winnerStates[i][0]] == values[winnerStates[i][1]] &&
        values[winnerStates[i][1]] == values[winnerStates[i][2]] &&
        values[winnerStates[i][0]] != ""
      ) {
        setStatus(
          `${values[winnerStates[i][0]]} Is The Winner, Please Restart The Game`,
        );
        setIsWinnerFound(true);
      }
    }
  }

  function HandleRestart() {
    const nextStarter = starter == "X" ? "O" : "X";
    setStarter(starter == "X" ? "O" : "X");
    setIsWinnerFound(false);
    setValues(Array(9).fill(""));
    setIsX(nextStarter);
    setStatus(`${nextStarter} Starts First`);
    setCheckDraw(false);
  }

  useEffect(() => {
    let isArrayFull = values.every((value) => value !== "");

    if (isArrayFull && !isWinnerFound) {
      (() => {
        setStatus("It's a Draw, Please Try Again...");
        setCheckDraw(true);
      })();
    }
  }, [isX, values]);

  useEffect(() => {
    function run() {
      checkWinner();
    }
    run();
  }, [isX, values]);

  return (
    <div className="container">
      <div className="tik-tak-tok-container">
        <div className="gameRow">
          <Square
            value={values[0]}
            HandleSquareClick={() => HandleSquareClick(0)}
          />
          <Square
            value={values[1]}
            HandleSquareClick={() => HandleSquareClick(1)}
          />
          <Square
            value={values[2]}
            HandleSquareClick={() => HandleSquareClick(2)}
          />
        </div>
        <div className="gameRow">
          <Square
            value={values[3]}
            HandleSquareClick={() => HandleSquareClick(3)}
          />
          <Square
            value={values[4]}
            HandleSquareClick={() => HandleSquareClick(4)}
          />
          <Square
            value={values[5]}
            HandleSquareClick={() => HandleSquareClick(5)}
          />
        </div>
        <div className="gameRow">
          <Square
            value={values[6]}
            HandleSquareClick={() => HandleSquareClick(6)}
          />
          <Square
            value={values[7]}
            HandleSquareClick={() => HandleSquareClick(7)}
          />
          <Square
            value={values[8]}
            HandleSquareClick={() => HandleSquareClick(8)}
          />
        </div>
        {(isWinnerFound || checkDraw) && (
          <div className="restartBtn">
            <button onClick={HandleRestart}>Restart</button>
          </div>
        )}
      </div>

      <h1>{status}</h1>
    </div>
  );
}

export default TicTakTok;
