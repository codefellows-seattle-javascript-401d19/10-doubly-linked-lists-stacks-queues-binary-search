'use strict';

let stack = module.exports = {};

stack.createStack = () => {
  //-----------------------------
  // Vinicio - This won't be accessible outside the module
  //-----------------------------
  let data = [];
  //-----------------------------

  //TODO: IMPLEMENT USING (INTERNALLY) A LINKED LIST

  return {
    //TODO: FINISH PUSH METHOD
    push: (value) => {
      data.push(value);
    },
    pop: () => {
      //TODO: FINISH POP METHOD
      return data.pop();
    },
  };
};