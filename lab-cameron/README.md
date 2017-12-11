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

# Tests

All tests done with jest

# Credits

Cameron Moorehead - https://github.com/CameronMoorehead

# License

GPL-3.0
