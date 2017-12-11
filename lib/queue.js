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

  remove(node){

    if(this === node){
      this.next.previous = null;
      return this.next;
    }

    if(!this.next)
      return this;

    if(this.next === node){
      this.next = this.next.next;
      this.next.previous = this;
    }
    else
      this.next.remove(node);

    return this;
  }

  enqueue(node){
    this.append(new Queue(node));
  }

  dequeue(){
    this.remove();
    this.next.previous = null;
    return this.next;
  }
}

module.exports = Queue;
