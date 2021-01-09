class PushdownStack {
	#itemsCount
	#items

	constructor() {
		this.#items = []
		this.#itemsCount = 0
	}

	push(item) {
		this.#items.add(item)

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

	*[Symbol.iterator]() {
		for(let i = 0; i < this.size(); i++) {
			const item = this.pop()

			yield item
		}
	}

	set items(items) {
		this.#items = items
	}
}

export default PushdownStack
