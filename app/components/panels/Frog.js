// Include React
var React = require("react");

// Create the Frog Component
var Frog = React.createClass({
  render: function() {
    return (
      <div className="text-center">
        <h3>Tasty Treats</h3>
        <h2>Frog Livers</h2>
        {/*
          The number of clicks is passed to us from Main.js inside props.
          We use that number to show the value inside of this component
        */}
        <img alt="Frog" src="http://www.cellphonetaskforce.org/wp-content/uploads/2012/01/frog-left.jpg" width="80%" onClick={this.props.parentClick} />
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Frog;
