const Search = require("../Search")

class Node {
	#key
	#value
	#next

	constructor(key, value, next) {
		this.#key = key
		this.#value = value
		this.#next = next
	}

	get next() {
		return this.#next
	}

	get value() {
		return this.#value
	}

	get key() {
		return this.#key
	}

	set value(value) {
		this.#value = value
	}
}

class SequentialSearch extends Search {
	#first

	constructor() {
		super()

		this.#first = null
	}

	get (key) {
		let value = null

		for (let node = this.#first; node != null; node = node.next) {
			const nodeKey = node.key

			const areKeysEqual = this.compareValues(key, nodeKey) === 0

			if (areKeysEqual) {
				value = node.value

				break
			}
		}
		
		return value
	}

	put (key, value) {
		for (let node = this.#first; node != null; node = node.next) {
			const nodeKey = node.key

			const areKeysEqual = this.compareValues(key, nodeKey) === 0

			if (areKeysEqual) {
				node.value = value

				return
			}
		}

		const next = this.#first
		
		this.#first = new Node(key, value, next)
	}
}

module.exports = SequentialSearch
