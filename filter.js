const filter = (array, callback) => {
	let filteredArray = [];
	for (let i of array) {
		if (callback(i)) filteredArray = [...filteredArray, i];
	};
	return filteredArray;
}

module.exports = filter;