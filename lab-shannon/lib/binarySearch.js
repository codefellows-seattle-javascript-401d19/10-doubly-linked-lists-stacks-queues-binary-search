'use strict';

let binarySearch = (sortedArray, id) => {
  if(sortedArray.length < 1){
    throw new Error(`The array provided is empty`);
  }

  if(typeof id !== `number`){
    throw new Error(`The id provided must be a number`);
  }

  let lowIndex = 0;
  let highIndex = sortedArray.length - 1;

  while(lowIndex <= highIndex){
    let middleIndex = Math.floor((lowIndex + highIndex)/2);
    let foundObject = sortedArray[middleIndex];
    let foundId = sortedArray[middleIndex].id;

    if(foundId < id){
      lowIndex = middleIndex + 1;
    }else if(foundId > id){
      highIndex = middleIndex - 1;
    }
    else{return foundObject};
  }

  return {};
};

module.exports = binarySearch;
