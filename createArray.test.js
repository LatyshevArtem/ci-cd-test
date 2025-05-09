const createArray = require('./createArray');

test('ABC', () => {
  const correctValue = 999;
  const array = createArray(1000000, correctValue);
  array.forEach((value) => expect(value).toBe(correctValue));
});
