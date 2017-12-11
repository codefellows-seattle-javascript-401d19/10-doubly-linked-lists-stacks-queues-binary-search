'use strict';

const Queue = require('../model/queue');

describe('queue.js', () => {
  test('enequeue should add elements to the end of the Queue', () => {
    const TestQueue = new Queue();

    TestQueue.enqueue(10);
    expect(TestQueue.getLength()).toEqual(1);

    TestQueue.enqueue(20);
    expect(TestQueue.getLength()).toEqual(2);
  });

  test('dequeue should remove elements at the front of the Queue', () => {
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

  test('dequeue should return null if there are no elements in the Queue', () => {
    const TestQueue = new Queue();
    const result = TestQueue.dequeue();

    expect(result).toEqual(null);
  });

  test('front should return the element at the front of the Queue', () => {
    const TestQueue = new Queue();

    TestQueue.enqueue(10);
    expect(TestQueue.front()).toEqual(10);

    TestQueue.enqueue(20);
    expect(TestQueue.front()).toEqual(10);
  });

  test('enqueue and dequeue should change the front of the queue in a FIFO manner', () => {
    const TestQueue = new Queue();

    TestQueue.enqueue(10);
    expect(TestQueue.front()).toEqual(10);

    TestQueue.enqueue(20);
    TestQueue.enqueue(30);
    TestQueue.dequeue();
    expect(TestQueue.front()).toEqual(20);

    expect(TestQueue.dequeue().value).toEqual(20);
    expect(TestQueue.dequeue().value).toEqual(30);
    expect(TestQueue.dequeue()).toEqual(null);

  });
});
