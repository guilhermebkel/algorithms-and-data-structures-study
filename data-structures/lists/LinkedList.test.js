const assert = require("../../sorting/elementary-sorts/node_modules/assert")
const LinkedList = require("./LinkedList.js")

const linkedList = new LinkedList()

linkedList.push(1)
linkedList.push(2)

assert.deepEqual(linkedList.isEmpty(), false)
assert.deepEqual(linkedList.size(), 2)
assert.deepEqual(linkedList.pop(), 2)
assert.deepEqual(linkedList.pop(), 1)
assert.deepEqual(linkedList.isEmpty(), true)
