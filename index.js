'use strict';
let binarySearch = require('./lib/binary-search');

let sampleArray = [
  {id: 10, name : 'Demi' },
  {id: 20, name : 'Sir Gregor'},
  {id: 30, name : 'The Hound'},
];

console.log(binarySearch(sampleArray, 'ten'));
