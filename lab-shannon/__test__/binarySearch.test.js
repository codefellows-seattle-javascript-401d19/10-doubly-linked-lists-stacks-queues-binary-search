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
  test(`Binary search should return the object with the id matching the id input`, () => {
    expect(binarySearch(sortedObjects, 23)).toEqual({id: 23, name: 'flower'});
  });

  test(`Binary search should return an empty object if nothing is found with the id provided`, () => {
    expect(binarySearch(sortedObjects, 27)).toEqual({});
  });

  test(`An error should be returned if binary search is used on an array of non-objects`, () => {
    expect(() => {binarySearch(sortedObjects, 'fish')}).toThrow();
  });

  test(`An error should be returned if binary search is used on an empty array`, () => {
    expect(() => {binarySearch([], 25)}).toThrow('The array provided is empty');
  });
});
