class Sort {
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
}

module.exports = Sort
