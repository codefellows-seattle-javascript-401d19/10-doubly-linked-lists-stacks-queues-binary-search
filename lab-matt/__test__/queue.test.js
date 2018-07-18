'use strict';

const Queue = require('../model/queue');

describe('stack.js', () => {
  test('inserting values into a stacks should be removed in the reverse order', () => {
    let queue = new Queue(10);
    queue.enqueue(new Queue(20));
    queue.enqueue(new Queue(30));
    queue.enqueue(new Queue(40));
    queue.enqueue(new Queue(50));
    queue.enqueue(new Queue(60));

    expect(queue.dequeue()).toEqual(10);
    expect(queue.dequeue()).toEqual(20);
    expect(queue.dequeue()).toEqual(30);
    expect(queue.dequeue()).toEqual(40);
    expect(queue.dequeue()).toEqual(50);
    expect(queue.dequeue()).toEqual(60);
  });
});