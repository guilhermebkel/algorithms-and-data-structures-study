const Sort = require("../Sort")

class TopDownMergesort extends Sort {
	sort(array = []) {
		const arraySize = array.length

		this.#sortWithSubArrays(array, 0, arraySize - 1)
	}

	#sortWithSubArrays(array = [], lowerIndex, higherIndex) {
		if (higherIndex <= lowerIndex) {
			return
		}

		const middleIndex = lowerIndex + Math.floor((higherIndex - lowerIndex) / 2)

		this.#sortWithSubArrays(array, lowerIndex, middleIndex)
		this.#sortWithSubArrays(array, middleIndex + 1, higherIndex)

		this.mergeSortArrayRecursively(array, lowerIndex, middleIndex, higherIndex)
	}
}

module.exports = TopDownMergesort
