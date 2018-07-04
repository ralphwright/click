// Include React
var React = require("react");

// Create the Flesh Component
var Flesh = React.createClass({
  render: function() {
    return (
      <div className="text-center">
        <h3>Mmm Mmm Good!</h3>
        <h2>Human Flesh</h2>
        {/*
          The number of clicks is passed to us from Main.js inside props.
          We use that number to show the value inside of this component
        */}
        <img alt="Scared Ladies" src="http://www.toxel.com/wp-content/uploads/2011/10/fear08.jpg" width="90%" onClick={this.props.parentClick} />
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Flesh;
