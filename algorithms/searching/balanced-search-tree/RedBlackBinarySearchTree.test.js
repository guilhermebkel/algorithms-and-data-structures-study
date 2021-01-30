const assert = require("assert")
const RedBlackBinarySearchTree = require("./RedBlackBinarySearchTree.js")

const redBlackBinarySearchTree = new RedBlackBinarySearchTree()

redBlackBinarySearchTree.put("Guilherme", 123)
redBlackBinarySearchTree.put("Mota", 431)
redBlackBinarySearchTree.put("teste", 0)

assert.deepEqual(redBlackBinarySearchTree.get("Guilherme"), 123)
assert.deepEqual(redBlackBinarySearchTree.get("NotExistentKey"), null)

