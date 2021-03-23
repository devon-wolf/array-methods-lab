const map = require('../map.js');

describe('map function', () => {
	it('returns a new array containing the results of a callback', () => {
		const original = [1, 2, 3, 4, 5, 6];
		const callback = n => n * 100;

		expect(map(original, callback)).toEqual([100, 200, 300, 400, 500, 600]);

	});
});