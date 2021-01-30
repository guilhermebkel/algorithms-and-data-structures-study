const Search = require("../Search")

class Node {
	#key
	#value
	#left
	#right
	#color
	#nodesCount

	constructor(key, value, nodesCount, color) {
		this.#key = key
		this.#value = value
		this.#nodesCount = nodesCount
		this.#color = color
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

	get color() {
		return this.#color
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

	set color(color) {
		this.#color = color
	}
}

class RedBlackBinarySearchTree extends Search {
	#root

	constructor() {
		super()

		this.#root = null
	}

	isRed (node) {
		if (!node) {
			return false
		}

		const isRed = node.color === "RED"

		return isRed
	}

	rotateLeft (node) {
		const rotatedNode = node.right

		node.right = node.left

		rotatedNode.left = node
		rotatedNode.color = node.color

		node.color = "RED"

		rotatedNode.nodesCount = node.nodesCount

		node.nodesCount = 1 + this.nodeSize(node.left) + this.nodeSize(node.right)

		return rotatedNode
	}

	rotateRight (node) {
		const rotatedNode = node.left

		node.left = rotatedNode.right
		
		rotatedNode.right = node
		rotatedNode.color = node.color

		node.color = "RED"

		rotatedNode.nodesCount = node.nodesCount

		node.nodesCount = 1 + this.nodeSize(node.left) + this.nodeSize(node.right)

		return rotatedNode
	}

	flipColors (node) {
		node.color = "RED"

		node.left.color = "BLACK"

		node.right.color = "BLACK"

		return node
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
			return new Node(key, value, 1, "RED")
		}

		const comparison = this.compareValues(key, node.key)

		if (comparison < 0) {
			node.left = this.putNodeValue(node.left, key, value)
		} else if (comparison > 0) {
			node.right = this.putNodeValue(node.right, key, value)
		} else {
			node.value = value
		}

		if (this.isRed(node.right) && !this.isRed(node.left)) {
			node = this.rotateLeft(node)
		}

		if (this.isRed(node.left) && this.isRed(node.left.left)) {
			node = this.rotateRight(node)
		}

		if (this.isRed(node.left) && this.isRed(node.right)) {
			node = this.flipColors(node)
		}

		node.nodesCount = this.nodeSize(node.left) + this.nodeSize(node.right) + 1
		
		return node
	}
}

module.exports = RedBlackBinarySearchTree
