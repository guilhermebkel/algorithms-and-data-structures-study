const assert = require("assert")
const LinearProbingHash = require("./LinearProbingHash.js")

const linearProbingHash = new LinearProbingHash()

linearProbingHash.put("Guilherme", 123)
linearProbingHash.put("Mota", 431)
linearProbingHash.put("teste", 0)

assert.deepEqual(linearProbingHash.get("Guilherme"), 123)
assert.deepEqual(linearProbingHash.get("NotExistentKey"), null)


