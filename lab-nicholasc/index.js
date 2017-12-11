'use strict';

let binarySearch = require('./binary-search');

// let sortedArray = [2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,22,24,26,28,30,33,36,39,40,44,48,50,55,60,66,70,77,80,88,90,99,100,110,120,130];

let sortedArray = [];
let toppings = ['pepperoni', 'pineapple', 'cheese', 'bacon', 'chicken', 'bbq sauce', 'feta', 'sausage', 'peppers'];

class Topping{
  constructor(name){
    this.id = Topping.counter;
    Topping.counter++;
    this.name = name;
    sortedArray.push(this);
  }
}
Topping.counter = 0;

toppings.forEach(topping => new Topping(topping));

console.log(sortedArray);

binarySearch(sortedArray, 2);
