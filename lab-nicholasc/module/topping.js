'use strict';

class Topping{
  constructor(name){
    this.id = Topping.counter;
    Topping.counter++;
    this.name = name;
    sortedArray.push(this);
  }
}

Topping.counter = 0;

module.exports = Topping;
