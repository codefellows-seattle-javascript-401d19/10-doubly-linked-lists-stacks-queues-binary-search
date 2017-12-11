'use strict';

const binarySearch = require('../model/binary-search');

describe('binary-search.js', () => {
  test('should return found element with given id if id is greater than the middle index id', () => {
    const testArray = [
      { id: 10, name: 'testUser1' },
      { id: 20, name: 'testUser2' },
      { id: 30, name: 'testUser3' },
      { id: 40, name: 'testUser4' },
      { id: 50, name: 'testUser5' },
    ];

    const result = binarySearch(testArray, 40);

    expect(result).toEqual(testArray[3]);
  });

  test('should return found element with given id if id is less than the middle index id', () => {
    const testArray = [
      { id: 10, name: 'testUser1' },
      { id: 20, name: 'testUser2' },
      { id: 30, name: 'testUser3' },
      { id: 40, name: 'testUser4' },
      { id: 50, name: 'testUser5' },
    ];

    const result = binarySearch(testArray, 10);

    expect(result).toEqual(testArray[0]);
  });

  test('should return -1 if element with given id is not within the test array', () => {
    const testArray = [
      { id: 10, name: 'testUser1' },
      { id: 20, name: 'testUser2' },
      { id: 30, name: 'testUser3' },
      { id: 40, name: 'testUser4' },
      { id: 50, name: 'testUser5' },
    ];

    const result = binarySearch(testArray, 60);

    expect(result).toEqual(-1);
  });

  test('should return -1 if array is not sorted', () => {
    const testArray = [
      { id: 10, name: 'testUser1' },
      { id: 50, name: 'testUser5' },
      { id: 30, name: 'testUser3' },
      { id: 20, name: 'testUser2' },
      { id: 40, name: 'testUser4' },
    ];

    const result = binarySearch(testArray, 50);

    expect(result).toEqual(-1);
  });
});
