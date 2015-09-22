// Controls cursor behavior 
var index = require("./IndexManager");

class Cursor {
	constructor () {
		console.log(index.get());
	}
	move (screenplayEls) {
		for (let el in screenplayEls) {
			console.log(el);
		}
	}
}

module.exports = Cursor;