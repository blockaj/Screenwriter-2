function currentElement() {
	var selection = window.getSelection();
	var node = selection.anchorNode.parentElement;
	return node;
}

module.exports = currentElement;