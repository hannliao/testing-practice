const capitalize = require('../scripts/capitalize');

test('capitalizes lowercase string', () => {
  expect(capitalize('hannah')).toBe('Hannah');
});

test('empty string throws error', () => {
  expect(() => capitalize('')).toThrow();
});
