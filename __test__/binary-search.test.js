'use strict';

const bs = require('../model/binary-search');

let sampleArray = [
  {id: 10, name: 'ten'},
  {id: 20, name: 'twenty'},
  {id: 30, name: 'thirty'}
];

describe('binary-search.js', () => {
  test('binary search', () => {
    expect(bs(sampleArray, 10)).toEqual(10);
    expect(bs(sampleArray, 20)).toEqual(20);
    expect(bs(sampleArray, 30)).toEqual(30);
    expect(() => bs(sampleArray, 1000)).toThrow('No Matching ID Found');
  });
});