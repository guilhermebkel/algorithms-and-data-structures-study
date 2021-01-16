const assert = require("assert")
const SelectionSort = require("./SelectionSort.js")

const selectionSort = new SelectionSort()

const unorderedValues = [1, 4, 2, 3]

selectionSort.sort(unorderedValues)

assert.deepEqual(unorderedValues[0], 1)
assert.deepEqual(unorderedValues[1], 2)
assert.deepEqual(unorderedValues[2], 3)
assert.deepEqual(unorderedValues[3], 4)

