'use strict';

let Queue = require('../lib/queue');

describe('queue.js', () => {
  test('Queue should have FIFO behavior', () => {
    let queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(undefined);
  });
});

//TODO: ADD 4 TESTS FOR PUSH METHOD ON STACK
  //TODO: TEST FOR EDGE CASE 1
  //TODO: TEST FOR EDGE CASE 2
  //TODO: TEST FOR SIMPLE REGULAR CASE
  //TODO: TEST FOR COMPLEX REGULAR CASE

//TODO: ADD 4 TESTS FOR POP METHOD ON STACK
  //TODO: TEST FOR EDGE CASE 1
  //TODO: TEST FOR EDGE CASE 2
  //TODO: TEST FOR SIMPLE REGULAR CASE
  //TODO: TEST FOR COMPLEX REGULAR CASE