'use strict';

let binarySearch = require('../lib/binary-search.js');

describe('binary-search.js', () =>{
  let sortedArray = [2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,22,24,26,28,30,33,36,39,40,44,48,50,55,60,66,70,77,80,88,90,99,100,110,120,130];
  test('binary search should return the node we are looking for', () => {
    expect(binarySearch(sortedArray, 88).value).toEqual(88);
    expect(binarySearch(sortedArray, 88).steps).toEqual(5);
  });
});
