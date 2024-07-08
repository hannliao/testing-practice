function analyzeArray(nums) {
  if (nums.length === 0) {
    throw new Error('empty array');
  }

  const object = {
    average: getAverage(nums),
    min: Math.min(...nums),
    max: Math.max(...nums),
    length: nums.length,
  };
  return object;
}

function getAverage(nums) {
  const sum = nums.reduce((acc, num) => {
    return acc + num;
  }, 0);
  return sum / nums.length;
}

module.exports = analyzeArray;
