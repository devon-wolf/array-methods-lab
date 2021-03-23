const findIndex = require('../find-index');

describe('find index function', () => {
	it('returns the index of the first item that returns true per the callback function', () => {
		const original = ['apple', 'pear', 'nectarine', 'pear'];
		const callback = n => n === 'pear';

		expect(findIndex(original, callback)).toEqual(1);
	});

	it('returns -1 if no item is found', () => {
		const original = [55, 21, 43, 1];
		const callback = n => n % 2 === 0;

		expect(findIndex(original, callback)).toEqual(-1);
	});
});
