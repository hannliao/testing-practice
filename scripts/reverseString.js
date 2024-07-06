function reverseString(str) {
  if (str.length === 0) {
    throw new Error('empty string');
  }
  return [...str].reverse().join('');
}

module.exports = reverseString;
