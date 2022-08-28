const Questions = (values, select) => {
  const array = [
    `Czy suma cyfr w liczbie jest parzysta?`,
    `Czy twoja liczba jest liczbą pierwszą?`,
    `Czy twoja liczba jest mniejsza od ${values.first}?`,
    `Czy liczba jest podzielna przez ${values.first}?`,
    `Czy twoja liczba jest większa od ${values.first}?`,
    `Czy liczba mieści się w przedziale ${values.first} a ${values.second}?`,
  ];

  return array[select];
};
export default Questions;
