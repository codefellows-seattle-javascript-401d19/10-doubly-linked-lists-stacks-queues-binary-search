'use strict';

const DoublyLinkedList = require(`../lib/doublyLinkedList`);

let longNode = new DoublyLinkedList(1);
longNode.append(new DoublyLinkedList(2));
longNode.append(new DoublyLinkedList(3));

describe(`doublyLinkedList.js`, () => {
  test(`The append method should add a node with .next pointing to null and .previous pointing to the previous node`, () => {
    expect(longNode.next.value).toEqual(2);
    expect(longNode.previous).toEqual(null);
    expect(longNode.value).toEqual(1);

    expect(longNode.next.next.value).toEqual(3);
    expect(longNode.next.previous.value).toEqual(1);

    expect(longNode.next.next.next).toEqual(null);
    expect(longNode.next.next.previous.value).toEqual(2);
  })

  test(`The remove method should remove a node with a specific value and properly redirect the deleted node's .next and .previous references`, () => {
    longNode.remove(2);

    expect(longNode.next.value).toEqual(3);
    expect(longNode.next.previous.value).toEqual(1);
  })

  // test(`If remove is called on a list with only one node it should set the first node to null`, () => {
  //   let node = new DoublyLinkedList(1);
  //   node.remove(1);
  //
  //   expect(node).toBe(null);
  //   // expect(node.next).toBe(null);
  //   // expect(node.previous).toBe(null);
  // })

  test(`The length method should count how many nodes are in the doubly linked list`, () => {
    longNode.prepend(new DoublyLinkedList(4))

    expect(longNode.previous.value).toEqual(4);
  })
})
