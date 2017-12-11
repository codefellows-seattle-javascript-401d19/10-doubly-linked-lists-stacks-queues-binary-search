'use strict';

let stackFactory = require('../lib/binary-search.js');

describe('stack.js', () =>{
  test('stacks should have LIFO behaviour', () => {
    let stack = stackFactory.createStack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toEqual(undefined);
  });
});
