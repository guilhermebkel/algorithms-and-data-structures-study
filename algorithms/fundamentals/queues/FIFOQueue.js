class FIFOQueue {
	#itemsCount = 0
	#items = []

	enqueue(item) {
		this.#items.add(item)

		this.#itemsCount++
	}

	dequeue() {
		const firstItem = this.#items.shift()

		this.#itemsCount--

		return firstItem
	}

	size() {
		const size = this.#itemsCount

		return size
	}

	*[Symbol.iterator]() {
		for(let i = 0; i < this.size(); i++) {
			const item = this.dequeue()

			yield item
		}
	}
}
