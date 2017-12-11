'use strict';

const Stack = require('../model/stack');

describe('stack.js', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  describe('push(value)', () => {
    test('push should add a new node to the first spot in the stack if the stack is empty.', () => {
      expect(stack.push(5)).toEqual(1);
      expect(stack._data.value).toEqual(5);
    });
    
    test('push should add a new node to the first spot in the stack, pushing the rest of the stack down, if the stack is not empty.', () => {
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

    test('You can push a stack inside of itself for no apparent benefit.', () => {
      stack.push(0);
      stack.push(stack);
      expect(stack._data.value._data.value._data.value._data.value._data.next.value).toEqual(0);
    });

    test('push should throw an error if an undefined value is pushed into the stack.', () => {
      expect(() => {
        stack.push(undefined);
      }).toThrow();

      expect(() => {
        stack.push();
      }).toThrow();
    });
  });

  describe('pop()', () => {
    test('pop should return the first value of the top node in the stack.', () => {
      stack.push(5);
      stack.push(10);
      stack.push(15);
      expect(stack.pop()).toEqual(15);
    });
    
    test('pop should remove the top node and replace it with the second node.', () => {
      stack.push(5);
      stack.push(10);

      expect(stack.pop()).toEqual(10);
      expect(stack._data.value).toEqual(5);      
    });
    
    test('If the last node is popped, pop should return the node value and then set the value to undefined.', () => {
      stack.push(5);
      stack.push(10);
      stack.pop();

      expect(stack.pop()).toEqual(5);
      expect(stack._data.value).toBeUndefined();
    });
    
    test('If there are no nodes in the stack, pop should return undefined.', () => {
      expect(stack.pop()).toBeUndefined();
      expect(stack._stackLength).toEqual(0);
    });
    
    test('push and pop should increment/decrement a counter each time it is used, but the counter should never drop below zero.', () => {
      stack.push(1);
      stack.push(1);
      stack.push(1);
      stack.push(1);
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack._stackLength).toEqual(0);
    });
  });
});
