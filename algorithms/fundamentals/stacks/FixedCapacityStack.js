class FixedCapacityStack {
	#maxCapacity
	#items
	#itemsCount

	constructor(maxCapacity) {
		this.#maxCapacity = maxCapacity

		this.#itemsCount = 0

		this.#items = new Array(this.#maxCapacity)
	}

	push(item) {
		const isFull = this.isFull()

		if (isFull) {
			throw new Error(
				`Already reached the stack maximum capacity of ${this.#maxCapacity} items.`
			)
		}

		this.#items.push(item)

		this.#itemsCount++
	}

	pop() {
		const isEmpty = this.isEmpty()

		if (isEmpty) {
			throw new Error("This stack is empty!")
		}

		const leastRecentItem = this.#items.pop()

		this.#itemsCount--

		return leastRecentItem
	}

	size() {
		const size = this.#itemsCount

		return size
	}

	isEmpty() {
		const isEmpty = this.#itemsCount === 0

		return isEmpty
	}

	isFull() {
		const isFull = this.size() >= this.#maxCapacity

		return isFull
	}

	*[Symbol.iterator]() {
		for(let i = 0; i < this.size(); i++) {
			const item = this.pop()

			yield item
		}
	}
}

module.exports = FixedCapacityStack
