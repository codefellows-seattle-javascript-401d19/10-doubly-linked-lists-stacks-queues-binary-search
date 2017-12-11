# 10: Doubly Linked Lists, Stacks/Queues, Binary Search
Description: **Lab 10 of Code Fellows JavaScript 401d19** </br>
Author: **Matthew LeBlanc** </br>
Date: **12/10/17**

## Features
This lab includes 
  - Creating doubly linked lists
  - Implementing stack concepts with push/pop methods
  - Implementing queue concepts with enqueue and dequeue methods
  - Creating a binary search that works with an array of objects

## doubly-linked-list.js
Exports a single class constructor that has three methods

1. `append()` has an arity of one which takes in a newly constructed LinkedList class and adds it to the end of the chain.
2. `remove()` has an arity of one which takes in a previous LinkedList class that is currently in the chain and removes it.
3. `find()` has an arity of two, one of which being the node you want to find, and another that is undefined which allows for finding the index and returning it.

## stack.js
Exports a single class constructor that has two methods

1. `push()` has an arity of one which takes in a newly constructed LinkedList class and adds it to the end of the list.
2. `pop()` contains no parameters, and it removes the last node in the list.

## queue.js
Exports a single class constructor that has two methods

1. `enqueue()` has an arity of one which takes in a newly constructed LinkedList class and adds it to the end of the list.
2. `dequeue()` contains no parameters, but it removes the first node in the list.

## binary-search.js
- Exports a function that finds the given id from an array of objects, each with their own id.
- It uses binary search by taking the maximum and minimum index values, and resetting them based on if the given id is larger or smaller than the middle id.
- Also it recognizes the maximum and minimum index values and checks if those match the given id, if not they either become closer in number or are reset based on the middle index.