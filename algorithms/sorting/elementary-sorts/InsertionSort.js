const Sort = require("../Sort")

class InsertionSort extends Sort {
	sort(array = []) {
		const arraySize = array.length

		for (let i=0; i<arraySize; i++) {
			for (let j=i+1; j>0 && this.isFirstValueLowerThanSecondValue(array[j], array[j -1]); j--) {
				this.exchangeValues(array, j, j-1)
			}
		}
	}
}

module.exports = InsertionSort
