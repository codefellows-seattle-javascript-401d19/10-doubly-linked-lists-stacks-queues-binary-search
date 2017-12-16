'use strict';

let stackModule = module.exports = {};
let doublyLinkList = require(`./doublyLinkList`);
// Add and remove elements ONLY from the top of the stack

let stack.createStack = () => {
  let stack = new DoublyLinkList();

  stack.push = (element) => {
    stack.append(element);
  };

  stack.pop = () => {
    stack.remove();
  };
};
// stack.createStack = () => {
//   let data = [];
//
//   return {
//     push: (element) => {                 // adds an element to the end of the array
//       data.push(element);
//     },
//     pop: () => {                        // removes an element from the end of the array & returns that element
//       return data.pop();
//     }
//   }
// }
