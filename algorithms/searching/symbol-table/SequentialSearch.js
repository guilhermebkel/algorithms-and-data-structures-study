const { Node } = require("../../../data-structures/DataStructures")
const Search = require("../Search")

class SequentialSearch extends Search {
	#first

	constructor() {
		super()

		this.#first = null
	}

	get (key) {
		let item = null

		for (let node = this.#first; node != null; node = node.next) {
			const nodeKey = node.key

			const areKeysEqual = this.compareValues(key, nodeKey) === 0

			if (areKeysEqual) {
				item = node.item

				break
			}
		}
		
		return item
	}

	put (key, value) {
		for (let node = this.#first; node != null; node = node.next) {
			const nodeKey = node.key

			const areKeysEqual = this.compareValues(key, nodeKey) === 0

			if (areKeysEqual) {
				node.item = value

				return
			}
		}

		const next = this.#first
		
		this.#first = new Node()
		this.#first.item = value
		this.#first.key = key
		this.#first.next = next
	}
}

module.exports = SequentialSearch
