const forEach = (array, callback) => {
	for (let i = 0; i < array.length; i++) {
		if (array.hasOwnProperty(i)) {
			callback(array[i], i);
		}
	}
};

module.exports = forEach;