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

  test('Queue should remove first added node to the Queue', () => {
    let resultQueue = new Queue(10);
    resultQueue.enqueue(20);
    resultQueue.enqueue(30);

    console.log(resultQueue.value);
    console.log(resultQueue.next.value);


    console.log(resultQueue.dequeue().value);
    console.log(resultQueue.dequeue().previous);
    console.log(resultQueue.dequeue().next.value);

    expect(resultQueue.value).toEqual(10);
    expect(resultQueue.next.value).toEqual(20);
    expect(resultQueue.next.next.value).toEqual(30);

    expect(resultQueue.dequeue().value).toEqual(20);
    expect(resultQueue.dequeue().previous).toEqual(null);
    expect(resultQueue.dequeue().next.value).toEqual(30);
    expect(resultQueue.dequeue().next.next).toEqual(null);
    // expect(resultQueue.next.value).toEqual(20);
    // expect(first.next.previous).toEqual(null);
    // expect(first.next.value).toEqual(20);
    // // expect(first.value).toEqual(null);

  });

});
