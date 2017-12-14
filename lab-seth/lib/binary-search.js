'use strict';

let binarySearch = (sortedObjectArray,id) => {
  let lowIndex = 0;
  let highIndex = sortedObjectArray.length -1;

  while(lowIndex <= highIndex){

    let middleIndex = Math.floor((lowIndex + highIndex) / 2);
    let elementFound = sortedObjectArray[middleIndex].id;
    
    if(elementFound < id){
      lowIndex = middleIndex + 1;
    }else if(elementFound > id){
      highIndex = middleIndex -1;
    }else{
      return sortedObjectArray[middleIndex];
    } 
  }
  return -1;
};

module.exports = binarySearch;