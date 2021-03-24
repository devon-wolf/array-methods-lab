const map = require('../map.js');

describe('map function', () => {
	it('returns a new array containing the results of a callback', () => {
		const original = [1, 2, 3, 4, 5, 6];
		const callback = n => n * 100;

		expect(map(original, callback)).toEqual([100, 200, 300, 400, 500, 600]);
	});

	it('can make use of an item index as part of the callback', () => {
		const original = [1, 2, 3];
		const callback = jest.fn();
		map(original, callback);

		expect(callback).toHaveBeenNthCalledWith(1, original[0], 0);
	});

	it('skips holes in the array and returns holes in the same place', () => {
		const original = [1,, 3, 4, 5, 6];
		const alternate = [1, undefined, 3, 4, 5, 6];
		const callback = n => n * 100;

		expect(map(original, callback)).toEqual([100,, 300, 400, 500, 600]);
		expect(map(alternate, callback)).toEqual([100, NaN, 300, 400, 500, 600]);
	});
});