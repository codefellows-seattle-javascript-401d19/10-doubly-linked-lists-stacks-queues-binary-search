'use strict';

const Stack = require('../model/stack');

describe('stack.js', () => {
  test('A stack with a single element, should have a head and tail value the same as the linked list and there should be no next values', () => {
	let stack = new Stack();
	stack.push(5);
	console.log(stack);
  expect(stack.linkedStack.head.value).toEqual(5);
  expect(stack.linkedStack.head.next).toEqual(null);
  expect(stack.linkedStack.tail.value).toEqual(5);
  expect(stack.linkedStack.tail.next).toEqual(null);
  });
});

