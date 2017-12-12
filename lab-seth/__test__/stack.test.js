'use strict';

let Stack = require('../lib/stack');

describe('stack.js', () => {
  test('Stacks should have LIFO behavior', () => {
    let stack = new Stack(1);

    stack.push(new Stack(2));
    stack.push(new Stack(3));
    stack.push(new Stack(4));
    stack.push(new Stack(5));
    stack.push(new Stack(6));

    expect(stack.next.value).toEqual(2);
    expect(stack.next.next.next.value).toEqual(4);


    expect(stack.pop()).toEqual(6);
    expect(stack.pop()).toEqual(5);
    expect(stack.pop()).toEqual(4);
    expect(stack.pop()).toEqual(3);
  });
});