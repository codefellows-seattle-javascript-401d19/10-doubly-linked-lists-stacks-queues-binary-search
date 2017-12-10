'use strict';

const Stack = require('../model/stack');

describe('stack.js', () => {
  test.skip('push should add elements to the top of the Stack', () => {
    const TestStack = new Stack();

    TestStack.push(10);
  });

  test('getLength should return the proper length of the Stack', () => {
    const TestStack = new Stack();

    expect(TestStack.getLength()).toEqual(0);

    TestStack.push(10);
    expect(TestStack.getLength()).toEqual(1);

    TestStack.pop();
    expect(TestStack.getLength()).toEqual(0);
  });

  test('peek should return the element on the top of the Stack', () => {
    const TestStack = new Stack();

    expect(TestStack.peek()).toEqual(null);

    TestStack.push(10);
    expect(TestStack.peek()).toEqual(10);

    TestStack.push(20);
    expect(TestStack.peek()).toEqual(20);

    TestStack.pop();
    expect(TestStack.peek()).toEqual(10);

    TestStack.pop();
    expect(TestStack.peek()).toEqual(null);
  });
});
