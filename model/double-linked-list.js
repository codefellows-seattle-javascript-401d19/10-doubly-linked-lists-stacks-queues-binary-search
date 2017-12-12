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
    
        if (!this.previous && this.value === node.value) {
          if (!this.next) {
            // console.log('Removal of only node: Setting value to null');
            this.value = null;
            return;
          }
          this.value = this.next.value;
          this.next = this.next.next;
          return;
        }
    
        if (this.next === node) {
          if (!this.next.next) {
            this.next = null;
            return;
          } else {
            this.next.next.previous = this;
            this.next = this.next.next;
            return;
          }
        } else {  
          return this.next.remove(node);
        }
      }
    
      find(node, num) {
        let counter = num + 1 || 1;
    
        if (!(node instanceof LinkedList)) {
          if (this.value === node)
            return this;
          
          if (!this.next) 
            return `no data: '${node}' found out of ${counter} nodes`;
      
          return this.next.find(node, counter);
          
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