const createArray = (length, value) => {
  const array = new Array(length);
  array.fill(value);

  return array;
};

module.exports = createArray;
