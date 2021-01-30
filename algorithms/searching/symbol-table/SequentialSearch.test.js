const assert = require("assert")
const SequentialSearch = require("./SequentialSearch.js")

const sequentialSearch = new SequentialSearch()

sequentialSearch.put("Guilherme", 123)
sequentialSearch.put("Mota", 431)
sequentialSearch.put("teste", 0)

assert.deepEqual(sequentialSearch.get("Guilherme"), 123)
assert.deepEqual(sequentialSearch.get("NotExistentKey"), null)

