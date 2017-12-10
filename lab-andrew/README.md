# Lab 10 Doubly Linked Lists, Stacks, Queues and Binary Searches

## Overview

This is a demonstration of implementation of several data structures and a search method with a big O of O(log(n)) (in time-complexity; it has an O(1) in space-complexity) where n is the length of the input array.

## Getting Started

To get started using this application, familiarity with node and npm, as well as git is assumed. Fork/clone this repo to your machine, and do an `npm install`. As jest is currently installed as a Dev Dependency, make sure to do an `npm i jest` also. To run the tests to see that the implementation of the data structures is successful with real-world examples, run `npm run test`.

## Modules

There are four modules exported in this project.

##### Binary Search

The first is a binarySearch module. The only method is the binary search itself, which has an arity of 2; it takes in an array of objects and an id to be found. The input must be an array, and the items in the array must be objects with a property of id. An error will be thrown otherwise. The method will return the object that matches the id given as the second argument, and if an object with that id does not exist in the given array, a -1 will be returned instead.

##### Doubly Linked List

The second module is a doubly linked list. It has a constructor function, which instantiates a new node with the value given as input (arity of 1). The next method is an append method, which takes as input a node, and appends that node to the node from which this method is called. The delete method will search through a linked list, and delete (or rather unlink) that node from the linked list. Finally, the listLength method will take a given linked list as input and will return its length as a number. A note on this method, is that the linked list cannot contain any nodes which have a value of undefined.

##### Queue

The third module is a queue. It has a constructor function (which instantiates the queue) and internally works as a linked list. It takes a value as input (arity of one) and assigns that value to the first node. It has two semi-private methods (which can be accessed externally, but users are encouraged not to), which are pertinent to the implementation of the public methods, enqueue and dequeue. Enqueue appends a value to the queue, and thus has only a value parameter. Dequeue returns the next value in the queue and takes no arguments (how this works internally is that it returns the first item in the linked list, deletes that node, and then the next item in the linked list will be returned when dequeue is called next).

##### Stack

The last module is a stack. It has a constructor function (which instantiates the stack) and internally works as a doubly linked list. This is necessary because it needs the ability to delete the last node while 'on' the last node. It takes a value as input (arity of one) and assigns that value to the first node. It has one semi-private method (which can be accessed externally, but users are encouraged not to), which is pertinent to the implementation of the public methods, stackPush and stackPop. stackPush appends a value to the stack, and thus has only a value parameter. stackPop returns the last value in the stack and takes no arguments (how this works internally is that it returns the value of the last node in the linked list, deletes that node, and then the next last value in the linked list will be returned when stackPop is called next).

## Technology/Credits

By Andrew Bloom. This app uses jest for testing purposes.
