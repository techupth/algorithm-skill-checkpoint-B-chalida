// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  let characterMap = {};
  let maxCharacter = "";
  let maxCount = 0;

  for (let character of str) {
    if (characterMap[character]) {
      characterMap[character]++;
    } else {
      characterMap[character] = 1;
    }
  }

  for (let character in characterMap) {
    if (characterMap[character] > count) {
      maxCount = characterMap[character];
      maxCharacter = character;
    }
    return maxCharacter;
  }

  const characters1 = "abcccccccd";
  const characters2 = "apple 1231111";

  console.log(getMaxCharacters(characters1));
  console.log(getMaxCharacters(characters2));
};
