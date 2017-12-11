'use strict';

let stackFactory = module.exports = {};

stackFactory.createStack = () =>{
  let data = [];

  return {
    push: (value) =>{
      data.push(value);
    },
    pop: () => {
      return data.pop();
    },
  };
};
