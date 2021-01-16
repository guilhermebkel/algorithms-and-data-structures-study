const Sort = require("../Sort")

class TopDownMergesort extends Sort {
	sort(array = []) {
		const arraySize = array.length

		this.#sortBySubArrays(array, 0, arraySize - 1)
	}

	#sortBySubArrays(array = [], lowerIndex, higherIndex) {
		if (higherIndex <= lowerIndex) {
			return
		}

		const middleIndex = lowerIndex + Math.floor((higherIndex - lowerIndex) / 2)

		this.#sortBySubArrays(array, lowerIndex, middleIndex)
		this.#sortBySubArrays(array, middleIndex + 1, higherIndex)

		this.mergeSortArrayRecursively(array, lowerIndex, middleIndex, higherIndex)
	}
}

module.exports = TopDownMergesort
