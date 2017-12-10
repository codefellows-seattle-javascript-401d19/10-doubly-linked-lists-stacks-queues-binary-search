'use strict';

class LinkedList{

  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  append(node) {
    if (!(node instanceof LinkedList))
      throw new TypeError('<node> should be an instance of LinkedList');
    
    // mattL - we know this is the last element if there is no next (null)
    if (!this.next) {
      this.next = node;
      this.next.previous = this;
    } else {
      this.next.append(node);
    }
    
    return this;
  }

  remove(node) {
    if (!(node instanceof LinkedList))
      throw new TypeError('<node> should be an instance of LinkedList');

    if (this.next.next === null && this.next === node)

      return this.next = null;

    if (this.next === node) {
      this.next.next.previous = this;
      return this.next = this.next.next;
    } else {
      return this.next.remove(node);
    }

  }

  find(node, num) {
    let counter = num + 1 || 1;

    // mattL - if searching by linkedlist value
    if (!(node instanceof LinkedList)) {
      if (this.value === node)
        return this;
      
      if (!this.next) 
        return `no data: '${node}' found out of ${counter} nodes`;
  
      return this.next.find(node, counter);
      
    // mattL - if searching by linkedlist object    
    } else {
      if (this === node)
        return this;

      if (!this.next)
        return `no distinct node object found out of ${counter} nodes`;
    
      return this.next.find(node, counter);
    }
  }     
}
        
module.exports = LinkedList;