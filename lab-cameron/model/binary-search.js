'use strict';

const binarySearch = (sortedArray, id) => {
  let low = 0;
  let high = sortedArray.length - 1;

  while (low <= high) {
    let pivot = Math.floor((low + high) / 2);
    let pivotElement = sortedArray[pivot];
    if (pivotElement.id < id) {
      low = pivot + 1;
    } else if (pivotElement.id > id) {
      high = pivot - 1;
    } else {
      return pivotElement;
    }
  }

  return -1;
};

module.exports = binarySearch;
