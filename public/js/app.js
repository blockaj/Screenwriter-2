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

var elementList = new ElementList();

elementList.add({
	"elementType": "scene-heading",
	"text": "Hello, world!"
});

// Content-editable p-tags are not editable without some content. Therefore, 
// we must start each new ScreenplayElement with a <br /> tag which will be 
// destroyed as soon as the user begins to edit. This React component is a 
// wrapper for the <br /> tag.
var BR = React.createClass({
	vileHtml: function() {
		return {__html: "<br />"};
	},
	render: function() {
		return (
			<span dangerouslySetInnerHTML={this.vileHtml()} />
		);
	}
});

//Represents one screenplay element
var ScreenplayElement = React.createClass({
	componentDidMount: function () {
		// Default behavior is prevented when the user hits the return key in order
		// to produce the behavior we want. Therefore, we must manually move the
		// cursor to the next line after the return key is hit. We do that here
		// because we want to make sure that the latest component has mounted before
		// we try to move the cursor there. 
		moveCursor((elementList.list.length - 1));
	},
	render: function () { 
		var classString = this.props.elementType + " screenplay-element";
		return (
			<p className={classString} key={this.props.key} ref={this.props.key}>
				{this.props.children}
			</p>
		);
	}
});

// ScreenplayElements takes an array of objects with text and elementType fields
// and turns them into React components that are injected into the HTML. 
var ScreenplayElements = React.createClass({
	propTypes: {
		listOfElements: React.PropTypes.array.isRequired
	},
	render: function () {
		var listOfElements = this.props.listOfElements,
			renderedElements = [];

		for (var key in listOfElements) {
			var screenplayEl = listOfElements[key];
			renderedElements.push(
				<ScreenplayElement elementType={screenplayEl.elementType}
				key={key}>
					{screenplayEl.text}
				</ScreenplayElement>
			);
		}
		return (
			<div>{renderedElements}</div>
		);
	}
});

// DocumentBody is contentEditable. Because of this, it also handles when the
// return key is hit. The screenplayEls state is a React component that holds
// the ScreenplayElements component. It implements the component with an
// elementList which the ScreenplayElements then turns into individual React
// components. 
var DocumentBody = React.createClass({
	getInitialState: function () {
		return {
			screenplayEls: <ScreenplayElements listOfElements={elementList.list} />
		}
	},
	handleKeyPress: function (e) {
		if (e.key == "Enter") {
			e.preventDefault();
			elementList.add({
				"elementType": "scene-heading",
				"text": ""
			});
			this.setState({
				screenplayEls: <ScreenplayElements listOfElements={elementList.list} />
			});
			console.log(this.state.screenplayEls.props.listOfElements);
		}
	},
	render: function () {
		return (
			<div contentEditable id="doc-content" onKeyPress={this.handleKeyPress}>
				{this.state.screenplayEls}
			</div>
		)
	}
});

React.render(
	<DocumentBody />,
	document.getElementById("document-body")
);

// This is not React related. The purpose of this function is to move the cursor
// the way it normally would after the user hit the return key. We are
// preventing the default behavior when a user hits the return key so we can
// change what type of content gets added to the html. 
function moveCursor(key) {
	var documentContent = document.getElementById("doc-content");
	var elList = documentContent.children[0].children;
	var myElement = elList[key];
	console.log(key);
	var range = document.createRange();
	range.selectNodeContents(myElement);
	range.collapse(true);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}
