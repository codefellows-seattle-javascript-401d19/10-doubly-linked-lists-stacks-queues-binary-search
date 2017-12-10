'use strict';

const Queue = require('../model/queue');

describe('queue.js', () => {
  test('enequeue should add elements to the end of the queue', () => {
    const TestQueue = new Queue();

    TestQueue.enqueue(10);
    expect(TestQueue.getLength()).toEqual(1);

    TestQueue.enqueue(20);
    expect(TestQueue.getLength()).toEqual(2);
  });

  test('dequeue should remove elements at the front of the queue', () => {
    const TestQueue = new Queue();

    TestQueue.enqueue(10);
    TestQueue.enqueue(20);
    TestQueue.enqueue(30);

    expect(TestQueue.getLength()).toEqual(3);

    TestQueue.dequeue();
    expect(TestQueue.getLength()).toEqual(2);

    TestQueue.dequeue();
    expect(TestQueue.getLength()).toEqual(1);

    TestQueue.dequeue();
    expect(TestQueue.getLength()).toEqual(0);
  });
});
