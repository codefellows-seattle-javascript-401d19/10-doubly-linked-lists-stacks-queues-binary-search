# Doubly Linked Lists, Stacks and Queues and Binary Search

This project implements stacks and queues using Doubly Linked Lists and
features a binary search function which can lookup an id in a list of objects.

# Tech Used

- jest
- Node.js
- eslint

# Features

The `DoublyLinkedList` class have the classic append and remove methods but also
have convenience / helper functions `getTail()`, `getHead()` and `getLength()`.

Bothe the `Stack` and `Queue` class encapsulate a Doubly Linked List instead of an
array which they perform their LIFO / FIFO operations on, respectively.

The `Stack` class has `push` and `pop` methods which are wrappers around the
encapsulated Doubly Linked List's `append` and `remove(getTail())` methods. It
also has a `peek` method which allows you to peek at the top of the Stack.

The `Queue` class has `enqueue` and `dequeue` methods which are wrappers around
the encapsulated Doubly Linked List's `append` and `remove(getHead())` methods.
It has a `front` method which returns the next element to be dequeued.

Both the Stack and Queue class have a `getLength()` method which returns the
length of the Stack or Queue.

The `binarySearch` function is simply binary search on a list of objects with
id's that will return the found element with the provided id if present.

# How To Use?

You would use these classes anywhere you would consider using Stacks, Queues,
Doubly Linked Lists or binarySearch. However, this repo is mostly for academic /
educational purposes and so I wouldn't recommend using it in production.

### Doubly Linked List
`const dll = new DoublyLinkedList(10);`
`const dll2 = new DoublyLinkedList(20);`
`const dll3 = new DoublyLinkedList(30);`
`dll.append(dll2);`
`dll.append(dll3);`
`dll.remove(dll3);`
`dll.getHead(); // returns dll`
`dll.getTail(); // returns dll2`
`dll.getLength(); // returns 2`

### Queue
`const myQueue = new Queue();`
`myQueue.enqueue(10);`
`myQueue.front(); // returns 10`
`myQueue.enqueue(20);`
`myQueue.dequeue(); // returns 10`
`myQueue.getLength(); // returns 1`

### Stack
`const myStack = new Stack();`
`myStack.push(10);`
`myStack.push(20);`
`myStack.peek(); // returns 20`
`myStack.pop(); // returns 20`
`myStack.getLength(); // returns 1`

### Binary Search
`const testArray = [
  { id: 10, name: 'testUser1' },
  { id: 20, name: 'testUser2' },
  { id: 30, name: 'testUser3' },
  { id: 40, name: 'testUser4' },
  { id: 50, name: 'testUser5' },
];`
`const result = binarySearch(testArray, 40); // returns testArray[3];`

NOTE: testArray must be sorted

# Tests

All tests done with jest

# Credits

Cameron Moorehead - https://github.com/CameronMoorehead

# License

GPL-3.0
