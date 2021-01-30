const assert = require("assert")
const BinaryHeap = require("./BinaryHeap.js")

const binaryHeap = new BinaryHeap()

binaryHeap.insert(3)
binaryHeap.insert(2)
binaryHeap.insert(5)

assert.deepEqual(binaryHeap.isEmpty(), false)
assert.deepEqual(binaryHeap.size(), 3)
assert.deepEqual(binaryHeap.delMax(), 5)
assert.deepEqual(binaryHeap.delMax(), 3)
assert.deepEqual(binaryHeap.delMax(), 2)
assert.throws(() => binaryHeap.delMax())
assert.deepEqual(binaryHeap.isEmpty(), true)
