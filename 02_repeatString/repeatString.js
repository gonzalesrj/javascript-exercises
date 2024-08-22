const repeatString = function(getWord, getNumber) {
  let word = "";
  if(getNumber < 0) return "ERROR";
  
  for(i = 0; i < getNumber; i++) {
    word += getWord;
  }

  return word;
};

// Do not edit below this line
module.exports = repeatString;
