import Questions_function from "./questions";

const Draw = (button) => {
  const key = Object.entries(button)[0][1].return.key;

  switch (parseInt(key)) {
    case 0:
    case 1:
      return Questions_function()[Math.floor(Math.random() * (6 - 2)) + 2];
    case 2:
      return Questions_function(NaN)[Math.floor(Math.random() * (2 - 0)) + 0];

    default:
      break;
  }
};
export default Draw;
