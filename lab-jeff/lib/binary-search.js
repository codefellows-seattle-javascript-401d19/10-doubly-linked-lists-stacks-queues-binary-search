'use strict';

let binarySearch = (arrayOfObj, itemToFind) => {
  if(!Array.isArray(arrayOfObj)) throw new Error('first argument must be an array of objects.');
  if(typeof itemToFind !== 'number') throw new Error('second argument must be a number');
  let lowIndex = 0;
  let highIndex = arrayOfObj.length -1;

  while(lowIndex <= highIndex){

    let middleIndex = Math.floor((lowIndex + highIndex) / 2);
    let elementFound = arrayOfObj[middleIndex].id;

    if(elementFound < itemToFind){
      lowIndex = middleIndex + 1;
    }else if(elementFound > itemToFind){
      highIndex = middleIndex - 1;
    }else{
      return arrayOfObj[middleIndex];
    }
  }
  return -1;
};

module.exports = binarySearch;
