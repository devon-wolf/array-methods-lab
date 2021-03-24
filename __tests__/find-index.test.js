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

	it('can make use of an item index as part of the callback', () => {
		const original = [1, 2, 3];
		const callback = jest.fn();
		findIndex(original, callback);

		expect(callback).toHaveBeenNthCalledWith(1, original[0], 0);
	});

	it('skips holes in the array', () => {
		const original = ['apple',, 'pear',, 'nectarine',, 'pear'];
		const alternate = ['apple', undefined, 'pear',, 'nectarine',, 'pear'];
		const callback = n => n === 'pear';

		expect(findIndex(original, callback)).toEqual(2);
		expect(findIndex(alternate, callback)).toEqual(2);
	});
});
