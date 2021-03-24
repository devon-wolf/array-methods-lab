const filter = (array, callback) => {
	let filteredArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array.hasOwnProperty(i)) {
			if (callback(array[i], i)) filteredArray = [...filteredArray, array[i]];
		}
	};
	return filteredArray;
}

module.exports = filter;