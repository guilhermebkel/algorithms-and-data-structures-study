import PushdownStack from "./PushdownStack"

class FixedCapacityStack extends PushdownStack {
	#maxCapacity

	constructor(maxCapacity) {
		super()
	
		this.#maxCapacity = maxCapacity

		this.items = new Array(this.#maxCapacity)
	}

	push(item) {
		const isFull = this.isFull()

		if (isFull) {
			throw new Error(
				`Already reached the stack maximum capacity of ${this.#maxCapacity} items.`
			)
		}

		this.#items.add(item)

		this.#itemsCount++
	}

	isFull() {
		const isFull = this.#maxCapacity >= this.size()

		return isFull
	}
}

export default FixedCapacityStack
