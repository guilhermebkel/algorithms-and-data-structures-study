const assert = require("assert")
const TrieSymbolTable = require("./TrieSymbolTable.js")

const trieSymbolTable = new TrieSymbolTable()

trieSymbolTable.put("Guilherme", "abc")
trieSymbolTable.put("Mota", "eae")
trieSymbolTable.put("teste", "oi")

assert.deepEqual(trieSymbolTable.get("Guilherme"), "abc")
assert.deepEqual(trieSymbolTable.get("NotExistentKey"), null)

