'use strict';

const Stack = require(`../lib/stack`);

describe(`stack.js`, () => {
  test.only(`The last element added should be the first element removed; i.e. should be LIFO behavior`, () => {
    // stack.push(new Stack(4));
    // stack.push(new Stack(19));
    // stack.push(new Stack(22));

    // expect(stack.pop()).toBe(22);
    // expect(stack.pop()).toBe(19);
    // expect(stack.pop()).toBe(4);
    // expect(stack.pop()).toBe(2);
    // expect(stack.pop()).toBe(1);
    // expect(stack.pop()).toBe(undefined);
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
