'use strict';

let binarySearch = (sortedArray, id) => {
  let lowIndex = 0;
  let highIndex = sortedArray.length - 1;

  let steps = 0;

  while(lowIndex <= highIndex){
    steps++;
    console.log(`Number of steps so far: ${steps}`);

    let middleIndex = Math.floor((lowIndex + highIndex) / 2);
    // console.log(sortedArray[middleIndex].name);
    let elementFound = sortedArray[middleIndex];
    let elementFoundId = sortedArray[middleIndex].id;

    if(elementFoundId < id){
      lowIndex = middleIndex + 1;
    } else if (elementFoundId > id) {
      highIndex = middleIndex - 1;
    } else{
      return elementFound;
    }
  }
  return -1;
};

module.exports = binarySearch;
