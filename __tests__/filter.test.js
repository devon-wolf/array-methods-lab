const filter = require('../filter.js');

describe('filter function', () => {
	it('returns an array with only elements that return true when checked with a callback', () => {
		const original = ['hello', '78', 4, 91, true];
		const callback = n => typeof n === 'number';

		expect(filter(original, callback)).toEqual([4, 91]);
	});

	it('can make use of an item index as part of the callback', () => {
		const original = [1, 2, 3];
		const callback = jest.fn();
		filter(original, callback);

		expect(callback).toHaveBeenNthCalledWith(1, original[0], 0);
	});
});