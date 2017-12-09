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

    if(this.next.remove(node)){ 
      this.next.next = this.next;
      this.next.previous = this; 
    }
    return this;
  }

}

//LENGTH METHOD linkedListLength
module.exports = DoubleLinkedListModule;