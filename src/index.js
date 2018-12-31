import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const App = (props) => {
	return (
		<h2 className="text-center">
			{ props.headerMsg }
		</h2>
	);
};

App.propTypes = {
	headerMsg: PropTypes.string.isRequired
};

App.defaultProps = {
	headerMsg: "Hello!!"
};

ReactDOM.render(
	<App headerMsg="Hello, props!"/>,
	document.getElementById("root")
);
