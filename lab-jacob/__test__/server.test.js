'use strict';

const DoubleLinkedList = require('../model/double-linked-list');

describe('linked-list.js', () => {
  let result = new DoubleLinkedList(5);
  expect(result.value).toEqual(5);
  expect(result.next).toEqual(null);
  expect(result.previous).toEqual(null);
});

test('Should append a node to the linked list', () => {
  let result = new DoubleLinkedList(5);
  result.append(new DoubleLinkedList(4));
  result.append(new DoubleLinkedList(10));

  expect(result.value).toEqual(5);
  expect(result.previous).toEqual(null);

  expect(result.next.value).toEqual(4);
  // console.log(result.previous, 'previous');
  expect(result.next.previous.value).toEqual(5);

  expect(result.next.next.value).toEqual(10);
  expect(result.next.next.previous.value).toEqual(4);

  expect(result.next.next.next).toEqual(null);
});
