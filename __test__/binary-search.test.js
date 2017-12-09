'use strict';

const binarySearch = require('../lib/binary-search');

describe('binary-search.js', () => {
  let sampleArray = [
    {id: 10, name : 'Demi' },
    {id: 20, name : 'Sir Gregor'},
    {id: 30, name : 'The Hound'},
  ];

  test('binarySearch should return correct item if id passed is valid', () => {
    expect(binarySearch(sampleArray, 30)).toEqual(sampleArray[2]);
  });

  test('binarySearch should return -1 if invalid id is passed', () => {
    expect(binarySearch(sampleArray, 35)).toEqual(-1);
  });

  test('binarySearch should throw an error if id when calling binarySearch function is not a number', () => {
    let invalidId = 'ten';
    expect(() => {
      binarySearch(sampleArray, invalidId);
    }).toThrow();
  });

  


});
