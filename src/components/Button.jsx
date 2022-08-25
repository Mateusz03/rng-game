import styled from "styled-components";

const Button = styled.div`
  padding: 15px 30px 15px 30px;
  border-radius: 5px;
  background-color: rgba(32, 32, 32, 0.6);
  box-shadow: 0px 0px 5px 2px rgba(32, 32, 32, 1);
  font-size: 32px;
  transition: 80ms;
  &:hover {
    transform: scale(1.1);
    transition: 80ms;
  }
`;
export default Button;
