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
});
