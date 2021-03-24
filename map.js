const map = (array, callback) => {
	let mappedArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i]) mappedArray = [...mappedArray, callback(array[i], i)];

		else mappedArray = [...mappedArray, array[i]];
	};
	return mappedArray;
};

module.exports = map;