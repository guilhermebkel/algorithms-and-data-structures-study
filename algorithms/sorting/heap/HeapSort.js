const Sort = require("../Sort")

class HeapSort extends Sort {
	sort(array = []) {
		let arraySize = array.length

		for (let nodeIndex = Math.floor(arraySize / 2); nodeIndex >= 1; nodeIndex--) {
			this.sinkBinaryTreeNodes(array, nodeIndex, arraySize)
		}

		while (arraySize > 1) {
			this.exchangeValues(array, 1, arraySize--)
			this.sinkBinaryTreeNodes(array, 1, arraySize)
		}
	}
}

module.exports = HeapSort
