const assert = require("assert")
const ThreeWayStringQuickSort = require("./ThreeWayStringQuickSort.js")

const threeWayStringQuickSort = new ThreeWayStringQuickSort()

const unorderedValues = ["R", "B", "W", "W", "R", "W", "B", "R", "R", "W", "B", "R"]

threeWayStringQuickSort.sort(unorderedValues)

assert.deepEqual(unorderedValues[0], "B")
assert.deepEqual(unorderedValues[1], "B")
assert.deepEqual(unorderedValues[2], "B")
assert.deepEqual(unorderedValues[3], "R")
assert.deepEqual(unorderedValues[4], "R")
assert.deepEqual(unorderedValues[5], "R")
assert.deepEqual(unorderedValues[6], "R")
assert.deepEqual(unorderedValues[7], "R")
assert.deepEqual(unorderedValues[8], "W")
assert.deepEqual(unorderedValues[9], "W")
assert.deepEqual(unorderedValues[10], "W")
assert.deepEqual(unorderedValues[11], "W")
