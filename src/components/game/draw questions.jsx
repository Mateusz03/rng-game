import Questions_function from "./questions";
export let output = "";
const Draw_questions = (button) => {
  const key = Object.entries(button)[0][1].return.key;

  switch (parseInt(key)) {
    case 2:
      output = Questions_function()[Math.floor(Math.random() * (2 - 0)) + 0];
      break;
    case 0:
    case 1:
      output =
        Questions_function()[
          Math.floor(Math.random() * (Questions_function().length - 2)) + 2
        ];

      break;
    default:
      break;
  }
  return output;
};

export default Draw_questions;
