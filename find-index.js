const findIndex = (array, callback) => {
	for (let i = 0; i < array.length; i++) {
		if (array.hasOwnProperty(i)) {
			if (callback(array[i], i)) return i;
		}
	}
	return -1;
}

module.exports = findIndex;