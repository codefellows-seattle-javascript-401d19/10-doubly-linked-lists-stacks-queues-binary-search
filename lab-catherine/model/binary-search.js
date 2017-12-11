'use strict';

const binarySearch = (sortedObjectArray,itemToFind) => {
  if(!Array.isArray(sortedObjectArray)) throw new TypeError ('The argument must be an array');

  let lowIndex = 0;
  let highIndex = sortedObjectArray.length - 1;

  while(lowIndex <= highIndex){
    
    let middleIndex = Math.floor((lowIndex + highIndex) / 2);
    let elementFound = sortedObjectArray[middleIndex].id;
    
    if(elementFound < itemToFind) {
      lowIndex = middleIndex + 1;
    } else if (elementFound > itemToFind) {
      highIndex = middleIndex - 1;
    } else {
      return sortedObjectArray[middleIndex];
    } 
  }
  return -1;
};

module.exports = binarySearch;