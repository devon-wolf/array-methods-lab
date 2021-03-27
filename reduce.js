const reduce = (array, callback, initialValue) => {
	let accumulator = initialValue || array[0];
	
	if(!initialValue) {
		for (let i = 1; i < array.length; i++) {
			if (array.hasOwnProperty(i)) {
				accumulator = callback(accumulator, array[i], i);
			}
		}
	}
	else {
		for (let i = 0; i < array.length; i++) {
			if (array.hasOwnProperty(i)) {
				accumulator = callback(accumulator, array[i], i);
			}
		}
	}
	
	return accumulator;
};

module.exports = reduce;