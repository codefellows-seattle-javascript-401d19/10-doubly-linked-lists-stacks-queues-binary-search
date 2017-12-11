'use strict';

const binarySearch = require('../model/binary-search');

describe('binary-search.js', () => {
  test('binary search should find an object given a valid id', () => {
    let sampleArray = [
      {id: 10, name: 'bob'},
      {id: 20, name: 'gary'},
      {id: 30, name: 'bill'},
    ];
    let result = binarySearch(sampleArray, 10);
    console.log(result);
    expect(result).toEqual({id: 10, name: 'bob'});
  });

  test('binary search should find an object given a valid id', () => {
    let sampleArray = [
      {id: 10, name: 'bob'},
      {id: 20, name: 'gary'},
      {id: 30, name: 'bill'},
    ];
    let result = binarySearch(sampleArray, 20);
    console.log(result);
    expect(result).toEqual({id: 20, name: 'gary'});
  });

  test('binary search should find an object given a valid id', () => {
    let sampleArray = [
      {id: 10, name: 'bob'},
      {id: 20, name: 'gary'},
      {id: 30, name: 'bill'},
    ];
    let result = binarySearch(sampleArray, 30);
    console.log(result);
    expect(result).toEqual({id: 30, name: 'bill'});
  });

  test('binary search should find an object given a valid id', () => {
    let sampleArray = [
      {id: 10, name: 'bob'},
      {id: 20, name: 'gary'},
      {id: 30, name: 'bill'},
    ];
    let result = binarySearch(sampleArray, 40);
    console.log(result);
    expect(result).toEqual(null);
  });
});
