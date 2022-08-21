import styled from "styled-components";
import { Button } from "../../App";
import { output_value } from "../../App";
import Draw_questions from "./draw questions";
import { hookstate, useHookstate } from "@hookstate/core";
import state from "./state";
import terms from "./terms of questions";

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

export const number0 = hookstate();
export const number1 = hookstate();

const Game = () => {
  const output = useHookstate(output_value);

  return (
    <GameContainer>
      <Display>{output.get()}</Display>
      <ButtonContainer>
        <Button
          key="0"
          onClick={(button) => {
            output.set(Draw_questions(button.target));
            terms(output.get(), state(button.target));
          }}
        >
          Tak
        </Button>
        <Button
          key="1"
          onClick={(button) => {
            output.set(Draw_questions(button.target));
            terms(output.get(), state(button.target));
          }}
        >
          Nie
        </Button>
      </ButtonContainer>
    </GameContainer>
  );
};

export default Game;
