'use strict';


const binarySearch = require('../model/binary-search');

describe('binary-search.js', () => {
let sampleArray;
   beforeEach(() => {
     sampleArray = [
			 { id: 1, name: 'Demi' },
			 { id: 2, name: 'Sir Gregor' },
			 { id: 3, name: 'The Hound' },
			 { id: 4, name: 'Marvin' },
			 { id: 5, name: 'Spot' },
			 { id: 6, name: 'Bugsy' },
			 { id: 7, name: 'Horatio' },
			 { id: 8, name: 'Venkman' },
			 { id: 9, name: 'Zuul' },
			 { id: 10, name: 'Khan' },
			 { id: 11, name: 'The Escape Artist' },
			 { id: 12, name: 'Mr. Fox' },
			 { id: 13, name: 'Lefty' },
			 { id: 14, name: 'Dinnertime' },
			 { id: 15, name: 'Virgil' },
     ];
	 });
	 
	test('A binary search for a valid index should provide a result for a single index', () => {
		expect(binarySearch(sampleArray, 14)).toEqual({ id: 14, name: 'Dinnertime' });
		expect(binarySearch(sampleArray, 2)).toEqual({ id: 2, name: 'Sir Gregor' });
		expect(binarySearch(sampleArray, 9)).toEqual({ id: 9, name: 'Zuul' });
	});

	// test('A binary search for an invalid index number will throw an error', () => {
	// 	expect(() => {
	// 	binarySearch(sampleArray, 20)
	// 	}).toThrow();
	// });
});
