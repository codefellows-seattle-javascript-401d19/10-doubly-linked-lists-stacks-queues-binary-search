'use strict';

const DoubleLinkedList = require('../model/double-linked-list');

describe('linked-list.js', () => {
  let result = new DoubleLinkedList(5);
  expect(result.value).toEqual(5);
  expect(result.next).toEqual(null);
  expect(result.previous).toEqual(null);


  test('Should append a node to the linked list if there are no errors', () => {
    let result = new DoubleLinkedList(5);
    result.append(new DoubleLinkedList(4));
    result.append(new DoubleLinkedList(10));

    expect(result.value).toEqual(5);
    expect(result.previous).toEqual(null);

    expect(result.next.value).toEqual(4);
    expect(result.next.previous.value).toEqual(5);

    expect(result.next.next.value).toEqual(10);
    expect(result.next.next.previous.value).toEqual(4);

    expect(result.next.next.next).toEqual(null);
  });

  test.only('Should remove a node from the double linked list if there are no errors ', () =>{
    let result = new DoubleLinkedList(50);
    result.append(new DoubleLinkedList(60));
    result.append(new DoubleLinkedList(70));
    result.remove(result.next);

    expect(result.value).toEqual(50);
    expect(result.previous).toEqual(null);

    expect(result.next.value).toEqual(70);
    expect(result.next.previous.value).toEqual(50);

    expect(result.next.next).toEqual(null);
  });

  test('Should output a length of a linked list with no values if there are no errors', () =>{
    let result = new DoubleLinkedList(100);
    result.append(new DoubleLinkedList(200));
    result.append(new DoubleLinkedList(300));
    result.append(new DoubleLinkedList(400));
    result.append(new DoubleLinkedList(500));
    result.append(new DoubleLinkedList(600));

    //the returned counter value will be sent through module
    DoubleLinkedList.linkedListlength(6);
  });
});