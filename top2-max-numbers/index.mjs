// Problem
// Write a function getTop2MaxNumbers that takes an array of numbers as input
// and returns an array containing the top two maximum numbers
// from the input array and if there are duplicated numbers, please remove them

// Examples:
// getTop2MaxNumbers([10, 40, 20, 2, 9, 19]) === [40, 20]
// getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]) === [-2, -9]
// getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]) === [40, 20]

export const getTop2MaxNumbers = (numbers) => {
  const uniqueNums = [...new Set(numbers)];
  let maxNums1 = -Infinity;
  let maxNums2 = -Infinity;

  for (let i = 0; i < uniqueNums.length; i++) {
    if (uniqueNums[i] > maxNums1) {
      maxNums2 = maxNums1;
      maxNums1 = uniqueNums[i];
    } else if (uniqueNums[i] > maxNums2) {
      maxNums2 = uniqueNums[i];
    }
  }
  return [maxNums1, maxNums2];
};

console.log(getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]));
console.log(getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]));

// export const getTop2MaxNumbers = (numbers) => {
//   const uniqueNums = [...new Set(numbers)];
//   const sortedNums = uniqueNums.sort((a, b) => b - a);
//   return sortedNums.slice(0, 2);
// };
// console.log(getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]));
// console.log(getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]));
