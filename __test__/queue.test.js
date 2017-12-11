'use strict';

// const DoublyLinkedList = require('../lib/doubly-linked-list');
const Queue = require('../lib/queue');

describe('queue.js', () => {

  test('Queue should append doubly linked list nodes', () => {
    let resultQueue = new Queue(10);
    resultQueue.enqueue(20);
    resultQueue.enqueue(30);

    expect(resultQueue.next.value).toEqual(20);
    expect(resultQueue.next.next.value).toEqual(30);

    // expect(first.next.value).toEqual(20);
    // expect(first.next.next.value).toEqual(30);
    // expect(first.next.next.next).toEqual(null);
    //
    // expect(resultQueue.next.value).toEqual(20);
    // expect(resultQueue.next.next.value).toEqual(30);
    // expect(resultQueue.next.next.next).toEqual(null);

  });

});
