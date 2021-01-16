const Sort = require("../Sort")

class QuickSort extends Sort {
	sort(array = []) {
		const arraySize = array.length

		this.shuffle(array)

		this.#sortBySubArrays(array, 0, arraySize - 1)
	}

	#sortBySubArrays(array = [], lowerIndex, higherIndex) {
		if (higherIndex <= lowerIndex) {
			return
		}

		const scanIndex = this.partitionSortArrayAndRetrieveScanIndex(array, lowerIndex, higherIndex)

		this.#sortBySubArrays(array, lowerIndex, scanIndex - 1)
		this.#sortBySubArrays(array, scanIndex + 1, higherIndex)
	}
}

module.exports = QuickSort
