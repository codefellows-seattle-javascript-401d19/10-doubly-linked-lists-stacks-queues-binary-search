'use strict';

const Stack = require('../model/stack');

describe('stack.js', () => {
  test('A stack with a single element, should have a length of 1', () => {
    const TestStack = new Stack();
    expect(TestStack.getLength()).toEqual(0);
  });
});
