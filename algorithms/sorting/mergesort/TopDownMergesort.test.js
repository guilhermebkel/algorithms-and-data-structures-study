const assert = require("assert")
const TopDownMergesort = require("./TopDownMergesort.js")

const topDownMergesort = new TopDownMergesort()

const unorderedValues = [1, 4, 2, 3]

topDownMergesort.sort(unorderedValues)

assert.deepEqual(unorderedValues[0], 1)
assert.deepEqual(unorderedValues[1], 2)
assert.deepEqual(unorderedValues[2], 3)
assert.deepEqual(unorderedValues[3], 4)

