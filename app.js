const maybe = (A, B) => {
	if (A && B) {
		return B
	}

	if (A && !B) {
		return A
	}

	return ''
}

module.exports = maybe
