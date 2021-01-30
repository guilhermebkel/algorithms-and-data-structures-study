const Search = require("../Search")
const SequentialSearch = require("../symbol-table/SequentialSearch")

class SeparateChainingHash extends Search {
	#keyValuePairsCount
	#hashTableSize
	#sequentialSearchTables

	constructor() {
		super()

		this.#keyValuePairsCount = 0
		this.#hashTableSize = 0
		this.#sequentialSearchTables = []
	}

	get (key) {
		const hash = this.generateHash(key)

		const sequentialSearchTable = this.#sequentialSearchTables[hash]

		if (!sequentialSearchTable) {
			return null
		}

		const value = sequentialSearchTable.get(key)

		return value
	}

	put (key, value) {
		const hash = this.generateHash(key)

		if (!this.#sequentialSearchTables[hash]) {
			this.#sequentialSearchTables[hash] = new SequentialSearch()
		}

		this.#sequentialSearchTables[hash].put(key, value)
	}
}

module.exports = SeparateChainingHash
