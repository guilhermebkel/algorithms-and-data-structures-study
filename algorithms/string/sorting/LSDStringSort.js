class LSDStringSort {
	sort(wordArray, wordSize) {
		const arraySize = wordArray.length

		const R = 256

		const auxiliaryArray = []
		
		for (let d = wordSize - 1; d >= 0; d--) {
			const count = []

			for (let i = 0; i < arraySize; i++) {
				const word = wordArray[i]

				if (!word) {
					continue
				}

				const letter = word.charAt(d)

				const countIndex = parseInt(letter, 16) + 1

				if (!count[countIndex]) {
					count[countIndex] = 0
				}

				count[countIndex]++

			}

			for (let r = 0; r < R; r++) {
				count[r + 1] += count[r]
			}

			for (let i = 0; i < arraySize; i++) {
				const word = wordArray[i]

				if (!word) {
					continue
				}

				const letter = word.charAt(d)

				const countIndex = parseInt(letter, 16) + 1

				if (!count[countIndex]) {
					count[countIndex] = 0
				}

				auxiliaryArray[count[countIndex]] = wordArray[i]

				count[countIndex]++
			}

			for (let i = 0; i < arraySize; i++) {
				wordArray[i] = auxiliaryArray[i]
			}
		}
	}
}

module.exports = LSDStringSort
