'use strict';

const Stack = require('../model/stack');

describe('stack.js', () => {
  test('inserting values into a stacks should be removed in the reverse order', () => {
    let stack = new Stack(10);
    stack.push(new Stack(20));
    stack.push(new Stack(30));
    stack.push(new Stack(40));
    stack.push(new Stack(50));
    stack.push(new Stack(60));


    expect(stack.pop()).toEqual(60);
    expect(stack.pop()).toEqual(50);
    expect(stack.pop()).toEqual(40);
    expect(stack.pop()).toEqual(30);
    expect(stack.pop()).toEqual(20);
    expect(stack.pop()).toEqual(10);
  });
});