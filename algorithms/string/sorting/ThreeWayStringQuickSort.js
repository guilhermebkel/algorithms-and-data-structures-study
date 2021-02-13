const Sort = require("../../sorting/Sort")
const Char = require("../Char")

class ThreeWayStringQuickSort extends Char {
	#sortHelper = new Sort()

	sort(array = []) {
		const arraySize = array.length

		this.#sortBySubArrays(array, 0, arraySize - 1, 0)
	}

	#sortBySubArrays(array, lowerIndex, higherIndex, d) {
		if (higherIndex <= lowerIndex) {
			return
		}

		let lt = lowerIndex
		let gt = higherIndex
		let index = lowerIndex + 1

		const value = this.charAt(array[lowerIndex], d)

		while (index <= gt) {
			const comparableValue = this.charAt(array[index], d)

			if (comparableValue < value) {
				this.#sortHelper.exchangeValues(array, lt++, index++)
			} else if (comparableValue > value) {
				this.#sortHelper.exchangeValues(array, index, gt--)
			} else {
				index++
			}
		}

		this.#sortBySubArrays(array, lowerIndex, lt - 1, d)

		if (value >= 0) {
			this.#sortBySubArrays(array, lt, gt, d + 1)
		}

		this.#sortBySubArrays(array, gt + 1, higherIndex, d)
	}
}

module.exports = ThreeWayStringQuickSort
