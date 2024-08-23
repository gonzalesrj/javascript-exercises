const reverseString = function(word) {
  let splitWord = word.split("");
  let reverseWordArray = splitWord.reverse();
  let joinWordArray = reverseWordArray.join("");

  return joinWordArray;
};

// Do not edit below this line
module.exports = reverseString;
