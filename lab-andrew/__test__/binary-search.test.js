'use strict';

const binarySearch = require('../model/binary-search');

describe('binary-search.js', () => {
  const testArray = [
    {id: 0, name: 'thing 1'},
    {id: 1, name: 'thing 2'},
    {id: 2, name: 'thing 3'},
  ];

  test('binarySearch should find object with the correct id when middle item', () => {
    const returnedObj = binarySearch(testArray, 1);
    expect(returnedObj).toEqual({id: 1, name: 'thing 2'});
  });

  test('binarySearch should find object with the correct id when first item', () => {
    const returnedObj = binarySearch(testArray, 0);
    expect(returnedObj).toEqual({id: 0, name: 'thing 1'});
  });

  test('binarySearch should return -1 if id does not exist', () => {
    const returnedObj = binarySearch(testArray, 3);
    expect(returnedObj).toEqual(-1);
  });

  test('binarySearch should throw an error if array does not consist of objects', () => {
    const fakeArray = [1, 2, 3];
    expect(() => binarySearch(fakeArray, 1)).toThrow();
  });

  test('binarySearch should throw error if objects in array don\'t have an id', () => {
    const fakeArray = [{}, {}, {}];
    expect(() => binarySearch(fakeArray, 1)).toThrow();
  });

  test('binarySearch should throw error if array given has no length or is not an array', () => {
    expect(() => binarySearch([], 1)).toThrow();
    expect(() => binarySearch('nope', 1)).toThrow();
    expect(() => binarySearch({length: 1, id: 10})).toThrow();
  });
});
