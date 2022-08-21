const state = (button) => {
  const key = Object.entries(button)[0][1].return.key;

  if (parseInt(key) === 0) {
    return true;
  } else if (parseInt(key) === 1) {
    return false;
  } else if (parseInt(key) === 2) {
    return "Start";
  }
};
export default state;
