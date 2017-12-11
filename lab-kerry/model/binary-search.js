'use strict';

let sampleArray = [
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
]

let binarySearch = (sortedObjectArray, id) => {


	let lowIndex = 0;
	let highIndex = sortedObjectArray.length - 1;
	//--------------------------------------------
	let steps = 0;
	//--------------------------------------------

	while (lowIndex <= highIndex) {
		//--------------------------------------------
		steps++;
		console.log(`Number of steps so far : ${steps}`);
		let middleIndex = Math.floor((lowIndex + highIndex) / 2);
		let elementFound = sortedObjectArray[middleIndex].id;
		let elementName = sortedObjectArray[middleIndex].name;
		//--------------------------------------------

		if (sortedObjectArray[middleIndex] === -1) {
			throw new TypeError('Please enter a valid id');
		}
		if (elementFound < id) {
			lowIndex = middleIndex + 1;
		} else if (elementFound > id) {
			highIndex = middleIndex - 1;
		} else {
			return sortedObjectArray[middleIndex];
		}
	}
	return -1;
};

console.log(binarySearch(sampleArray, 14));

module.exports = binarySearch;