import styled from "styled-components";
import { Button } from "../../App";

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
  return (
    <GameContainer>
      <Display></Display>
      <ButtonContainer>
        <Button>Tak</Button>
        <Button>Nie</Button>
      </ButtonContainer>
    </GameContainer>
  );
};

export default Game;
