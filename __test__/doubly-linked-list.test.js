'use strict';

const DoublyLinkedList = require('../model/doubly-linked-list');

describe('doubly-linked-list.js',() => {
  test('A list with a single element, should have a value and no next', () => {
    let list = new DoublyLinkedList(5);

    expect(list.value).toEqual(5);
    expect(list.next).toEqual(null);
    expect(list.previous).toEqual(null);
  });

  test('insertion should properly modify the next property', () => {
    let list = new DoublyLinkedList(5);
    list.append(new DoublyLinkedList(4));
    list.append(new DoublyLinkedList(10));

    expect(list.value).toEqual(5);
    expect(list.previous).toEqual(null);
    expect(list.next.value).toEqual(4);
    expect(list.next.previous.value).toEqual(5);
    expect(list.next.next.value).toEqual(10);
    expect(list.next.next.previous.value).toEqual(4);
    expect(list.next.next.next).toEqual(null);
  });

  test('preappend should properly modify the previous property', () => {
    let list = new DoublyLinkedList(5);
    list.append(new DoublyLinkedList(4));
    list.append(new DoublyLinkedList(10));
    list.preappend(new DoublyLinkedList(3));

    expect(list.previous.value).toEqual(3);
    expect(list.next.value).toEqual(4);
    expect(list.next.previous.value).toEqual(5);
    expect(list.next.next.value).toEqual(10);
    expect(list.next.next.previous.value).toEqual(4);
    expect(list.next.next.next).toEqual(null);
  });

  test('remove should remove a node from a doubly linked list', () => {
    let list = new DoublyLinkedList(5);
    let one = new DoublyLinkedList(6);
    let two = new DoublyLinkedList(7);
    let three = new DoublyLinkedList(8);
    list.append(one);
    list.append(two);
    list.append(three);
    list.remove(one);

    expect(list.value).toEqual(5);
    expect(list.previous).toEqual(null);
    expect(list.next.value).toEqual(7);
    expect(list.next.previous.value).toEqual(5);
    expect(list.next.next.value).toEqual(8);
    expect(list.next.next.previous.value).toEqual(7);
    expect(list.next.next.next).toEqual(null);

  });

  test('remove should remove the first node from a doubly linked list', () => {
    let list = new DoublyLinkedList(5);
    let one = new DoublyLinkedList(6);
    let two = new DoublyLinkedList(7);
    let three = new DoublyLinkedList(8);
    list.append(one);
    list.append(two);
    list.append(three);
    list.remove(list);

    expect(one.value).toEqual(6);
    expect(one.previous).toEqual(null);
    expect(one.next.value).toEqual(7);
    expect(one.next.previous.value).toEqual(6);
    expect(one.next.next.value).toEqual(8);
    expect(one.next.next.previous.value).toEqual(7);
  });

  test('remove should remove the last node from a doubly linked list', () => {
    let list = new DoublyLinkedList(5);
    let one = new DoublyLinkedList(6);
    let two = new DoublyLinkedList(7);
    let three = new DoublyLinkedList(8);
    list.append(one);
    list.append(two);
    list.append(three);
    list.remove(three);

    expect(list.value).toEqual(5);
    expect(list.previous).toEqual(null);
    expect(list.next.value).toEqual(6);
    expect(list.next.previous.value).toEqual(5);
    expect(list.next.next.value).toEqual(7);
    expect(list.next.next.previous.value).toEqual(6);
    expect(list.next.next.next).toEqual(null);
  });

  test('remove should return null when a node is not found', () => {
    let list = new DoublyLinkedList(5);
    let one = new DoublyLinkedList(6);
    let two = new DoublyLinkedList(7);
    let three = new DoublyLinkedList(8);
    let four = new DoublyLinkedList(4);
    list.append(one);
    list.append(two);
    list.append(three);
    let result = list.remove(four);

    expect(result).toEqual(null);
  });

  test('remove should return null when there is only one node in the linked list and it is removed', () => {
    let node = new DoublyLinkedList(5);
    let result = node.remove(node);

    expect(result).toEqual(null);
  });
});
