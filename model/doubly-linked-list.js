'use strict';

// var singlylinkedlist = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

class DoublyLinkedList{
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  append(node){
    if(!(node instanceof DoublyLinkedList))
      throw new TypeError('<node> should be an instance of DoublyLinkedList');
    if(!this.next){
      this.next = node;
      node.previous = this;
    }
    else
      this.next.append(node);
    return this;
  }

  remove(node){
    if(!(node instanceof DoublyLinkedList))
      throw new TypeError('<node> should be an instance of DoublyLinkedList');
    if(this.next !== node) {
      this.next.remove(node);
    } else if(this.next === node) {
      this.next = this.next.next;
      this.next.previous = this;
    }
    return this;
  }
}

module.exports = DoublyLinkedList;
