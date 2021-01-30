const assert = require("assert")
const BinarySearchTree = require("./BinarySearchTree.js")

const binarySearchTree = new BinarySearchTree()

binarySearchTree.put("Guilherme", 123)
binarySearchTree.put("Mota", 431)
binarySearchTree.put("teste", 0)

assert.deepEqual(binarySearchTree.get("Guilherme"), 123)
assert.deepEqual(binarySearchTree.get("NotExistentKey"), null)

