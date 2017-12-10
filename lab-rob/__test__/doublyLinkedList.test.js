'use strict';

const DoublyLinkedList = require('../model/doublyLinkedList');

describe('doublyLinkedList.js', () => {
  let head;
  beforeEach(() => {
    head = new DoublyLinkedList(0);
  });

  test('Instantiating a new object should return a node with a value and null previous/next properties.', () => {
    expect(head.previous).toBeNull();
    expect(head.value).toEqual(0);
    expect(head.next).toBeNull();
  });

  test('Calling append on any node in the list should add it to the end of the list.', () => {
    let firstLink = new DoublyLinkedList(1);
    let secondLink = new DoublyLinkedList(2);
    let thirdLink = new DoublyLinkedList(3);
    head.append(firstLink).append(secondLink);
    firstLink.append(thirdLink);

    expect(head.next.next.next).toEqual(thirdLink);
  });

  test('Calling any DoublyLinkedList method with an argument that isn\'t a proper node will throw an error.', () => {
    expect(() => {
      head.append({previous: null, value: 10, next: null});
    }).toThrow();
  });

});