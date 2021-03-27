const reduce = require('../reduce.js');

describe('reduce function', () => {
	it('returns the final value of an accumulator based on the contents of an array and a callback function', () => {
		const original = [1, 2, 3, 4, 5, 6];
		const callback = (a, b) => a + b;
		const initialValue = 40;

		expect(reduce(original, callback, initialValue)).toEqual(61);
	});

	it('uses the first item of the array as the initial value of the accumulator if no initial value is supplied', () => {
		const original = [1, 2, 3, 4, 5, 6];
		const callback = (a, b) => a + b;

		expect(reduce(original, callback)).toEqual(21);
	});

	it('can make use of an item index as part of the callback', () => {
		const original = [1, 2, 3];
		const callback = jest.fn();
		reduce(original, callback);

		expect(callback).toHaveBeenNthCalledWith(1, original[0], original[1], 1);
	});

	it('skips holes in the array', () => {
		const original = [1,, 2,, 3,, 4,, 5,, 6];
		const alternate = [1, undefined, 2,, 3,, 4,, 5,, 6];
		const callback = (a, b) => a + b;
		const initialValue = 40;

		expect(reduce(original, callback, initialValue)).toEqual(61);
		expect(reduce(alternate, callback, initialValue)).toEqual(NaN);
	});
});