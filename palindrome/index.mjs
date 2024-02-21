// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

//   for (let i = 0; i < strArrays.length / 2; i++) {
//     const temp = strArrays[i];
//     strArrays[i] = strArrays[strArrays.length - 1 - i];
//     strArrays[strArrays.length - 1 - i] = temp;
//   return str === strArrays.join("");
// }
