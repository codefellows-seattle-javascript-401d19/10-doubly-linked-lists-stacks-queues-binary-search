'use strict';

let binarySearch = (sortedArray, id) => {
  // let count = 0;

  let minIndex = 0;
  let maxIndex = sortedArray.length - 1;
  let middleIndex = Math.floor((maxIndex + minIndex) / 2);

  while (minIndex < maxIndex && sortedArray[middleIndex].id !== id) {
    // count ++;
    
    if (sortedArray[minIndex].id === id || sortedArray[maxIndex].id === id || sortedArray[middleIndex].id === id) {
      break;
    }
    if (sortedArray[middleIndex].id < id) {
      minIndex = middleIndex + 1;
      maxIndex = maxIndex - 1;
      middleIndex = Math.floor((maxIndex + minIndex) / 2);
    } else if (sortedArray[middleIndex].id > id) {
      maxIndex = middleIndex - 1;
      minIndex = minIndex + 1;
      middleIndex = Math.floor((maxIndex + minIndex) / 2);
    }
  }
  
  switch (id) {
    case sortedArray[maxIndex].id: 
      return sortedArray[maxIndex].id;

    case sortedArray[minIndex].id: 
      return sortedArray[minIndex].id;

    case sortedArray[middleIndex].id: 
      return sortedArray[middleIndex].id;

    default: 
      throw new RangeError('No Matching ID Found');
  }
};

module.exports = binarySearch;
