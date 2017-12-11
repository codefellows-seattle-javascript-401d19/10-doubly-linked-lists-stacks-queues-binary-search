'use strict';

//This is a Class
const ListNode = require('../lib/doubly-linked-list');

describe('linked-list.js',() => {
  describe('Testing ADD method of linked-list.js', () => {
    //-------------------EDGE CASES------------------
    test('A list with a single element, should have a value and no next', () => {
      let result = new ListNode(5);
      expect(result.value).toEqual(5);
      expect(result.next).toEqual(null);
      expect(result.previous).toEqual(null);
    });
  
    //TODO: add a test to test edge case of no linked list
  
    //-------------------REGULAR CASES------------------
  
    //TODO: add a test to remove the first node as a regular complex case
  
    test('insertion should properly modify the next property', () => {
      let result = new ListNode(5);
      result.append(new ListNode(4));
      result.append(new ListNode(10));
  
      expect(result.value).toEqual(5);
      expect(result.previous).toEqual(null);
  
      expect(result.next.value).toEqual(4);
      expect(result.next.previous.value).toEqual(5);
  
      expect(result.next.next.value).toEqual(10);
      expect(result.next.next.previous.value).toEqual(4);
  
      expect(result.next.next.next).toEqual(null);
    });
  });

  //TODO: ADD 4 TESTS FOR REMOVE METHOD
  describe('Testing REMOVE method of linked-list.js', () => {
    test('removing should properly modify the next nodes previous property and the previous nodes next property', () => {
      let result = new ListNode(5);
      result.append(new ListNode(4));
      result.append(new ListNode(10));

      result.remove(result.next);

      expect(result.next.value).toEqual(10);
      expect(result.next.next.value).toEqual(null);

    });
  });
  //TODO: ADD 4 TESTS FOR 3RD METHOD
  describe('Testing 3RD method of linked-list.js', () => { });

  
});