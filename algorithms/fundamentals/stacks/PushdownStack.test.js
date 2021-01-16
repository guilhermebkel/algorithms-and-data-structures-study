const assert = require("../../sorting/elementary-sorts/node_modules/assert")
const PushdownStack = require("./PushdownStack.js")

const pushdownStack = new PushdownStack()

pushdownStack.push(1)
pushdownStack.push(2)

assert.deepEqual(pushdownStack.isEmpty(), false)
assert.deepEqual(pushdownStack.size(), 2)
assert.deepEqual(pushdownStack.pop(), 2)
assert.deepEqual(pushdownStack.pop(), 1)
assert.throws(() => pushdownStack.pop())
assert.deepEqual(pushdownStack.isEmpty(), true)
