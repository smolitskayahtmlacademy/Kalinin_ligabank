const convert = (number, from, to) => {
  const result = (number * to / from);
  if (result - result.toFixed(0) === 0) {
    return result;
  }
  return result.toFixed(2);
};

export { convert };
