'use strict';


const DoublyLinkedList = require('../model/doubly-linked-list');

describe('linked-list.js', () => {
  test('A list with a single element, should have a value and no next', () => {
    let result = new DoublyLinkedList(5);
    expect(result.value).toEqual(5);
    expect(result.next).toEqual(null);
    expect(result.previous).toEqual(null);
  });

  test('INSERT should properly modify the next property', () => {
    let result = new DoublyLinkedList(5);
    result.append(new DoublyLinkedList(4));
    result.append(new DoublyLinkedList(10));

    expect(result.value).toEqual(5);
    expect(result.previous).toEqual(null);

    expect(result.next.value).toEqual(4);
    expect(result.next.previous.value).toEqual(5);

    expect(result.next.next.value).toEqual(10);
    expect(result.next.next.previous.value).toEqual(4);

    expect(result.next.next.next).toEqual(null);
  });

  test('REMOVE should properly modify the next property', () => {
    let result = new DoublyLinkedList(10);
    result.append(new DoublyLinkedList(20));
    result.append(new DoublyLinkedList(30));

    expect(result.value).toEqual(10);
    expect(result.previous).toEqual(null);

    expect(result.next.value).toEqual(20);
    expect(result.next.previous.value).toEqual(10);

    expect(result.next.next.value).toEqual(30);
    expect(result.next.next.previous.value).toEqual(20);

    expect(result.next.next.next).toEqual(null);

    result.remove(result.next.next);

    expect(result.value).toEqual(10);
    expect(result.previous).toEqual(null);

    expect(result.next.value).toEqual(20);
    expect(result.next.previous.value).toEqual(10);

    expect(result.next.next).toEqual(null);
  });

  test('FIND should identify correct value', () => {
    let result = new DoublyLinkedList('foo');
    result.append(new DoublyLinkedList('bar'));
    result.append(new DoublyLinkedList('baz'));

    expect(result.value).toEqual('foo');
    expect(result.previous).toEqual(null);
    expect(result.next.value).toEqual('bar');
    expect(result.next.previous.value).toEqual('foo');
    expect(result.next.next.value).toEqual('baz');
    expect(result.next.next.previous.value).toEqual('bar');
    expect(result.next.next.next).toEqual(null);

  });
});