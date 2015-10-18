// This is not React related. The purpose of this function is to move the cursor
// the way it normally would after the user hit the return key. We are
// preventing the default behavior when a user hits the return key so we can
// change what type of content gets added to the html. 
function moveCursor(key) {
	var documentContent = document.getElementById("doc-content");
	var elList = documentContent.children[0].children;
	var myElement = elList[key];
	var range = document.createRange();
	range.selectNodeContents(myElement);
	range.collapse(true);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

module.exports = moveCursor;