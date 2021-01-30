const Search = require("../Search")

class Node {
	#key
	#value
	#left
	#right
	#nodesCount

	constructor(key, value, nodesCount) {
		this.#key = key
		this.#value = value
		this.#nodesCount = nodesCount
	}

	get right() {
		return this.#right
	}

	get left() {
		return this.#left
	}

	get value() {
		return this.#value
	}

	get nodesCount() {
		return this.#nodesCount
	}

	get key() {
		return this.#key
	}

	set value(value) {
		this.#value = value
	}

	set right(right) {
		this.#right = right
	}

	set left(left) {
		this.#left = left
	}

	set nodesCount(nodesCount) {
		this.#nodesCount = nodesCount
	}
}

class BinarySearchTree extends Search {
	#root

	constructor() {
		super()

		this.#root = null
	}

	size() {
		return this.nodeSize(this.#root)
	}

	nodeSize(node) {
		if (!node) {
			return 0
		} else {
			return node.nodesCount
		}
	}

	get (key) {
		return this.getNodeValue(this.#root, key)
	}

	getNodeValue (node, key) {
		if (!node) {
			return null
		}

		const comparison = this.compareValues(key, node.key)

		if (comparison < 0) {
			return this.getNodeValue(node.left, key)
		} else if (comparison > 0) {
			return this.getNodeValue(node.right, key)
		} else {
			return node.value
		}
	}

	put (key, value) {
		this.#root = this.putNodeValue(this.#root, key, value)
	}

	putNodeValue (node, key, value) {
		if (!node) {
			return new Node(key, value, 1)
		}

		const comparison = this.compareValues(key, node.key)

		if (comparison < 0) {
			node.left = this.putNodeValue(node.left, key, value)
		} else if (comparison > 0) {
			node.right = this.putNodeValue(node.right, key, value)
		} else {
			node.value = value
		}

		node.nodesCount = this.nodeSize(node.left) + this.nodeSize(node.right) + 1
		
		return node
	}
}

module.exports = BinarySearchTree
