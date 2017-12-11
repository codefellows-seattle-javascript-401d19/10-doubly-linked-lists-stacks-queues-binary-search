'use strict';

let binarySearch = (sortedArray, itemToFind) => {
  let lowIndex = 0;
  let highIndex = sortedArray.length;

  let steps = 0;

  while(lowIndex <= highIndex){
    steps++;
    console.log(`steps so far : ${steps}`);
    let middleIndex = Math.floor((lowIndex+highIndex) /2);
    let elementFound = sortedArray[middleIndex];

    if(elementFound.id < itemToFind){
      lowIndex=middleIndex+1;
    }else if(elementFound.id > itemToFind){
      highIndex=middleIndex-1;
    }else{ 
      console.log(elementFound);
      return middleIndex;
    }
  }
  return -1;
};

module.exports = binarySearch;
