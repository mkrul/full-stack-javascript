import React from "react";
import ReactDOM from "react-dom";
import data from "./testData";
import App from "./components/App";

console.log(data);

ReactDOM.render(
	<App contests={ data.contests }/>,
	document.getElementById("root")
);
