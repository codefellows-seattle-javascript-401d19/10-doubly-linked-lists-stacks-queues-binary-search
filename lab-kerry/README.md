# Lab 10: Doubly Linked List, Binary Search, Stacks, and Queues.

## Technologies Used
-Node.js (ES6 notation where possible)
-Development NPM packages (eslint, jest, and util)

## How to Use

To start this app, clone this repo from 

  `http://www.github.com/kerrynordstrom/08-09-vanilla-rest-server`

install all necessary packages with 

  `npm install`

  This project is able to start your node server upon running any tests.  To do this, type

  `node run test`

## Modules

### Doubly Linked List Module 
The doubly linked list module is a demonstration of a doubly linked list.  It can take any values of any data type.

### Stack Module
The stack module is a demonstration of a stack using a singly linked list as a construct.  Both the LinkedList and Stack constructors use  methods to add a node as the first in a list , last in a list, and remove from the same locations.  These methods abide by the LIFO principle inherent in a call stack by utilzing push/pop methodology.

Additinally, helper methods are used to see the head node in the list as well as the linked list length and to display the entire object upon request.


### Queue Module
The queue module is a demonstration of a queue using a singly linked list as a construct.  Both the LinkedList and Queue constructors use  methods to add a node as the first in a list, last in a list, and remove from the same locations.  These methods abide by the FIFO principle inherent in a request queue by utilzing enqueue/dequeue methodology.

Additinally, helper methods are used to see the head node in the list as well as the linked list length and to display the entire object upon request.

### Binary Search Module
The binary search module is a demonstration of a common binary search as it specifically relates to iterating over an array of objects.  As the array is ordered by id properties, a valid input of an id will achieve a big O(logn) upon traversing the array by halving each traverse from the previous attempt.
