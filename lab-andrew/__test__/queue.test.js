'use strict';

const Queue = require('../model/queue');

describe('queue.js', () => {
  test('Queue should have FIFO behavior', () => {
    const queue = new Queue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(undefined);
    expect(queue.dequeue()).toEqual(undefined);
  });

  test('Queue work with multiple data types', () => {
    const queue = new Queue('hey');
    queue.enqueue(true);
    queue.enqueue(undefined);
    queue.enqueue({});

    expect(queue.dequeue()).toEqual('hey');
    expect(queue.dequeue()).toEqual(true);
    expect(queue.dequeue()).toEqual(undefined);
    expect(queue.dequeue()).toEqual({});
    expect(queue.dequeue()).toEqual(undefined);
  });

  test('Queue should work with complex orders', () => {
    const queue = new Queue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);

    queue.enqueue(4);

    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(4);
  });
});
