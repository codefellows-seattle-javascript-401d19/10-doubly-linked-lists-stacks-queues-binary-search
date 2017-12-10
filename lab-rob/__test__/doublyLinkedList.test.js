'use strict';

const DoublyLinkedList = require('../model/doublyLinkedList');

describe('doublyLinkedList.js', () => {
  let head, firstLink, secondLink, thirdLink;
  beforeEach(() => {
    head = new DoublyLinkedList(0);
    firstLink = new DoublyLinkedList(1);
    secondLink = new DoublyLinkedList(2);
    thirdLink = new DoublyLinkedList(3);
  });

  test('Instantiating a new object should return a node with a value and null previous/next properties.', () => {
    expect(head.previous).toBeNull();
    expect(head.value).toEqual(0);
    expect(head.next).toBeNull();
  });

  test('Calling append on any node in the list should add it to the end of the list.', () => {
    firstLink = new DoublyLinkedList(1);
    secondLink = new DoublyLinkedList(2);
    thirdLink = new DoublyLinkedList(3);
    head.append(firstLink).append(secondLink);
    firstLink.append(thirdLink);
    console.log(head);

    expect(head.next.next.next).toEqual(thirdLink);
  });

  test('Calling any DoublyLinkedList method with an argument that isn\'t a proper node will throw an error.', () => {
    expect(() => {
      head.append({previous: null, value: 10, next: null});
    }).toThrow();
  });

});