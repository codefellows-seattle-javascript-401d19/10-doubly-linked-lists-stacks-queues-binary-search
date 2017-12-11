'use strict';

const binarySearchObjects = (array, id) => {
  if(!Array.isArray(array))
    throw new TypeError('<array> must be a sorted array.');
  
  let left = 0, right = array.length - 1, middle;

  while(left <= right) {
    middle = Math.floor((right - left) / 2) + left;
    
    if(array[middle].id === undefined)
      throw new TypeError('Each object in the array must have a numeric id property.');

    if(array[middle].id > id) {
      right = middle - 1;
    } else if(array[middle].id < id) {
      left = middle + 1;
    } else {
      return array[middle];
    }
  }

  throw new Error(`Object with id ${id} not found in array, or array is improperly sorted.`);
};

module.exports = binarySearchObjects;