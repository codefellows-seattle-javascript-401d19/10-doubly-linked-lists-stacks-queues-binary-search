'use strict';

const Queue = require('../lib/queue');

describe('queue.js', () => {

  test('Queue should append doubly linked list nodes', () => {
    let resultQueue = new Queue(10);
    resultQueue.enqueue(20);
    resultQueue.enqueue(30);

    expect(resultQueue.next.value).toEqual(20);
    expect(resultQueue.next.next.value).toEqual(30);
  });

  test('Queue dequeue should remove first added node to the Queue', () => {
    let resultQueue = new Queue(10);
    resultQueue.enqueue(20);
    resultQueue.enqueue(30);

    expect(resultQueue.value).toEqual(10);
    expect(resultQueue.next.value).toEqual(20);
    expect(resultQueue.next.next.value).toEqual(30);

    expect(resultQueue.dequeue().value).toEqual(20);
    expect(resultQueue.dequeue().previous).toEqual(null);
    expect(resultQueue.dequeue().next.value).toEqual(30);
    expect(resultQueue.dequeue().next.next).toEqual(null);

  });

  test('Queue dequeue should return null if there are no items in queue', () => {
    let resultQueue = new Queue();
    expect(resultQueue.dequeue()).toEqual(null);
  });

  test('Queue dequeue should return null if there is only ONE item in queue', () => {
    let resultQueue = new Queue(10);
    expect(resultQueue.dequeue()).toEqual(null);
  });

});
