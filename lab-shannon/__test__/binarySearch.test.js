'use strict';

let binarySearch = require(`../lib/binarySearch`);

let sortedObjects = [
  {id: 19,
  name: 'potato'},
  {id: 23,
    name: 'flower'},
  {id: 39,
  name: 'cookie'}
]

describe(`binarySearch.js`, () => {
  test(`An error should be returned if binary search is used on an array of non-objects`, () => {
    // expect(() => {binarySearch([1,2,3,4,5], 5)}).toThrow();
  });

  // test(`An error should be returned if binary search is used on an empty array`, () => {
  //
  // });

  test(`Binary search should return the object with the id matching the id provided`, () => {
    expect(binarySearch(sortedObjects, 23)).toEqual({id: 23, name: 'flower'});
  });

  // test(`Binary search should return an empty object if nothing is found with the id provided`, () => {
  //
  // });
});
