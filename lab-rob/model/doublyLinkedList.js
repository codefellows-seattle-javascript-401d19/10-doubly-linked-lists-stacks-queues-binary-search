'use strict';

class DoublyLinkedList {
  constructor(value) {
    if(value === undefined)
      throw new TypeError('<value> must be defined');
    this.previous = null;
    this.value = value;
    this.next = null;
  }

  append(node) {
    isNode(node);

    let currentNode = this;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    node.previous = currentNode;
    return this;
  }
  
  prepend(node) {
    isNode(node);
  
    let currentNode = this;
    while(currentNode.previous) {
      currentNode = currentNode.previous;
    }

    currentNode.previous = node;
    node.next = currentNode;
    return this;
  }

  insertAfter(node) {
    isNode(node);

    if(this.next) {
      node.next = this.next;
      node.next.previous = node;
    }

    this.next = node;
    node.previous = this;
    return this;
  }

  insertBefore(node) {
    isNode(node);

    if(this.previous) {
      node.previous = this.previous;
      node.previous.next = node;
    }

    this.previous = node;
    node.next = this;
    return this;
  }

  remove() {
    if(!this.previous && !this.next)
      return this;

    if(!this.previous) {
      this.value = this.next.value;
      this.next = this.next.next;
      return this;
    }

    if(!this.next) {
      this.previous.next = null;
      return this.previous;
    }

    this.previous.next = this.next;
    this.next.previous = this.previous;
    return this.previous;
  }

  filter(fn) {
    if(typeof fn !== 'function')
      throw new TypeError('<fn> must be a function.');
    
    let checkingNode = this;
    let newList = new DoublyLinkedList(null);
    let keepGoing = true;

    while(keepGoing) {
      if(fn(checkingNode.value)) { //passes the test
        if(!newList.value) { //first match
          newList.value = checkingNode.value;
        } else { //additional matches
          newList.append(new DoublyLinkedList(checkingNode.value));
        }
      }
      if(!checkingNode.next)
        keepGoing = false;
      checkingNode = checkingNode.next;
    }
    return newList;
  }

}


module.exports = DoublyLinkedList;

let isNode = node => {
  if(!(node instanceof DoublyLinkedList))
    throw new TypeError('<node> must be an instance of DoublyLinkedList');
};

// let head = new DoublyLinkedList(0);
// head.append(new DoublyLinkedList(1));
// head.append(new DoublyLinkedList(2));
// head.append(new DoublyLinkedList(3));
// head.append(new DoublyLinkedList(4));
// head.append(new DoublyLinkedList(5));
// head.append(new DoublyLinkedList(6));

// let greaterThanOne = value => value % 2 === 0;
// let filteredHead = head.filter(greaterThanOne);

// console.log(filteredHead.filter(value => value % 3 === 0).append(new DoublyLinkedList('hi')));