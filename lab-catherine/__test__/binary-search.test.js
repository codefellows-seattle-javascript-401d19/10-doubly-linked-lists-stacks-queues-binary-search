'use strict';

const binarySearch = require('../model/binary-search');

describe('binary-search.js', () => {
  const sampleArray = [
    {id: 0, name: 'Mooshy'},
    {id: 1, name: 'Chibi'},
    {id: 2, name: 'Lola'},
  ];

  test('binary search should return the specific object based on the id input', () => {
    expect(binarySearch(sampleArray, 1)).toEqual({id: 1, name: 'Chibi'});
  });

  test('If there is no corresponding id, -1 will be returned', () => {
    expect(binarySearch(sampleArray, 4)).toEqual(-1);
  });

  test('The argument passed in must be an array', () => {
    expect(() => 
      binarySearch ('Not an array', 2)
    ).toThrow();
  });
});