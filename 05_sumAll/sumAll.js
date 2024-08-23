const sumAll = function(initialNumber, finalNumber) {

  if(initialNumber < 0
    || finalNumber < 0
    || !Number.isInteger(initialNumber) 
    || !Number.isInteger(finalNumber)) {
    return "ERROR";
  }

  if(initialNumber > finalNumber) {
    let temp = initialNumber;
    initialNumber = finalNumber;
    finalNumber = temp;
  }

  let sum = 0;

  for(i = initialNumber; i <= finalNumber; i++) {
    sum += initialNumber;
    initialNumber++;
  }

  return sum;

};

// Do not edit below this line
module.exports = sumAll;
