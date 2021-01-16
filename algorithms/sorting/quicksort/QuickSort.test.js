const assert = require("assert")
const QuickSort = require("./QuickSort.js")

const quickSort = new QuickSort()

const unorderedValues = [1, 4, 2, 3]

quickSort.sort(unorderedValues)

assert.deepEqual(unorderedValues[0], 1)
assert.deepEqual(unorderedValues[1], 2)
assert.deepEqual(unorderedValues[2], 3)
assert.deepEqual(unorderedValues[3], 4)

