'use strict';

const Stack = require('../model/stack');

describe('stack.js', () => {
  test('Stacks should have LIFO behavior', () => {
    const stack = new Stack(1);
    stack.stackPush(2);
    stack.stackPush(3);

    expect(stack.stackPop()).toEqual(3);
    expect(stack.stackPop()).toEqual(2);
    expect(stack.stackPop()).toEqual(1);
    expect(stack.stackPop()).toEqual(undefined);
    expect(stack.stackPop()).toEqual(undefined);
  });
});
