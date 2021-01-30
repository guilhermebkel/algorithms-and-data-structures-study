const Search = require("../Search")

class LinearProbingHash extends Search {
	#keyValuePairsCount
	#linearProbingTableSize
	#keys
	#values

	constructor() {
		super()

		this.#keyValuePairsCount = 0
		this.#linearProbingTableSize = 16
		this.#keys = []
		this.#values = []		
	}

	put (key, value) {
		let i

		for(i = this.generateHash(key); !!this.#keys[i]; i++) {
			const currentKey = this.#keys[i]

			const areKeysEqual = this.compareValues(key, currentKey) === 0
			
			if (areKeysEqual) {
				this.#values[i] = value
				return
			}
		}

		this.#keys[i] = key
		this.#values[i] = value

		this.#keyValuePairsCount++
	}

	get (key) {
		for (let i = this.generateHash(key); !!this.#keys[i]; i++) {
			const currentKey = this.#keys[i]

			const areKeysEqual = this.compareValues(key, currentKey) === 0
			
			if (areKeysEqual) {
				return this.#values[i]
			}
		}

		return null
	}
}

module.exports = LinearProbingHash
