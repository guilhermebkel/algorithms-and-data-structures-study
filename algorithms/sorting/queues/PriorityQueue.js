const Sort = require("../Sort")

class PriorityQueue extends Sort {
	#itemsCount
	#items
	
	constructor() {
		super()

		this.#itemsCount = 0

		this.#items = []
	}

	delMax() {
		const maxPriorityItem = this.max()

		this.#items.splice(0, 1)

		this.#itemsCount--

		return maxPriorityItem
	}

	max() {
		const isEmpty = this.isEmpty()

		if (isEmpty) {
			throw new Error("This PriorityQueue is empty!")
		}

		const maxPriorityItem = this.#items[0]

		return maxPriorityItem
	}

	insert(item) {
		let insertionIndex = 0

		/**
		 * Insert items in a descending ordered format 
		 */
		for (let i = this.size() - 1; i !== -1; i--) {
			const currentItem = this.#items[i]

			const isFirstValueLowerThanSecondValue = this.isFirstValueLowerThanSecondValue(currentItem, item)

			if (isFirstValueLowerThanSecondValue) {
				insertionIndex = i
			} else {
				break
			}
		}

		this.#items.splice(insertionIndex, 0, item)

		this.#itemsCount++
	}

	isEmpty() {
		const isEmpty = this.#itemsCount === 0

		return isEmpty
	}

	size() {
		const size = this.#itemsCount

		return size
	}

	*[Symbol.iterator]() {
		for(let item = this.delMax(); !this.isEmpty(); item = this.delMax()) {
			yield item
		}
	}
}

module.exports = PriorityQueue
