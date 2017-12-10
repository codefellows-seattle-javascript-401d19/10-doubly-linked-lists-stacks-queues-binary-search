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
    head.append(firstLink).append(secondLink);
    firstLink.append(thirdLink);

    expect(head.next.next.next).toEqual(thirdLink);
    expect(thirdLink.previous.previous.previous).toEqual(head);
  });

  test('Calling prepend on any node in the list should add it to the beginning of the list.', () => {
    thirdLink.prepend(secondLink).prepend(firstLink);
    secondLink.prepend(head);

    expect(head.next.next.next.value).toEqual(3);
    expect(thirdLink.previous.previous.previous.value).toEqual(0);
  });

  test('Calling insertAfter on a non-tail node should insert a new node immediately following the calling node.', () => {
    head.append(thirdLink);
    expect(head.next.value).toEqual(3);
    expect(thirdLink.previous).toEqual(head);

    head.insertAfter(secondLink);
    expect(secondLink.next.value).toEqual(3);
    expect(thirdLink.previous.previous).toEqual(head);

    head.insertAfter(firstLink);
    expect(head.next.value).toEqual(1);
  });

  test('Calling insertAfter on a tail node should act the same way as appending a node.', () => {
    head.insertAfter(firstLink);
    expect(head.next.value).toEqual(1);
    expect(firstLink.previous.value).toEqual(0);
  });

  test('Calling any DoublyLinkedList method with an argument that isn\'t a proper node will throw an error.', () => {
    expect(() => {
      head.append({previous: null, value: 10, next: null});
    }).toThrow();
  });

});