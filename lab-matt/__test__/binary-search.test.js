'use strict';

const bs = require('../model/binary-search');

let sampleArray = [
  {id: 10, name: 'Demi'},
  {id: 20, name: 'Sir Gregor'},
  {id: 30, name: 'The Hound'},
  {id: 40, name: 'Maximus'},
  {id: 50, name: 'Lola'},
  {id: 60, name: 'Captain'},
  {id: 70, name: 'Baloo'},
  {id: 80, name: 'Edgar'},
  {id: 90, name: 'Simba'},
  {id: 100, name: 'Pumba'},
  {id: 110, name: 'Timon'},
  {id: 120, name: 'Eeyore'},
];

describe('binary-search.js', () => {
  test('binary search returns proper result in a less than logN - big(O)', () => {
    expect(bs(sampleArray, 10)).toEqual(10);
    expect(bs(sampleArray, 20)).toEqual(20);
    expect(bs(sampleArray, 30)).toEqual(30);
    expect(bs(sampleArray, 40)).toEqual(40);
    expect(bs(sampleArray, 50)).toEqual(50);
    expect(bs(sampleArray, 60)).toEqual(60);
    expect(bs(sampleArray, 70)).toEqual(70);
    expect(bs(sampleArray, 80)).toEqual(80);
    expect(bs(sampleArray, 90)).toEqual(90);
    expect(bs(sampleArray, 100)).toEqual(100);
    expect(bs(sampleArray, 110)).toEqual(110);
    expect(bs(sampleArray, 120)).toEqual(120);
    expect(() => bs(sampleArray, 1000)).toThrow('No Matching ID Found');
  });
});