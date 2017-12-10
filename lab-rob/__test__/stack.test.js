'use strict';

const Stack = require('../model/stack');

describe('stack.js', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  
  test('push should add a new node to the first spot in the queue.', () => {
    expect(stack.push(5)).toEqual(1);
    expect(stack._data.value).toEqual(5);
  });
  
  test('push should add a new node to the first spot in the queue, pushing the rest of the stack down.', () => {
    expect(stack.push(5)).toEqual(1);
    expect(stack._data.value).toEqual(5);
    
    expect(stack.push(10)).toEqual(2);
    expect(stack._data.value).toEqual(10);
    expect(stack._data.next.value).toEqual(5);
    
    expect(stack.push(15)).toEqual(3);
    expect(stack._data.value).toEqual(15);
    expect(stack._data.next.value).toEqual(10);
    expect(stack._data.next.next.value).toEqual(5);
  });
});
