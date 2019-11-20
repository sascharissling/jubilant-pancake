import React from "react";
import Board from "./Board";
import styled from "@emotion/styled";

// STYLE Start

const GameBoard = styled.div`
  display: flex;
  justify-content: center;
`;

const GameInfo = styled.div`
  margin-left: 20px;
`;

// STYLE End

export default function Game() {
  return (
    <div className="game">
      <GameBoard>
        <Board />
      </GameBoard>
      <GameInfo>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </GameInfo>
    </div>
  );
}
