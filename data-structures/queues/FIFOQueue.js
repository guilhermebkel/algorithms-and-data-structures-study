class FIFOQueue {
	#itemsCount
	#items

	constructor() {
		this.#items = []
		this.#itemsCount = 0
	}

	enqueue(item) {
		this.#items.push(item)

		this.#itemsCount++
	}

	dequeue() {
		const isEmpty = this.isEmpty()

		if (isEmpty) {
			throw new Error("This queue is empty!")
		}

		const mostRecentItem = this.#items.shift()

		this.#itemsCount--

		return mostRecentItem
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
			const item = this.dequeue()

			yield item
		}
	}
}

module.exports = FIFOQueue
