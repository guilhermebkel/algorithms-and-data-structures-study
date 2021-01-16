const assert = require("assert")
const BottomUpMergesort = require("./BottomUpMergesort.js")

const bottomUpMergesort = new BottomUpMergesort()

const unorderedValues = [1, 4, 2, 3]

bottomUpMergesort.sort(unorderedValues)

assert.deepEqual(unorderedValues[0], 1)
assert.deepEqual(unorderedValues[1], 2)
assert.deepEqual(unorderedValues[2], 3)
assert.deepEqual(unorderedValues[3], 4)

