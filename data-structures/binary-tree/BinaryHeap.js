const Sort = require("../../algorithms/sorting/Sort")

class BinaryHeap extends Sort {
	#itemsCount
	#items

	constructor() {
		super()
	
		this.#items = []
		this.#itemsCount = 0
	}

	insert(item) {
		this.#itemsCount++

		this.#items[this.#itemsCount] = item

		this.swimBinaryTreeNodes(this.#items, this.#itemsCount)
	}

	delMax() {
		const isEmpty = this.isEmpty()

		if (isEmpty) {
			throw new Error("This BinaryHeap is empty!")
		}

		const maxItem = this.#items[1]

		this.exchangeValues(this.#items, 1, this.#itemsCount)
		
		delete this.#items[this.#itemsCount]

		this.#itemsCount--

		this.swimBinaryTreeNodes(this.#items, this.#itemsCount)

		return maxItem
	}

	size() {
		const size = this.#itemsCount

		return size
	}

	isEmpty() {
		const isEmpty = this.#itemsCount === 0

		return isEmpty
	}

	*[Symbol.iterator]() {
		for(let i = 0; i < this.size(); i++) {
			const item = this.pop()

			yield item
		}
	}
}

module.exports = BinaryHeap
