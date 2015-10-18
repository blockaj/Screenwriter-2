var React = require("react");

// Element list holds all of the screenplay elements in the forms of. JSON 
// objects. Elements follow this form:
// {
// 	"elementType": type of element (ex: scene-heading, action, character),
// 	"text": text content
// }
var ElementList = function () {
	this.list = [];
};

// ElementList.add is the same as Array.push() except it assumes you are
// inputting JSON objects like the one in the comment above. It also checks the
// value of input.text to make sure it's not empty. If input.text is empty then 
// the function replaces it with a <BR /> tag. You can find <BR />'s 
// implementation on line 35.
ElementList.prototype.add = function(input) {
	if (input.text == "") {
		input.text = <BR />
	}
	this.list.push(input);
};

ElementList.prototype.get = function() {
	return this.list;
};
var elementList = new ElementList();

elementList.add({
	"elementType": "scene-heading",
	"text": "g"
});

module.exports = elementList;