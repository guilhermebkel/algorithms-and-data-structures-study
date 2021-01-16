const Sort = require("../Sort")

class BottomUpMergesort extends Sort {
	sort(array = []) {
		const arraySize = array.length

		for(let subArraySize = 1; subArraySize < arraySize; subArraySize += subArraySize) {
			for (let lowerIndex = 0; lowerIndex < arraySize - subArraySize; lowerIndex += subArraySize * 2) {
				const middleIndex = lowerIndex + subArraySize - 1
				const higherIndex = Math.min(lowerIndex + (subArraySize * 2) - 1, arraySize - 1)

				this.mergeSortArrayRecursively(array, lowerIndex, middleIndex, higherIndex)
			}
		}
	}
}

module.exports = BottomUpMergesort
