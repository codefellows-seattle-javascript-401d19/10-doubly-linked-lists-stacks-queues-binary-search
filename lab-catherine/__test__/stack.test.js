'use strict';

let StackLinkedList = require('../lib/stack');

describe('stack.js', () => {
  test('Stacks should have Last In First Out (LIFO) behavior', () => {
    let stack = new StackLinkedList(1);

    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toEqual(undefined);
  });
});