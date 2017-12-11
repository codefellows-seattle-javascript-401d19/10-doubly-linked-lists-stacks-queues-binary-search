'use strict';

let DoublyLinkedList = require('../lib/stack');

describe('stack.js', () => {
  test('Stacks should have LIFO behavior.  Three in, three out.', () => {
    let stack = new DoublyLinkedList(1);

    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toEqual(undefined);
  });

  test('Stacks should have LIFO behavior even when out of order.  Two in, two out, one in, one out.', () => {
    let stack = new DoublyLinkedList(1);

    stack.push(2);

    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(undefined);
  });

  test('Stacks should work the same with strings', () => {
    let stack = new DoublyLinkedList('a');

    stack.push('b');
    stack.push('c');

    expect(stack.pop()).toEqual('c');
    expect(stack.pop()).toEqual('b');
    expect(stack.pop()).toEqual('a');
    expect(stack.pop()).toEqual(undefined);
  });

  test('Stacks should work the same with booleans and objects', () => {
    let stack = new DoublyLinkedList(true);

    stack.push({test: 'b'});
    stack.push({});

    expect(stack.pop()).toEqual({});
    expect(stack.pop()).toEqual({test: 'b'});
    expect(stack.pop()).toEqual(true);
    expect(stack.pop()).toEqual(undefined);
  });


});
