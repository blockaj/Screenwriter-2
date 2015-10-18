var React = require("react");
var ScreenplayElement = require("./ScreenplayElement");

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

module.exports = ScreenplayElements;