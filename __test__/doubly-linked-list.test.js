'use strict';

// path to doubly-link js
const LinkedList = require('../model/double-linked-list');

describe('linked-list.js', () => {
  test('testing single element in list and no next', ()=> {
    let result = new LinkedList(5);
    expect(result.value).toEqual(5);
    expect(result.next).toEqual(null);
    expect(result.previous).toEqual(null);
  });

  test('insertion should properly modify the next and previous property', () => {
    let result = new LinkedList(5);
    result.append(new LinkedList(4));
    result.append(new LinkedList(10));

    expect(result.value).toEqual(5);
    
    expect(result.next.value).toEqual(4);
    expect(result.next.previous.value).toEqual(5);
    
    expect(result.next.next.value).toEqual(10);
    expect(result.next.next.previous.value).toEqual(4);
    expect(result.next.next.next).toEqual(null);
    

    expect(() => result.append('seven')).toThrow();    
  });

  test('remove should update the next and previous property and erase an element', () => {
    let list = new LinkedList(10);
    let second = new LinkedList(20);
    let third = new LinkedList(30);
    

    list.append(second); // new LinkedList(20)
    list.append(third); // new LinkedList(30)

    expect(list.value).toEqual(10);
    expect(list.next.value).toEqual(20);
    expect(list.next.next.value).toEqual(30);
    expect(list.next.next.next).toEqual(null);

    list.remove(second);

    expect(list.value).toEqual(10);
    expect(list.previous).toEqual(null);
    
    expect(list.next.previous.value).toEqual(10);
    expect(list.next.value).toEqual(30);
    expect(list.next.next).toEqual(null);

    let fourth = new LinkedList(40);
    list.append(fourth);

    expect(list.next.next.value).toEqual(40);
    expect(list.next.next.previous.value).toEqual(30);
    expect(list.next.previous.value).toEqual(10);
    
    expect(list.next.next.next).toEqual(null);
    expect(() => list.remove('seven')).toThrow();
    
    list.remove(list);

    expect(list.value).toEqual(30);
    expect(list.previous).toEqual(null);
    expect(list.next.value).toEqual(40);
    expect(list.next.next).toEqual(null);

    
    let fifth = new LinkedList(50);
    let sixth = new LinkedList(60);
    list.append(fifth);
    list.append(sixth);
    
    list.remove(sixth);

    expect(list.value).toEqual(30);
    expect(list.previous).toEqual(null);
    expect(list.next.value).toEqual(40);
    expect(list.next.previous.value).toEqual(30);
    expect(list.next.next.value).toEqual(50);
    expect(list.next.next.previous.value).toEqual(40);
    expect(list.next.next.next).toEqual(null);
    
  });

  test('finding given element and returning the index', () => {
    let list = new LinkedList(10);
    let second = new LinkedList(20);
    let third = new LinkedList(30);
    let shouldBeError = new LinkedList(123);

    list.append(second); // new LinkedList(20)
    list.append(third); // new LinkedList(30)

    expect(list.value).toEqual(10);
    expect(list.next.value).toEqual(20);
    expect(list.next.next.value).toEqual(30);
    expect(list.next.next.next).toEqual(null);

    expect(list.find(10)).toEqual(list);
    expect(list.find(list)).toEqual(list);
    expect(list.find(20)).toEqual(second);
    expect(list.find(second)).toEqual(second);
    expect(list.find(30)).toEqual(third);
    expect(list.find(third)).toEqual(third);

    expect(list.find(123)).toEqual(`no data: '123' found out of 3 nodes`);
    expect(list.find(shouldBeError)).toEqual(`no distinct node object found out of 3 nodes`);
  });

  test('testing removal of only element in the doubly linked list', ()=> {
    let result = new LinkedList(5);
    expect(result.value).toEqual(5);
    expect(result.next).toEqual(null);
    expect(result.previous).toEqual(null);

    result.remove(result);
  });

});