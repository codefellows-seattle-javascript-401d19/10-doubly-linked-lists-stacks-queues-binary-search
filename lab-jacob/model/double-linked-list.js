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

    if (this === node){
      if(this.next){
        this.next.previous = null;
      }else
        return null;
    }

    if (this.next === null && this.previous === null){
      return this === null;
    }
    // this.next = node;
    // node.previous = this;
    // node.next.next = node.next;
    // node.next.next.previous.previous = node.previous; 

    
    return this;
  }
  
  //LENGTH METHOD linkedListLength
  linkedListLength(node){
    if(!(node instanceof DoubleLinkedListModule))
      throw new TypeError(`<node> should be an instance of DoubleLinkedList`);

    let ctr = 0;  
    while (this.next !== null) {
      ctr++;
      node = this.next; 
    }
    return ctr; 
  }

}

module.exports = DoubleLinkedListModule;