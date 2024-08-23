const removeFromArray = function(array, ...removeValue) {

  const newArray = [];

  array.forEach((item) => {
    if(!removeValue.includes(item)) {
      newArray.push(item);
    }
  });


  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
