'use strict';

const binarySearch = (objArray, id) => {
  let lowIndex = 0;
  let highIndex = objArray.length - 1;
  if (!Array.isArray(objArray)){
    throw new Error('first argument must be an array');
  }
  if (!objArray.length){
    throw new Error('array must have length greater than 0');
  }
  objArray.forEach(obj => {
    if (obj.id === undefined || typeof obj.id !== 'number'){
      throw new Error('each object in the object array must have an id property that is a number');
    }
  });

  while (lowIndex <= highIndex){

    let middleIndex = Math.floor((lowIndex + highIndex) / 2);
    let idFound = objArray[middleIndex].id;

    if (idFound < id){
      lowIndex = middleIndex + 1;
    } else if (idFound > id){
      highIndex = middleIndex - 1;
    } else {

      return objArray[middleIndex];
    }
  }
  return -1;
};

module.exports = binarySearch;
