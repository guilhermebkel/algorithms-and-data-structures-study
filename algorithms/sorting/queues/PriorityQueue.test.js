const assert = require("assert")
const PriorityQueue = require("./PriorityQueue.js")

const priorityQueue = new PriorityQueue()

priorityQueue.insert(1)
priorityQueue.insert(3)
priorityQueue.insert(2)
priorityQueue.insert(4)

assert.deepEqual(priorityQueue.isEmpty(), false)
assert.deepEqual(priorityQueue.max(), 4)
assert.deepEqual(priorityQueue.delMax(), 4)
assert.deepEqual(priorityQueue.max(), 3)
assert.deepEqual(priorityQueue.delMax(), 3)
assert.deepEqual(priorityQueue.max(), 2)
assert.deepEqual(priorityQueue.delMax(), 2)
assert.deepEqual(priorityQueue.max(), 1)
assert.deepEqual(priorityQueue.delMax(), 1)
assert.throws(() => priorityQueue.max())
assert.throws(() => priorityQueue.delMax())
assert.deepEqual(priorityQueue.isEmpty(), true)

