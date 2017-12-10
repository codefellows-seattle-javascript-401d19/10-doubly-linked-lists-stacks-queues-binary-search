# Code Fellows: Code 401d19: Full-Stack JavaScript

## Lab 10: Doubly Linked List, Binary Search, Stacks, and Queues
This lab focuses on a variety of different data structures and algorithms. This package contains three modules. A singly linked list module, a doubly linked list module, and a binary search module. 

## Tech/frameworks/packages

- node 
- npm
- node packages
  - jest
  - eslint 

## How to use?
Clone this repo, cd into `lab-rob`, run `npm install` and require into your projects.

## Contribute

You can totally contribute to this project if you want. Fork the repo, make some cool changes and then submit a PR.

## Credits

Problem inspired by Vinicio Vladimir Sanchez Trejo.

## License

MIT. Use it up!

# doublyLinkedList.js

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

## Tests

run `npm test` to check tests.

#### doublyLinkedLists.js
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