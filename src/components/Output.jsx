import Rng from "./Rng";
import Questions from "./questions";
import numbers from "./numbers";

export let displayOut = "";

const Output = (button) => {
  const key = Object.entries(button)[0][1].return.key;
  switch (parseInt(key)) {
    case 0:
    case 1:
      if (numbers.length !== 1) {
        if (numbers.length > 10) {
          displayOut = Math.floor(Math.random() * (6 - 2)) + 2;
          return Questions(Rng(displayOut), displayOut);
        } else {
          displayOut = Math.floor(Math.random() * (5 - 2)) + 2;
          return Questions(Rng(displayOut), displayOut);
        }
      } else if (numbers.length === 1) {
        return `Twoja liczba to ${numbers[0]}?`;
      }
      break;
    case 2:
      displayOut = Questions(NaN, Math.floor(Math.random() * 2));
      break;
    case 3:
      window.location.reload();
      break;
    default:
      break;
  }
};

export default Output;
