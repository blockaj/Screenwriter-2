// Controls cursor behavior 
var ElIndex = require("./IndexManager");
var index = new ElIndex();

class Cursor {
	constructor () {
		console.log(index.get());
	}
}

module.exports = Cursor;