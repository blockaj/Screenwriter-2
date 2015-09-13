var React = require("react");

var ScreenplayElement = React.createClass({
	handleKeyPress: function(e) {
		if (e.key === "Enter") {
			e.preventDefault();
			if (this.props.type == "scene-heading") {

			}
			else if (this.props.type == "action") {
				console.log("New action to be created");
			}
			else if (this.props.type == "character") {
				console.log("New dialogue to be created");
			}
			else if (this.props.type == "dialogue") {
				console.log("New action to be created");
			}
		}
	},
	handleKeyDown: function(e) {
		if (e.key == "Tab") {
			e.preventDefault();
			console.log("Change something");
		}
	},
	render: function () {
		var classString = this.props.type + " screenplay-el";

		return (
			<p className={classString} contentEditable onKeyPress={this.handleKeyPress} onKeyDown={this.handleKeyDown}><br /></p>
		);
	}
});

var SceneHeading = React.createClass({
	render: function() {
		return (
			<ScreenplayElement type="scene-heading" />
		);
	}
});

var Action = React.createClass({
	render: function() {
		return (
			<ScreenplayElement type="action" />
		);
	}
});

var Character = React.createClass({
	render: function() {
		return (
			<ScreenplayElement type="character" />
		);
	}
});

var Dialogue = React.createClass({
	render: function() {
		return (
			<ScreenplayElement type="dialogue" />
		);
	}
})

var DocumentBody = React.createClass({
	render: function() {
		return (
			<div className="writable-content"><SceneHeading /></div>
		);
	} 
});
	
React.render(
	<DocumentBody />,
	document.getElementById("document-body")
);