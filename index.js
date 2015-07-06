module.exports = function areEqual(obj1, obj2) {
	return Object.keys(obj1).every(function(e) {
		return (
			(typeof obj1[e] == "object") ?  areEqual(obj1[e], obj2[e]) : obj1[e] === obj2[e] &&
			Object.keys(obj1).length == Object.keys(obj2).length
		)
	})
}
