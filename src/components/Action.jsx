import numbers from "./numbers";
import { actionNumbers } from "./Rng";

const arrayFragments = [
  `Czy suma cyfr w liczbie jest parzysta?`,
  `Czy twoja liczba jest liczbą pierwszą?`,
  `Czy twoja liczba jest mniejsza od `,
  `Czy liczba jest podzielna przez `,
  `Czy twoja liczba jest większa od `,
  `Czy liczba mieści się w przedziale`,
  `Twoja liczba to`,
];

const isEven = (even) => {
  if (even) {
    let filtered = numbers.filter((value) => {
      if (value > 9) {
        let splited = value.toString().split("");
        return (parseInt(splited[0]) + parseInt(splited[1])) % 2 === 0;
      } else {
        return value % 2 === 0;
      }
    });
    numbers.splice(0, numbers.length);
    numbers.push(...filtered);
  } else if (!even) {
    let filtered = numbers.filter((value) => {
      if (value <= 9) {
        return value % 2 !== 0;
      } else {
        let splited = value.toString().split("");
        return parseInt(splited[0] + splited[1]) % 2 !== 0;
      }
    });
    numbers.splice(0, numbers.length);
    numbers.push(...filtered);
  }
};

const isPrime = (prime) => {
  if (prime) {
    let filtered = numbers.filter((value) => {
      return value % 2 !== 0 && value % 3 !== 0 && value !== 1;
    });
    numbers.splice(0, numbers.length);
    numbers.push(...filtered);
    numbers.unshift(2, 3);
  } else if (!prime) {
    let filtered = numbers.filter((value) => {
      return (value % 2 === 0 || value % 3 === 0) && value !== 2 && value !== 3;
    });
    numbers.splice(0, numbers.length);
    numbers.push(...filtered);
    numbers.unshift(1);
  }
};

const isLess = (less) => {
  if (less) {
    let filtered = numbers.filter((value) => {
      return value < actionNumbers.first;
    });
    numbers.splice(0, numbers.length);
    numbers.push(...filtered);
  } else if (!less) {
    let filtered = numbers.filter((value) => {
      return value >= actionNumbers.first;
    });
    numbers.splice(0, numbers.length);
    numbers.push(...filtered);
  }
};

const isBigger = (bigger) => {
  if (bigger) {
    let filtered = numbers.filter((value) => {
      return value > actionNumbers.first;
    });
    numbers.splice(0, numbers.length);
    numbers.push(...filtered);
  } else if (!bigger) {
    let filtered = numbers.filter((value) => {
      return value <= actionNumbers.first;
    });
    numbers.splice(0, numbers.length);
    numbers.push(...filtered);
  }
};

const isDivisible = (divisible) => {
  if (divisible) {
    let filter = numbers.filter((value) => {
      return value % actionNumbers.first === 0;
    });
    numbers.splice(0, numbers.length);
    numbers.push(...filter);
  } else if (!divisible) {
    let filter = numbers.filter((value) => {
      return value % actionNumbers.first !== 0;
    });
    numbers.splice(0, numbers.length);
    numbers.push(...filter);
  }
};

const isInterval = (interval) => {
  if (interval) {
    let filter = numbers.filter((value) => {
      return value > actionNumbers.first && value < actionNumbers.second;
    });
    numbers.splice(0, numbers.length);
    numbers.push(...filter);
  } else if (!interval) {
    let filter = numbers.filter((value) => {
      return value < actionNumbers.first || value > actionNumbers.second;
    });
    numbers.splice(0, numbers.length);
    numbers.push(...filter);
  }
};

let lastNumbers = [];

const Answer = (output, value) => {
  lastNumbers.splice(0, lastNumbers.length);
  lastNumbers.push(...numbers);
  if (output.includes(arrayFragments[0])) {
    if (parseInt(value) === 1) {
      isEven(true);
    } else if (parseInt(value) === 0) {
      isEven(false);
    }
  } else if (output.includes(arrayFragments[1])) {
    if (parseInt(value) === 1) {
      isPrime(true);
    } else if (parseInt(value) === 0) {
      isPrime(false);
    }
  } else if (output.includes(arrayFragments[2])) {
    if (parseInt(value) === 1) {
      isLess(true);
    } else if (parseInt(value) === 0) {
      isLess(false);
    }
  } else if (output.includes(arrayFragments[3])) {
    if (parseInt(value) === 1) {
      isDivisible(true);
    } else if (parseInt(value) === 0) {
      isDivisible(false);
    }
  } else if (output.includes(arrayFragments[4])) {
    if (parseInt(value) === 1) {
      isBigger(true);
    } else if (parseInt(value) === 0) {
      isBigger(false);
    }
  } else if (output.includes(arrayFragments[5])) {
    if (parseInt(value) === 1) {
      isInterval(true);
    } else if (parseInt(value) === 0) {
      isInterval(false);
    }
  }
  if (numbers.length === 0) {
    numbers.push(...lastNumbers);
  }
  console.log(numbers);
};

const Action = (outputValue, button) => {
  const key = Object.entries(button)[0][1].return.key;

  switch (parseInt(key)) {
    case 0:
      Answer(outputValue, key);

      break;
    case 1:
      Answer(outputValue, key);

      break;
    default:
      break;
  }
};

export default Action;
