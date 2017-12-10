'use strict';

const Stack = require('../model/stack');

describe('stack.js', () => {
  test('getLength should return the proper length of the Stack', () => {
    const TestStack = new Stack();
    expect(TestStack.getLength()).toEqual(0);

    TestStack.push(10);
    expect(TestStack.getLength()).toEqual(1);

    TestStack.pop();
    expect(TestStack.getLength()).toEqual(0);
  });
});
