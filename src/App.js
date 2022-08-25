import styled from "styled-components";
import Start from "./components/Start";
import Game from "./components/Game";
import React, { useState } from "react";

const AppContainer = styled.div`
  width: 600px;
  height: 400px;
  background-color: tomato;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 64px;
  box-shadow: 0px 0px 8px 3px rgba(32, 32, 32, 0.6);
  color: white;
  text-shadow: 0px 0px 10px rgba(32, 32, 32, 1);
`;

const App = () => {
  const [style, setStyle] = useState(false);

  const start = (value) => {
    return setStyle(value);
  };

  return (
    <AppContainer>
      <Start isStarted={start} setStyle={style} />
      <Game setStyle={style} />
    </AppContainer>
  );
};

export default App;
