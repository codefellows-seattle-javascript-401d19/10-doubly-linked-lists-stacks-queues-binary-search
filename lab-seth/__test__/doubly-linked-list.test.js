'use strict';

const DoublyLinkedList = require('../lib/doubly-linked-list');

describe('linked-list.js',() => {
  //-------------------REGULAR CASES------------------
  test('A list with a single element, should have a value and no next', () => {
    let result = new DoublyLinkedList(5);
    expect(result.value).toEqual(5);
    expect(result.next).toEqual(null);
    expect(result.previous).toEqual(null);
  });    

  describe('Testing append method of doubly-linked-list.js', () => {
    test('APPEND should properly modify the next property', () => {
      let result = new DoublyLinkedList(5);
      result.append(new DoublyLinkedList(4));
      result.append(new DoublyLinkedList(10));
      
      expect(result.value).toEqual(5);
      expect(result.previous).toEqual(null);
      
      expect(result.next.value).toEqual(4);
      expect(result.next.previous.value).toEqual(5);
      
      expect(result.next.next.value).toEqual(10);
      expect(result.next.next.previous.value).toEqual(4);
      
      expect(result.next.next.next).toEqual(null);
    });
    
  });

  describe('Testing REMOVE method of linked-list.js', () => {
    //-------------------REGULAR CASES------------------
    test('removing should properly modify the next nodes previous property and the previous nodes next property', () => {
      let result = new DoublyLinkedList(5);
      result.append(new DoublyLinkedList(4));
      result.append(new DoublyLinkedList(10));
      expect(result.value).toEqual(5);
      expect(result.next.value).toEqual(4);
      expect(result.next.next.value).toEqual(10);      

      result.remove(result.next);

      expect(result.next.value).toEqual(10);
      expect(result.next.previous.value).toEqual(5);
    });

    test('removing last node should properly modify the previous nodes next property', () => {
      let result = new DoublyLinkedList(5);
      result.append(new DoublyLinkedList(4));
      result.append(new DoublyLinkedList(10));
      expect(result.value).toEqual(5);
      expect(result.next.value).toEqual(4);
      expect(result.next.next.value).toEqual(10); 

      result.remove(result.next.next);

      expect(result.next.next).toBeNull();
    });
    
    //-------------------EDGE CASES------------------
    test('remove first node', () =>{
      let first = new DoublyLinkedList(5);
      let second = new DoublyLinkedList(4);
      let third = new DoublyLinkedList(10);

      first.append(second);
      first.append(third);
      expect(first.value).toEqual(5);
      expect(first.next.value).toEqual(4);
      expect(first.next.next.value).toEqual(10);

      first.remove(first);
      expect(first.next.value).toEqual(4);
    });

    test('remove first and only node', () =>{
      let first = new DoublyLinkedList(5);

      first = first.remove(first);
      expect(first).toBeNull();
    });

  });
  
  //TODO: ADD 4 TESTS FOR FIND METHOD
  describe('Testing FIND method of linked-list.js', () => {
    test('Find should properly return the node with the given value', () => {
      let result = new DoublyLinkedList(5);
      result.append(new DoublyLinkedList(4));
      result.append(new DoublyLinkedList(10));
      expect(result.value).toEqual(5);
      expect(result.next.value).toEqual(4);
      expect(result.next.next.value).toEqual(10);

      expect((result.find(10)).value).toBe(10);
      expect((result.find(5)).value).toBe(5);      
    });

    test('Find should properly return the first node if there is only one node', () => {
      let result = new DoublyLinkedList(5);

      expect(result.value).toEqual(5);
    });
  });
});