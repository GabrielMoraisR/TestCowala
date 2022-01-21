function fibonacci(number) {
  let valueInitial = [0, 1];

  for (i = 2; i < number; i++) {
    valueInitial[i] = valueInitial[i - 2] + valueInitial[i - 1];
  }

  return valueInitial;
}


console.log(fibonacci(6));