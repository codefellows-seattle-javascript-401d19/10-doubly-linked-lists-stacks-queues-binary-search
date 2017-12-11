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
    expect(binarySearchObjects(sampleArray, 20)).toEqual({ id: 20, name: 'Sir Gregor' });
  });

  test('binarySearchObjects should throw an error if an array is not given as the first argument.', () => {
    expect(() => {
      binarySearchObjects('meat', 650);
    }).toThrow();
  });
  
  test('binarySearchObjects should throw an error if an element that is checked is missing it\'s id property.', () => {
    delete sampleArray[5].id;
    expect(() => {
      binarySearchObjects(sampleArray, 90);
    }).toThrow();
  });

  test('binarySearchObjects should throw an error if the object with the given id is not found.', () => {
    expect(() => {
      binarySearchObjects(sampleArray, 650);
    }).toThrow();
  });
});