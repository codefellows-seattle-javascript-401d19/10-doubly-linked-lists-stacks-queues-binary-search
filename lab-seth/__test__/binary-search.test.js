'use strict';

const binarySearch = require('../lib/binary-search');

let sampleObjectArray = [
  { id: 10, name: 'Demi' },
  { id: 20, name: 'Sir Gregor' },
  { id: 30, name: 'The Hound' },
  { id: 40, name: 'Chief' },
  { id: 50, name: 'The Mooch' },
  { id: 60, name: 'Champion Pants' },
  { id: 70, name: 'Schfifty Five' },
  { id: 80, name: 'Albi' },
];

describe('binary-search.js', () => {
  //-----------------------------REGULAR CASES-----------------------------
  test('test for proper SEARCH of binary on array of objects', () => {
    expect(binarySearch(sampleObjectArray, 30)).toEqual({ id: 30, name: 'The Hound' });    
  });
  
  test('test for FIRST item SEARCH of binary on array of objects', () => {      
    expect(binarySearch(sampleObjectArray, 10)).toEqual({ id: 10, name: 'Demi' });
  });
  //-----------------------------EDGE CASES-----------------------------
  test('test for item that does not exist in SEARCH of binary on array of objects', () => {      
    expect(binarySearch(sampleObjectArray, 55)).toEqual(-1);
  });
});