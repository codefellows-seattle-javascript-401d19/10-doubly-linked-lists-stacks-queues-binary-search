'use strict';

// let sampleArray = [
//   {id: 10, name = 'Demi'},
//   {id: 20, name = 'Sir Gregor'},
//   {id: 30, name = 'The Hound'},
// ]

let binarySearch = (sortedObjectArray, id) => {
  let lowIndex = 0;
  let highIndex = sortedObjectArray.length -1;
  let steps = 0;

  while(lowIndex <= highIndex){
    steps++;
    console.log(`Number of steps so far : ${steps}`);

    let middleIndex = Math.floor((lowIndex + highIndex) / 2);
    let elementFound = sortedObjectArray[middleIndex];

    if(elementFound.id < id){
      lowIndex = middleIndex + 1;
    }else if(elementFound.id > id){
      highIndex = middleIndex -1;
    }else{
      return middleIndex;
    }
  }
  return -1;
};

module.exports = binarySearch;
