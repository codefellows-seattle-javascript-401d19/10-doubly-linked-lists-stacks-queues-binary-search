# Code Fellows: Seattle 401 JavaScript - 401d19


##  Lab 10: Doubly Linked List, Binary Search, Stacks, and Queues

### Author:
 Catherine Looper

### Motivation

In this project, I built a Doubly Linked List containing append, remove, and find methods. I then applied those concepts to construct a stack using Doubly Linked Lists. As well as created a binary search module.

### Build

#### Doubly Linked List Module

The storage module requires in logger and fsExtra and exports the storage module. The storage module has the following methods attached: ```fetchAll```, ```fetchItem```, ```addItem``` and ```deleteItem```. 
* The ```storage.fetchAll``` method serves to retrieve all books.
* The ```storage.fetchItem``` method accepts the parameter ( id ) and sets up functionality to retrieve one book if a user sends a request for that specific book's id.
* The ```storage.addItem``` method accepts the parameter ( book ) and sets up functionality for posting a book.
* The ```storage.deleteItem``` method accepts the parameter ( id ) and sets up functionality to delete one book if a user specifies that book's id.

The storage module also includes a function ```fsExtra.pathExists``` that writes to the db.json file.


#### Stack Module

The server module is creating an http server, defining route behavior and exporting an interface for starting and stopping the server. The server module exports an object containing start and stop methods. 

The server module requires in http, logger, router, dotenv, and the book-router.js file. The server.start and stop methods return a new Promise with resolve and reject parameters. The start method contains an app.listen function that listens for the server start. The server.stop method has an app.close that turns the server off by setting the isServerOn variable to false.

#### Binary Search Module

The Binary Search module is a version of a binary search that accepts an array of objects


#### Test Module

server.test.js contains three tests each for the ```POST``` and ```GET``` methods and two tests for the ```DELETE``` method for a total of eight tests.

### Limitations

To use this app - it is assumed that the user has familiarity with the tech and frameworks listed below. 

### Code Style

Standard JavaScript with ES6

### Tech/Framework used

* JavaScript / ES6
* Node.js
* Jest
* Eslint

### How to use?

* Step 1. Fork and Clone the Repository.
* Step 2. ```npm install```.
* Step 3. to test the API run the command ```npm run test```.

### Credits

* Code Fellows / Vinicio Vladimir Sanchez Trejo for providing the demo code as reference.

### License

MIT © Catherine Looper