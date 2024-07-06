const reverseString = require('../scripts/reverseString');

test('reverses string', () => {
  expect(reverseString('peaches')).toBe('sehcaep');
});

test('empty string throws error', () => {
  expect(() => reverseString('')).toThrow();
});
