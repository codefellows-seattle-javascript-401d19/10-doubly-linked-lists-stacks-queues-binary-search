'use strict';

const Stack = require('../model/stack');

describe('stack.js', () => {
  test('inserting values into a stacks should be removed in the reverse order', () => {
    let stack = new Stack(10);
    stack.push(new Stack(20));
    stack.push(new Stack(30));

    stack.pop();
    expect(stack.value).toEqual(10);
    expect(stack.next.value).toEqual(20);
    expect(stack.next.next).toBeNull();

    stack.pop();
    expect(stack.value).toEqual(10);
    expect(stack.next).toBeNull();
    
    stack.pop();
    expect(stack.value).toBeNull();
  });
});