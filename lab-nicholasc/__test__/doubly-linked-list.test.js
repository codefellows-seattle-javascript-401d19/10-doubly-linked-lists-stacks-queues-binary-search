'use strict';

let DoublyLinkedList = require('../lib/linked-list');

describe('doubly-linked-list', () => {
  test('insertion should modigy next property', ()=>{
    let result = new DoublyLinkedList(5);
    result.append(new DoublyLinkedList(10));
    result.append(new DoublyLinkedList(15));
    expect(result.value).toEqual(5);
    expect(result.next.value).toEqual(10);
    expect(result.next.next.value).toEqual(15);
  });
  test('remove should delete a node', ()=>{
    let deletions = new DoublyLinkedList(5);
    let deletions2 = new DoublyLinkedList(10);
    let deletions3 = new DoublyLinkedList(15);
    let deletions4 = new DoublyLinkedList(20);
    let deletions5 = new DoublyLinkedList(25);
    let deletions6 = new DoublyLinkedList(30);

    deletions.append(deletions2);
    deletions.append(deletions3);
    deletions.append(deletions4);
    deletions.append(deletions5);
    deletions.append(deletions6);
    deletions.remove(deletions2);
    console.log(deletions);
    expect(deletions.value).toEqual(5);
    expect(deletions.next.value).toEqual(15);
  });
});
