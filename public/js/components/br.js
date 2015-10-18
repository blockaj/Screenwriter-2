var React = require("react");

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

module.exports = BR;