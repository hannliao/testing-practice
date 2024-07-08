const analyzeArray = require('../scripts/analyzeArray');

test('array of 5 numbers', () => {
  expect(analyzeArray([2, 4, 6, 8, 10])).toEqual({
    average: 6,
    min: 2,
    max: 10,
    length: 5,
  });
});

test('array with negative numbers', () => {
  expect(analyzeArray([5, -3, 6, 2, 1, -8, 7, -4])).toEqual({
    average: 0.75,
    min: -8,
    max: 7,
    length: 8,
  });
});

test('empty array', () => {
  expect(() => analyzeArray([])).toThrow();
});
