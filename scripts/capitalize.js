function capitalize(str) {
  if (str.length === 0) {
    throw new Error('empty string');
  }
  return str[0].toUpperCase() + str.slice(1);
}

module.exports = capitalize;
