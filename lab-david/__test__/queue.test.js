'use strict';

let Queue = require('../lib/queue');

describe('queue.js', () => {
  test('queue should have First In, First Out behavior.', () => {
    let queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(undefined);
  });

  test('queue should not be able to dequeue more than whats in the queue.', () => {
    let queue = new Queue();

    queue.enqueue(1);
    
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(undefined);
  });

});