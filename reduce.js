const reduce = (array, callback, initialValue) => {
	let accumulator = initialValue || array[0];
	
	if(!initialValue) {
		for (let i = 1; i < array.length; i++) {
			accumulator = callback(accumulator, array[i]);
		}
	}
	else {
		for (let i of array) {
			accumulator = callback(accumulator, i);
		}
	}
	
	return accumulator;
};

module.exports = reduce;