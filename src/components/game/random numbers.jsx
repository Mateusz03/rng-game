let num0, num1;
const Rng = () => {
  do {
    num0 = Math.floor(Math.random() * 100) + 1;
    num1 = num0 + 10;
  } while (!num0 || num1 > 100);
  return [num0, num1];
};
export default Rng;
