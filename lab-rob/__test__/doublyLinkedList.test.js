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

  describe('constructor', () => {
    test('Instantiating a new object should return a node with a value and null previous/next properties.', () => {
      expect(head.previous).toBeNull();
      expect(head.value).toEqual(0);
      expect(head.next).toBeNull();
    });
  });

  
  describe('append()', () => {
    test('Calling append on any node in the list should add it to the end of the list.', () => {
      head.append(firstLink).append(secondLink);
      firstLink.append(thirdLink);
  
      expect(head.next.next.next).toEqual(thirdLink);
      expect(thirdLink.previous.previous.previous).toEqual(head);
    });
  });

  describe('prepend()', () => {
    test('Calling prepend on any node in the list should add it to the beginning of the list.', () => {
      thirdLink.prepend(secondLink).prepend(firstLink);
      secondLink.prepend(head);
  
      expect(head.next.next.next.value).toEqual(3);
      expect(thirdLink.previous.previous.previous.value).toEqual(0);
    });
  });

  describe('insertAfter()', () => {
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
  
      firstLink.insertAfter(secondLink);
      expect(firstLink.next.value).toEqual(2);
      expect(secondLink.previous.previous.value).toEqual(0);
    });
  });

  describe('insertBefore()', () => {
    test('Calling insertBefore on a non-tail node should insert a new node immediately preceeding the calling node.', () => {
      secondLink.prepend(head);
      expect(secondLink.previous.value).toEqual(0);
      expect(head.next).toEqual(secondLink);
  
      secondLink.insertBefore(firstLink);
      expect(firstLink.next).toEqual(secondLink);
      expect(secondLink.previous.previous).toEqual(head);
    });
  
    test('Calling insertBefore on a head node should act the same way as prepending a node.', () => {
      secondLink.insertBefore(head);
      expect(head.next.value).toEqual(2);
      expect(secondLink.previous.value).toEqual(0);
  
      secondLink.insertBefore(firstLink);
      expect(secondLink.previous.value).toEqual(1);
      expect(secondLink.previous.previous.value).toEqual(0);
    });
  });

  describe('remove()', () => {
    test('Calling remove on a head node should reassign the value and next properties of the head node to equal that of the next node.', () => {
      head.append(firstLink).append(secondLink);
      head.remove();

      expect(head.value).toEqual(1);
      expect(head.next).toEqual(secondLink);
    });

    test('Calling remove on a middle node should connect the previous and next nodes.', () => {
      head.append(firstLink).append(secondLink);
      firstLink.remove();

      expect(head.next).toEqual(secondLink);
      expect(secondLink.previous).toEqual(head);
    });

    test('Calling remove on a tail node should reset the previous node\'s next value as null.', () => {
      head.append(firstLink).append(secondLink);
      secondLink.remove();

      expect(firstLink.next).toBeNull();
    });

    test('Calling remove on a head node with no trailing nodes should return the head node.', () => {
      expect(head.remove()).toEqual(head);
    });
  
  });

  describe('error checking', () => {
    test('Calling any DoublyLinkedList method with an argument that isn\'t a proper node will throw an error.', () => {
      expect(() => {
        head.append({previous: null, value: 10, next: null});
      }).toThrow();
  
      expect(() => {
        head.prepend({previous: null, value: 10, next: null});
      }).toThrow();
  
      expect(() => {
        head.insertAfter({previous: null, value: 10, next: null});
      }).toThrow();
  
      expect(() => {
        head.insertBefore({previous: null, value: 10, next: null});
      }).toThrow();
    });
  });
});