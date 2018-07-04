// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the Feeder Component
var Feeder = require("./components/Feeder");

// This code here allows us to render an entire block of Bootstrap layout HTML using
// our Main Component
ReactDOM.render(<Feeder />, document.getElementById("app"));
