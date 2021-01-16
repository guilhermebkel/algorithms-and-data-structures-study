class Bag {
	#itemsCount = 0
	#items = []

	add(item) {
		this.#items.push(item)

		this.#itemsCount++
	}

	size() {
		const size = this.#itemsCount

		return size
	}

	*[Symbol.iterator]() {
		for (const item of this.#items) {
			yield item
		}
	}
}

module.exports = Bag
