const forEach = require('../for-each.js');

describe('for each function', () => {
	it('calls the callback function for each item in the array', () => {
		original = [1, 2, 3, 4, 5];
		callback = jest.fn();

		forEach(original, callback);

		expect(callback).toHaveBeenCalledTimes(5);
		
		expect(callback).toHaveBeenNthCalledWith(1, 1, 0);
		expect(callback).toHaveBeenNthCalledWith(2, 2, 1);
		expect(callback).toHaveBeenNthCalledWith(3, 3, 2);
		expect(callback).toHaveBeenNthCalledWith(4, 4, 3);
		expect(callback).toHaveBeenNthCalledWith(5, 5, 4);
	});

	it('skips holes in the array', () => {
		const original = [1,, 2,, 3,, 4,, 5];
		const alternate = [1, undefined, 2,, 3,, 4,, 5];

		const callback = jest.fn();
		const altCallback = jest.fn();

		forEach(original, callback);
		forEach(alternate, altCallback);

		expect(callback).toHaveBeenCalledTimes(5);
		expect(callback).toHaveBeenLastCalledWith(5, 8);

		expect(altCallback).toHaveBeenCalledTimes(6);
		expect(altCallback).toHaveBeenNthCalledWith(2, undefined, 1);

	});
});