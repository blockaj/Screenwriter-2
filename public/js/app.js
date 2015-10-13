var React = require("react");

//Element list holds all 
var elementList = [{
	"elementType": "scene-heading",
	"text": "Int. Office -Day"
}];

// Content-editable p-tags are not editable without some content.
// Therefore, we must start each new ScreenplayElement with a 
// <br /> tag which will be destroyed as soon as the user begins
// to edit. This React component is a wrapper for the <br /> tag.
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
	render: function () {
		var classString = this.props.elementType + " screenplay-element";
		return (
			<p className={classString} key={this.props.key}>{this.props.children}</p>
		);
	}
});

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
				<ScreenplayElement elementType={screenplayEl.elementType} key={key}>
					{screenplayEl.text}
				</ScreenplayElement>
			);
		}
		return (
			<div>{renderedElements}</div>
		);
	}
});

var DocumentBody = React.createClass({
	getInitialState: function () {
		return {
			screenplayEls: <ScreenplayElements listOfElements={elementList} />
		}
	},
	handleKeyPress: function (e) {
		if (e.key == "Enter") {
			e.preventDefault();
			elementList.push({
				"elementType": "scene-heading",
				"text": "Int. Office -Day"
			});
			this.setState({
				screenplayEls: <ScreenplayElements listOfElements={elementList} />
			});
		}
	},
	render: function () {
		return (
			<div contentEditable onKeyPress={this.handleKeyPress}>
				{this.state.screenplayEls}
			</div>
		)
	}
});
React.render(
	<DocumentBody />,
	document.getElementById("document-body")
);