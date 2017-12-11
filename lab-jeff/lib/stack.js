'use strict';

class DoublyLinkedList{
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }


  push(value){
    let node = new DoublyLinkedList(value);
    this.append(node);
  }

  append(node){

    if(!this.next){
      this.next = node;
      node.previous = this;
    }
    else
      this.next.append(node);

    return this;
  }

  pop(){
    if(!this.next){
      if(this.previous) {
        this.previous.next = null;
      } else {
        let temp = this.value;
        this.value = undefined;
        return temp;
      }
      return this.value;
    } else {
      return this.next.pop();
    }
  }

}

module.exports = DoublyLinkedList;
