## Purpose
The purpose of this program is to implement a stack, doubly linked list, and binary search function.

## How To Use
* From your command line run "npm install" to install all of the dependencies.
* To install jest for testing run "npm i -s jest". You will then be able to use the command npm test to execute all tests in the test files.

## Commands
1. __npm test__: executes all three test files; One for the doubly linked list, one for the stack, and one for binary search.
2. __Doubly Linked List__
  * *list.remove(value)*: This method can be used to remove any node from a list by specifying the value of the node to remove. It takes a single parameter (the node value) which can be any data type other than __null__ or __undefined__. The list specified must already exist and contain a node with the value provided. If there is no node with that value or the list does not exist yet an error will occur.

  * *list.append(new DoublyLinkedList(value))*: This method can be used to add a node with the specified value to the end of a doubly linked list. It takes a single parameter of any data type other than __null__ or __undefined__. The list specified must already exist or an error will occur. Providing only a value without instantiating a new instance of DoublyLinkedList will also cause an error.

  * *list.prepend(new DoublyLinkedList(value))*: This method can be used to add a node with the specified value to the beginning of a doubly linked list. It takes a single parameter of any data type other than __null__ or __undefined__. The list specified must already exist or an error will occur. Providing only a value without instantiating a new instance of DoublyLinkedList will also cause an error.

3. __Binary Search__
  * binarySearch(sortedArray, id): This method is used to find an object with the specified id in an array sorted by ids. The entire object will be returned if a matching id is found; if no object with a matching id is found, an empty object will be returned. If the first argument provided is not an array of objects or the array is empty an error will occur. An error will also occur if the second argument provided is not a number.

4. __Stack__
  * stack.push: This method adds a new element to the top of the stack.
  * stack.pop: This method removes the most recently added element from the stack (Last In First Out behavior). If no elements are present in the stack __undefined__ will be returned.

## Technologies Used
* ES6
* Node
* jest
* eslint

## Credits
* Vinicio Vladimir Sanchez Trejo & the Code Fellows curriculum provided the base .eslintrc, .eslintignore, .gitignore, index.js, log.json, and server.js files upon which the command functions were built.
* My fellow 401JS classmates for help problem solving and debugging.
