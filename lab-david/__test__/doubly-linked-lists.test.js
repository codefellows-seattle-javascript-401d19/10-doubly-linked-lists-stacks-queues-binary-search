'use strict';

const DoublyLinkedList = require('../lib/doubly-linked-lists');

describe('doubly-linked-lists.js', () => {
  test('A list with a single element, should have a value and no next', () => {
    let result = new DoublyLinkedList(7);
    expect(result.value).toEqual(7);
    expect(result.next).toEqual(null);
    expect(result.previous).toEqual(null);
  });

  test('insert should properly modify the next property', () => {
    let result = new DoublyLinkedList(7);
    result.append(new DoublyLinkedList(9));
    result.append(new DoublyLinkedList(11));
    
    expect(result.value).toEqual(7);
    expect(result.previous).toEqual(null);

    expect(result.next.next.next).toEqual(null);    
  });

  test('remove should remove the node by reference value ', () => {
    let result = new DoublyLinkedList(7);
    result.append(new DoublyLinkedList(9));
    result.append(new DoublyLinkedList(11));
    
    expect(result.value).toEqual(7);
    expect(result.previous).toEqual(null);

    expect(result.next.next.next).toEqual(null);  
  });

  test('testing to remove the first and only node ', () => {
    let result = new DoublyLinkedList(7);
    result = result.remove(result);
    expect(result).toBeNull();
    
  });

  test(`find method should find a certain node based on a value given`, () => {
    let result = new DoublyLinkedList(7);
    result.append(new DoublyLinkedList(9));
    result.append(new DoublyLinkedList(11));
    
    expect(result.value).toEqual(7);
    expect(result.next.value).toEqual(9);
    expect(result.next.next.value).toEqual(11);
  });

});