import Rng from "./rng";

export let random_numbers;

const Questions_function = () => {
  random_numbers = Rng();
  console.log("in questions", random_numbers);
  return [
    `Czy suma cyfr w liczbie jest parzysta?`,
    `Czy twoja liczba jest liczbą pierwszą?`,
    `Czy twoja liczba jest mniejsza od ${random_numbers.first}?`,
    `Czy liczba jest podzielna przez ${random_numbers.first}?`,
    `Czy twoja liczba jest większa od ${random_numbers.first}?`,
    `Czy liczba mieści się w przedziale ${random_numbers.first} a ${random_numbers.second}?`,
  ];
};
export default Questions_function;
