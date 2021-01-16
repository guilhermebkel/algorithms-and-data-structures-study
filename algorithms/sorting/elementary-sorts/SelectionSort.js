const Sort = require("../Sort")

class SelectionSort extends Sort {
	sort(array = []) {
		const arraySize = array.length

		for (let leftScanIndex = 0; leftScanIndex < arraySize; leftScanIndex++) {
			let minimumValueIndex = leftScanIndex

			for (let rightScanIndex = leftScanIndex + 1; rightScanIndex < arraySize; rightScanIndex++) {
				const isFirstValueLowerThanSecondValue = this.isFirstValueLowerThanSecondValue(array[rightScanIndex], array[minimumValueIndex])

				if (isFirstValueLowerThanSecondValue) {
					minimumValueIndex = rightScanIndex
				}
			}

			this.exchangeValues(array, leftScanIndex, minimumValueIndex)
		}
	}
}

module.exports = SelectionSort
