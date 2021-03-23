const every = require('../every.js');

describe('every function', () => {
	it('returns true if all items in a given array return true per a callback function', () => {
		const original = [1, 2, 3, 4, 5];
		const callback = n => n < 10;

		expect(every(original, callback)).toBeTruthy();
	});

	it('returns false if not every item in the array returns true per callback', () => {
		const original = ['Alabama', 'Arkansas', 'Alaska', 'Nebraska', 'Another word'];
		const callback = n => n.startsWith('A');

		expect(every(original, callback)).toBeFalsy();
	});
})