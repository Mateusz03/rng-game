const Rng = () => {
  let val1, val2;

  do {
    val1 = Math.floor(Math.random() * 100) + 1;
    val2 = Math.floor(Math.random() * 100) + 1;
  } while (!val1 && val2 > 100 && val1 > 100 && val2 - 10 === val1);

  return { first: val1, second: val2 };
};

export default Rng;
