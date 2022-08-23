const Rng = () => {
  let val1, val2;

  while (!val1 && !val2) {
    val1 = Math.floor(Math.random() * 100) + 1;
    val2 = Math.floor(Math.random() * 100) + 1;
    if (val1 === val2) {
      val1 = null;
      val2 = null;
    }
  }

  return { first: val1, second: val2 };
};

export default Rng;
