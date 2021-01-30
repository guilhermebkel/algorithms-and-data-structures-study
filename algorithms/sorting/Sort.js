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

	sinkBinaryTreeNodes(array = [], nodePosition, nodesCount) {
		let largestIndex = nodePosition
		let leftIndex = nodePosition * 2 + 1
		let rightIndex = leftIndex + 1
	
		if (leftIndex < nodesCount && this.isFirstValueLowerThanSecondValue(array[largestIndex], array[leftIndex])) {
			largestIndex = leftIndex
		}

		if (rightIndex < nodesCount && this.isFirstValueLowerThanSecondValue(array[largestIndex], array[rightIndex])) {
			largestIndex = rightIndex
		}

		if (largestIndex !== nodePosition) {
			this.exchangeValues(array, nodePosition, largestIndex)

			this.sinkBinaryTreeNodes(array, nodesCount, largestIndex)
		}
	}

	swimBinaryTreeNodes(array = [], nodesCount) {
		let currentIndex = nodesCount

		const middleIndex = Math.floor(currentIndex / 2)

		while (currentIndex > 1 && this.isFirstValueLowerThanSecondValue(middleIndex, currentIndex)){
			this.exchangeValues(array, middleIndex, currentIndex)
			currentIndex = middleIndex
		}
	}
}

module.exports = Sort
