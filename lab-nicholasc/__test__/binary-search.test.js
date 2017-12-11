'use strict';

let binarySearch = require('../lib/binary-search.js');

describe('binary-search.js', () =>{
  let sortedArray = [];
  let toppings = ['pepperoni', 'pineapple', 'cheese', 'bacon', 'chicken', 'bbq sauce', 'feta', 'sausage', 'peppers'];
  toppings.forEach(topping => new Topping(topping));

  test('binary search should return the node we are looking for', () => {
    binarySearch(toppings, 'feta')
    expect(stack.pop()).toEqual(undefined);
  });
});

// let sortedArray = [2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,22,24,26,28,30,33,36,39,40,44,48,50,55,60,66,70,77,80,88,90,99,100,110,120,130];

let sortedArray = [];
let toppings = ['pepperoni', 'pineapple', 'cheese', 'bacon', 'chicken', 'bbq sauce', 'feta', 'sausage', 'peppers'];

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
