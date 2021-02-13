class Char {
	charAt(string, d) {
		if (d < string.length) {
			return string.charAt(d)
		} else {
			return -1
		}
	}
}

module.exports = Char
