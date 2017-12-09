'use strict';

class DoubleLinkedListModule{

  constructor(value) {
    this.value = value; 
    this.next = null;
    this.previous = null;
  }

  append(node){
    if(!(node instanceof DoubleLinkedListModule))
      throw new TypeError(`<node> should be an instance of DoubleLinkedList`);


    if (!this.next){
      this.next = node;
      node.previous = this;
    }
    else
      this.next.append(node);

    return this;
  }

  //REMOVE METHOD
  remove(node){
    if(!(node instanceof DoubleLinkedListModule))
      throw new TypeError(`<node> should be an instance of DoubleLinkedList`);
    if (!this.next){
      this.next = node;
      node.previous = this;
      node.next.next = node.next;
      node.next.next.previous.previous = node.previous; 
    }else 
      this.next.remove(node);
    
    return this;
  }

}

//LENGTH METHOD linkedListLength
module.exports = DoubleLinkedListModule;