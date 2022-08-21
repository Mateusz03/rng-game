import Questions_function from "./questions";
import { numbers } from "./redundant numbers";
import { text_numbers } from "./questions";
const terms = (question, state) => {
  console.log(question);
  if (question === Questions_function()[0]) {
    if (state === true) {
      for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
          numbers.push(i);
        }
      }
    } else if (state === false) {
      for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
          numbers.push(i);
        }
      }
    } else if (state === "Start") {
      return;
    }
  } else if (question === Questions_function()[1]) {
    if (state === true) {
      for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
          numbers.push(i);
        }
      }
      numbers.unshift(1);
    } else if (state === false) {
      for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0 && i % 3 !== 0 && i !== 1) {
          numbers.push(i);
        }
      }
      numbers.unshift(2, 3);
    } else if (state === "Start") {
      return;
    }
  } else if (question.includes("jest mniejsza")) {
    if (state === true) {
      console.log(question);
      console.log(text_numbers);
    } else if (state === false) {
      console.log(text_numbers);
    }
  } else if (question.includes("jest większa")) {
    if (state === true) {
    } else if (state === false) {
    }
  } else if (question.includes("jest podzielna")) {
    if (state === true) {
    } else if (state === false) {
    }
  } else if (question.includes("przedziale")) {
    if (state === true) {
    } else if (state === false) {
    }
  }
};
export default terms;
