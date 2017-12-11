'use strict';

const util = require('util');
const Queue = require('../model/queue');

describe('queue.js', () => {
	test('SINGLE NODE - A queue with a single element, should have a head and tail value the same as the linked list and there should be no next values', () => {
		let queue = new Queue();
		queue.enqueue(5);
		expect(queue.linkedQueue.head.value).toEqual(5);
		expect(queue.linkedQueue.head.next).toEqual(null);
		expect(queue.linkedQueue.tail.value).toEqual(5);
		expect(queue.linkedQueue.tail.next).toEqual(null);
	});
});


test('SEVERAL NODES - A queue with multiple elements should have different head and tail values as well as a nodeCount greater than 1', () => {
	let queue = new Queue();
	queue.enqueue('foo');
	queue.enqueue('bar');
	queue.enqueue('baz');
	expect(queue.linkedQueue.head.value).toEqual('foo');
	expect(queue.linkedQueue.head.next.value).toEqual('bar');
	expect(queue.linkedQueue.tail.value).toEqual('baz');
	expect(queue.linkedQueue.nodeCount).toEqual(3);
});

test('REMOVE - A queue should remove nodes abiding by the FIFO priniciple and the node count should decrement by one for each removal', () => {
	let queue = new Queue();
	queue.enqueue('foo');
	queue.enqueue('bar');
	queue.enqueue('baz');

	queue.dequeue();
	expect(queue.linkedQueue.head.value).toEqual('bar');
	expect(queue.linkedQueue.head.next.value).toEqual('baz');
	expect(queue.linkedQueue.tail.value).toEqual('baz');
	expect(queue.linkedQueue.nodeCount).toEqual(2);
});

test('REMOVE ALL - A queue should remove all nodes, abiding by the LIFO priniciple, and the node count should decrement by one for each removal ending at zero', () => {
	let queue = new Queue();
	queue.enqueue('foo');
	queue.enqueue('bar');
	queue.enqueue('baz');

	queue.dequeue();
	queue.dequeue();
	queue.dequeue();
	expect(queue.linkedQueue.head).toEqual(null);
	expect(queue.linkedQueue.tail).toEqual(null);
	expect(queue.linkedQueue.nodeCount).toEqual(0);
});


