'use strict';

const binarySearch = require('../lib/binary-search');

describe('binary-search.js', () => {
  const testArray = [
    {id: 11, value: 'hotdog'}, {id: 22, value: 'banana'}, {id:33, value: 'dish soap'},
  ];


  test('binary search returns the position of the object with given id in the passed in array', () => {
    expect(binarySearch(testArray, 22)).toEqual({id:22, value: 'banana'});
  });

  test('binary search returns -1 if the id is not in the array', () => {
    expect(binarySearch(testArray, 20)).toEqual(-1);
  });

  test('binary search returns an error if the first argument is not an array.', () => {
    expect(() => binarySearch('foo', 20)).toThrow();
  });

  test('binary search returns an error if the second argument is not a number.', () => {
    expect(() => binarySearch(testArray, 'foo')).toThrow();
  });
});
