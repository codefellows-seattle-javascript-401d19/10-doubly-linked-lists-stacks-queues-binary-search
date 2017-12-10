'use strict';

class Stack{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  _append(node){
    if (!this.next){
      this.next = node;
      node.prev = this;
    } else {
      this.next._append(node);
    }
    return this;
  }

  stackPush(value){
    this._append(new Stack(value));
  }

  stackPop(){
    if (this.prev === undefined){
      throw new TypeError('cannot Pop from empty stack');
    }
    if (!this.next){
      if (!this.prev){
        const value = this.value;
        delete this.value;
        delete this.prev;
        delete this.next;
        return value;
      }
      this.prev.next = null;
      return this.value;
    } else {
      return this.next.stackPop();
    }
  }
}

module.exports = Stack;
