const every = (array, callback) => {
	for(let i of array) {
		if(!callback(i)) return false;
	}
	return true;
}

module.exports = every;