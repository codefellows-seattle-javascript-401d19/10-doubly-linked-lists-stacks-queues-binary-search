# Code Fellows: Code 401d19: Full-Stack JavaScript

## Lab 10: Doubly Linked List, Binary Search, Stacks, and Queues
This lab focuses on a variety of different data structures and algorithms. This package contains three modules. A stack module (built from a singly linked list), a doubly linked list module, and a binary search module. 

## Tech/frameworks/packages

- node 
- npm
- node packages
  - jest
  - eslint 

## How to use?
Clone this repo, cd into `lab-rob`, run `npm install` and `require` the modules into your projects.

## Contribute

You can totally contribute to this project if you want. Fork the repo, make some cool changes and then submit a PR.

## Credits

Problem inspired by Vinicio Vladimir Sanchez Trejo.

## License

MIT. Use it up!


# doubly-linked-list.js

## Code Samples
Create a list by instantiating a single node with a value.

```
let myList = new DoublyLinkedList('pineapples');
// myList ==> {'pineapples'}
```

Extend the list by appending, prepending and inserting nodes.

```
myList.append(new DoublyLinkedList('oranges'));
  // myList ==> {'pineapples} -> {'oranges'}

let bananas = new DoublyLinkedList('bananas');
myList.prepend(bananas);
  // myList ==> {'bananas'} -> {'pineapples} -> {'oranges'}

let iceCream = new DoublyLinkedList('ice cream');
bananas.insertAfter(iceCream);
  // myList ==> {'bananas'} -> {'ice cream'} -> {'pineapples} -> {'oranges'}

iceCream.insertBefore(new DoublyLinkedList('steak'));
  // myList ==> {'bananas'} -> {'steak'} -> {'ice cream'} -> {'pineapples} -> {'oranges'}
```

Traverse the list using the `next` and `previous` properties. Access the value stored in the node using the `value` property.

```
console.log(myList.value);
  // bananas

console.log(bananas.next.next.next.value);
  // pineapples

console.log(iceCream.previous.value);
  // steak
```

Refine your list by removing nodes and filtering the list.

```
let longWords = myList.filter(value => value.length > 8);
  // longWords ==> {'ice cream'} -> {'pineapples'}

longWords.remove();
  // longWords ==> {'pineapples'}

```

## Constructor
#### DoublyLinkedList(value)

  Value can be of any type, but an error is thrown if it is undefined. Returns a new doubly linked list of the form {previous: null, value: <value>, next: null}.

## Methods
#### append(node)
  `node` must be an instance of `DoublyLinkedList` or an error is thrown. 
  
  Adds the node provided as the last node in the list. The calling node is returned, so chaining is possible.
  
#### prepend(node)
  `node` must be an instance of `DoublyLinkedList` or an error is thrown. 
  
  Adds the node provided as the first node in the list, pushing the HEAD node to the second position. The calling node is returned, so chaining is possible.
  
#### insertAfter(node)
  `node` must be an instance of `DoublyLinkedList` or an error is thrown. 
  
  Inserts the node provided after the calling node. The calling node is returned, so chaining is possible.
  
#### insertBefore(node)
  `node` must be an instance of `DoublyLinkedList` or an error is thrown. 
  
  Inserts the node provided before the calling node. The calling node is returned, so chaining is possible.
  
#### remove()
  
  Removes the calling node from the list it is part of. 
  
  If it is the only node in the list, it is returned.

  If it is the first node, then it is removed, and the second node takes it's spot and is returned.

  If it is the last node, it's reference is removed from the second to last node, and the new last node is returned.

  If it is a middle node, the node before it bypasses it as it's `next` reference, and the node behind it bypasses it as it's `previous` reference. The previous node is returned.

#### filter(fn)
  `fn` must be a function that evaluates to a boolean. 
  
  Use is similar to `Array.prototype.filter()`. Provide a callback function that evaluates a given node's value (the value is passed into the callback, not the node) and returns true or false based on a test of your choice.

  A new list is returned that contains all of the nodes from the calling node to the last node that passed the test. Note that in order to test the entire list you must start from the head.

## Tests

run `npm test` to check tests.

#### doubly-linked-list.js
##### Instantiation
1. Instantiating a new object should return a node with a value and null previous/next properties.
1. Instantiating a new object without a value should throw an error.

##### Appending nodes
1. Calling append on any node in the list should add it to the end of the list.

##### Prepending nodes
1. Calling prepend on any node in the list should add it to the beginning of the list.

##### Inserting nodes
1. Calling insertAfter on a non-tail node should insert a new node immediately following the calling node.
1. Calling insertAfter on a tail node should act the same way as appending a node.
1. Calling insertBefore on a non-tail node should insert a new node immediately preceeding the calling node.
1. Calling insertBefore on a head node should act the same way as prepending a node.

##### Removing nodes
1. Calling remove on a head node should reassign the value and next properties of the head node to equal that of the next node.
1. Calling remove on a middle node should connect the previous and next nodes.
1. Calling remove on a tail node should reset the previous node\'s next value as null.
1. Calling remove on a head node with no trailing nodes should return the head node.

##### Filtering nodes
1. Calling filter on a node should return a new linked list starting at the called node with the filtered values for itself and each subsequent node that pass the provided test.
1. Calling filter where no elements pass the test should return an empty HEAD node.
1. Filter returns a DoublyLinkedList, so can be chained.

##### Error checking
1. Calling append, prepend, insertAfter, or insertBefore with an argument that isn\'t a proper node will throw an error.
1. Calling filter without a callback function will throw an error.



# stack.js

## Code Samples
Create a stack by instantiating a new stack with no arguments.

```
let myStack = new stack();
```

Add items to the stack by pushing them. The length of the stack is returned.

```
myStack.push('hot dogs');
  // 1
myStack.push('french fries);\
  // 2
myStack.push('cotton candy');
  // 3
```

Remove items from the stack by popping them off, which returns their value.

```
console.log(myStack.pop());
  // cotton candy

console.log(myStack.pop());
  // french fries

console.log(myStack.pop());
  // hot dogs

console.log(myStack.pop());
  // __undefined__

```

## Constructor
#### Stack()

  Returns a new empty stack. Stack is built off of a singly linked list. 

## Methods
#### push(value)
  `value` must be defined. 
  
  Adds the new value to the top of the stack.

  Returns the length of the stack.

#### pop()
  
  Returns the last value added to the stack.

  Returns undefined if the stack is empty.
  

## Tests

run `npm test` to check tests.

#### stack.js
##### push()
1. push should add a new node to the first spot in the stack if the stack is empty.
1. push should add a new node to the first spot in the stack, pushing the rest of the stack down, if the stack is not empty.
1. You can push a stack inside of itself for no apparent benefit.
1. push should throw an error if an undefined value is pushed into the stack.

##### pop()
1. pop should return the first value of the top node in the stack.
1. pop should remove the top node and replace it with the second node.
1. If the last node is popped, pop should return the node value and then set the value to undefined.
1. If there are no nodes in the stack, pop should return undefined.
1. push and pop should increment/decrement a counter each time it is used, but the counter should never drop below zero.