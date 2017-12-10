'use strict';

class Stack{
  constructor(){
    this._data = [];
  }

  stackPush(value){
    this._data.push(value);
  }

  stackPop(){
    return this._data.pop();
  }
}

module.exports = Stack;
