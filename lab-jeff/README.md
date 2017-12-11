# Code Fellows 401 Lab 10
This lab contains three distinct parts:
* Doubly Linked List - Add a remove method and a method of our choice to code which already includes a constructor and an add method.
* Stack - Use a linked list to implement a stack with push and pop methods.
* Binary Search - Modify pre-written code to change from a binary search through an array to one with searches by id through an array of objects.

## Code Style
Standard Javascript with ES6.

## Features
See the top section for a basic description of what each module does.  More details in the modules section below.

## To Use
To use this repo, clone or fork and clone to your computer.  Do an internet search for "git clone" if you do not know how to do this.
Run ```npm install``` at a command prompt to install dependencies.  Do an internet search for "npm" to learn more about npm.
Run ```npm run test``` to run the suite of tests.  This repo uses jest for testing.

## doubly-linked-list module
The doubly linked list module creates new nodes via a constructor function .  If it is the first node, it does nothing more.  If it is the second or later node, it adds it to the end of the linked list, and links it to the previous last node in the list via "previous" and "next" properties.  You can also remove and find nodes.

### Functions and methods
- constructor
  arity: 1
  parameters: value - no restrictions on type
  return: none
- append
  arity: 1
  parameters: node - must be a node made by the constructor
  return: the appended node
- remove
  arity: 1
  parameters: node - must be a node made by the constructor
  return: the deleted node
- find: 1
  parameters: value - no restrictions on type
  return: node that contains the value if found, else null

## stack module
The stack module is similar to the doubly-linked-list module.  The 'push' function is the same as the 'append' function from the doubly linked list module.  However, 'pop' is not the same as 'remove' in that 'pop' is only able to remove nodes from the end of the linked list.

### Functions and methods
- constructor
  arity: 1
  parameters: value - no restrictions on type
  return: none
- push
  arity: 1
  parameters: value - no restrictions on type
  return: none
- append
  arity: 1
  parameters: node - must be a node made by the constructor
  return: the appended node
- pop
  arity: 1
  parameters: node - must be a node made by the constructor
  return: the popped node's value

### binary-search module
The binary search module takes in two arguments: an array of objects, each with an "id" property,  and an integer.  The module then searches through the id's for the integer.  It then returns the entire object with the matching id.  If no match is found, -1 is returned.

### Functions and methods
- binarySearch
  arity: 2
  parameters: array of object - must be an array of objects, each with a property "id" that is a number
              id - the id to find.  Must be a number.
  return: if a matching object is found, the matched object.  Else, -1.
