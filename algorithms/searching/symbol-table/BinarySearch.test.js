const assert = require("assert")
const BinarySearch = require("./BinarySearch.js")

const binarySearch = new BinarySearch()

binarySearch.put("Guilherme", 123)
binarySearch.put("Mota", 431)
binarySearch.put("teste", 0)

assert.deepEqual(binarySearch.get("Guilherme"), 123)
assert.deepEqual(binarySearch.get("NotExistentKey"), null)

