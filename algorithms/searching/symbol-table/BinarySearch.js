const Search = require("../Search")

class BinarySearch extends Search {
	#keys
	#values
	#size

	constructor() {
		super()

		this.#keys = []
		this.#values = []
		this.#size = 0
	}

	size() {
		const size = this.#size

		return size
	}

	isEmpty() {
		const isEmpty = this.#size === 0

		return isEmpty
	}

	get (key) {
		const isEmpty = this.isEmpty()

		if (isEmpty) {
			return null
		}

		const rankedKey = this.rank(key)

		const areKeysEqual = this.compareValues(this.#keys[rankedKey], key) === 0

		if (rankedKey < this.#size && areKeysEqual) {
			return this.#values[rankedKey]
		} else {
			return null
		}
	}

	put (key, value) {
		const rankedKey = this.rank(key)

		const areKeysEqual = this.compareValues(this.#keys[rankedKey], key) === 0

		if (rankedKey < this.#size && areKeysEqual) {
			this.#values[rankedKey] = value

			return
		}

		for (let size = this.#size; size > rankedKey; size--) {
			this.#keys[size] = this.#keys[size - 1]
			this.#values[size] = this.#values[size - 1]
		}

		this.#keys[rankedKey] = key
		this.#values[rankedKey] = value

		this.#size++
	}

	rank (key) {
		let lowerIndex = 0
		let higherIndex = this.#size - 1

		while (lowerIndex <= higherIndex) {
			const middleIndex = lowerIndex + Math.floor((higherIndex - lowerIndex) / 2)
			const comparison = this.compareValues(key, this.#keys[middleIndex])

			if (comparison < 0) {
				higherIndex = middleIndex - 1
			} else if (comparison > 0) {
				lowerIndex = middleIndex + 1
			} else {
				return middleIndex
			}
		}

		return lowerIndex
	}
}

module.exports = BinarySearch
