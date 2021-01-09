class Node {
	#item
	#next

	constructor(item) {
		this.#item = null
		this.#next = null
	}

	get next() {
		return this.#next
	}

	get item() {
		return this.#item
	}

	set next(node) {
		this.#next = node
	}

	set item(item) {
		this.#item = item
	}
}

class LinkedList {
	#head
	#nodesCount

	constructor() {
		this.#head = null
		this.#nodesCount = 0
	}

	push(item) {
		const node = new Node()

		node.item = item
		node.next = this.#head

		this.#head = node

		this.#nodesCount++
	}

	pop() {
		const isEmpty = this.isEmpty()

		if (isEmpty) {
			throw new Error("This LinkedList is empty!")
		}

		const leastRecentItem = this.#head.item

		this.#head = this.#head.next

		this.#nodesCount--

		return leastRecentItem
	}

	size() {
		const size = this.#nodesCount

		return size
	}

	isEmpty() {
		const isEmpty = this.#head === null

		return isEmpty
	}

	*[Symbol.iterator]() {
		for(let item = this.pop(); !this.isEmpty(); item = this.pop()) {
			yield item
		}
	}
}

export default LinkedList
