'use strict';

class ListNode{
  //new LinkedList()...
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  append(node){// the node you are appending to is this (EG result)
    if(!(node instanceof ListNode))
      throw new TypeError('<node> should be an instance of ListNode');
    
    // vinicio - we know we are at the last element if there is no next
    if(!this.next){
      this.next = node;
      node.previous = this;
    }
    else
      this.next.append(node);// RECURSIVE!
    
    return this;
  }
  //TODO: Add a method to remove a node and properly keep the list linked
  remove(node){
    if (!(node instanceof ListNode))
      throw new TypeError('<node> should be an instance of ListNode');

    if(!this.next){
      node.previous = node;
      this.next = null;
    }
  }

//TODO: Add a 4RD method of choice (refer to array methods)


}

module.exports = ListNode;