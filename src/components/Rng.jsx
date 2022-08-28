import numbers from "./numbers";

export let actionNumbers;

const Rng = (output) => {
  if (parseInt(output) === 5) {
    let val0, val1;
    do {
      val0 = Math.floor(Math.random() * 90) + 1;
    } while (!numbers.includes(val0));

    val1 = val0 + 10;
    actionNumbers = { first: val0, second: val1 };
    return actionNumbers;
  } else if (parseInt(output) === 3) {
    let val = Math.floor(Math.random() * 8) + 2;
    actionNumbers = { first: val, second: null };
    return actionNumbers;
  } else {
    let val;

    do {
      val = Math.floor(Math.random() * 100) + 1;
    } while (!numbers.includes(val));

    actionNumbers = { first: val, second: null };
    return actionNumbers;
  }
};
export default Rng;
