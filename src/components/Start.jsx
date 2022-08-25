import styled from "styled-components";
import Button from "./Button";
import Output from "./Output";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: tomato;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 64px;
`;

const Title = styled.div`
  font-size: 48px;
`;

const Start = (props) => {
  return (
    <Container style={{ display: props.setStyle ? "none" : "flex" }}>
      <Title>RNG Game</Title>
      <Button
        key={2}
        onClick={(button) => {
          props.isStarted(true);
          Output(button.target);
        }}
      >
        Start
      </Button>
    </Container>
  );
};
export default Start;
