'use strict';

class Queue{
  constructor(value){
    this.value = value;
    this.next = null;
  }

  _append(node){
    if(!this.next){
      this.next = node;
    } else {
      this.next._append(node);
    }
    return this;
  }

  _delete(){
    if (this.next){
      this.value = this.next.value;
      this.next = this.next.next;
    } else {
      delete this.value;
      delete this.next;
    }
    return this;
  }

  enqueue(value){
    this._append(new Queue(value));
  }

  dequeue(){
    let value = this.value;
    this._delete();
    return value;
  }
}

module.exports = Queue;
