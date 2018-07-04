// Include React
var React = require("react");

// Here we include all of the sub-components
var Flesh = require("./panels/Flesh");
var Frog = require("./panels/Frog");
var Tofu = require("./panels/Tofu");

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Feeder = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {
      food: 0
    };
  },

  // Whenever the button is clicked we'll use setState to add to the clickCounter
  // Note the syntax for setting the state
  parentClick: function() {
    this.setState({ food: this.state.food + 1 });
  },

  eatFlesh: function() {
    var currFood = this.state.food + 50;

    if (currFood > 500) {
      this.setState({ food: 0 });
    } else {
      this.setState({ food: this.state.food + 50 });
    }
  },

  eatFrogs: function() {
    var currFood = this.state.food + 20;

    if (currFood > 500) {
      this.setState({ food: 0 });
    } else {
      this.setState({ food: this.state.food + 20 });
    }
  },

  eatTofu: function() {
    var currFood = this.state.food + 10;

    if (currFood > 500) {
      this.setState({ food: 0 });
    } else {
      this.setState({ food: this.state.food + 10 });
    }
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="container">

        <div className="row">
          <div className="text-center">
            <h1>Food Consumed: {this.state.food}</h1>
            <img alt="Crazy Big Fish" src="https://media.giphy.com/media/pBj0EoGSYjGms/giphy.gif" width="40%" />
          </div>
        </div>

        <div className="row">
          <div className="text-center">
            <div className="col-md-4">
              <Flesh parentClick={this.eatFlesh} />
            </div>

            <div className="col-md-4">
              <Frog parentClick={this.eatFrogs} />
            </div>

            <div className="col-md-4">
              <Tofu parentClick={this.eatTofu} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Feeder;
