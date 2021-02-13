const Char = require("../Char")
const InsertionSort = require("../../sorting/elementary-sorts/InsertionSort")

class MSDStringSort extends Char {
	#radix
	#M
	#auxiliaryArray

	constructor () {
		this.#radix = 256
		this.#M = 15
		this.#auxiliaryArray = []
	}

	#sortBySubArrays (array, lowerIndex, higherIndex, d) {
		if (higherIndex <= lowerIndex + this.#M) {
			const insertionSort = new InsertionSort()
		}
	}
}

module.exports = MSDStringSort
