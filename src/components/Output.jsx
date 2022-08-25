import Rng from "./Rng";
import Questions from "./questions";

export let displayOut = "";

const Output = (button) => {
  const key = Object.entries(button)[0][1].return.key;
  switch (parseInt(key)) {
    case 0:
    case 1:
      displayOut = Math.floor(Math.random() * (6 - 2)) + 2;
      console.log(displayOut);
      return Questions(Rng(displayOut), displayOut);

    case 2:
      displayOut = Questions(NaN, Math.floor(Math.random() * 2));
      break;

    default:
      break;
  }
};

export default Output;
