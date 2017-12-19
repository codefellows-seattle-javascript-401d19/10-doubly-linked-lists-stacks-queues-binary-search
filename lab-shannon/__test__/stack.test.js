'use strict';

const Stack = require(`../lib/stack`);

describe(`stack.js`, () => {
  test(`The last element added should be the first element removed; i.e. should be LIFO behavior`, () => {
    let stack = new Stack();
    stack.push(2);
    stack.push(4);
    stack.push(19);
    stack.push(22);

    expect(stack.pop().value).toBe(22);
    expect(stack.pop().value).toBe(19);
    expect(stack.pop().value).toBe(4);
    expect(stack.pop().value).toBe(2);
    expect(stack.pop()).toBe(null);
  });

  test(`The last element added should be the first element removed; i.e. should be LIFO behavior`, () => {
    let stack = new Stack();
    stack.push(97);

    expect(stack.pop().value).toBe(97);
    expect(stack.pop()).toBe(null);
  });

  test(`The last element added should be the first element removed; i.e. should be LIFO behavior`, () => {
    let stack = new Stack();

    expect(stack.pop()).toBe(null);
  });

  test(`The last element added should be the first element removed; i.e. should be LIFO behavior`, () => {
    let stack = new Stack();

    stack.push('fish');
    stack.push(true);
    stack.push(34);

    expect(stack.pop().value).toBe(34);
    expect(stack.pop().value).toBe(true);
    expect(stack.pop().value).toBe('fish');
    expect(stack.pop()).toBe(null);
  });
})
