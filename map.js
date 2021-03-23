const map = (array, callback) => {
	let mappedArray = [];
	for (let i = 0; i < array.length; i++) {
		mappedArray = [...mappedArray, callback(array[i], i)];
	};
	return mappedArray;
};

module.exports = map;