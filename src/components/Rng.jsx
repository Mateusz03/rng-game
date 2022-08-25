const Rng = (output) => {
  if (parseInt(output) === 5) {
    let val0, val1;
    val0 = Math.floor(Math.random() * 90) + 1;
    val1 = val0 + 10;
    return { first: val0, second: val1 };
  } else {
    let val = Math.floor(Math.random() * 100) + 1;
    return { first: val, second: null };
  }
};
export default Rng;
