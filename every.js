const every = (array, callback) => {
	for(let i = 0; i < array.length; i++) {
		if (array[i]){
			if(!callback(array[i], i)) return false;
		}
	}
	return true;
}

module.exports = every;