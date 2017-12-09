'use strict';

const DoublyLinkedList = require(`../lib/doublyLinkedList`);

describe(`doublyLinkedList.js`, () => {
  test(`The append method should add a node with .next pointing to null and .previous pointing to the previous node`, () => {
    let node = new DoublyLinkedList(1);
    node.append(new DoublyLinkedList(2));
    node.append(new DoublyLinkedList(3));

    expect(node.next.value).toEqual(2);
    expect(node.previous).toEqual(null);
    expect(node.value).toEqual(1);

    expect(node.next.next.value).toEqual(3);
    expect(node.next.previous.value).toEqual(1);

    expect(node.next.next.next).toEqual(null);
    expect(node.next.next.previous.value).toEqual(2);
  })

  test(`The remove method should remove a node with a specific value and properly redirect the deleted node's .next and .previous references`, () => {
    let node = new DoublyLinkedList(1);
    node.append(new DoublyLinkedList(2));
    node.append(new DoublyLinkedList(3));
    node.remove(2);

    expect(node.next.value).toEqual(3);
    expect(node.next.previous.value).toEqual(1);
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
    let node = new DoublyLinkedList(1);
    node.append(new DoublyLinkedList(2));
    node.append(new DoublyLinkedList(3));
    node.prepend(new DoublyLinkedList(4))

    expect(node.previous.value).toEqual(4);
  })
})
