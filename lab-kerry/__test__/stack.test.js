'use strict';

const util = require('util');
const Stack = require('../model/stack');

describe('stack.js', () => {
  test('SINGLE NODE - A stack with a single element, should have a head and tail value the same as the linked list and there should be no next values', () => {
		let stack = new Stack();
		stack.push(5);
		expect(stack.linkedStack.head.value).toEqual(5);
		expect(stack.linkedStack.head.next).toEqual(null);
		expect(stack.linkedStack.tail.value).toEqual(5);
		expect(stack.linkedStack.tail.next).toEqual(null);
  });
});


	test('SEVERAL NODES - A stack with multiple elements should have different head and tail values as well as a nodeCount greater than 1', () => {
		let stack = new Stack();
		stack.push('foo');
		stack.push('bar');
		stack.push('baz');
		expect(stack.linkedStack.head.value).toEqual('baz');
		expect(stack.linkedStack.head.next.value).toEqual('bar');
		expect(stack.linkedStack.tail.value).toEqual('foo');
		expect(stack.linkedStack.nodeCount).toEqual(3);
});

	test('REMOVE - A stack should remove nodes abiding by the LIFO priniciple and the node count should decrement by one for each removal', () => {
		let stack = new Stack();
		stack.push('foo');
		stack.push('bar');
		stack.push('baz');

		stack.pop();
		expect(stack.linkedStack.head.value).toEqual('bar');
		expect(stack.linkedStack.head.next.value).toEqual('foo');
		expect(stack.linkedStack.tail.value).toEqual('foo');
		expect(stack.linkedStack.nodeCount).toEqual(2);
	});

	test('REMOVE ALL - A stack should remove all nodes, abiding by the LIFO priniciple, and the node count should decrement by one for each removal ending at zero', () => {
		let stack = new Stack();
		stack.push('foo');
		stack.push('bar');
		stack.push('baz');

		stack.pop();
		stack.pop();
		stack.pop();
		expect(stack.linkedStack.head).toEqual(null);
		expect(stack.linkedStack.tail).toEqual(null);
		expect(stack.linkedStack.nodeCount).toEqual(0);
	});


