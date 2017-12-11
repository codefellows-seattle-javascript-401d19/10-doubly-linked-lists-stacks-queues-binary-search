'use strict';

const binarySearchObjects = require('../model/binary-search-objects');

describe('binary-search-objects.js', () => {
  let sampleArray;
  beforeEach(() => {
    sampleArray = [
      { id: 10, name: 'Demi' },
      { id: 20, name: 'Sir Gregor' },
      { id: 30, name: 'The Hound' },
      { id: 40, name: 'Gary' },
      { id: 50, name: 'Charlotte' },
      { id: 60, name: 'Stella' },
      { id: 70, name: 'Oliver' },
      { id: 80, name: 'Theodore' },
      { id: 90, name: 'Gizmo' },
      { id: 100, name: 'Chewie' },
      { id: 110, name: 'Kibo' },
    ];
  });

  test('binarySearchObjects should return the object with the given id.', () => {
    expect(binarySearchObjects(sampleArray, 60)).toEqual({ id: 60, name: 'Stella' });
  });

  test('binarySearchObjects should throw an error if the object with the given id is not found.', () => {
    expect(() => {
      binarySearchObjects(sampleArray, 650);
    }).toThrow();
  });
});