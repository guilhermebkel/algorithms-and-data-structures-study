const assert = require("assert")
const SeparateChainingHash = require("./SeparateChainingHash.js")

const separateChainingHash = new SeparateChainingHash()

separateChainingHash.put("Guilherme", 123)
separateChainingHash.put("Mota", 431)
separateChainingHash.put("teste", 0)

assert.deepEqual(separateChainingHash.get("Guilherme"), 123)
assert.deepEqual(separateChainingHash.get("NotExistentKey"), null)
