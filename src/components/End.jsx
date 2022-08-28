import styled from "styled-components";
import Button from "./Button";
import numbers from "./numbers";
import Output from "./Output";

const Background = styled.div`
  position: absolute;
  background-color: rgba(32, 32, 32, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  z-index: 1;
`;
const Text = styled.div`
  color: white;
  font-size: 22px;
  text-shadow: 0px 0px 10px rgba(32, 32, 32, 1);
`;

export const endOutput = (button) => {
  const key = Object.entries(button)[0][1].return.key;
  switch (parseInt(key)) {
    case 0:
      return false;

    case 1:
      return true;

    default:
      break;
  }
};

export const endFunction = (button) => {
  const key = Object.entries(button)[0][1].return.key;
  switch (parseInt(key)) {
    case 0:
      if (numbers.length === 1) {
        return true;
      }
      break;
    case 1:
      if (numbers.length === 1) {
        return true;
      }
      break;
    default:
      break;
  }
};

const End = (props) => {
  return (
    <Background style={{ display: props.endContainer ? "flex" : "none" }}>
      <Text>
        {(props.guessed && "Udało się!!!") ||
          (!props.guessed && "Spróbujmy jeszcze raz!")}
      </Text>
      <Button
        key={3}
        onClick={(button) => {
          Output(button.target);
        }}
      >
        Restart
      </Button>
    </Background>
  );
};

export default End;
