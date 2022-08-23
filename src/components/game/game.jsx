import styled from "styled-components";
import { Button } from "../../App";
import { hookstate, useHookstate } from "@hookstate/core";
import Draw from "./draw a question";
import { random_numbers } from "./questions";

export const output = hookstate("");

const GameContainer = styled.div`
  width: 600px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 64px;
`;

const Display = styled.div`
  width: 80%;
  height: 72px;
  background-color: rgba(32, 32, 32, 0.3);
  box-shadow: 0px 0px 8px 3px rgba(32, 32, 32, 0.6);
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;
const Game = () => {
  const state = useHookstate(output);
  return (
    <GameContainer>
      <Display>{state.get()}</Display>
      <ButtonContainer>
        <Button
          key="0"
          onClick={(button) => {
            state.set(Draw(button.target));
            console.log(random_numbers);
          }}
        >
          Tak
        </Button>
        <Button
          key="1"
          onClick={(button) => {
            state.set(Draw(button.target));
            console.log(random_numbers);
          }}
        >
          Nie
        </Button>
      </ButtonContainer>
    </GameContainer>
  );
};

export default Game;
