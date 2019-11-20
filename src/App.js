import React from "react";
import Game from "./components/Game";
import styled from "@emotion/styled";

// STYLE Start
const AppContainer = styled.div`
  text-align: center;
  background-color: #0055ffea;
  min-height: 100vh;
  padding: 20px;
  font-size: calc(10px + 2vmin);
  color: rgba(255, 255, 255, 0.925);
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
// STYLE End

function App() {
  return (
    <AppContainer>
      <h1>Jubilant Pancake</h1>
      <Game />
    </AppContainer>
  );
}

export default App;
