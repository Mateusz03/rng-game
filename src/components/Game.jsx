import styled from "styled-components";
import Button from "./Button";
import Output, { displayOut } from "./Output";
import { useState } from "react";
import Action from "./Action";
import End, { endFunction, endOutput } from "./End";

const Container = styled.div`
  width: 600px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 64px;
  z-index: 0;
`;

const Display = styled.div`
  width: 80%;
  height: 72px;
  background-color: rgba(32, 32, 32, 0.3);
  box-shadow: 0px 0px 8px 3px rgba(32, 32, 32, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  text-shadow: 0px 0px 10px rgba(32, 32, 32, 1);
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;

const Game = (props) => {
  const [display, setDisplay] = useState(displayOut);
  const [end, setEnd] = useState(false);
  const [guess, setGuess] = useState();
  return (
    <Container
      style={{
        display: props.setStyle ? "flex" : "none",
      }}
    >
      <Display>{display || displayOut}</Display>
      <ButtonContainer>
        <Button
          key={1}
          onClick={(button) => {
            setEnd(endFunction(button.target));
            setGuess(endOutput(button.target));

            if (isNaN(parseInt(displayOut))) {
              Action(displayOut, button.target);
            } else {
              Action(display, button.target);
            }

            setDisplay(Output(button.target));
          }}
        >
          Tak
        </Button>
        <Button
          key={0}
          onClick={(button) => {
            setEnd(endFunction(button.target));
            setGuess(endOutput(button.target));
            if (isNaN(parseInt(displayOut))) {
              Action(displayOut, button.target);
            } else {
              Action(display, button.target);
            }

            setDisplay(Output(button.target));
          }}
        >
          Nie
        </Button>
      </ButtonContainer>
      <End endContainer={end} guessed={guess} />
    </Container>
  );
};

export default Game;
