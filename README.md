![cf](https://i.imgur.com/7v5ASc8.png) Lab 10: Doubly Linked List, Binary Search, Stacks, and Queues.

## Features

  * **Doubly Linked List module**

    Doubly Linked List class has a constructor function that creates new nodes. Every node has value, previous and next property. Also DLL class has two methods used to `append` and `remove` nodes from doubly linked list.
    * `append`

      * if new Node is not an instance of DLL class - TypeError will be thrown.
      * To find last node in the list, we check if there is no `node.next` property.

    * `remove`

      * if new Node is not an instance of DLL class - TypeError will be thrown.
      * if first node is the one to remove. We set `this.next.previous = null` and we return next node which will be first node in our new list.
      * if there is only one node in the list that node will get removed.

    * `find`

      * if node that we're looking for is the current node's value - we found our node.
      * if current node is not the one we're looking for we will perform `find` function and compare it's value on the next node.


  * **Binary Search module**
    takes two arguments `sortedArray` - presorted array that we're using to look for an element and `id` - integer. Module checks if id property is a integer and if array is an array. If those conditions are true, module compares elements ids with entered id parameter and returns matching element. If there's no match, module will return -1.

  * **Queue**

    Queue class has a constructor function that creates new dll nodes. Every node has value, previous and next property. In addition to `append` and `remove` methods we have `enqueue` and `dequeue` that are adding new dll note to the end of the list and taking out first added node following FIFO principle.


## Licence
MIT © Pedja Josifovic
