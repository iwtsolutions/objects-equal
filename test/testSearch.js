var test = require('tap').test
var areEqual = require('../index.js')

test('test for equality', function(t) {
	t.ok(    areEqual( {hi: {no: 2}}, {hi: {no: 2}} ), "Exact objects")
	t.notOk( areEqual( {hi: {no: 2}}, {hi: {no: 3}} ), "Different property value")
	t.ok(    areEqual( {hi: {no: {lol: {uber:3}}}}, {hi: {no: {lol: {uber:3}}}} ), "Deep exact objects")
	t.notOk( areEqual( {hi: {no: {lol: {uber:3}, bad:1}}}, {hi: {no: {lol: {uber:3}, bad:2}}} ), "Deep differing objects")
	t.notOk( areEqual( {hi: {no: {lol: {uber:3}, bad:1}}}, {hi: {no: {lol: {uber:3}}, bad:1}} ), "Varying deepness")
	t.notOk( areEqual( {hi: {no: {lol: {uber:3}}}}, {hi: {no: {lol: {uber:'3'}}}} ), "Differing types")
	t.end()
})
