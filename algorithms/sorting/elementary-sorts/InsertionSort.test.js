const assert = require("assert")
const InsertionSort = require("./InsertionSort.js")

const insertionSort = new InsertionSort()

const unorderedValues = [1, 4, 2, 3]

insertionSort.sort(unorderedValues)

assert.deepEqual(unorderedValues[0], 1)
assert.deepEqual(unorderedValues[1], 2)
assert.deepEqual(unorderedValues[2], 3)
assert.deepEqual(unorderedValues[3], 4)

