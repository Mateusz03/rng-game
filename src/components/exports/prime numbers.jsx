let prime_numbers = [];

const generate_prime_numbers = () => {
  for (let i = 2; i <= 100; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
      prime_numbers.push(i);
    }
  }
  prime_numbers.unshift(2, 3);
};
