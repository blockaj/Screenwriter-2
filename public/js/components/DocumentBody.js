var React = require("react");
var ScreenplayElements = require("./Screenplayelements");
var elementList = require("../ElementList");
var currentElement = require("../CurrentElement");
// DocumentBody is contentEditable. Because of this, it also handles when the
// return key is hit. The screenplayEls state is a React component that holds
// the ScreenplayElements component. It implements the component with an
// elementList which the ScreenplayElements then turns into individual React
// components. 
var DocumentBody = React.createClass({
	getInitialState: function () {
		return {
			screenplayEls: <ScreenplayElements listOfElements={elementList.get()} />
		}
	},
	handleClick: function(e) {
		console.log(currentElement());
	},
	handleKeyPress: function (e) {
		if (e.key == "Enter") {
			e.preventDefault();
			elementList.add({
				"elementType": "scene-heading",
				"text": ""
			});
			this.setState({
				screenplayEls: <ScreenplayElements listOfElements={elementList.get()} />
			});
			console.log(this.state.screenplayEls.props.listOfElements);
		}
	},
	render: function () {
		return (
			<div contentEditable id="doc-content" onClick={this.handleClick}
				onKeyPress={this.handleKeyPress}>
				{this.state.screenplayEls}
			</div>
		)
	}
});

module.exports = DocumentBody;