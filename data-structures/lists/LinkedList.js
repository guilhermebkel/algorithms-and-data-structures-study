class Node {
	#item
	#next

	constructor(item, next) {
		this.#item = item
		this.#next = next
	}

	get next() {
		return this.#next
	}

	get item() {
		return this.#item
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
		const node = new Node(item, this.#head)

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

module.exports = LinkedList
