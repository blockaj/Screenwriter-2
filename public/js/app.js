var React = require("react");

var SceneHeading = React.createClass({
	render: function() {
		return (
			<div className="scene-heading"><br /></div>
		)
	}
});

var Action = React.createClass({
	render: function() {
		return (
			<div className="action"><br /></div>
		)
	}
});

var Character = React.createClass({
	render: function() {
		return (
			<div className="character"><br /></div>
		)
	}
});

var Dialogue = React.createClass({
	render: function() {
		return (
			<div className="dialogue"><br /></div>
		)
	}
})

var DocumentBody = React.createClass({
	render: function() {
		return (
			<div className="writable-content" contentEditable="true"><SceneHeading /></div>
		)
	} 
});
	
React.render(
	<DocumentBody />,
	document.getElementById("document-body")
);