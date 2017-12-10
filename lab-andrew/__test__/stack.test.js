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
  });

  test('Should throw error if stackPop is attempted on empty stack', () => {
    const stack = new Stack(1);
    stack.stackPop();
    expect(() => stack.stackPop()).toThrow();
  });

  test('Stack should work with multiple data types', () => {
    const stack = new Stack('hey');
    stack.stackPush(true);
    stack.stackPush(undefined);
    stack.stackPush({});

    expect(stack.stackPop()).toEqual({});
    expect(stack.stackPop()).toEqual(undefined);
    expect(stack.stackPop()).toEqual(true);
    expect(stack.stackPop()).toEqual('hey');
  });

  test('Stack should work with complex orders', () => {
    const stack = new Stack(1);
    stack.stackPush(2);
    stack.stackPush(3);

    expect(stack.stackPop()).toEqual(3);
    expect(stack.stackPop()).toEqual(2);

    stack.stackPush(4);

    expect(stack.stackPop()).toEqual(4);
    expect(stack.stackPop()).toEqual(1);
  });
});
