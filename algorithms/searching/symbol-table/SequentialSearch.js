const { Node } = require("../../../data-structures/DataStructures")

class SequentialSearch {
	#first

	get (key) {
		let item = null

		for (let node = this.#first; node != null; node = node.next) {
			const nodeKey = node.key

			if (key === nodeKey) {
				item = node.item

				break
			}
		}
		
		return item
	}

	put (key, value) {
		for (let node = this.#first; node != null; node = node.next) {
			const nodeKey = node.key

			if (key === nodeKey) {
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
