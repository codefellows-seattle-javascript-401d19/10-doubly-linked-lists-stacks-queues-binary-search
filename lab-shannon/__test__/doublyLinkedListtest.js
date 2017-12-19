'use strict';

const DoublyLinkedList = require(`../lib/doublyLinkedList`);

let longList = new DoublyLinkedList(1);
longList.append(new DoublyLinkedList(2));
longList.append(new DoublyLinkedList(3));

let shortList = new DoublyLinkedList(9);
shortList.append(new DoublyLinkedList(11));

let singleList = new DoublyLinkedList(5);

let emptyList;

describe(`doublyLinkedList.js`, () => {
  test(`The append method should add a node to the end of a doubly linked list with .next pointing to null and .previous pointing to the previous node`, () => {

    expect(longList.next.value).toEqual(2);
    expect(longList.previous).toEqual(null);
    expect(longList.value).toEqual(1);

    expect(longList.next.next.value).toEqual(3);
    expect(longList.next.previous.value).toEqual(1);

    expect(longList.next.next.next).toEqual(null);
    expect(longList.next.next.previous.value).toEqual(2);
  })

  test(`The append method should add a node to the end of a doubly linked list with .next pointing to null and .previous pointing to the previous node`, () => {

    expect(shortList.next.value).toEqual(11);
    expect(shortList.previous).toEqual(null);
    expect(shortList.value).toEqual(9);

    expect(shortList.next.next).toBe(null);
    expect(shortList.next.previous.value).toEqual(9);
  })

  test(`The remove method should remove a node with a specific value and properly redirect the deleted node's .next and .previous references`, () => {
    longList.remove(2);

    expect(longList.next.value).toEqual(3);
    expect(longList.next.previous.value).toEqual(1);
  })

  test(`The remove method should set the node value to null if removing the first item in a list and redirect the deleted node's .next and .previous references`, () => {
    shortList.remove(9);

    expect(shortList.value).toEqual(null);
    expect(shortList.next.previous).toEqual(null);
  })

  test(`The remove method should set the node value to null if removing the only node in the list`, () => {
    let newList = singleList.remove(5);

    expect(newList).toBe(null);
  })

  test(`The remove method should throw an error if a node with that value does not exist`, () => {
    expect(() => {longList.remove(100)}).toThrow();
  })

  test(`The prepend method should add a new node to the beginning of a doubly linked list with .next pointing to the the original first node and .previous pointing to null`, () => {
    longList.prepend(new DoublyLinkedList(4));
    shortList.prepend(new DoublyLinkedList(27));

    expect(longList.previous.value).toEqual(4);
    expect(shortList.previous.value).toEqual(27);
  })

  test(`The prepend method should throw an error if trying to add a node to an empty list or the node provided is invalid`, () => {
    expect(() => {emptyList.prepend(new DoublyLinkedList(9))}).toThrow();
    expect(() => {shortList.prepend(24)}).toThrow();
  })
})
