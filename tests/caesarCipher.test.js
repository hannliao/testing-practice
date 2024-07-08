const caesarCipher = require('../scripts/caesarCipher');

test('shift of 4', () => {
  expect(caesarCipher('hannah', 4)).toBe('lerrel');
});

test('shift of 20 (alphabet wraps)', () => {
  expect(caesarCipher('hannah', 20)).toBe('buhhub');
});

test('shift of 26', () => {
  expect(caesarCipher('HANNAH', 26)).toBe('HANNAH');
});

test('case preservation', () => {
  expect(caesarCipher('Hannah', 4)).toBe('Lerrel');
});

test('punctuation', () => {
  expect(caesarCipher('Ha, nn-ah !', 4)).toBe('Le, rr-el !');
});

test('empty string throws error', () => {
  expect(() => caesarCipher('', 2)).toThrow();
});
