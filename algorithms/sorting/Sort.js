class Sort {
	#auxiliaryArray = []

	isFirstValueLowerThanSecondValue(firstValue, secondValue) {
		const comparison = firstValue - secondValue

		const isFirstValueLowerThanSecondValue = comparison < 0

		return isFirstValueLowerThanSecondValue
	}

	exchangeValues(array = [], firstIndex, secondIndex) {
		const temporaryFirstValue = array[firstIndex]

		array[firstIndex] = array[secondIndex]

		array[secondIndex] = temporaryFirstValue
	}

	mergeSortArrayRecursively(array = [], lowerIndex, middleIndex, higherIndex) {
		let i = lowerIndex
		let j = middleIndex + 1

		for(let k = lowerIndex; k <= higherIndex; k++) {
			this.#auxiliaryArray[k] = array[k]

			const isFirstValueLowerThanSecondValue = this.isFirstValueLowerThanSecondValue(this.#auxiliaryArray[j], this.#auxiliaryArray[i])

			if (i > middleIndex) {
				array[k] = this.#auxiliaryArray[j++]
			} else if (j > higherIndex) {
				array[k] = this.#auxiliaryArray[i++]
			} else if (isFirstValueLowerThanSecondValue) {
				array[k] = this.#auxiliaryArray[j++]
			} else {
				array[k] = this.#auxiliaryArray[i++]
			}
		}
	}
}

module.exports = Sort
