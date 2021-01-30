const Sort = require("../Sort")

class HeapSort extends Sort {
	sort(array = []) {
		let arraySize = array.length

		let middleIndex = Math.floor(arraySize / 2 - 1)
		let largestIndex = arraySize - 1

		while (middleIndex >= 0) {
			this.sinkBinaryTreeNodes(array, middleIndex, arraySize)
			middleIndex--
		}

		while (largestIndex >= 0) {
			this.exchangeValues(array, 0, largestIndex)
			this.sinkBinaryTreeNodes(array, 0, largestIndex)
			largestIndex--
		}
	}
}

module.exports = HeapSort
