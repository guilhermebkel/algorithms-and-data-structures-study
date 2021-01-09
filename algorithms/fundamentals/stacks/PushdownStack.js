class PushdownStack {
	#itemsCount = 0
	#items = []

	push(item) {
		this.#items.add(item)

		this.#itemsCount++
	}

	pop() {
		const lastItem = this.#items.pop()

		this.#itemsCount--

		return lastItem
	}

	size() {
		const size = this.#itemsCount

		return size
	}

	*[Symbol.iterator]() {
		for(let i = 0; i < this.size(); i++) {
			const item = this.pop()

			yield item
		}
	}
}
