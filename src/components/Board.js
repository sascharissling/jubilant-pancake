import React from "react";
import Square from "./Square";
import { calculateWinner } from "../utils/helpers";
import styled from "@emotion/styled";
import Status from "./Status";

// STYLE Start

const GameGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: stretch;
  max-width: ${props => 100 * Math.sqrt(props.size)}px;

  > * {
    flex-basis: ${props => 100 / Math.sqrt(props.size) - 2}%;
    width: 80px;
    height: 80px;
  }
`;
// STYLE End

export default function Board({ gameSize }) {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "🇷🇪" : "🇵🇼"}`;
  }

  // X = 🇷🇪 ; O = 🇵🇼

  function handleClick(index) {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    const squaresClone = [...squares];
    squaresClone[index] = xIsNext ? "🇷🇪" : "🇵🇼";
    setXIsNext(!xIsNext);

    setSquares(squaresClone);
  }

  return (
    <div>
      <Status>{status}</Status>
      <GameGrid size={9}>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </GameGrid>
    </div>
  );
}
