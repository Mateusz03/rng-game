import Rng from "./random numbers";
export let text_numbers;
const Questions_function = () => {
  text_numbers = Rng();
  console.log(text_numbers);
  return [
    `Czy suma cyfr w liczbie jest parzysta?`,
    `Czy twoja liczba jest liczbą pierwszą?`,
    `Czy twoja liczba jest mniejsza od ${text_numbers[0]}?`,
    `Czy liczba jest podzielna przez ${text_numbers[0]}?`,
    `Czy twoja liczba jest większa od ${text_numbers[0]}?`,
    `Czy liczba mieści się w przedziale ${text_numbers[0]} a ${text_numbers[1]}?`,
  ];
};
export default Questions_function;
