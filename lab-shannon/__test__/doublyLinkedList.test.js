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
    //
    expect(node.next.next.next).toEqual(null);
    expect(node.next.next.previous.value).toEqual(2);

  })
})
