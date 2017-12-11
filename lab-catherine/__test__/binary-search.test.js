'use strict';

const binarySearch = require('../model/binary-search');

describe('binary-search.js', () => {
  const sampleArray = [
    {id: 0, name: 'Mooshy'},
    {id: 1, name: 'Chibi'},
    {id: 2, name: 'Lola'},
  ];

  test('binary search should return the specific object based on the id input', () => {
    expect(binarySearch(sampleArray, 1)).toEqual({id: 1, name: 'Mooshy'});
  });
});