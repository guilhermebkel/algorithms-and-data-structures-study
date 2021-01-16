const Sort = require("./Sort")

class SelectionSort extends Sort {
	sort(array = []) {
		const arraySize = array.length

		for (let i=0; i<arraySize; i++) {
			let minimumValueIndex = i

			for (let j=i+1; j<arraySize; j++) {
				const isFirstValueLowerThanSecondValue = this.isFirstValueLowerThanSecondValue(array[j], array[minimumValueIndex])

				if (isFirstValueLowerThanSecondValue) {
					minimumValueIndex = j
				}
			}

			this.exchangeValues(array, i, minimumValueIndex)
		}
	}
}

module.exports = SelectionSort
