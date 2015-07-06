objects-equal
=============

[![Build Status](https://travis-ci.org/ArtskydJ/objects-equal.svg?branch=master)](https://travis-ci.org/ArtskydJ/objects-equal)

- [Install](https://github.com/ArtskydJ/objects-equal#install)
- [Require](https://github.com/ArtskydJ/objects-equal#require)
- [Examples](https://github.com/ArtskydJ/objects-equal#examples)
- [License](https://github.com/ArtskydJ/objects-equal#license)

##Install
	npm install objects-equal
	
##Require
	var areEqual = require('objects-equal')

##Examples

	areEqual( {hi: 4, no: 2},   {hi: 4, no: 2} ) // -> true, Exact objects
	areEqual( {hi: 4, no: 2},   {no: 2, hi: 4} ) // -> true, Properties out of order
	areEqual( {hi: 4, sad: 0},   {hi: 4} )       // -> false, Extra property in first object
	areEqual( {hi: 4},   {hi: 4, sad: 0} )       // -> false, Extra property in second object
	areEqual( {},   {} )                         // -> true, Empty objects
	areEqual( {um: 1},   {um: 3} )               // -> false, Different values inside a property
	areEqual( {hi: {no: 2}},   {hi: {no: 2}} )   // -> true, Deeper search, exact objects
	areEqual( {hi: {no: 2}},   {hi: {no: 3}} )   // -> false, Deeper search, different property value

##License

[MIT](http://opensource.org/licenses/MIT)
