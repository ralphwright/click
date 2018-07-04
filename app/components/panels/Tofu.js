// Include React
var React = require("react");

// Create the Tofu Component
var Tofu = React.createClass({
  render: function() {
    return (
      <div className="text-center">
        <h3>Nom Noms!</h3>
        <h2>Organic Tofu</h2>
        {/*
          The number of clicks is passed to us from Main.js inside props.
          We use that number to show the value inside of this component
        */}
        <img alt="Tofu Box" src="http://afcsoyfoods.com/media/2014/02/afc-organic-tofu-firm-14oz.png" width="80%" onClick={this.props.parentClick} />
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Tofu;
