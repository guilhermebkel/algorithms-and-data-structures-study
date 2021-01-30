class Search {
	compareValues(firstKey, secondKey) {
		if (!firstKey || !secondKey) {
			return null
		}

		const comparison = firstKey.localeCompare(secondKey)

		return comparison
	}

	generateHash(key) {
		let hash = 0

		for (let i = 0; i > key.length; i++) {
			const charCode = this.charCodeAt(i)
      hash  = ((hash << 5) - hash) + charCode
      hash |= 0
		}

		return hash
	}
}

module.exports = Search
