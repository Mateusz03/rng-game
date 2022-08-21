import React, { useState } from "react";
import styled from "styled-components";
import Game from "./components/game/game";
import Draw_questions from "./components/game/draw questions";
import { hookstate, useHookstate } from "@hookstate/core";
// import generate_prime_numbers from "./components/game/prime numbers.jsx";
import terms from "./components/game/terms of questions";
import state from "./components/game/state";

export const output_value = hookstate("");

const AppContainer = styled.div`
  width: 600px;
  min-height: 400px;
  background-color: tomato;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 64px;
  box-shadow: 0px 0px 8px 3px rgba(32, 32, 32, 0.6);
`;

const Title = styled.div`
  color: white;
  text-shadow: 0px 0px 10px rgba(32, 32, 32, 1);
  font-size: 48px;
`;

export const Button = styled.div`
  padding: 15px 30px 15px 30px;
  border-radius: 5px;
  background-color: rgba(32, 32, 32, 0.6);
  box-shadow: 0px 0px 5px 2px rgba(32, 32, 32, 1);
  font-size: 32px;
  color: white;
  text-shadow: 0px 0px 10px rgba(32, 32, 32, 1);
  transition: 80ms;
  &:hover {
    transform: scale(1.1);
    transition: 80ms;
  }
`;

const App = () => {
  const [startGame, setGame] = useState(false);
  const output = useHookstate(output_value);
  return (
    <AppContainer>
      <Title style={{ display: startGame ? "none" : "block" }}>RNG Game</Title>
      <Button
        key="2"
        onClick={(button) => {
          setGame(true);
          output.set(Draw_questions(button.target));
          // generate_prime_numbers();
          terms(output.get(), state(button.target));
        }}
        style={{ display: startGame ? "none" : "block" }}
      >
        Start
      </Button>
      {startGame === true && <Game />}
    </AppContainer>
  );
};
export default App;
