class Node {
	#value
	#next

	constructor () {
		this.#value = null
		this.#next = []
	}

	get value() {
		return this.#value
	}

	get next() {
		return this.#next
	}

	set value(value) {
		this.#value = value
	}
}

class TrieSymbolTable {
	#root

	constructor () {
		this.#root = null
	}

	#getNodeValue (node, key, d) {
		if (!node) {
			return null
		}

		if (d === key.length) {
			return node
		}

		const letter = key.charAt(d)

		return this.#getNodeValue(node.next[letter], key, d + 1)
	}
	
	get (key) {
		const node = this.#getNodeValue(this.#root, key, 0)

		if (!node) {
			return null
		}

		return node.value
	}

	#putNode (node, key, value, d) {
		if (!node) {
			node = new Node()
		}

		if (d === key.length) {
			node.value = value

			return node
		}

		const letter = key.charAt(d)

		node.next[letter] = this.#putNode(node.next[letter], key, value, d + 1)

		return node
	}

	put (key, value) {
		this.#root = this.#putNode(this.#root, key, value, 0)
	}
}

module.exports = TrieSymbolTable
