class Sort {
	#auxiliaryArray = []

	shuffle(array = []) {
		for (let i = array.length - 1; i > 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i + 1))

			const tempOriginalIndexValue = array[i]

			array[i] = array[randomIndex]

			array[randomIndex] = tempOriginalIndexValue
		}
	}

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
		let leftScanIndex = lowerIndex
		let rightScanIndex = middleIndex + 1

		for(let k = lowerIndex; k <= higherIndex; k++) {
			this.#auxiliaryArray[k] = array[k]

			const isFirstValueLowerThanSecondValue = this.isFirstValueLowerThanSecondValue(
				this.#auxiliaryArray[rightScanIndex],
				this.#auxiliaryArray[leftScanIndex]
			)

			if (leftScanIndex > middleIndex) {
				array[k] = this.#auxiliaryArray[rightScanIndex++]
			} else if (rightScanIndex > higherIndex) {
				array[k] = this.#auxiliaryArray[leftScanIndex++]
			} else if (isFirstValueLowerThanSecondValue) {
				array[k] = this.#auxiliaryArray[rightScanIndex++]
			} else {
				array[k] = this.#auxiliaryArray[leftScanIndex++]
			}
		}
	}

	partitionSortArrayAndRetrieveScanIndex(array = [], lowerIndex, higherIndex) {
		let leftScanIndex = lowerIndex
		let rightScanIndex = higherIndex + 1

		const partitioningItem = array[lowerIndex]
		
		while(true) {
			while(this.isFirstValueLowerThanSecondValue(array[++leftScanIndex], partitioningItem)) {
				if (leftScanIndex === higherIndex) {
					break
				}
			}

			while(this.isFirstValueLowerThanSecondValue(partitioningItem, array[--rightScanIndex])) {
				if (rightScanIndex === lowerIndex) {
					break
				}
			}

			if (leftScanIndex >= rightScanIndex) {
				break
			}

			this.exchangeValues(array, leftScanIndex, rightScanIndex)
		}

		this.exchangeValues(array, lowerIndex, rightScanIndex)

		return rightScanIndex
	}
}

module.exports = Sort
