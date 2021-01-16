const assert = require("../../sorting/elementary-sorts/node_modules/assert")
const FIFOQueue = require("./FIFOQueue.js")

const fifoQueue = new FIFOQueue()

fifoQueue.enqueue(1)
fifoQueue.enqueue(2)

assert.deepEqual(fifoQueue.isEmpty(), false)
assert.deepEqual(fifoQueue.size(), 2)
assert.deepEqual(fifoQueue.dequeue(), 1)
assert.deepEqual(fifoQueue.dequeue(), 2)
assert.deepEqual(fifoQueue.isEmpty(), true)
