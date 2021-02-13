const assert = require("assert")
const LSDStringSort = require("./LSDStringSort.js")

const lsdStringSort = new LSDStringSort()

const unorderedValues = [
	"4PGC938",
	"2IYE230",
	"3CIO720",
	"1ICK750",
	"1OHV845",
	"4JZY524",
	"1ICK750",
	"3CIO720",
	"1OHV845",
	"1OHV845",
	"2RLA629",
	"2RLA629",
	"3ATW723"
]

lsdStringSort.sort(unorderedValues, 7)

console.log(unorderedValues)

// assert.deepEqual(unorderedValues[0], 1)
// assert.deepEqual(unorderedValues[1], 2)
// assert.deepEqual(unorderedValues[2], 3)
// assert.deepEqual(unorderedValues[3], 4)

