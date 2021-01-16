const assert = require("assert")
const FixedCapacityStack = require("./FixedCapacityStack.js")

const fixedCapacityStack = new FixedCapacityStack(2)

fixedCapacityStack.push(1)
fixedCapacityStack.push(2)

assert.deepEqual(fixedCapacityStack.isEmpty(), false)
assert.deepEqual(fixedCapacityStack.isFull(), true)
assert.deepEqual(fixedCapacityStack.size(), 2)
assert.throws(() => fixedCapacityStack.push(3))
assert.deepEqual(fixedCapacityStack.pop(), 2)
assert.deepEqual(fixedCapacityStack.pop(), 1)
assert.throws(() => fixedCapacityStack.pop())
assert.deepEqual(fixedCapacityStack.isEmpty(), true)
