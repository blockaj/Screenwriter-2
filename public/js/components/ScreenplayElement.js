var React = require("react");
var moveCursor = require("../MoveCursor");
//Represents one screenplay element
var ScreenplayElement = React.createClass({
	componentDidMount: function () {
		// Default behavior is prevented when the user hits the return key in order
		// to produce the behavior we want. Therefore, we must manually move the
		// cursor to the next line after the return key is hit. We do that here
		// because we want to make sure that the latest component has mounted before
		// we try to move the cursor there. 
		moveCursor((elementList.get().length - 1));
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

module.exports = ScreenplayElement;