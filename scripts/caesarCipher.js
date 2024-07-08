function caesarCipher(str, shift) {
  if (str.length === 0) {
    throw new Error('empty string');
  }

  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const shifted = alphabet.slice(shift).concat(alphabet.slice(0, shift));
  const encryption = alphabet.reduce((acc, key, index) => {
    acc[key] = shifted[index];
    return acc;
  }, {});

  let strArray = [...str];
  let result = [];

  strArray.forEach((char) => {
    if (!/^[a-zA-Z]+$/.test(char)) {
      // non-alphabetical characters should remain unchanged
      result.push(char);
    } else {
      if (isLowerCase(char)) {
        let value = encryption[char.toUpperCase()];
        result.push(value.toLowerCase());
      } else {
        result.push(encryption[char]);
      }
    }
  });

  return result.join('');
}

function isLowerCase(char) {
  return char === char.toLowerCase();
}

module.exports = caesarCipher;
