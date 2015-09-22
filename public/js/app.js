/**
 * 
 */

var React = require("react");
var index = require("./IndexManager");
var Cursor = require("./Cursor");
var cur = new Cursor();
var screenplayEls = [];

var ScreenplayElement = React.createClass({
	render: function () {
		var classString = this.props.type + " screenplay-el";
		return (
			<p className={classString}><br /></p>
		);
	}
});

var SceneHeading = React.createClass({
	render: function() {
		return (
			<ScreenplayElement type="scene-heading" elIndex={this.props.elIndex} />
		);
	}
});

var Action = React.createClass({
	render: function() {
		return (
			<ScreenplayElement type="action" elIndex={this.props.elIndex} />
		);
	}
});

var Character = React.createClass({
	render: function() {
		return (
			<ScreenplayElement type="character" elIndex={this.props.elIndex} />
		);
	}
});

var Dialogue = React.createClass({
	render: function() {
		return (
			<ScreenplayElement type="dialogue" elIndex={this.props.elIndex} />
		);
	}
});

var DocumentBody = React.createClass({
	getInitialState: function() {
		screenplayEls.push(<SceneHeading elIndex={index.get()} />);
		index.increment();
		return {screenplayEls: screenplayEls};
	},
	handleKeyPress: function(e) {
		if (e.key == "Enter") {
			e.preventDefault();

			// The cursor object must have the most recent version of all the 
			// screenplay element in order to find where it should move
			cur.move(screenplayEls);
			screenplayEls.push(<Action elIndex={index.get()} />);
			index.increment();

			this.setState({screenplayEls: screenplayEls});
		}
	},
	render: function() {
		return (
			<div className="writable-content" onKeyPress={this.handleKeyPress} 
			contentEditable>{this.state.screenplayEls}</div>
		);
	} 
});
	
React.render(
	<DocumentBody />,
	document.getElementById("document-body")
);