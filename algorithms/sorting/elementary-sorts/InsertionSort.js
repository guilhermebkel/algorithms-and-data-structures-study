const Sort = require("../Sort")

class InsertionSort extends Sort {
	sort(array = []) {
		const arraySize = array.length

		for (let leftScanIndex = 0; leftScanIndex < arraySize; leftScanIndex++) {
			for (let rightScanIndex = leftScanIndex + 1; rightScanIndex > 0 && this.isFirstValueLowerThanSecondValue(array[rightScanIndex], array[rightScanIndex -1]); rightScanIndex--) {
				this.exchangeValues(array, rightScanIndex, rightScanIndex-1)
			}
		}
	}
}

module.exports = InsertionSort
