'use strict';

class Queue{

  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
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

  enqueue(node){
    this.append(new Queue(node));
  }

  // dequeue(){
  //   if (this.next) {
  //     this.value = this.next.value;
  //     this.next = this.next.next;
  //   }
  //   // return newNode;
  // }
}

module.exports = Queue;
