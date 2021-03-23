const map = (array, callback) => {
	let mappedArray = [];
	for (let i of array) {
		mappedArray = [...mappedArray, callback(i)];
	};
	return mappedArray;
};

module.exports = map;