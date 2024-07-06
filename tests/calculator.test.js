const calculator = require('../scripts/calculator');

test('add 7 + 2', () => {
  expect(calculator.add(7, 2)).toBe(9);
});

test('subtract 7 - 2', () => {
  expect(calculator.subtract(7, 2)).toBe(5);
});

test('divide 7 / 2', () => {
  expect(calculator.divide(7, 2)).toBe(3.5);
});

test('divide 7 / 0', () => {
  expect(() => calculator.divide(7, 0)).toThrow();
});

test('multiply 7 * 2', () => {
  expect(calculator.multiply(7, 2)).toBe(14);
});
