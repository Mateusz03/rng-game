import styled from "styled-components";
import Button from "./Button";
import Output, { displayOut } from "./Output";
import { useState } from "react";

const Container = styled.div`
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
  const [display, setDisplay] = useState("");
  return (
    <Container style={{ display: props.setStyle ? "flex" : "none" }}>
      <Display>{display || displayOut}</Display>
      <ButtonContainer>
        <Button
          key={1}
          onClick={(button) => {
            setDisplay(Output(button.target));
          }}
        >
          Tak
        </Button>
        <Button
          key={0}
          onClick={(button) => {
            setDisplay(Output(button.target));
          }}
        >
          Nie
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Game;
