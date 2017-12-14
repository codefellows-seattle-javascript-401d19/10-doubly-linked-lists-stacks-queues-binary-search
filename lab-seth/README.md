# Binary Search, Doubly Linked List, Stack and Testing

This is a combination of tests and libraries that show what the following items are:
- Binary Search, searching through and array of objects
- Doubly Linked List
- Stack, using LIFO and a Linked List

## Exported Functions Declaration
### Binary Search
  - airity (2), sortedObjectArray (array of obbjects, must be sorted before), id (number)
  - Valid Use: Returns the Object searched for in an Array.
  - Invalid use: Returns -1 if not id is found



## Build status

<!-- Build status of continus integration i.e. travis, appveyor etc. Ex.  -->
Status: Working


## Code style

js-standard-style

<!-- ## Screenshots

![Chat Room Example](https://raw.githubusercontent.com/SethDonohue/06-tcp-server/seth-lab/lab-seth/img/TCP-Chat-Server.png) -->

## Tech/framework used
- Eslint
- jest
- Javascript /ES6


#### Built with

VScode


## Code Example
```
let binarySearch = (sortedObjectArray,id) => {
  let lowIndex = 0;
  let highIndex = sortedObjectArray.length -1;

  while(lowIndex <= highIndex){

    let middleIndex = Math.floor((lowIndex + highIndex) / 2);
    let elementFound = sortedObjectArray[middleIndex].id;
    
    if(elementFound < id){
      lowIndex = middleIndex + 1;
    }else if(elementFound > id){
      highIndex = middleIndex -1;
    }else{
      return sortedObjectArray[middleIndex];
    } 
  }
  return -1;
};

module.exports = binarySearch;
```
###
## API Reference

Docs in Progress

## Tests

- Confirms Propery and improper use of Binary Search and proper returned values

- Confirms propery append, remove, and find of nodes for double linked lists and edge cases.

- confirms proper use of singly linked list to creat a LIFO Stack

#### To Run Tests, run these commands in terminal from lab-seth folder

- npm run test

## How to use?

1. ) In terminal navigate to lab-seth folder
<!-- If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project. -->

## Contribute

<!-- Let people know how they can contribute into your project. A contributing guideline will be a big plus. -->

## Credits
- jest
- Classmates that helped me!
<!-- Give proper credits. This could be a link to any repo which inspired you to build this project, any blogposts or links to people who contrbuted in this project.

Anything else that seems useful -->

## License

#### MIT © Seth Donohue