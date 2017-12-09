'use strict';

const stackFactory = require(`../lib/stack`);

describe(`stack.js`, () => {
  test(`The last element added should be the first element removed; i.e. should be LIFO behavior`, () => {
    let stack = stackFactory.createStack();
    stack.push(2);
    stack.push(4);
    stack.push(19);
    stack.push(22);

    expect(stack.pop()).toBe(22);
    expect(stack.pop()).toBe(19);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(undefined);
  });

  test(`The last element added should be the first element removed; i.e. should be LIFO behavior`, () => {
    let stack = stackFactory.createStack();
    stack.push(97);

    expect(stack.pop()).toBe(97);
    expect(stack.pop()).toBe(undefined);
  });

  test(`The last element added should be the first element removed; i.e. should be LIFO behavior`, () => {
    let stack = stackFactory.createStack();

    expect(stack.pop()).toBe(undefined);
  });

  test(`The last element added should be the first element removed; i.e. should be LIFO behavior`, () => {
    let stack = stackFactory.createStack();

    stack.push('fish');
    stack.push(true);
    stack.push(34);

    expect(stack.pop()).toBe(34);
    expect(stack.pop()).toBe(true);
    expect(stack.pop()).toBe('fish');
    expect(stack.pop()).toBe(undefined);
  });
})
